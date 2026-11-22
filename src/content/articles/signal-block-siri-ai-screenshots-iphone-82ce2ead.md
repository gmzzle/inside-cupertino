---
title: "Signal Just Walled Off Siri AI on iPhone. Apple Should Read That as a Bug Report."
description: "Signal now blocks screenshots on iOS 27 by default to keep Siri AI out of your chats. What the toggle does, what it can't stop, and what Apple should give developers."
pubDate: 2026-11-22
draft: false
author: "Inside Cupertino"
tags:
  - siri-ai
  - privacy
  - ios-27
  - signal
  - ai-agents
source:
  name: "Signal"
  url: "https://signal.org/blog/protecting-your-privacy/"
heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1600&q=80&auto=format&fit=crop"
heroAlt: "An iPhone on a gray fabric surface with a Messages folder of chat app icons open"
---

If you've updated Signal on your iPhone since Friday and tried to grab a screenshot of a chat, you probably got stopped. That's on purpose. Signal now ships a setting called **Block Siri AI**, and it's switched on by default.

It's the most public pushback yet from a major app against the on-screen AI Apple built into iOS 27. It also points at a gap Apple hasn't closed.

## What changed

In a [blog post on Friday](https://signal.org/blog/protecting-your-privacy/), Signal president Meredith Whittaker said the company is restricting AI agents built into mobile operating systems from capturing Signal data. On iPhone, Signal does that the only way it reliably can: it blocks screenshots inside the app.

According to [Signal's support page](https://support.signal.org/hc/en-us/articles/11338514641306-Screen-security-blocking-Siri-AI), while the setting is on it blocks:

- Screenshots and screen recordings inside Signal
- Signal's content showing up in the App Switcher
- On-device AI assistants reading what's on screen in Signal

It needs Signal 8.37 or later on iOS 27 or later. Android gets a similar protection, but it switches on when Signal detects an AI assistant trying to read the screen rather than right away. [Reuters](https://www.investing.com/news/stock-market-news/exclusivesignal-restricts-screenshots-to-block-ai-agents-from-reading-messages-5040998) reported that Apple, Google, and Microsoft did not immediately respond to requests for comment.

## If you actually need a screenshot

You don't have to choose between privacy and ever capturing a chat again. Signal's support page says the iPhone setting, under **Settings → Privacy → Block Siri AI**, has three options: On, Off, and **Off for 10 Minutes**. The last one turns protection back on by itself, so it's the sensible pick when you need to save a receipt, an address, or a group photo thread.

When you try a screenshot with the block on, Signal shows a prompt with those same choices. If you turn it off, Signal asks you to confirm first and warns that Siri AI may then be able to scan your Signal content.

Keep in mind the people you're talking to. Turning the block off on your phone affects their messages too, not just yours. That's the point Whittaker makes when she says switching it off can "break our privacy guarantees."

## What it can't stop

Signal is unusually upfront about the limits here. Whittaker calls the fix "incomplete." Blocking screenshots doesn't cover other routes an AI agent might use, such as reading data already stored on the device.

The Mac is a bigger hole. Signal says it can't reliably block screenshots on macOS because Apple doesn't offer clear, documented tools to do it. For now, its only advice for macOS 27 users is to add Signal to the Excluded Apps list in System Settings > Siri.

On iPhone, Apple already lets you exclude individual apps from Siri AI, and [9to5Mac notes](https://9to5mac.com/2026/11/20/signal-now-blocks-screenshots-on-iphone-to-stop-siri-ai-from-seeing-chats/) that got easier in iOS 27.2. Signal didn't want to rely on users finding that setting, so it made protection the default inside its own app.

## Why this matters for Apple

Apple has spent a decade selling privacy as a feature. Siri AI's on-screen awareness is one of the headline features of iOS 27. Signal's argument is that privacy at the system level isn't enough. Once an app's content is pulled into a system AI, the app can no longer vouch for where it goes. The owner of the app is left out of the decision.

That's why the fix is so blunt. Killing screenshots is a poor user experience, and Signal knows it. It chose that tradeoff because, as the blog post puts it, Apple, Google, and Microsoft don't give developers a way to limit AI data access "without making drastic compromises to the core user experience."

Signal is asking for two things:

1. **A documented opt-out.** A simple, supported way for an app to keep its content away from AI processing, covering screen reading, files, notifications, and other system hooks, without breaking the app.
2. **Real documentation.** Clear specs on what these agents can access and how. Signal says it has spent months on forensic work just to figure out what happens when Siri AI and Gemini touch app data.

Neither request is radical. Apple already gives developers fine-grained controls elsewhere, from App Intents for what Siri can *do* in an app to per-app permissions for the camera and location. A matching "don't read this" flag would fit that model. It would also help banking apps, health apps, and password managers, which face the same problem with less public attention.

There's a hint of progress. Signal says it is "cautiously optimistic" that Apple and Google are engaging with it on how these systems should work with privacy-sensitive apps. WWDC in June would be the natural place to announce a fix.

## The bottom line

For most people, the best setting is the default: leave Block Siri AI on and use "Off for 10 Minutes" when you need a screenshot. If you use Signal on a Mac, add it to Siri's Excluded Apps list yourself.

The bigger story is that one of the most trusted privacy apps on the iPhone just decided it can't trust the operating system's AI with its users' messages. Apple should take that as a bug report, not an insult.

*Sources: [Signal blog](https://signal.org/blog/protecting-your-privacy/); [Signal Support](https://support.signal.org/hc/en-us/articles/11338514641306-Screen-security-blocking-Siri-AI); [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/exclusivesignal-restricts-screenshots-to-block-ai-agents-from-reading-messages-5040998); [9to5Mac](https://9to5mac.com/2026/11/20/signal-now-blocks-screenshots-on-iphone-to-stop-siri-ai-from-seeing-chats/); [The Verge](https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app).*
