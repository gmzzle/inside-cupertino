---
title: "Gemini Can Now Drive Your Mac. Apple Is Racing to Set the Rules First."
description: "Google's Gemini for Mac can now click, type, and work across your apps on its own. macOS 27.3 adds new limits on what AI agents can touch, and Apple is reportedly building its own agent."
pubDate: 2026-11-19
draft: false
author: "Inside Cupertino"
tags:
  - ai-agents
  - gemini
  - macos
  - privacy
  - apple-intelligence
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/11/19/google-gemini-mac-app-control/"
heroImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A half-open MacBook with a glowing Apple logo and backlit keyboard, lit in purple and blue light"
---

The next fight over your Mac isn't about which apps you run. It's about which AI gets to run them *for* you.

On Thursday, Google gave Gemini for Mac the ability to actually use your computer: open apps, click through menus, fill out forms, and work with your files. On the same day, Apple shipped a beta of macOS Golden Gate 27.3 with new guardrails for exactly this kind of software. And Bloomberg reports Apple is building an agent of its own.

Here's what each piece means, and what you should do about it.

## What Gemini can do on your Mac now

Google calls the feature "computer use." In its [announcement](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/), the company says you describe what you need, and "Gemini handles the clicking, typing, menus, and forms for you."

The important details:

- **It works in the background.** Gemini runs in "an isolated background window with a live preview right in your chat," per Google, so your own screen and cursor stay free while it works.
- **You pick the apps.** You choose which apps Gemini can access, and it asks for approval before "key actions," as [MacRumors](https://www.macrumors.com/2026/11/19/google-gemini-mac-app-control/) puts it. You can pause or stop it at any time.
- **It pauses for sensitive stuff.** According to [9to5Google](https://9to5google.com/2026/11/19/gemini-mac-computer-use/), Google will pause for logins and payments. To use it, you add "@Computer use" to your prompt.
- **It isn't free, and it isn't everywhere.** It's rolling out in English in the U.S. to Google AI Plus, Pro, and Ultra subscribers, with plans starting at $4.99 per month, according to MacRumors. Google says you need an Apple silicon Mac running macOS Sequoia 15.0 or later and a personal Google account for someone 18 or older.

Google's own examples are the kind of chores nobody misses: batch color-grading photos, pulling weights and addresses out of PDFs to fill in shipping quotes, building a Google Slides deck from dashboard screenshots, and staging resale listings from a folder of clothing photos.

## Apple's answer: tighter permission slips

Apps like Gemini need deep access to control other apps. Until now, macOS mostly offered an all-or-nothing choice. macOS 27.3 changes that.

Apple's [support document](https://support.apple.com/en-us/149699) for the update is blunt about the risk. An app with Full Disk Access "can read, change, delete, and export" your data "without asking." An app allowed to bypass protections under the new System & App Protection Override setting "can fully control your Mac and apps," and can "see every window and app, including ones in the background, and capture every keystroke."

Starting in 27.3, when some apps ask for that kind of access, you'll get a middle option:

- **Choose specific folders or apps** instead of handing over everything.
- **Set each app to "Ask First" or "At Any Time"** so an agent has to get your OK before it controls a given app.
- **See when it's happening.** MacRumors reports there's also a transparency indicator that shows when one app is controlling another.

If you still want to give an app full access, Apple makes you confirm each power in plain language, including "Control Your Mac, Apps, and Settings" and "Monitor Everything You Do."

## The catch: say yes now, and the new rules don't apply

This is the part worth paying attention to. According to [MacRumors](https://www.macrumors.com/2026/11/19/google-gemini-mac-app-control/), apps you grant permissions to now won't have to re-ask after macOS 27.3 is released, and you won't see Apple's new explanation screens for them either.

Gemini's computer use arrives before 27.3 does. The second public beta went out Thursday, and [MacRumors](https://www.macrumors.com/2026/11/19/ios-27-3-public-beta-2/) expects Apple's updates to launch in December. MacRumors called Google's timing "convenient." That's a polite way of saying anything you approve in the next few weeks gets the old, broad permissions.

## And Apple wants its own agent

Apple doesn't seem to be against AI agents. It just wants to control the terms. According to a [Bloomberg report](https://seekingalpha.com/news/4674960-apple-works-on-agent-to-counter-openai-anthropic-and-meta-report) summarized by Seeking Alpha, Apple is building an autonomous AI agent that can write code, control apps, and navigate devices to compete with OpenAI, Anthropic, and Meta.

Treat this as early. [AppleInsider](https://appleinsider.com/articles/26/11/19/apple-ai-agents-are-coming-to-help-you-code-browse-perform-tasks) notes the report is based on an Apple job listing for an engineering manager. The listing reportedly reads: "Imagine an AI agent that can use a computer the way a capable person does... It does all this privately and with the polish people expect from Apple." There's no announced product or date.

Put the three stories together and the strategy is pretty clear. Apple is building the permission system first, and its own agent second. When an Apple agent does show up, it'll be playing by rules Apple wrote.

## What to do right now

- **Don't rush to grant broad access.** If you want to try Gemini's computer use, consider waiting for macOS 27.3 so you get the narrower folder and app options.
- **If you've already said yes, revisit it after you update.** Apple says you can limit an app with full access by removing it in System Settings > Privacy & Security, then adding it back and choosing specific folders or apps.
- **Audit what you've already approved.** Look at Full Disk Access and Accessibility in Privacy & Security today. Any app you don't recognize, or no longer use, shouldn't be there.
- **Watch the indicator.** Once 27.3 lands, if you see an app controlling another app and you didn't ask for it, stop and check.

AI agents that do your busywork are coming to every platform, Apple's included. The useful question isn't whether to use one. It's how much of your Mac you hand over when you do.
