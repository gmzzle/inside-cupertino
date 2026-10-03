---
title: "Microsoft Killed EWS. Mac Mail Wasn't Ready."
description: "Microsoft started disabling Exchange Web Services. Mac Mail still depends on it for Microsoft 365. iPhone doesn't. Apple's Graph fix isn't out."
pubDate: 2026-10-03T15:15:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - apple-mail
  - macos
  - microsoft-365
  - exchange
  - mac
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/10/01/apple-mail-mac-stop-sync-microsoft-365/"
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Laptop open on a wooden desk beside a notebook"
---

Microsoft flipped the switch. Apple is still writing the memo.

As of about **October 1, 2026**, Microsoft began **disabling Exchange Web Services by default** in **Exchange Online**. That is the old protocol Apple's **Mac** apps still use to sync **Microsoft 365** work and school accounts: **Mail, Calendar, Contacts, Notes, and Reminders**. Same week the cutoff started, those apps were not on the replacement. Work Macs first. Personal Gmail is not the story.

Your iPhone does not care. **iPhone and iPad Mail use Exchange ActiveSync**, not EWS, so the phone keeps syncing while the laptop goes quiet. That split is the whole embarrassment. Apple converged the product names years ago and left the plumbing on two different centuries.

## This was not a surprise

Microsoft froze new EWS features years ago — the trades put the feature freeze around **2018** — and in **2023** said it would start turning the protocol off in Exchange Online in **October 2026**. The hard stop is **April 1, 2027**. No extensions on the current plan. On-prem Exchange servers are outside this. Cloud tenants are not.

Apple's own Platform Deployment notes say the company is **actively working with Microsoft** to move those five Mac apps to **Microsoft Graph** in a **future macOS 27** update. Fine sentence. The update is not shipping. **macOS 27.1 betas were skipped.** **27.2 beta notes** have not mentioned Graph. "Working on it" is not a client.

## What actually breaks, and the escape hatches

The rollout is **phased**, not a single global outage. Orgs that already chose to keep EWS on are fine for now. Everyone else can watch Mail stop updating in waves. IT can **temporarily re-enable EWS** for approved apps. That buys time until April 2027, not a strategy.

The other workaround is the one Microsoft prefers: put Mac users on a **Graph client**, which in practice means **Outlook**. Universities are already telling people to switch. That is a product loss for Apple Mail dressed up as an IT ticket.

## The point

Cupertino had years of calendar between "EWS is frozen" and "EWS is off by default." It used them to ship foldables, point releases, and a Mac OS with a new name. It did not use them to move Mail off a protocol Microsoft scheduled for death. iPhone sails through on ActiveSync. The work Mac — the machine that actually lives in Exchange — is the one holding the bag.

If your Microsoft 365 mail still lands in Apple Mail this morning, thank your admin, not the changelog. The permanent shutdown is six months out. Graph on macOS 27 is still a promise.
