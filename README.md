# Inside Cupertino

Editorial site covering Apple and the broader ecosystem. Astro 5, Tailwind, content collections, dual-theme design system. Deploys to Cloudflare Pages.

---

## Editorial policy: AI-drafted articles are NEVER auto-published

This is the most important thing in this README. Read it before you do anything.

The repository includes a script (`scripts/draft-from-feeds.mjs`) that uses the Anthropic API to draft analysis articles from RSS feeds. **Every article it writes is saved with `draft: true`.** A human must read it, edit it, and flip the flag to `false` before it appears on the site.

This is not a stylistic preference. Google's [March 2024 spam policy update](https://developers.google.com/search/blog/2024/03/core-update-spam-policies) explicitly targets sites that publish AI-generated content at scale without meaningful editorial oversight, and has deindexed sites doing so. The pipeline here is designed around that: the aggregator at `/aggregator` is the "fast, automated" surface (headlines and outbound links only, no body scraping); the article section is the slower, human-edited surface where the actual analysis lives.

Do not change this. If you want to add an "auto-publish if confidence > X" path, you are about to lose your search traffic.

---

## Local development

Requirements: Node 20+ and npm.

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

Drafts (`draft: true`) are visible in `dev` and hidden in `build`. That's intentional — editors should be able to preview drafts locally.

### Environment variables

Copy `.env.example` to `.env` and fill in what you need. None of these are required to get the site running locally; they're only consulted at the relevant moments.

| Variable                      | Used by                         | Required? |
|-------------------------------|----------------------------------|-----------|
| `ANTHROPIC_API_KEY`           | `scripts/draft-from-feeds.mjs`   | Only when generating drafts |
| `MODEL`                       | draft script                     | No (defaults to `claude-sonnet-4-5`) |
| `MAX_PER_RUN`                 | draft script                     | No (defaults to 3) |
| `PUBLIC_NEWSLETTER_PROVIDER`  | `NewsletterForm.astro`           | No (defaults to `stub`) |
| `PUBLIC_NEWSLETTER_ACTION_URL`| `NewsletterForm.astro`           | No |
| `PUBLIC_ADSENSE_CLIENT_ID`    | `BaseLayout.astro`               | No |

---

## The two pipelines

There are two scripts that pull from the same five RSS feeds, and they do very different things.

### `npm run aggregate` — populates the Live Wire

```bash
npm run aggregate
```

Reads 9to5Mac, MacRumors, The Verge Apple, AppleInsider, and Six Colors. Writes `src/data/aggregator.json`. The `/aggregator` page reads that JSON at build time. Items show headline, source, time, and an outbound link — no body text is stored or displayed. This is safe to run as often as you want; it makes no AI calls and costs nothing.

### `npm run draft` — generates draft articles

```bash
ANTHROPIC_API_KEY=sk-ant-... npm run draft
npm run draft -- --max 1     # only draft one story
npm run draft:dry            # show plan, write nothing, no API calls
```

Reads the same feeds, picks stories not yet drafted, asks Claude to write original analysis (not rewrites), and saves Markdown to `src/content/articles/` with `draft: true`. State is kept in `scripts/.drafted-urls.json` so the script never drafts the same URL twice. **Drafts do not appear on the production site until you edit them and set `draft: false`.**

---

## Deploy to Cloudflare Pages

The site is a fully static Astro build — no SSR adapter, no Cloudflare Workers runtime needed.

### One-time setup

1. Push the repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 (set in **Settings → Environment variables → Production** as `NODE_VERSION = 20`)
4. Add the `PUBLIC_*` environment variables under **Settings → Environment variables** (Production and Preview both).
5. Add a custom domain (`insidecupertino.com`) under **Custom domains**.

The first build will take ~1 minute. Every push to `main` triggers a new deploy automatically.

### Cron — pick GitHub Actions, not Cloudflare Cron Triggers

You have two reasonable options for running `aggregate` and `draft` on a schedule, and the right answer is **GitHub Actions**. Why:

- Cloudflare Cron Triggers run inside a Worker. Workers can't easily write back to your Git repo, can't trigger a Pages rebuild without an extra Deploy Hook, and have no good way to commit the updated `src/data/aggregator.json` and the new draft `.md` files. You can do it, but you end up building a small CI system inside a Worker.
- GitHub Actions runs in a full Node environment, can commit changes back to the repo, and the commit itself triggers a Pages rebuild for free. It's the path of least resistance.

A workflow file is included at `.github/workflows/scheduled.yml`. It does this:

- **Hourly:** runs `npm run aggregate`. If `src/data/aggregator.json` changed, commits it. Cloudflare Pages picks up the commit and redeploys.
- **Daily at 13:00 UTC:** runs `npm run draft` with `MAX_PER_RUN=2`. If new drafts were written, commits them. They go to production with `draft: true`, so nothing user-visible changes until an editor reviews them.

To enable it:

1. **Settings → Secrets and variables → Actions → New repository secret**
   - `ANTHROPIC_API_KEY` — your Anthropic key.
2. **Settings → Actions → General → Workflow permissions** → set to **Read and write permissions** so the workflow can commit.

That's it. You can adjust the cron expressions in the workflow file if hourly is too aggressive (the RSS feeds typically only update a few times a day).

---

## Wiring the newsletter form to Beehiiv or Substack

The form in `src/components/NewsletterForm.astro` reads two environment variables and posts to whatever URL you give it. Default behavior posts to `/api/subscribe`, which doesn't exist — that keeps the form from breaking the site, but it does nothing useful until you point it at a real provider.

### Beehiiv

1. In Beehiiv: **Settings → Publication → Subscribe Forms → Create Embed Form**. Pick "HTML."
2. Copy the form's `action` URL — it looks like `https://embeds.beehiiv.com/<id>`.
3. Set environment variables in Cloudflare Pages and your local `.env`:
   ```
   PUBLIC_NEWSLETTER_PROVIDER=beehiiv
   PUBLIC_NEWSLETTER_ACTION_URL=https://embeds.beehiiv.com/<your-id>
   ```
4. Beehiiv expects the email field to be named `email`, which is what the form already uses.
5. Rebuild. The form now posts to Beehiiv and opens the confirmation page in a new tab.

### Substack

Substack does not offer a public subscribe API or form action that accepts cross-origin POSTs. The two real options:

- **Substack-hosted button:** replace the form with the official Substack embed (`<iframe src="https://yourpub.substack.com/embed">`). Drop it into `NewsletterForm.astro`, replacing the `<form>`.
- **ConvertKit / Buttondown / Beehiiv as the front-end, Substack as a re-broadcast destination:** more flexible if you ever want to leave Substack.

If you go the iframe route, set `PUBLIC_NEWSLETTER_PROVIDER=substack-iframe` and edit the component — there's no useful action URL for Substack.

---

## Adding Google AdSense

The `BaseLayout` reads `PUBLIC_ADSENSE_CLIENT_ID` and, if set, injects the AdSense loader script in `<head>`. To turn ads on:

1. Get your AdSense site approved (this requires the site to be live, have content, and pass review — usually a couple of weeks).
2. In AdSense, find your Publisher ID. It looks like `ca-pub-1234567890123456`.
3. Set the environment variable in Cloudflare Pages:
   ```
   PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
   ```
4. Rebuild. The loader is now on every page. With Auto Ads enabled in your AdSense account, that's all you need; AdSense will place units automatically.

To place specific units (in-article, sidebar, etc.) rather than relying on Auto Ads, add `<ins class="adsbygoogle" ...>` blocks where you want them and follow it with the small `(adsbygoogle = window.adsbygoogle || []).push({})` snippet — the AdSense console will give you exact code per ad unit.

A note on ad density: the design system this site is built on emphasizes whitespace and editorial pacing. Heavy ad load will fight that and hurt both the reading experience and your Core Web Vitals score. Start with one in-article unit and one sidebar unit; resist the temptation to add more.

---

## Project layout

```
inside-cupertino/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── README.md
├── .env.example
├── .github/workflows/scheduled.yml    ← cron (aggregate + draft)
├── public/                            ← static assets
├── scripts/
│   ├── aggregate-feeds.mjs            ← writes src/data/aggregator.json
│   ├── draft-from-feeds.mjs           ← writes draft .md files
│   └── .drafted-urls.json             ← state, auto-managed
└── src/
    ├── components/                    ← Header, Footer, NewsletterForm, ArticleCard
    ├── content/
    │   ├── config.ts                  ← article schema (Zod)
    │   └── articles/                  ← .md files; draft: true|false
    ├── data/
    │   └── aggregator.json            ← generated; do not hand-edit
    ├── layouts/BaseLayout.astro
    ├── pages/
    │   ├── index.astro                ← homepage
    │   ├── aggregator.astro           ← Live Wire
    │   └── articles/[...slug].astro   ← article detail
    └── styles/global.css              ← palette CSS vars (both themes)
```

---

## Adding an article by hand

Create `src/content/articles/your-slug.md`:

```markdown
---
title: "A specific, non-clickbait headline"
description: "One to two sentences, 80–180 characters. Used as the meta description."
pubDate: 2026-04-21T09:00:00.000Z
draft: false
author: "Your Name"
tags:
  - mac
  - analysis
heroImage: "https://..."
heroAlt: "Description for screen readers"
source:                       # optional
  name: "9to5Mac"
  url: "https://9to5mac.com/..."
---

Body in Markdown. Use the [link](https://...) syntax for outbound source attribution.
```

Schema is enforced at build time. If you get type errors, check `src/content/config.ts`.

---

## A note on the design system

The visual language comes from two `DESIGN.md` files (the "Nocturnal Intellectual" dark theme and the "Morning Gallery" light theme). The most consequential rule, repeated across both: **no 1px solid borders to section off content.** Use background shifts and the `surface-container-*` palette instead. If you find yourself reaching for `border-b` to separate things, you're doing it wrong; reach for `bg-surface-container-low` instead.

The two palettes live as CSS variables in `src/styles/global.css`. The theme toggle in the header is one class flip on `<html>`. Don't introduce hardcoded hex values in components — use the Tailwind tokens (`text-on-surface`, `bg-surface-container-high`, etc.) so both themes stay in sync.

---

## Not affiliated with Apple Inc.

Inside Cupertino is an independent publication. "Apple," "iPhone," "Mac," and related marks are trademarks of Apple Inc.
