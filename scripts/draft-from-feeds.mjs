#!/usr/bin/env node
/**
 * draft-from-feeds.mjs
 *
 * Reads the configured RSS feeds, finds stories not yet drafted, and asks
 * Claude to write an ORIGINAL analysis piece for each. Outputs Markdown with
 * full frontmatter to src/content/articles/, marked `draft: true`.
 *
 * IMPORTANT: This script generates DRAFTS only. A human must review, edit,
 * and flip `draft: false` before publishing. Auto-publishing AI content at
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
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=10&orientation=landscape&content_filter=high`,
      { headers: { Authorization: `Client-ID ${key}` } }
    );
    if (!res.ok) {
      console.error(`  Unsplash returned ${res.status}`);
      return null;
    }
    const data = await res.json();
    if (!data.results?.length) return null;
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

function pickStories(items,​​​​​​​​​​​​​​​​
