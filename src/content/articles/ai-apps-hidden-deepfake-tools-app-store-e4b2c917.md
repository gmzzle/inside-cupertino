---
title: "Hundreds of 'Harmless' AI Apps Hid Deepfake Porn Tools. Apple's App Review Didn't Catch Them."
description: "A WIRED investigation found 400-plus AI apps and sites that hid sexual and violent deepfake tools behind a server switch. Apple pulled 19 and says the apps changed after review."
pubDate: 2026-11-02T16:10:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - app-store
  - app-review
  - ai
  - privacy
  - security
source:
  name: "WIRED"
  url: "https://www.wired.com/story/hundreds-of-mundane-ai-apps-are-hiding-abusive-deepfake-features/"
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Close-up of an iPhone home screen showing a grid of app icons on a light wooden table"
---

An app that dresses up your pet photos. An AI workout coach. A language tutor. According to a [WIRED investigation](https://www.wired.com/story/hundreds-of-mundane-ai-apps-are-hiding-abusive-deepfake-features/) published Monday, apps like these were the front end of a network of more than 400 connected apps and websites that could quietly switch into a tool for making sexual and violent deepfakes from photos users uploaded.

Some of those apps were on Apple's App Store. They passed App Review. And according to WIRED, they let people pay for the abusive features through Apple's and Google's own payment systems.

## How the switch worked

The trick wasn't hidden in the app binary Apple looked at. It lived on a server.

Paul Bouchaud, lead researcher at the nonprofit AI Forensics, reverse engineered the apps and told WIRED that each time one is downloaded, it calls home with details such as where the user came from, their language and a unique identifier. The server then decides whether to show the harmless app or load a hidden web interface with dozens of explicit image and video templates, paid for with in-app credits.

One trigger appears to be installing the app after tapping one of the network's ads on Facebook or Instagram. WIRED reports that researchers found the network by following links from thousands of explicit deepfake video ads on Meta's platforms, and that the operation appears to have been publishing apps for around a year, at times dozens per week. WIRED linked the apps and domains to Chinese-language developers and a Hong Kong-registered entity called KeLing Technology Limited, which did not respond to its requests for comment.

## What Apple, Google and Meta say

Apple removed 19 apps after WIRED shared details. In a statement quoted by [9to5Mac](https://9to5mac.com/2026/11/02/ai-apps-with-hidden-sexual-and-violent-deepfake-features-made-it-into-the-app-store/), Apple said: "We review every app before it's published, and these apps complied with our rules when we reviewed them. After approval, their developers changed the website the app pulls its content from, replacing what we approved with pornographic content, and promoted it through pornographic ads hosted on a third-party platform."

Google had already removed most of the apps before WIRED contacted it, according to reports on the investigation. AI Forensics found 27 of the apps live on Google Play in September with more than 350,000 combined downloads. Meta says it has acted against more than 10,000 ad accounts linked to the network's domains.

## The rule Apple just wrote for exactly this

The timing is awkward for Cupertino. Just over two weeks ago, Apple updated its App Review Guidelines with a new rule against hidden, dormant or obfuscated features, the kind that switch on after review, and warned that developers caught doing it risk losing their developer accounts. The same update called out AI content apps and nonconsensual imagery by name.

Apple's statement is, in effect, an admission of the limits of that approach. App Review can only judge what an app shows reviewers. If an app's real behavior is decided by a server the developer controls, the review is a snapshot of a costume, not the app. Rules that punish developers after the fact matter, but here it took outside researchers and a reporter to surface what the store's own process missed.

## Our take

Apple sells the App Store as the safer option. That is its main argument against sideloading and alternative app stores, in court and in front of regulators. Cases like this one cut against that pitch, because the harm here isn't malware stealing your data. It's tools used to humiliate and threaten real people, sold through Apple's own checkout.

What would actually help is ongoing checks after approval: watching for apps whose remote content changes dramatically, scrutinizing AI image apps that load web interfaces, and treating ad-driven install spikes as a signal worth a second look. Apple says it has recently strengthened protections against this tactic. The test is whether the next network gets caught by Apple first, not by WIRED.

For parents, the practical advice is blunt: an all-ages rating and an ordinary-looking store listing don't guarantee much, and apps installed straight from a social media ad deserve extra suspicion.

*Sources: [WIRED](https://www.wired.com/story/hundreds-of-mundane-ai-apps-are-hiding-abusive-deepfake-features/) (Nov. 2), [9to5Mac](https://9to5mac.com/2026/11/02/ai-apps-with-hidden-sexual-and-violent-deepfake-features-made-it-into-the-app-store/) (Nov. 2), [AndroidPure](https://www.androidpure.com/nudify-apps-google-play-app-store/).*
