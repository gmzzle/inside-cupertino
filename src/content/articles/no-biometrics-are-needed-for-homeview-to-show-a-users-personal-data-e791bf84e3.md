---
title: "HomeView Shows Your Calendar Without Face ID—By Checking Your iPhone"
description: "Apple's smart display sidesteps biometrics by pinging nearby devices. Clever workaround or privacy theater?"
pubDate: 2026-10-13T19:46:07.149Z
draft: true
author: "Inside Cupertino"
tags:
  - homeview
  - privacy
  - smart-home
  - proximity
  - authentication
source:
  name: "AppleInsider"
  url: "https://appleinsider.com/articles/26/10/13/no-biometrics-are-needed-for-homeview-to-show-a-users-personal-data?utm_source=rss"
---

[AppleInsider](https://appleinsider.com/articles/26/10/13/no-biometrics-are-needed-for-homeview-to-show-a-users-personal-data?utm_source=rss) caught something interesting in the HomeView specs: the display shows personal calendars, messages, and other private data without asking for Face ID or a passcode. Instead, it checks if your iPhone or Apple Watch is nearby. If it detects your device in proximity, it assumes you're the one looking and surfaces your stuff.

This is a sideways solution to a thorny problem. Apple doesn't want to put Face ID in a kitchen display that six people share, and typing a passcode every time you glance at your calendar defeats the point of ambient computing. So they're treating device proximity as proof of presence. Your iPhone is already authenticated to you—HomeView just borrows that trust. It's the same logic behind Auto Unlock on Mac, which works fine until you leave your Apple Watch on the counter and walk away.

The upside is frictionless access when it works. You walk into the kitchen, your calendar appears. Your partner walks up, theirs replaces it. Guests see the shared photo album and nothing else. Apple says it supports up to six household members this way, which covers most families without turning setup into a nightmare.

The downside is that proximity isn't identity. If your iPhone is charging in the kitchen and you're upstairs, HomeView still thinks you're standing there. Anyone in the room sees your personal screens until your device drifts out of range or another person's device gets closer. That's not a disaster for calendar events, but it's worth understanding the tradeoff. Apple chose convenience over bulletproof authentication, betting that most people care more about not unlocking a hallway display than defending against a spouse who picks up the wrong shopping list.

It's a pragmatic call for a shared-space device, but calling it privacy-first requires some creative definitions of "first."
