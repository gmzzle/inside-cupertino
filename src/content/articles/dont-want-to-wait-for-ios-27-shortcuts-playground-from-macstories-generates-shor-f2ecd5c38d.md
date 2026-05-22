---
title: "MacStories Just Built the iOS 27 Shortcuts Feature Apple Hasn't Released Yet"
description: "Federico Viticci turned Claude into a Shortcuts factory while Apple's still planning their natural-language version for next year."
pubDate: 2026-05-22T00:56:57.555Z
draft: true
author: "Inside Cupertino"
tags:
  - shortcuts
  - ai
  - macstories
  - ios
  - claude
source:
  name: "MacRumors"
  url: "https://www.macrumors.com/2026/05/21/macstories-shortcuts-playground/"
---

[MacRumors](https://www.macrumors.com/2026/05/21/macstories-shortcuts-playground/) reports that MacStories' Federico Viticci released Shortcuts Playground, a plugin that generates Apple Shortcuts using natural language through Claude or OpenAI Codex. It's essentially the AI-powered shortcut creation tool Apple's supposedly planning for iOS 27 - except it's available now, runs locally, and anyone can inspect the code on GitHub.

This is classic Viticci. The guy has spent years pushing Shortcuts further than Apple seems willing to take it themselves, and this plugin is a perfect example of building around Apple's pace rather than waiting for it. You describe what you want in plain English, the AI writes the shortcut logic, and a few minutes later you've got a working automation ready to import. Viticci includes examples like parking location memory and nighttime display adjustments with Focus mode triggers - the kind of multi-step automations that most people never bother creating because the visual interface is tedious.

The catch is setup friction. You need Claude Code or Codex running, you need to configure the plugin, and you absolutely need to verify the output because AI-generated shortcuts aren't guaranteed accurate. That's a higher bar than Apple's eventual implementation will have, but it's also more transparent. Viticci published the full documentation and code, so you can see exactly what's happening instead of trusting a black box.

What's telling is that this exists at all. Apple's been rumored to add natural language shortcut creation since before iOS 27 leaks started, yet here's a third-party developer shipping a working version using publicly available AI models. It won't have the polish or integration of Apple's native feature when it arrives, but it doesn't need to - it just needs to work well enough that power users can automate things today instead of waiting until fall 2027.

For most people, Viticci's existing MacStories Shortcuts Archive with 400+ pre-built options is still the easier path. But if you've been waiting for Apple to make Shortcuts less of a visual programming slog, this is your answer until Cupertino catches up.
