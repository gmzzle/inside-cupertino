---
title: "Siri AI Is Now Open to Every App. Here's What Changes for Users and Developers."
description: "Apple's iOS 27.3 betas add a Siri AI Developer Preview that lets any app plug into Siri via App Intents, plus multi-step 'skills.' App Store submissions open in the spring."
pubDate: 2026-11-03T23:10:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - siri-ai
  - apple-intelligence
  - app-intents
  - developers
  - ios-27
source:
  name: "Apple Developer"
  url: "https://developer.apple.com/news/?id=gdk2umrf"
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Open silver laptop showing lines of code in a dark editor on a white desk, next to a potted plant and a yellow mug"
---

Until today, Siri AI mostly worked well with Apple's own apps and a short list of third-party ones. That changes with the iOS 27.3 betas. Apple [announced on its developer site](https://developer.apple.com/news/?id=gdk2umrf) on Tuesday that Siri AI is "now open to all developers," through a new Developer Preview in iOS 27.3, iPadOS 27.3, macOS 27.3 and visionOS 27.3.

For iPhone owners, the short version is this: the apps you already use are about to get a lot easier to drive with your voice. For developers, it's the first real chance to make an app show up when people just ask Siri for something.

## What Apple is opening up

The preview lets any app bring its content and actions into Siri AI using App Intents, the same framework developers already use for Shortcuts and older Siri integrations. Once an app does that, Apple says it can use Siri AI's newer abilities, including personal context understanding, onscreen awareness and natural language. In Apple's words, people "can just ask for help in their own words," and Siri AI carries out the custom action a developer has built, "from checking a delivery to booking a reservation to placing an order."

Three other changes stand out:

- **Skills.** For more complicated requests, developers can build skills that teach Siri AI how to combine several actions into a single experience. [The Verge](https://www.theverge.com/tech/1025694/apple-siri-ai-third-party-apps) describes them as a way to combine several tasks into one action.
- **Spotlight entities.** Siri AI can now surface any entity in the Spotlight semantic index, Apple says, "not just the ones that fit an existing schema." In practice, that means an app's own types of content, not only the standard categories Apple defined in advance, can be found by Siri.
- **No need to name the app.** According to Apple's developer documentation, as reported by The Verge, users won't have to say the app's name while it's in the foreground, during a Live Activity, or while they're already talking to Siri AI about that app. Apple's example is a ride-share trip: you request a ride, watch the Live Activity, then say "Hey Siri, change my ride pickup to a new address."

That last one is the change most people will actually notice. Having to remember the exact app name, and say it the right way, is a big part of why voice assistants feel clumsy.

## Apple's own apps go first

Apple says it has started rolling out the new capabilities across Calendar, Files, Finder, Journal, Mail, Maps, Messages, Music, Notes, Photos, Preview, Reminders, Safari, Shortcuts and Weather. Its examples are finding "a coffee shop they visited last week" or archiving "files that haven't been opened in over a year." If you're on the beta and want to know what works where, Apple's advice is simply to ask Siri AI what it can do in each app.

Those built-in actions also double as reference examples for developers building their own.

## When you'll see it in third-party apps

Not right away. This is a developer beta, and Apple says the preview "provides early access before first shipping to customers in a few months," with App Store submission "opening up in the spring." So the realistic expectation is that third-party Siri AI features start showing up in App Store apps sometime next spring, not with the next public iOS update.

Apple also said it will "follow up with more details about the terms and usage policies" for experiences built on Siri AI. That's worth watching. Developers don't yet know the rules for what they can build or how Apple will police it.

Apple engineers will be taking questions in Apple Intelligence Group Labs on November 4 and 5.

## The fine print

The usual caveats still apply. Siri AI requires an Apple Intelligence-enabled device set to a supported language, which currently means English, French, Japanese, Korean, Portuguese or Spanish, with Traditional Chinese, Norwegian, Turkish and Vietnamese coming soon. It remains unavailable in the EU on iOS, iPadOS and watchOS while Apple works with regulators, and it isn't available for users under 13.

Features that rely on Apple's server-side models, Siri AI included, are also subject to daily usage limits, with paid expanded access coming later. We covered that [earlier today](https://insidecupertino.com/articles/siri-ai-usage-limits-paid-access-bca4b56f/). It matters here too: if a lot more apps can hand work to Siri AI, more people may hit those limits.

## Our take

This is the piece Siri has been missing for a decade. A smarter assistant is only useful if it can actually do things in the apps people rely on, and Apple can't build every one of those integrations itself. Opening App Intents to Siri AI, and letting it find app content without a fixed schema, is the right foundation.

The hard part is what happens next. Developers have to decide that building for Siri AI is worth the effort before Apple has published its terms, and users have to trust Siri enough to stop opening the app and tapping through it themselves. The ride-share example works because it's simple. The real test is whether ordering food, moving money or changing a booking by voice works reliably once this ships in the spring.

*Sources: [Apple Developer News](https://developer.apple.com/news/?id=gdk2umrf) and [The Verge](https://www.theverge.com/tech/1025694/apple-siri-ai-third-party-apps) (Nov. 3, 2026).*
