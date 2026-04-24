#!/usr/bin/env node
/**
 * aggregate-feeds.mjs
 *
 * Pulls headlines from a curated set of Apple-focused publications and writes
 * a single JSON file consumed at build time by /aggregator.
 *
 * Headlines and outbound links only — no body text is scraped, stored, or
 * republished. Each item links back to the original publication.
 *
 * Usage:
 *   node scripts/aggregate-feeds.mjs
 *   node scripts/aggregate-feeds.mjs --max 60
 *
 * Output:
 *   src/data/aggregator.json
 */

import Parser from 'rss-parser';
import fs from 'node:fs/promises';
import path from 'node:path';

// ---------- Config ----------

const FEEDS = [
  { name: '9to5Mac',         url: 'https://9to5mac.com/feed/',                  homepage: 'https://9to5mac.com' },
  { name: 'MacRumors',       url: 'https://www.macrumors.com/macrumors.xml',    homepage: 'https://www.macrumors.com' },
  { name: 'The Verge Apple', url: 'https://www.theverge.com/apple/rss/index.xml', homepage: 'https://www.theverge.com/apple' },
  { name: 'AppleInsider',    url: 'https://appleinsider.com/rss/news',          homepage: 'https://appleinsider.com' },
  { name: 'Six Colors',      url: 'https://sixcolors.com/feed/',                homepage: 'https://sixcolors.com' },
];

const OUT_PATH    = path.resolve('src/data/aggregator.json');
const PER_FEED    = 12;   // newest N items kept per feed before merging
const TOTAL_CAP   = parseInt(getArg('--max') ?? '50', 10);
const FETCH_TIMEOUT_MS = 15000;

function getArg(name) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : null;
}

// ---------- Fetch ----------

const parser = new Parser({
  timeout: FETCH_TIMEOUT_MS,
  headers: { 'User-Agent': 'InsideCupertino-Aggregator/1.0 (+https://insidecupertino.com)' },
});

async function fetchFeed(feed) {
  try {
    const parsed = await parser.parseURL(feed.url);
    return parsed.items.slice(0, PER_FEED).map(it => ({
      source: feed.name,
      sourceHomepage: feed.homepage,
      title: (it.title ?? '').trim(),
      url: it.link,
      // ISO string for stable sort and clean JSON
      pubDate: new Date(it.isoDate || it.pubDate || Date.now()).toISOString(),
    })).filter(it => it.title && it.url);
  } catch (e) {
    console.error(`! ${feed.name}: ${e.message}`);
    return [];
  }
}

// ---------- Main ----------

async function main() {
  console.log(`Inside Cupertino — aggregator`);
  console.log(`Fetching ${FEEDS.length} feed(s), cap ${TOTAL_CAP} items...`);

  const results = await Promise.all(FEEDS.map(fetchFeed));
  const all = results.flat();

  // Newest first, then cap
  all.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  const items = all.slice(0, TOTAL_CAP);

  const payload = {
    generatedAt: new Date().toISOString(),
    sources: FEEDS.map(f => ({ name: f.name, homepage: f.homepage })),
    items,
  };

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');

  console.log(`Wrote ${items.length} item(s) from ${results.filter(r => r.length).length} live feed(s) to ${path.relative(process.cwd(), OUT_PATH)}.`);
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
