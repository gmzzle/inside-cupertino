---
title: "Microsoft just proved Apple's browser lockdown costs you 30% in speed"
description: "Edge engineers benchmarked a Chromium prototype on iOS using Apple's new framework. It crushed Safari. No surprise to anyone but Apple."
pubDate: 2026-06-17T16:39:05.847Z
draft: true
author: "Inside Cupertino"
tags:
  - webkit
  - safari
  - browser-engines
  - performance
  - eu
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/06/17/webkit-rule-costs-ios-users-browser-performance/"
---

[MacRumors](https://www.macrumors.com/2026/06/17/webkit-rule-costs-ios-users-browser-performance/) reported Monday that Microsoft's Edge team ran Speedometer 3.1 on a Chromium-based prototype built with Apple's BrowserEngineKit framework. The score: 49.27 versus Safari's 38.3. That's a 28.6% gap on Apple's own performance test. The prototype also beat Safari on JetStream 3 by 13% and MotionMark by 2%. This is preliminary data from one engineer's device, not a controlled lab setup, but the direction is clear.

For years, Apple forced every browser on iOS to use WebKit under the hood. Chrome on iPhone? Just Safari wearing sunglasses. Firefox? Same deal. Apple claimed this was about security and battery life. What it actually did was lock out faster engines and prop up Safari's market position without having to compete on speed or features. The EU finally pushed back with the Digital Markets Act in March 2024, requiring Apple to allow alternative engines through BrowserEngineKit. Apple complied in the narrowest possible way, limiting the option to the EU and wrapping it in enough restrictions that most developers haven't bothered.

Now Microsoft has bothered, at least as a proof of concept, and the results are damning. Chromium's Blink engine is simply faster than WebKit, and iOS users have been eating the performance cost for a decade because Apple decided moat-building mattered more than giving people the best browser. The 30% Speedometer gap isn't a rounding error. That's the difference between a site feeling snappy and feeling like it's loading through honey.

Apple will likely argue that real-world performance depends on optimization and that a research prototype proves nothing about what a shipping product would deliver. Fine. But the gap exists, and the reason iOS users couldn't benefit from it until now wasn't technical. It was policy. Microsoft isn't even shipping this thing yet, and it's already faster than what Apple calls the best browser experience on iOS. That should embarrass Cupertino, but it probably won't.
