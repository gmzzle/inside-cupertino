---
title: "macOS 27.3 Makes You Look at Full Access Before You Grant It"
description: "In macOS 27.3 beta 2, Apple splits device-control settings, adds folder-level grants and an ask-every-time option. Existing permissions stay; new requests get the harder choice."
pubDate: 2026-11-16
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
  url: "https://developer.apple.com/news/?id=oqng0zjk"
heroImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1600&q=80&auto=format&fit=crop"
heroAlt: "An open laptop in a dark room showing green falling characters on a black screen, with the display reflected on the desk"
---

In October, Apple promised tighter Full Disk Access controls and left two practical questions unanswered: when they would arrive, and what users would actually see. In a [Developer News post dated November 16](https://developer.apple.com/news/?id=oqng0zjk), Apple says both answers landed today in macOS 27.3 beta 2.

The earlier warning is now a permission flow. As we [wrote when the promise landed](https://insidecupertino.com/articles/macos-full-disk-access-ai-agents-controls-a8f3c291), Full Disk Access is a skeleton key, not a courtesy toggle. Apple’s new post is blunter still:

> Before granting an app such extraordinary access, users should understand that it puts all of the data on their Mac at risk.

The useful change is that the system is finally being asked to surface that risk at the moment of the request.

## What changes when an app asks

Apple is splitting the old Device Control and Data Access setting into two: System & App Protection Override, and Accessibility. Permissions are granted by selecting the requesting app from a list, with guidance to limit System & App Protection Override to specific apps and Full Disk Access to specific folders.

If you grant full permissions, Apple says you should now get a clearer view of the data and control that comes with them. You can also configure an app to ask every time it needs access, rather than leaving a standing grant in place.

When one app is controlling another through System & App Protection Override, Apple says a transparency indicator appears. [MacRumors](https://www.macrumors.com/2026/11/16/macos-27-3-full-desk-access/) and [9to5Mac](https://9to5mac.com/2026/11/16/macos-27-3-includes-new-privacy-controls-for-full-disk-access-and-more/) report that the indicator shows up in the menu bar. We have not independently tested the beta, so that placement is theirs.

This is not a ban. [TechCrunch’s Sarah Perez notes](https://techcrunch.com/2026/11/16/apple-reveals-new-mac-security-controls-as-ai-agents-raise-privacy-risks/) that the changes do not appear to prevent installing or running AI agents or other high-access apps. They add options and information. The same report points out that “ask every time” may make unattended automation clumsier — which is the point, if the alternative is a quiet, permanent key to the machine.

## What does not change — yet

Existing grants stay put. Apple is explicit: previously approved permissions remain in effect, and users will see the new flow when approving new requests. If an AI agent or backup tool already has Full Disk Access, upgrading to the 27.3 beta does not, by Apple’s account, revoke it.

Developers of backup apps that use Full Disk Access, and of assistive technologies that use the new Accessibility settings, can request entitlements to keep the pre-27.3 experience for new installations. Apple says known apps are unaffected for now and will keep that experience without an entitlement. Entitlement details are “coming soon.”

Treat that last part as a temporary carve-out, not a finished policy. Until Apple publishes the details, “known” is Apple’s category, not a public list we can verify here.

## What Mac owners should do

The practical advice is narrower than the panic around agents, and more useful.

First, review what you have already granted. Because old permissions survive, the new warnings will not automatically clean up last month’s yes. System Settings is still the place to look.

Second, when a new prompt appears, prefer the narrow grant. If a tool only needs one folder, give it that folder. If an automation tool only needs Mail, don’t also hand it Messages — a limitation [9to5Mac uses as an example](https://9to5mac.com/2026/11/16/macos-27-3-includes-new-privacy-controls-for-full-disk-access-and-more/) of the new System & App Protection Override controls.

Third, use “ask every time” while you are still deciding whether you trust a tool. It may interrupt a workflow. It also keeps a standing skeleton key from becoming the default.

Fourth, watch the indicator. If one app is driving another, you should be able to see that it is happening.

None of this requires running the developer beta today. [9to5Mac](https://9to5mac.com/2026/11/03/ios-27-3-and-macos-27-3-add-vertical-tabs-adaptive-dark-mode-and-more-to-safari/) and [MacRumors](https://www.macrumors.com/2026/11/04/macos-27-3-live-activities-in-menu-bar/) have expected a public 27.3 release in December; that remains their reporting, not an Apple-confirmed date. Until then, the decision for most people is the same as it was in October: treat a request for full access as a request for everything on the Mac, and wait for the new prompts if you can.

Apple did not make agents less hungry. It made the “yes” harder to give in the dark.
