---
title: "The EU Is Talking to Apple About Rival Browsers. The Real Lock Is a Second App."
description: "The European Commission is in dialogue with Apple over barriers to rival iPhone browsers. Alternative engines have been legal in the EU since 2024, but switching still requires a second app."
pubDate: 2026-11-24T16:30:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - dma
  - european-union
  - webkit
  - safari
  - browsers
  - firefox
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/11/24/eu-talks-with-apple-over-rival-iphone-browsers/"
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A silver MacBook on a white desk displays colorful lines of code, with a website open on a monitor behind it and a black smartphone beside a white coffee mug"
---

The European Commission is talking to Apple about a door that opened more than two years ago and, for people who already picked Firefox or Chrome on an iPhone, still leads nowhere.

[Hartley Charlton reports](https://www.macrumors.com/2026/11/24/eu-talks-with-apple-over-rival-iphone-browsers/) for MacRumors that a Commission spokesperson told POLITICO's Fair Play newsletter the Commission is "currently in dialogue with Apple" over rules that developers say stop them from shipping iPhone browsers with their own engines. MacRumors, citing that newsletter, also says the Commission is consulting the letter's signatories about how rival browsers can compete with Safari, and that it described browser competition as a Digital Markets Act priority. Dialogue is not a formal case. It is the first public sign that Brussels is engaging on the complaint that arrived Monday.

## What the letter actually asks for

On Monday, Mozilla, Shopify, and a coalition organized by [Open Web Advocacy](https://open-web-advocacy.org/blog/europe-rallies-for-a-free-and-competitive-web-on-ios/) published an [open letter](https://action.open-web-advocacy.org/) to Commission President Ursula von der Leyen. The campaign says the signatories represent an estimated 45,000 to 55,000 EU businesses and organizations. They want the Commission to open formal DMA enforcement proceedings and require Apple to remove the barriers that, they argue, still make rival engines unusable in practice. Named signatories include Vivaldi, Vercel, Y Combinator, the European DIGITAL SME Alliance, the European Publishers Council, News Media Europe, and European Digital Rights.

The letter's central claim is blunt: "More than two and a half years since the DMA took effect on 7 March 2024, not a single browser vendor has been able to upgrade its EU users from Apple's WebKit engine to the browser vendor's own engine."

That is not the same as saying alternative engines are banned. Apple began allowing them in the EU with iOS 17.4, the release that accompanied the March 2024 deadline. Firefox on an iPhone can look like Firefox. Under the hood, it still uses WebKit, the same engine as Safari. Mozilla wants to use Gecko, the engine that already powers Firefox on the Mac.

## The second app is the lock

[Mozilla spelled out](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) the practical problem on November 20. It said that "to use Gecko, we can't simply update the Firefox app people already use and love. We'd have to build a whole separate app, a second Firefox. Then we'd have to ask every Firefox user to download it, move their bookmarks, passwords and history across, and manually switch over, step by confusing step."

Open Web Advocacy's [supporting notes](https://action.open-web-advocacy.org/supporting-notes) make the same point: Apple requires vendors to put their own engines in new apps, rather than letting them upgrade the apps EU users already have. Mozilla says daily Firefox use on iOS has doubled since the EU started requiring a default-browser choice screen, and that those users are still on WebKit. In the same post, it said it has been "working behind the scenes to test and improve Apple's conditions" so it can bring Gecko to iOS, and that "Those efforts have so far largely failed." It also wrote that "not one developer has been able to launch a non-WebKit browser on iOS."

A prototype is not a launch. We [covered](https://insidecupertino.com/articles/apples-webkit-rules-reportedly-cost-ios-users-almost-30-browser-performance-28a3393ed7/) a Microsoft Edge experiment in June that used Apple's BrowserEngineKit framework and beat Safari on some benchmarks. That was a research build on one device, not a shipping browser that moved existing Chrome or Edge users off WebKit.

The coalition also argues that the same restrictions hold back web apps as a competitor to App Store apps, because the features of the mobile web on iOS still run through WebKit.

## Apple's security case

Apple's position deserves a fair hearing. Browser engines sit in front of untrusted websites and can see sensitive data, which is why they are a frequent target. On its [developer page](https://developer.apple.com/support/alternative-browser-engines/) for alternative engines in the EU, Apple writes that engines "are constantly exposed to untrusted and potentially malicious content and have visibility of sensitive user data," and that they are "one of the most common attack vectors for bad actors." It says it will authorize alternative engines only after developers meet specific criteria and "commit to a number of ongoing privacy and security requirements, including timely security updates to address emerging threats and vulnerabilities."

Those requirements are not window dressing. Developers have to meet web-platform test thresholds, publish a vulnerability-disclosure policy, and commit to fixing exploited bugs quickly. Apple's example is 30 days for the simplest classes of vulnerabilities being actively exploited. The entitlement is also limited to EU users, and the app has to qualify as a default browser. A weaker, unpatched engine would be a real problem on a phone, and Apple is right to treat that risk seriously.

## Analysis: compliance on paper, lock-in in the store

The distinction that matters is which of those rules are about safety, and which are about making the switch too painful to attempt.

Requiring prompt security fixes, a disclosure policy, and a baseline of web compatibility is the kind of condition a regulator can live with, and should. Forcing a company to ship a second app, then asking every existing user to find it and move bookmarks, passwords, and history by hand, is a different kind of barrier. It is not obvious what security goal that friction serves. People who already chose Firefox from the EU choice screen would have to choose it again, and Mozilla's point is that a lot of them would not.

That is why the letter reads as a complaint that Apple complied on paper and left the market unchanged, not as a request for a new law. The signatories say the DMA already requires Apple to allow competing engines and to provide the access needed to use them, and that they want the Commission to enforce the text it already has. Formal proceedings are the tool that can turn a dialogue into a binding decision: the Commission can specify what compliance must look like, and, if it finds a breach, it can order changes and impose fines. The remedy the coalition wants most clearly is the right to move existing EU users to a vendor's own engine through an update to the app they already have, not a fork in the App Store. Whether Brussels would go that far is an open question. "Currently in dialogue" is several steps short of that.

## What to expect if you have an iPhone

If you live in the EU, nothing about the browser on your iPhone changes this week. The choice screen is already there. Picking Firefox or Chrome still gets you a WebKit browser with a different coat of paint. Formal proceedings, if the Commission opens them, typically take months, not days. A Gecko-powered Firefox, or a Blink-powered Chrome, is not arriving in an ordinary update tomorrow.

If you live outside the EU, expect even less. Apple's alternative-engine entitlements are written for EU users, and the company has so far kept that door regional. Mozilla notes that Japan has since required alternative engines too, and that Apple applied "very similar conditions" there. A fight in Brussels will not change the engine inside Safari, Chrome, or Firefox on an iPhone in the United States or Canada any time soon.

The useful test is the same one Mozilla set: not whether Apple published a path, but whether anyone can actually walk existing users down it.

*Sources: [MacRumors](https://www.macrumors.com/2026/11/24/eu-talks-with-apple-over-rival-iphone-browsers/) (Nov. 24), [MacRumors](https://www.macrumors.com/2026/11/23/coalition-of-eu-businesses-challenges-apple/) (Nov. 23), the [Open Web Advocacy letter](https://action.open-web-advocacy.org/) and [supporting notes](https://action.open-web-advocacy.org/supporting-notes) (Nov. 23), [Mozilla](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) (Nov. 20), and [Apple Developer](https://developer.apple.com/support/alternative-browser-engines/) on alternative browser engines in the EU. This is commentary, not legal advice.*
