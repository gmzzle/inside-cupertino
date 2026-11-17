---
title: "Siri AI Now Has a Daily Limit. Your iCloud+ Plan Decides How Big It Is."
description: "iOS 27.3 beta 2 caps advanced Siri AI and Apple Intelligence requests per device, per day. The 200GB iCloud+ plan doubles it; 12TB gets up to 20x. Basic Siri still works."
pubDate: 2026-11-17
draft: false
author: "Inside Cupertino"
tags:
  - siri-ai
  - apple-intelligence
  - icloud-plus
  - ios-27-3
  - services
source:
  name: "9to5Mac"
  url: "https://9to5mac.com/2026/11/16/apple-intelligence-siri-ai-usage-limits/"
heroImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1600&q=80&auto=format&fit=crop"
heroAlt: "The back of a dark gray iPhone with a triple-lens camera and Apple logo, standing against a black background"
---

Apple has said for a while that Siri AI would not be unlimited. With the second betas of iOS 27.3, iPadOS 27.3, and macOS 27.3, released Monday, we finally know what that means in practice: a free daily allowance on every device, and a bigger one if you pay for more iCloud storage.

That turns iCloud+ from a storage plan into something closer to an AI plan. Here is what changes, based on Apple's support document as reported by [9to5Mac](https://9to5mac.com/2026/11/16/apple-intelligence-siri-ai-usage-limits/), [MacRumors](https://www.macrumors.com/2026/11/16/apple-icloud-paid-siri-ai-upgrade/), and [Cult of Mac](https://www.cultofmac.com/news/siri-ai-usage-limits-icloud-plus). We have not tested the beta ourselves.

## What counts against the limit

The cap applies to features that lean on Apple's servers, not to everything with "AI" in the name. According to MacRumors and 9to5Mac, there are four categories:

- **Siri AI** requests that use personal context or take multiple steps, like finding a dinner reservation in your email and adding it to your calendar
- **Image tools**: Image Playground plus Clean Up, Extend, and Spatial Reframing in Photos
- **Shortcuts** that call the AFM Cloud and AFM Cloud Pro models
- **Third-party apps** that use Apple Foundation Models through Private Cloud Compute

Simple, single-step Siri requests are not capped. Setting a timer or texting someone that you are on your way still works after you hit the limit. Work that happens on the device itself does not count either.

Each category has its own limit. Apple is not publishing the actual numbers, and says limits can vary with the feature, how complex the request is, and system demand. You get a warning as you get close, and a prompt to wait or upgrade once you hit it.

## What each iCloud+ plan gets you

The free allowance is per device, so your iPhone, iPad, and Mac each get their own. Once a device uses that up, it can draw on extra capacity from an eligible iCloud+ plan. Prices are US monthly, and Apple is not changing them:

| iCloud+ plan | Price | Daily limit |
| --- | --- | --- |
| 50GB | $0.99 | Standard only |
| 200GB | $2.99 | Up to 2x |
| 2TB | $9.99 | Up to 5x |
| 6TB | $29.99 | Up to 10x |
| 12TB | $59.99 | Up to 20x |

Two details matter more than the multipliers.

First, the extra capacity is a **shared pool**. It covers every device on your Apple Account and everyone in a Family Sharing group on your plan, first come, first served. One heavy user in the house can drain it for everyone else.

Second, the multipliers are relative to a number Apple will not disclose. "5x" sounds generous, but nobody outside Apple knows yet what 1x buys you.

Limits reset daily, usually around midnight in your time zone (for families, MacRumors says it follows the plan purchaser's time zone), and unused capacity does not roll over. MacRumors reports Apple has no plans to sell more than the 12TB tier offers. [iClarified](https://www.iclarified.com/103593/whats-new-in-ios-273-beta-2) reports that expanded access is not available in the EU, UK, Brazil, or South Korea.

## What to do now

Nothing, yet. This is a developer beta, and MacRumors expects Apple to use the testing period to tune the limits before iOS 27.3 ships, which it expects in December.

When it does ship, a few practical steps:

1. **Check your current plan.** If you already pay for 200GB or more, you get the higher limit at no extra cost.
2. **Watch where you hit the warning.** If it is Image Playground and not Siri, that tells you whether an upgrade is worth it.
3. **Think about the family pool.** If your kids share your plan and lean on image tools, your own Siri requests may hit the wall first.
4. **Don't upgrade on day one.** The jump from 200GB to 2TB is $7 a month. Wait to see how far the free allowance actually goes.

The bigger story is the business model. Apple's AI is not a separate subscription, but it now has a meter, and the way to raise it is the storage plan many people already pay for. That is a quieter way to charge for AI than a "Siri Pro" tier, and probably a more effective one.
