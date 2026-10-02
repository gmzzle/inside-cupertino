---
title: "Apple Tightens macOS Full Disk Access — AI Agents Got Too Nosy"
description: "Apple will require far more explicit consent before apps get Full Disk Access on Mac, citing AI agents that can scoop up files, Mail, Messages, and browsing history."
pubDate: 2026-10-02T22:20:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - macos
  - full-disk-access
  - privacy
  - ai-agents
  - security
source:
  name: "Apple Developer News"
  url: "https://developer.apple.com/news/"
heroImage: "https://images.unsplash.com/photo-1561634109-465ffe688b50?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Silver MacBook Pro open on a dark desk mat in a room"
---

Apple just told developers the quiet part out loud: **Full Disk Access** on the Mac was built for backup apps, and AI agents are abusing the loophole.

In a Friday post on [Apple Developer News](https://developer.apple.com/news/), Cupertino said it will introduce **additional controls** so users who really want to grant that permission can do so only with **very explicit user action**. No ship date. The framing is not subtle.

## What Full Disk Access actually unlocks

Apple’s own words: Full Disk Access **largely sidesteps** the privacy controls that normally fence off private data, so backup tools can see the whole drive. Some developers, Apple says, are using it in ways that put people at risk — exposing **files, mail, messages, and even browsing history** without users’ full knowledge. For communication apps, that also hits the privacy of whoever you’re talking to.

That is the whole permission, in one paragraph. Not a gentle nudge toward TCC. A skeleton key.

## Why now: agents, not Time Machine

The timing tracks the desktop-AI panic week. TechCrunch notes the post landed days after Inc. columnist **Jason Aten** claimed **Meta’s Muse** on Mac appeared to know private **Messages** content — a claim Meta disputed — and after a Wired report on a **ChatGPT** Mac-app flaw that could expose sensitive data. Apple’s statement does not name Muse, Meta, or OpenAI. It names the category: **AI agents** that are increasingly capable and autonomous.

From Apple’s post:

> Going forward, we will introduce additional controls to ensure that users who genuinely wish to grant an app this extraordinary level of access can only do so with very explicit user action. Addressing this is critical. As AI agents become increasingly capable and autonomous, the risks associated with this level of access will grow substantially.

Backup apps still need a path. Agents that want to read your life do not get to borrow that path quietly.

## What we do not know yet

Apple did not say **when** the new controls land, or what the UI will look like — extra dialogs, a harder Settings path, clearer risk copy, something else. Until then, Full Disk Access still lives where it always has under **System Settings → Privacy & Security**, and users still have to grant it themselves. The change is about making that grant unmistakably intentional.

For Mac owners: treat any AI agent asking for Full Disk Access as asking for everything. For developers shipping backups or disk utilities: expect a stricter consent dance. For everyone else watching agents crawl onto the desktop: Apple just drew a line around the biggest permission on the Mac — and blamed the agents for forcing the redraw.
