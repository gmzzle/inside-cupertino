---
title: "The ClickFix Attack Shows Why IT Needs to Stop Deferring macOS Updates"
description: "A new social engineering campaign is exploiting the 90-day update window that many IT departments still use. Time to rethink that policy."
pubDate: 2026-05-23T14:40:40.818Z
draft: true
author: "Inside Cupertino"
tags:
  - security
  - macos
  - enterprise
  - updates
  - malware
source:
  name: "9to5Mac"
  url: "https://9to5mac.com/2026/05/23/apple-work-why-the-clickfix-campaign-means-it-is-time-to-kill-the-90-day-update-deferral/"
---

Mac admins are spooked right now, and they should be. [9to5Mac](https://9to5mac.com/2026/05/23/apple-work-why-the-clickfix-campaign-means-it-is-time-to-kill-the-90-day-update-deferral/) flagged a Netskope report on a new macOS malware campaign called ClickFix that's making the rounds, and it's nasty precisely because it doesn't rely on exotic exploits. It relies on users doing what sketchy pop-ups tell them to do - and it works.

The attack uses fake browser error messages that trick users into opening Terminal and pasting in a malicious command. Social engineering, not zero-days. The problem is that Apple's security updates patch these vectors all the time, but a huge number of enterprise Mac fleets are running software that's months out of date because IT departments still defer major updates for 90 days. That policy made sense when macOS updates broke things regularly. It makes much less sense now that Apple ships targeted security updates between major releases and has tightened its QA. What you get instead is a three-month window where your users are vulnerable to attacks that Apple already fixed.

The 90-day deferral is a relic of the Big Sur era, when macOS 11.0 shipped buggy and IT got burned. Fair enough - that release was rough. But Sequoia, Sonoma, and Ventura have been demonstrably more stable at launch, and Apple now decouples critical security patches from feature updates via Rapid Security Response. Deferring a .0 release for two weeks to let early adopters find the gotchas? Reasonable. Deferring it for a full quarter while ClickFix-style campaigns proliferate? That's just giving attackers a longer runway.

The smarter play is to flip the default: install security updates immediately, defer feature updates selectively, and test major releases in a pilot group for maybe 14 days max. Most enterprises can't move that fast culturally, which means Apple might need to force the issue by deprecating long deferral windows in MDM or making Rapid Security Response mandatory for managed devices.

ClickFix works because users are the weakest link, but leaving them on old software for three months makes that link even weaker.
