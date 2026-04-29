#!/usr/bin/env node
/**
 * draft-from-feeds.mjs
 *
 * Reads the configured RSS feeds, finds stories not yet drafted, and asks
 * Claude to write an ORIGINAL analysis piece for each. Outputs Markdown with
 * full frontmatter to src/content/articles/, marked draft: true.
 *
 * IMPORTANT: This script generates DRAFTS only. A human must review, edit,
 * and flip draft: false before publishing. Auto-publishing AI content at
 * scale violates Google's March 2024 spam policy and gets sites deindexed.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/draft-from-feeds.mjs
 *   node scripts/draft-from-feeds.mjs --max 3        # cap drafts per run
 *   node scripts/draft-from-feeds.mjs --dry-run      # show plan, write nothing
 *
 * Env vars:
 *   ANTHROPIC_API_KEY    required (unless --dry-run)
 *   UNSPLASH_ACCESS_KEY  optional; if set, drafts get hero images
 *   MODEL                optional, defaults to claude-sonnet-4-5
 *   MAX_PER_RUN          optional, defaults to 3
 */

import Parser from 'rss-parser';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// ---------- Config ----------

const FEEDS = [
  { name: '9to5Mac',         url: 'https://9to5mac.com/feed/' },
  { name: 'MacRumors',       url: 'https://www.macrumors.com/macrumors.xml' },
  { name: 'The Verge Apple', url: 'https://www.theverge.com/apple/rss/index.xml' },
  { name: 'AppleInsider',    url: 'https://appleinsider.com/rss/news' },
  { name: 'Six Colors',      url: 'https://sixcolors.com/feed/' },
];

const ARTICLES_DIR = path.resolve('src/content/articles');
const STATE_FILE   = path.resolve('scripts/.drafted-urls.json');
const MODEL        = process.env.MODEL || 'claude-sonnet-4-5';
const MAX_PER_RUN  = parseInt(process.env.MAX_PER_RUN || '3', 10);

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const MAX_OVERRIDE = (() => {
  const i = process.argv.indexOf('--max');
  return i > -1 ? parseInt(process.argv[i + 1], 10) : null;
})();
const RUN_CAP = MAX_OVERRIDE ?? MAX_PER_RUN;

// ---------- Helpers ----------

const slugify = (s) =>
  s.toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

const hashUrl = (u) => crypto.createHash('sha1').update(u).digest('hex').slice(0, 10);

async function loadState() {
  try {
    const raw = await fs.readFile(STATE_FILE, 'utf8');
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

async function saveState(set) {
  await fs.mkdir(path.dirname(STATE_FILE), { recursive: true });
  await fs.writeFile(STATE_FILE, JSON.stringify([...set], null, 2) + '\n');
}

async function existingSlugs() {
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    return new Set(
      files
        .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
        .map(f => f.replace(/\.(md|mdx)$/, ''))
    );
  } catch {
    return new Set();
  }
}

// ---------- Unsplash hero image ----------

async function fetchUnsplashImage(tags) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return null;
  const query = encodeURIComponent(tags.slice(0, 2).join(' ') || 'apple technology');
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=10&orientation=landscape&content_filter=high`,
      { headers: { Authorization: `Client-ID ${key}` }, signal: controller.signal }
    );
    clearTimeout(t);
    if (!res.ok) {
      console.error(`  Unsplash returned ${res.status}`);
      return null;
    }
    const data = await res.json();
    if (!data.results || data.results.length === 0) return null;
    const pick = data.results[Math.floor(Math.random() * Math.min(10, data.results.length))];
    return {
      url: `${pick.urls.raw}&w=1600&q=80&auto=format&fit=crop`,
      alt: pick.alt_description || pick.description || `Photo by ${pick.user.name} on Unsplash`,
    };
  } catch (e) {
    console.error(`  Unsplash fetch failed: ${e.message}`);
    return null;
  }
}

// ---------- Feed fetch ----------

async function fetchAllFeeds() {
  const parser = new Parser({
    timeout: 15000,
    headers: { 'User-Agent': 'InsideCupertino-Drafter/1.0 (+https://insidecupertino.com)' },
  });
  const items = [];
  for (const feed of FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      for (const it of parsed.items.slice(0, 10)) {
        items.push({
          source: feed.name,
          title: (it.title ?? '').trim(),
          link: it.link,
          pubDate: it.isoDate || it.pubDate || new Date().toISOString(),
          summary: (it.contentSnippet || it.content || '').slice(0, 1200),
        });
      }
    } catch (e) {
      console.error(`! Failed to fetch ${feed.name}: ${e.message}`);
    }
  }
  items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return items;
}

// ---------- Story selection ----------

function pickStories(items, alreadyDrafted, existing) {
  const picked = [];
  const seenTitles = new Set();
  for (const item of items) {
    if (!item.title || !item.link) continue;
    if (alreadyDrafted.has(item.link)) continue;
    const slug = slugify(item.title);
    if (!slug) continue;
    const fullSlug = `${slug}-${hashUrl(item.link)}`;
    if (existing.has(fullSlug)) continue;
    const titleKey = item.title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 40);
    if (seenTitles.has(titleKey)) continue;
    seenTitles.add(titleKey);
    picked.push({ ...item, slug, fullSlug });
    if (picked.length >= RUN_CAP) break;
  }
  return picked;
}

// ---------- Drafting via Claude ----------

const SYSTEM_PROMPT = `You are a writer for "Inside Cupertino", a publication covering Apple. The voice is conversational, smart, and a little bit dry - like a friend who follows Apple closely texting you their actual take, not a press release rewrite.

Voice and standards:
- Conversational and direct. Contractions are fine. Asides are fine. Sentences can be short.
- Have an opinion. If the move is dumb, say so. If it's smart, say why. Don't hedge with "it remains to be seen."
- Concrete and specific: product names, version numbers, dates, dollar figures. Specifics make casual writing land; vague casual writing just sounds lazy.
- No corporate filler ("In today's fast-paced tech world...", "Let's dive in", "It's no secret that..."). No rhetorical questions to the reader.
- Skip the breathless tech-blog cadence. You're not trying to be excited; you're trying to be clear.

Sourcing rules you MUST follow:
1. Write your OWN take. Reference the source's facts, then add context, history, comparisons, and the part the source missed.
2. Quote the source AT MOST ONCE, fewer than 15 words, in quotation marks.
3. Link to the source publication in your prose using a Markdown link on the publication name (e.g., "[9to5Mac](https://...) reported..."). Use the exact URL provided.
4. Do not reproduce the source's structure or sentence patterns. Don't summarize - react.

Format:
- 350-550 words.
- 3-5 paragraphs of running prose. Mostly short paragraphs. Occasional one-sentence paragraphs are fine for emphasis.
- No bullet lists.
- End with a one-sentence kicker that lands. No "what do you think?" questions, no "time will tell."

Output ONLY a JSON object with this exact shape - no preamble, no markdown code fences:
{
  "title": "string, 50-90 chars. Specific. Punchy is good. No clickbait, no colons-as-crutch.",
  "description": "string, 80-180 chars. Conversational. The hook for someone scrolling.",
  "tags": ["3-5 lowercase tags, single words or hyphenated"],
  "body_markdown": "string, the full article body in Markdown"
}`;

function userPromptFor(item) {
  return `Source publication: ${item.source}
Source URL: ${item.link}
Source headline: ${item.title}
Source summary/excerpt:
"""
${item.summary}
"""

Write the Inside Cupertino take on this story. Original analysis. Link to ${item.source} in the prose using the exact URL above. JSON output only.`;
}

async function draftOne(client, item) {
  const resp = await client.messages.create(
    {
      model: MODEL,
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPromptFor(item) }],
    },
    { timeout: 60000, maxRetries: 1 }
  );

  const text = resp.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('')
    .trim();

  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error(`Model did not return valid JSON. First 240 chars: ${cleaned.slice(0, 240)}`);
  }

  for (const k of ['title', 'description', 'tags', 'body_markdown']) {
    if (!parsed[k]) throw new Error(`Missing field "${k}" in model output`);
  }

  parsed.title = String(parsed.title).trim().slice(0, 120);
  parsed.description = String(parsed.description).trim().slice(0, 200);
  if (parsed.title.length < 10) throw new Error(`Title too short: "${parsed.title}"`);
  if (parsed.description.length < 50) throw new Error(`Description too short: "${parsed.description}"`);
  if (!Array.isArray(parsed.tags) || parsed.tags.length === 0) throw new Error('Tags missing');
  parsed.tags = parsed.tags.map(t => String(t).toLowerCase().trim()).filter(Boolean).slice(0, 5);

  return parsed;
}

// ---------- Markdown writer ----------

const escapeYaml = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

function buildMarkdown({ draft, item, hero }) {
  const today = new Date().toISOString();
  const tagsYaml = draft.tags.map(t => `  - ${t}`).join('\n');
  const heroBlock = hero
    ? `heroImage: "${escapeYaml(hero.url)}"\nheroAlt: "${escapeYaml(hero.alt)}"\n`
    : '';
  return `---
title: "${escapeYaml(draft.title)}"
description: "${escapeYaml(draft.description)}"
pubDate: ${today}
draft: true
author: "Inside Cupertino"
${heroBlock}tags:
${tagsYaml}
source:
  name: "${escapeYaml(item.source)}"
  url: "${item.link}"
---

${draft.body_markdown.trim()}
`;
}

// ---------- Main ----------

async function main() {
  if (!process.env.ANTHROPIC_API_KEY && !DRY_RUN) {
    console.error('ERROR: ANTHROPIC_API_KEY is not set. Use --dry-run to preview without calling the API.');
    process.exit(1);
  }

  console.log('Inside Cupertino - draft generator');
  console.log(`Model: ${MODEL}  |  Cap this run: ${RUN_CAP}  |  Dry run: ${DRY_RUN}`);
  console.log(`Unsplash: ${process.env.UNSPLASH_ACCESS_KEY ? 'enabled' : 'disabled'}`);
  console.log('Reminder: drafts only. Do not auto-publish AI content at scale.\n');

  await fs.mkdir(ARTICLES_DIR, { recursive: true });

  const [drafted, existing, items] = await Promise.all([
    loadState(),
    existingSlugs(),
    fetchAllFeeds(),
  ]);

  console.log(`Fetched ${items.length} items across ${FEEDS.length} feeds.`);

  const picks = pickStories(items, drafted, existing);
  if (picks.length === 0) {
    console.log('Nothing new to draft. Exiting clean.');
    return;
  }

  console.log(`Selected ${picks.length} story/stories:`);
  picks.forEach((p, i) => console.log(`  ${i + 1}. [${p.source}] ${p.title}`));

  if (DRY_RUN) {
    console.log('\n--dry-run set; not calling Anthropic and not writing files.');
    return;
  }

  const client = new Anthropic();
  let written = 0;

  for (const item of picks) {
    try {
      console.log(`\nDrafting: ${item.title}`);
      const draft = await draftOne(client, item);
      const hero = await fetchUnsplashImage(draft.tags);
      const md = buildMarkdown({ draft, item, hero });
      const filename = `${item.fullSlug}.md`;
      const outPath = path.join(ARTICLES_DIR, filename);
      await fs.writeFile(outPath, md, 'utf8');
      drafted.add(item.link);
      written++;
      console.log(`  -> wrote ${path.relative(process.cwd(), outPath)}${hero ? ' (with hero image)' : ''}`);
    } catch (e) {
      console.error(`  ! Failed: ${e.message}`);
    }
  }

  await saveState(drafted);
  console.log(`\nDone. ${written} draft(s) written. Review them, then set draft: false to publish.`);
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});