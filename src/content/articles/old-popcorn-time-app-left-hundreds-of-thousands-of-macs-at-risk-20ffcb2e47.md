---
title: "That Old Popcorn Time Install Is Still Running and It's a Problem"
description: "An abandoned movie streaming app left hundreds of thousands of Macs with a backdoor wide open. Time to check your login items."
pubDate: 2026-10-29T18:49:21.692Z
draft: true
author: "Inside Cupertino"
tags:
  - security
  - popcorn-time
  - malware
  - macos
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/10/29/old-popcorn-time-app-macs-at-risk/"
---

If you downloaded Popcorn Time years ago to stream movies you definitely owned legitimate copies of, there's a non-zero chance your Mac has been sitting with a security hole open ever since. [MacRumors](https://www.macrumors.com/2026/10/29/old-popcorn-time-app-macs-at-risk/) reported on research from Eye Security showing Time4Popcorn—one of the many unofficial versions of the streaming app—left behind an update checker that ran at startup and trusted whatever it downloaded without verification.

The real kicker is that Time4Popcorn's developers abandoned the project years ago, letting their domains expire. Anyone who registered those expired domains could've pushed malware to hundreds of thousands of Macs that were still dutifully checking for updates. Eye Security says they found no evidence anyone exploited this, but that's cold comfort when you realize how trivial the attack vector was. This wasn't some sophisticated zero-day—it was a helper app with root privileges phoning home to domains nobody owned anymore.

Apple's done a lot of work on Gatekeeper and notarization in recent years, but legacy software is the blind spot. macOS has no mechanism to automatically clean up abandoned background processes from apps you installed five years ago. The system assumes you knew what you were doing when you typed in your password, and that the developers would stay responsible forever. That assumption breaks down when sketchy streaming apps implode and their infrastructure rots.

This should serve as a reminder to audit your Login Items occasionally. Open System Settings, go to General > Login Items, and see what's lurking in the background. If you see anything from Time4Popcorn or similar defunct projects, kill it. Better yet, use something like KnockKnock to scan for persistent software you don't recognize. The odds that someone exploited this specific vulnerability are low, but the odds that you've got other abandonware running with elevated permissions are higher than you'd like.
