---
title: "Apple's New App Store Rule: Ship a Feature App Review Didn't See, Lose Your Developer Account"
description: "Apple's Oct. 16 App Review update targets AI nudify apps and bait-and-switch tricks. New rule 2.5.19 says hidden or obfuscated features can cost a developer their account."
pubDate: 2026-10-19T15:20:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - app-store
  - app-review
  - developers
  - ai
  - policy
source:
  name: "Apple Developer"
  url: "https://developer.apple.com/news/?id=vvzx6cul"
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A hand holding a smartphone showing a weather and air-quality app, with an iMac and a laptop blurred in the background"
---

Apple quietly rewrote part of the App Store rulebook late last week, and the headline change is simple: if your app does something App Review never saw, Apple can now point to a specific rule when it pulls the app and closes your developer account.

The update landed on **Friday, October 16**, in two posts on Apple's developer site, a [changelog](https://developer.apple.com/news/?id=92th7e5i) and a longer [explainer](https://developer.apple.com/news/?id=vvzx6cul) aimed squarely at AI "nudification" apps and what Apple calls bait-and-switch apps. [9to5Mac](https://9to5mac.com/2026/10/16/apples-new-app-store-rules-crack-down-on-ai-nudification-and-bait-and-switch-apps/) and [The Mac Observer](https://www.macobserver.com/news/app-review-guidelines-nonconsensual-imagery-bait-and-switch/) covered it over the weekend, and [TechCrunch](https://techcrunch.com/2026/10/19/apple-updates-guidelines-to-ban-nudify-apps-masquerading-as-regular-apps-to-pass-review/) picked it up this morning.

## What actually changed

**Guideline 2.5.19 is new.** It reads: "Don't include any hidden, dormant, or undocumented features in your app; your app's functionality should be clear to end users and App Review." It goes on to name code obfuscation specifically and says hiding features that way "is grounds for removal of your app from the App Store and termination of your developer account."

Apple says this isn't a new policy so much as a clearer one. The ban on hidden features used to sit inside Guideline 2.3.1. Pulling it out into its own numbered rule, with obfuscation and account termination spelled out, makes it a lot harder to argue about.

**Guideline 1.2 now names AI apps.** The user-generated content rule already required filtering, reporting, blocking and published contact details. The revised text lists "nonconsensual intimate imagery" among the problems these apps create, and says the rule covers "social media, user-generated content platforms, and AI content creation apps." Apple's explainer says that kind of imagery, "including imagery generated using AI tools," is something apps "must proactively prevent and remove." Developers who don't put safeguards in place, or don't fix problems after Apple flags them, can be treated as breaking the Developer Code of Conduct.

**Section 5 got sharper on the worst content.** Apps found to facilitate human trafficking or child exploitation will be removed from the App Store and, per the new wording, "blocked from alternative distribution." That last part matters in places like the EU, where apps can also reach iPhones outside the App Store.

The changelog also includes a few housekeeping items: a new 2.3.14 on creative assets, and a cleanup of 3.1.1(a) that folds the music-streaming link entitlement into the general StoreKit External Purchase Link entitlement.

## Why now

This didn't come out of nowhere. Per 9to5Mac's timeline, the Tech Transparency Project found dozens of AI nudify apps on the App Store in January, and a follow-up in April said App Store search suggestions and ads were steering people toward them. In July, San Francisco officials ordered Apple to remove eight apps capable of generating nonconsensual intimate imagery. That same month, a 9to5Mac investigation found gambling platforms disguised as simple games that only showed their real face to users in Brazil.

That last case is the textbook bait-and-switch: an app that behaves for the reviewer and changes once it's live, sometimes based on where you are. Apple's explainer says the bad actors it's catching, "in some cases coordinated fraud operations," hide content that "only becomes active once an app is approved."

Apple also restated its enforcement numbers: in 2025 it says it stopped more than 150,000 apps with safety issues from reaching customers and terminated more than 193,000 developer accounts for fraud and abuse.

## What this means

- **For most developers, nothing changes day to day.** If your app does what your submission says it does, 2.5.19 is just a clearer version of a rule you were already following.
- **Remote feature flags deserve a second look.** The new text targets "hidden, dormant, or undocumented" features. Turning on something big server-side after approval, without it ever going through review, is now the exact pattern Apple says it will punish. Ship it in a reviewed build, or document it.
- **AI image and chat apps carry the heaviest load.** They now have to show they're actively preventing abusive imagery, not just reacting to reports, and they risk a Code of Conduct problem if they ignore a notice from Apple.
- **For iPhone owners, it's a promise more than a guarantee.** Apple has prohibited this stuff for years, and the reports above show some of it got through anyway. The real test is whether nudify and disguised gambling apps stop turning up in App Store search over the next few months.

Translations of the updated guidelines are due on Apple's developer site within a month.
