---
title: "Update Your Mac Today: macOS 27.2.1 Finally Closes the eMudhra Hole in curl and git"
description: "macOS 27.2.1, 26.7.3, and 15.8.3 stop Terminal tools like curl and git from trusting eMudhra's compromised certificates, three weeks after Safari got protected."
pubDate: 2026-11-09T22:05:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - apple
  - macos
  - security
  - software-update
  - developers
source:
  name: "Apple Support"
  url: "https://support.apple.com/en-us/149555"
heroImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Close-up of a black terminal window showing a green command prompt with the word sudo typed after it"
---

Apple shipped a round of point releases today: iOS 27.2.1, watchOS 27.2.1, visionOS 27.2.1, and macOS Golden Gate 27.2.1. Most of the release notes say "bug fixes and security updates" and little else. The Mac update is the one with a specific reason to install it now.

macOS 27.2.1 is the release where the command-line tools on your Mac finally stop trusting eMudhra's compromised certificates. If you use Terminal for anything, especially `git` or `curl`, this is the update to install today.

## What went wrong

The private keys for eight intermediate certificate authorities run by eMudhra were compromised. Apple's [support document](https://support.apple.com/en-us/149555) says six of those issue TLS certificates, which means anyone holding the keys could create certificates that look valid for any website. According to [MacRumors](https://www.macrumors.com/2026/11/09/macos-27-2-1-emudhra-fix/), an investigation launched by Mozilla found some of the keys used private key values below 256, making them trivial to recover. eMudhra and Sectigo have since revoked the affected certificates.

Apple blocked the bad certificates in October for Safari, Mail, and apps built on its own networking and security frameworks. That update arrived automatically, so most people were already covered.

The gap was everything else. The tools Apple ships with macOS and the Xcode Command Line Tools, including `curl`, `git`, `python3`, `ruby`, `perl`, and `openssl`, check certificates against a file at `/etc/ssl/cert.pem`. Apple says those tools don't consult its block list or check whether a certificate has been revoked. So until today, they kept trusting the compromised chains.

The independent researchers behind the [eMudhra incident site](https://emudhra.we-have-a-problem.com/apple.html) spelled out what that means for developers: an attacker in the middle of your connection could feed you altered code on a `git clone` or pull, tamper with pushes, or capture credentials like GitHub tokens. They also noted that macOS 27.2, released October 26, didn't fix the problem and undid the manual workaround people had applied, as [heise](https://www.heise.de/en/news/macOS-27-3-fixes-final-eMudhra-flaw-but-it-will-take-time-11515711.html) also reported.

## What 27.2.1 changes

Per Apple, starting in macOS 27.2.1 the built-in command-line tools block the 12 affected certificates. The update also removes the two root certificates those chain to from `/etc/ssl/cert.pem`, along with three other eMudhra roots.

Older Macs get the same protection. Apple released macOS 26.7.3 and macOS 15.8.3 alongside it. The fix was already in the macOS 27.3 beta, but putting it in a point release means nobody has to wait for 27.3, which is expected in December.

To install it, open System Settings, go to General, then Software Update.

If you can't update, Apple still has instructions for removing the affected root certificates from `/etc/ssl/cert.pem` by hand. Apple warns that this affects every tool using that file and needs an administrator account. It also says not to restore a backup of the file made before the update.

## Our take

Apple handled the part most people touch, Safari and Mail, quickly and quietly. The Terminal side took about three weeks and one update that made things worse before it got better. That's a long time for the tools developers use to pull code and push credentials to sit exposed, especially when heise pointed out that Apple already has a mechanism for shipping fast security responses on macOS.

The good news is that it's done, and it's done for three generations of macOS at once. If you write code on a Mac, update today. If you followed the manual workaround before 27.2, don't assume it stuck; the update is the cleaner fix.

*Sources: [Apple Support](https://support.apple.com/en-us/149555) (Nov. 9), [MacRumors](https://www.macrumors.com/2026/11/09/macos-27-2-1-emudhra-fix/) (Nov. 9), [heise online](https://www.heise.de/en/news/macOS-27-3-fixes-final-eMudhra-flaw-but-it-will-take-time-11515711.html), and the [eMudhra incident site](https://emudhra.we-have-a-problem.com/apple.html).*
