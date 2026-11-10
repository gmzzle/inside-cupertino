---
title: "HomeView Ships Friday. Its Code Says a Security Camera Mode and AI Chatbot Apps Are Coming."
description: "Code in HomeView Software 27.2 and the iOS 27.3 beta points to a HomeKit Secure Video camera mode and ChatGPT-style apps. Apple hasn't announced either one."
pubDate: 2026-11-10T15:20:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - apple
  - homeview
  - smart-home
  - homekit
  - leaks
source:
  name: "9to5Mac"
  url: "https://9to5mac.com/2026/11/10/apples-new-homeview-to-add-two-major-features-not-yet-announced-per-leaks/"
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A hand holding an iPhone showing a smart lock app next to a silver smart lock mounted on a white door"
---

Apple's HomeView smart home hub goes on sale this Friday, November 13, at $299, alongside the new Apple TV 4K. Before a single unit has reached a customer, code inside its software already points to two features Apple hasn't said a word about: a mode that turns the HomeView into a HomeKit security camera, and support for AI chatbot apps like ChatGPT and Claude.

Both findings come from the code investigator known as pdfu, and [9to5Mac](https://9to5mac.com/2026/11/10/apples-new-homeview-to-add-two-major-features-not-yet-announced-per-leaks/) pulled them together this morning. Neither is switched on, and neither is confirmed. But together they say a lot about where Apple wants this product to go.

## A camera mode that's mostly built

HomeView has a front camera for face recognition, so each enrolled family member gets their own Home Screen. According to pdfu, HomeView Software 27.2, the version the device ships with, already contains setup and settings text describing the HomeView as a security camera with HomeKit Secure Video.

[AppleInsider](https://appleinsider.com/articles/26/11/01/homeview-can-behave-like-a-homekit-security-camera) and [Cult of Mac](https://www.cultofmac.com/news/homeview-security-camera-mode) walked through what the strings describe. There are four settings: off, detect activity only, stream without recording, and stream with recording. Each can change depending on whether people are home, away, or asleep, the same way existing HomeKit cameras work. pdfu also found a configuration that declares 1080p video at 30 frames per second for these sessions.

The privacy rules are spelled out in the text too. A green light shows whenever someone opens a live stream or a recording starts. Only home members can view streams and recordings, and every home member is notified when the camera settings change. One string notes that the HomeView may take photos to refresh the camera preview when someone opens the Home app, again with the green light on.

None of this is wired to a visible setting yet. AppleInsider's read is that Apple will likely focus on fixing launch bugs first, so a 27.3 release is plausible but a switch-on in the next few weeks is unlikely.

## Chatbots through the CarPlay bridge

HomeView has no App Store. Instead, it runs CarPlay-compatible apps from your iPhone, and at launch that means audio and video apps only.

[MacRumors](https://www.macrumors.com/2026/11/05/homeview-code-suggests-support-ai-chatbot-apps/) reported last week that the iOS 27.3 beta adds a "Conversational Apps" category to that bridge. That's the category CarPlay already uses for voice chatbots like ChatGPT and Claude. The same beta adds groundwork for two-way audio and session handling, though pdfu says it is "still not fully wired up," and nothing in the code names which apps would qualify or when.

## Our take

A camera mode makes sense on paper. HomeView already has the camera, already sits in the kitchen or the hallway, and Apple already has a privacy story for HomeKit Secure Video. It would also make the $299 price easier to justify against buying a separate indoor camera. The catch is that a camera pointed at your living room is a different ask from a camera that recognizes your face to show your calendar, and Apple's careful wording around green lights and notifications suggests it knows that.

The chatbot piece is the more interesting signal. Apple is building its own Siri upgrades, yet it looks ready to let third-party assistants talk through its newest home device. That fits the pattern of Apple opening CarPlay to these apps rather than walling them off.

The practical advice is the same one 9to5Mac gave: don't buy a HomeView for features that might never ship. Buy it, or skip it, for what it does on Friday. If either of these turns up in 27.3, treat it as a bonus.

*Sources: [9to5Mac](https://9to5mac.com/2026/11/10/apples-new-homeview-to-add-two-major-features-not-yet-announced-per-leaks/) (Nov. 10), [MacRumors](https://www.macrumors.com/2026/11/05/homeview-code-suggests-support-ai-chatbot-apps/) (Nov. 5), [AppleInsider](https://appleinsider.com/articles/26/11/01/homeview-can-behave-like-a-homekit-security-camera) (Nov. 1), [Cult of Mac](https://www.cultofmac.com/news/homeview-security-camera-mode), and [pdfu](https://pdfu.dev/).*
