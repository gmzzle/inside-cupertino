---
title: "iOS 27 Quietly Cut Off The Trade Desk in Safari. Apple Can Now Do That Anytime."
description: "Safari in iOS 27 blocks several big ad-tech and identity companies, and Apple has reportedly moved to a remote blocklist it can update without an iOS release."
pubDate: 2026-10-07T22:05:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - safari
  - ios-27
  - privacy
  - webkit
  - advertising
source:
  name: "AdExchanger"
  url: "https://www.adexchanger.com/privacy/apple-has-far-reaching-plans-to-block-hundreds-of-programmatic-data-companies-from-ios/"
heroImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A red padlock resting on a laptop keyboard lit with green light"
---

Apple never announced it, but iOS 27 shipped with one of its most aggressive anti-tracking moves yet. Safari on updated iPhones and iPads now refuses to talk to web addresses run by several major ad-tech and identity companies, and one of them, **The Trade Desk**, can't serve ads in Safari at all. A fix for that one is in the iOS 27.2 beta. The bigger story is what comes next: Apple has reportedly switched to a blocklist it can change whenever it wants.

## What got blocked

[AdExchanger first reported](https://www.adexchanger.com/platforms/apples-latest-operating-system-blocks-the-trade-desk-from-serving-ads-on-safari/) on September 29 that iOS 27 added a set of domains to a list WebKit, the engine behind Safari, blocks unconditionally. The companies named include:

- **The Trade Desk**, including its Unified ID 2.0 identity program
- **LiveRamp**
- **ID5**
- **Permutive**
- **Audigent**

Most of these are identity companies. Their business is recognizing the same person across different websites now that third-party cookies are fading, which is exactly the kind of cross-site tracking Safari has been squeezing for years.

The Trade Desk is the odd one out. Alongside its identity domain, Apple blocked `adsrvr.org`, which the company uses to request and deliver ads, not only to identify people. In a WebKit bug report, Trade Desk engineer Ian Meyers wrote that Apple's "intent seems to be to hard block domains that power 'post-cookie' identity," but that the blocked address was its core ad delivery domain. He included an example from a Yahoo browsing session where The Trade Desk's bids were blocked while Google's went through.

Because every browser on iPhone has to use WebKit, the block also applies in Chrome, Firefox and the rest on iOS, not just Safari.

## The list can now change on the fly

On October 2, AdExchanger [followed up](https://www.adexchanger.com/privacy/apple-has-far-reaching-plans-to-block-hundreds-of-programmatic-data-companies-from-ios/) with a bigger claim. Two sources told the outlet that Apple's short original list has been replaced by a library of **hundreds** of ad-tech, marketing-tech, data-broker and identity companies that can be blocked dynamically. Devices check a remote list regularly, so Apple no longer needs a full iOS update to block or unblock a company.

The public side of that change is visible in WebKit's code. A [WebKit pull request](https://github.com/WebKit/WebKit/pull/74381) replaces a fixed list of domains with a content-blocking list supplied by Apple's WebPrivacy service, which Safari caches and reloads when an update is posted. The list itself isn't public. AdExchanger said it couldn't yet confirm whether any Google domains are on it.

## A fix for The Trade Desk, but not for weeks

On October 5, Apple WebKit engineer John Wilander asked The Trade Desk to try a new iOS 27.2 beta, and Meyers replied that he could see changes in that build, according to the public bug thread [summarized by PPC Land](https://ppc.land/trade-desk-to-test-ios-27-2-beta-as-safari-ad-domain-ticket-stays-open/). Reports since then say the beta appears to separate The Trade Desk's ad-serving domain from its blocked identity domain.

That only helps beta testers for now. As [AppleInsider noted Wednesday](https://appleinsider.com/articles/26/10/07/apples-escalating-crackdown-on-ad-vendors-is-catching-some-innocent-victims), The Trade Desk stays blocked for everyone on the public release until iOS 27.2 ships, which ad-tech executives quoted in the trade press expect in the back half of the fourth quarter. That's right in the middle of holiday ad season. The other identity companies aren't part of that fix.

## What it means if you use an iPhone

You don't have to do anything. If you're on iOS 27, Safari is already refusing these requests in the background. You'll still see ads on the web, just not ones delivered through the blocked companies, and fewer outside firms are stitching your browsing into a profile that follows you from site to site.

The uncomfortable part is who decides. Apple hasn't said anything publicly about the list, and companies may not even know they've been added. That's great for privacy when it hits data brokers. It's a harder look when Apple is also growing its own ad business, and when a big independent ad buyer gets cut off while Google's bids keep flowing. One mistaken entry has already kept a major ad company out of Safari for weeks. With a list Apple can update any day, expect regulators and the ad industry to start asking who's on it, and why.
