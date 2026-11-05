---
title: "Canceling an App Store Subscription? Apps Can Now Make You a Counteroffer First"
description: "Apple's retention messages are live: apps can show a pitch, a discount, or a free period when you go to cancel. Here's what you'll see, the rules developers face, and how to use it."
pubDate: 2026-11-05T16:00:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - app-store
  - subscriptions
  - developers
  - services
source:
  name: "Apple Developer"
  url: "https://developer.apple.com/news/?id=fk9ps3gv"
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Close-up of an iPhone home screen showing a grid of app icons, angled on a light gray surface"
---

The next time you tap Cancel Subscription on your iPhone, there's a good chance an app will try to talk you out of it, and it may offer you money to stay.

On Wednesday Apple [announced on its developer news site](https://developer.apple.com/news/?id=fk9ps3gv) that retention messages are now available for auto-renewable subscriptions. In Apple's words, they "appear in the cancellation flow and can include text, images, or a special offer." [9to5Mac notes](https://9to5mac.com/2026/11/04/apple-now-lets-developers-offer-discounts-when-users-move-to-cancel-subscriptions/) the feature was announced at WWDC this year. It's a step beyond the Win-Back Offers Apple added in 2024, which only let developers chase people *after* they'd already left.

It's a small change for developers and a noticeable one for anyone who manages subscriptions on an iPhone, iPad or Mac.

## What you'll actually see

According to [Apple's App Store Connect documentation](https://developer.apple.com/help/app-store-connect/manage-subscriptions/configure-retention-messages/), when you start a cancellation you'll get one of three things from the developer:

- **Just text.** A header and a short pitch about what the subscription includes or what's coming.
- **Text and an image.** The same pitch with a picture.
- **Text and an offer.** If you qualify, a discount or a free period replaces the image.

Apple's [Retention Messaging API docs](https://developer.apple.com/documentation/retentionmessaging) add two more options for developers using the server version: a message that suggests switching to a different plan, and a promotional offer at the same or a different tier. Either way, the screen still has a **Cancel Subscription** button, along with **Keep Subscription** or a button to accept the offer. Apple says the messages show up on iOS and iPadOS 15.1 or later, macOS 14 or later, and visionOS.

## The rules Apple is imposing

Apple has clearly thought about how this could turn into a dark pattern, and its guidelines are stricter than you might expect:

- **No prices in the pitch.** The header and body text can't mention discounts, prices or "one month free." Ineligible subscribers see the same text, so App Review rejects messages that mention pricing. The offer itself appears in its own section.
- **No scare tactics.** Developers can state facts, such as that you'll lose access to downloads when the subscription ends. Apple says they can't make coercive claims, and its example is a VPN app warning that canceling will get you a virus. Unsupported superlatives and made-up statistics are "strongly discouraged," and so is shouting in all caps.
- **Limits.** Each app can have up to 10 retention messages, but only one per subscription at a time, and every message goes through App Review.
- **Eligibility controls.** Developers can require a minimum amount of time as a paid subscriber before you qualify for an offer, and can set a waiting period before you can get the same offer again.

## The part developers will care about

The bigger change is under the hood. With the Retention Messaging API, which Apple says is "available by request," the App Store can contact a developer's server in real time when an active subscriber opens a subscription details page that has a Cancel button. That happens before you even tap Cancel. The request includes the original transaction ID and your locale, so the developer can choose a message based on your plan and language. [AppleInsider points out](https://appleinsider.com/articles/26/11/05/subscription-apps-will-get-another-chance-to-talk-you-out-of-cancelling) that a retention API has existed in some form for more than a year, and that this real-time trigger on viewing the page seems to be the meaningful new piece.

For subscription businesses, that's valuable. The moment someone opens the cancel page is the best chance to keep them, and until now Apple owned that screen completely.

## Our take

Overall, this is a fair compromise. Apple keeps cancellation in its own system UI, so developers can't hide the button or make you call a phone number. Cancelling still takes a tap or two more than before, not a maze. The guideline banning fear-based copy is unusually specific, and it suggests Apple expects some developers to push the limits.

There's also an upside for subscribers that people will figure out quickly. If an app has set up a retention offer, opening the cancel screen may be the easiest way to get a lower price. With [The Verge's Jay Peters](https://www.theverge.com/tech/1027121/apple-apps-subscription-retention-messages-cancelation) predicting these will appear in many apps very soon, expect plenty of people to start "almost canceling" to see what they're offered.

**How to check:** On iPhone, go to Settings, tap your name, then Subscriptions, and pick one. You can still cancel from there. If the developer has set up an offer and you qualify, you'll now see it first.

*Sources: [Apple Developer News](https://developer.apple.com/news/?id=fk9ps3gv) (Nov. 4), [App Store Connect Help: Configure retention messages](https://developer.apple.com/help/app-store-connect/manage-subscriptions/configure-retention-messages/), [Retention Messaging API documentation](https://developer.apple.com/documentation/retentionmessaging), [9to5Mac](https://9to5mac.com/2026/11/04/apple-now-lets-developers-offer-discounts-when-users-move-to-cancel-subscriptions/), [AppleInsider](https://appleinsider.com/articles/26/11/05/subscription-apps-will-get-another-chance-to-talk-you-out-of-cancelling), [The Verge](https://www.theverge.com/tech/1027121/apple-apps-subscription-retention-messages-cancelation).*
