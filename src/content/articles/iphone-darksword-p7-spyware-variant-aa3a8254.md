---
title: "A Sneakier DarkSword Is Stealing Keychains and Crypto Wallets From Unpatched iPhones"
description: "iVerify found P7 DarkSword, a reworked iPhone spyware implant that pulls Keychain and wallet data on the device. The fix is an iOS update you probably already have."
pubDate: 2026-10-10T15:05:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - iphone
  - security
  - spyware
  - ios
  - darksword
source:
  name: "iVerify"
  url: "https://www.iverify.com/blog/darksword-variant-threat-research"
heroImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A laptop in a dark room with columns of green code glowing on its screen"
---

The iPhone hacking kit that leaked earlier this year hasn't gone away. It's being improved. Mobile security firm iVerify [published a report](https://www.iverify.com/blog/darksword-variant-threat-research) on Thursday describing P7 DarkSword, a previously unseen version of the spyware that gets planted on iPhones compromised by the DarkSword exploit chain.

iVerify found it in August while investigating an infection on a customer's phone, which it told [9to5Mac](https://9to5mac.com/2026/10/08/researchers-uncover-new-darksword-spyware-variant-affecting-unpatched-iphones/) belonged to an employee of a financial institution. The name comes from the `p7_` prefix the attackers used on the code they added.

The short version for most readers: DarkSword only works on iPhones running iOS 18.4 through iOS 18.7 that never got Apple's fixes. If your phone is on a current release, this isn't about you. If you know someone still sitting on an old iOS 18 build, it very much is.

## What changed

iVerify sums up the new variant in one line: compared with what it usually sees, P7 "reduces its on-device footprint, adds on-device keychain and crypto-wallet theft, and adds two way C2 communication with the attacker's infrastructure." C2 means command and control, the servers the attackers use to talk to infected phones.

That breaks down into three upgrades.

- **It's quieter.** P7 drops the debug logging earlier versions sent out over the network and to the system log, and injects itself into fewer processes. It also uses the browser's local storage to avoid exploiting the same phone twice. iVerify told 9to5Mac that P7 is much better at cleaning up after itself, so older detection markers no longer catch it.
- **It steals smarter.** Earlier DarkSword builds copied the whole Keychain database off the phone and sorted through it later. P7 pulls the Keychain entries out on the iPhone itself, packs them into a file and sends that. It can also scan for installed crypto wallet apps and has a dedicated routine for the imToken wallet.
- **It takes orders.** The implant lives inside SpringBoard, the process that runs the iPhone's home screen, and checks in with the attackers every 15 seconds by default. From there it can be told to grab specific files, upload photos, list installed apps, copy Apple Notes databases, pull data out of individual apps, or scan the whole filesystem, according to the report and [The Hacker News](https://thehackernews.com/2026/10/p7-darksword-ios-exploit-kit-adds.html).

iVerify also made a point of saying this wasn't a sloppy AI rewrite. It has seen plenty of broken, likely AI-assisted attempts to patch DarkSword, but says the P7 authors clearly understood the code they were changing.

## How people get hit

There's no new iOS bug here. P7 is what gets installed after an older, already-patched DarkSword exploit succeeds, and iVerify says it's being spread through malicious ads and watering-hole attacks, where compromised or booby-trapped web pages wait for vulnerable visitors. That means victims don't have to be singled out. Landing on the wrong page with an unpatched phone is enough.

That's a real shift from where DarkSword started. When Google, iVerify and Lookout first detailed it in March, it was tied to commercial surveillance vendors and suspected state-backed groups going after targets in Saudi Arabia, Turkey, Malaysia and Ukraine. After the kit leaked, it spread to financially motivated crews. Separate research from Censys and Report URI, covered by The Hacker News, describes Chinese-speaking operators running it as a service and a hijacked analytics domain on online stores that steered some iPhone visitors to a fake crypto trading site serving the exploit chain.

## What to do

Update. DarkSword's exploits are all patched, and Apple shipped fixes for older devices too, including iOS 18.7.7. Apple even offered iOS 18.7.7 to iPhones that could run iOS 26, so people who chose to stay on iOS 18 could still get protected. If your phone is on the latest version it supports, DarkSword's chain doesn't work on it.

The bigger worry is the trend. iVerify says it has seen failed attempts to make DarkSword work on iOS 26, and Censys found a server where one operator appeared to be building new exploit chains for iOS 26. None of that is a working attack on current iPhones today. But it's a reminder that a leaked exploit kit keeps getting cheaper, easier and more widespread, and the iPhones that put it off longest become the easiest targets. If you look after a parent's or a kid's hand-me-down iPhone, this weekend is a good time to check Settings, then General, then Software Update.
