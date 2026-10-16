---
title: "Someone Just Jailbroke an iPhone 18 Pro on Stage. It Survived a Reboot."
description: "Security firm Calif showed an untethered iOS 27.0.1 jailbreak at Hexacon in Paris today. No tool, no bug details, no Apple comment yet. Here's what we know."
pubDate: 2026-10-16T22:40:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - iphone
  - iphone-18-pro
  - ios-27
  - security
  - jailbreak
source:
  name: "Decrypt"
  url: "https://decrypt.co/381177/hackers-jailbreak-iphone-18-pro-survives-reboot"
heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Rows of glowing green binary code on a dark screen"
---

An iPhone 18 Pro running Apple's latest public software got restarted on a stage in Paris today. When it came back up, someone else had root.

Security firm Calif demonstrated an **untethered jailbreak of iOS 27.0.1** on the iPhone 18 Pro at Hexacon 2026, the offensive security conference organized by Synacktiv, according to [Decrypt](https://decrypt.co/381177/hackers-jailbreak-iphone-18-pro-survives-reboot), [heise](https://www.heise.de/en/news/Works-on-iPhone-18-Pro-AI-helps-create-untethered-jailbreak-for-iOS-27-0-1-11490907.html) and [Cyber Security News](https://cybersecuritynews.com/ios-27-0-1-jailbreak-demonstrated/).

"Untethered" is the part that matters. The jailbreak puts itself back after a full restart, with no computer plugged in. It's the hardest kind to build on a modern iPhone, and heise calls this one the first reboot-proof jailbreak since iOS 9.

## What Calif showed

Video from the stage, posted by jailbreak researcher Billy Ellis, shows the sequence. The team restarted the phone, it booted through the Apple logo to the lock screen, and they unlocked it with the normal passcode. The jailbreak came back on its own. Then they opened an SSH session as root, the highest level of access on the device.

[Cyber Security News](https://cybersecuritynews.com/ios-27-0-1-jailbreak-demonstrated/) went through the terminal output:

- SSH ran on **port 2222**, and the `id` command returned **uid=0**, which is root.
- The device identified itself as **iPhone19,2** on the **T8160** chip, running Darwin Kernel 27.0.0.
- `sw_vers` showed **iOS 27.0.1, build 24A446**, the current public release.
- `neofetch` listed **67 packages** installed through dpkg and an uptime of about **two minutes**. So this was a fresh boot, not a phone that had been left jailbroken since the morning.

Calif's own [post](https://blog.calif.io/p/iphone) is short: "Today, we hacked what we'd set out to hack: the iPhone." It lists four demos from the talk: "Signal 1-click," an iMessage demo ("who cares about a third-party app when everyone uses iMessage, right?"), "Can your iPhone do this?" and "APT stands for Apple Persistent Threat." Then: "Everything will be released in due time."

## What Calif didn't show

Almost everything else. Calif hasn't said which vulnerabilities it chained together, hasn't released a tool, and hasn't said when it will publish details. It also hasn't said whether it told Apple first.

Apple hasn't commented. Per Decrypt, the company says it doesn't confirm security issues until patches are available.

The missing details matter because of how hard this is. As Decrypt and Cyber Security News both explain, getting root on a current iPhone usually takes a chain of bugs. One escapes the app sandbox, another takes over the kernel, and something has to get past hardware defenses like Pointer Authentication Codes. Staying in after a reboot is harder still, because Apple checks the code that runs at startup. Calif beat all of that on the newest phone, weeks after it shipped.

## The AI angle, again

This isn't the first time Calif has made news with AI-assisted exploits. heise reports that AI "once again" helped find the exploit chain. It also notes that Hexacon's organizers billed this year's conference as the "Mythos era."

The track record, from the reporting:

- **May:** Calif said Anthropic's Claude Mythos Preview helped it build a macOS kernel exploit against Apple's M5 chip protections in under a week, according to [Decrypt](https://decrypt.co/381177/hackers-jailbreak-iphone-18-pro-survives-reboot).
- **August:** The team used AI to turn an Apple fix into a working exploit for a serious screen-sharing vulnerability, [heise](https://www.heise.de/en/news/Works-on-iPhone-18-Pro-AI-helps-create-untethered-jailbreak-for-iOS-27-0-1-11490907.html) reports. Another exploit for the same bug showed up soon after, apparently not from Calif.
- **September:** Apple's iOS 27 security notes credit Calif.io "in collaboration with Claude and Anthropic Research" for two bugs that let an app crash the system. Decrypt notes nothing ties those bugs to today's jailbreak.

heise's worry is the August pattern. If AI can read Apple's patches and work backward to the bug, the time between a fix shipping and an exploit showing up keeps getting shorter. That's a problem for anyone who waits weeks to update.

## Should you worry?

Not today, if you're a regular iPhone owner. Nothing is public. Cyber Security News puts the near-term risk as low because the method hasn't been released.

But don't brush it off either. As Decrypt points out, a chain that gives root on a fully updated iPhone is the same kind of capability commercial spyware vendors sell to governments. And two of Calif's four demo titles name Signal and iMessage, the apps people trust most for private messages. Calif hasn't explained those demos yet.

What to do:

- **Install Apple's next iOS security update as soon as it lands.** Apple usually patches chains like this once it knows the details.
- **Ignore anything offering an "iOS 27 jailbreak" download.** There is no public tool. Anything claiming otherwise is at best fake.
- **If you're still on an older build, update now.** iOS 27.0.1 fixed [real problems on the 18 Pro](/articles/ios-27-0-1-face-id-restart-fix-c4e8a291/), and today's demo shows even it isn't the end of the story.

## What to watch

- **Calif's write-up.** How long iOS 27.0.1 stays exposed, Decrypt notes, depends largely on when Calif publishes.
- **Apple's next security notes.** A credit to Calif for kernel or boot-chain bugs would be the tell that Apple has the details.
- **Hexacon day two.** The conference runs through Saturday, October 17.
