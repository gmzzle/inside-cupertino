---
title: "Banks Are Already Blocking AI Agents. Siri May Not Need Your Password."
description: "Major U.S. banks are banning or warning against third-party agents that log in with your credentials. If Siri acts through App Intents instead, that fight may look different."
pubDate: 2026-11-23T23:30:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - siri
  - ai-agents
  - privacy
  - banking
  - app-intents
source:
  name: "9to5Mac"
  url: "https://9to5mac.com/2026/11/23/as-apple-works-on-ai-agent-features-banks-are-already-blocking-them/"
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&auto=format&fit=crop"
heroAlt: "A person in a white shirt holds a credit card in one hand while typing on a silver laptop"
---

Apple is still getting Siri ready to act more like an agent. The banks are not waiting.

[9to5Mac's Ben Lovejoy](https://9to5mac.com/2026/11/23/as-apple-works-on-ai-agent-features-banks-are-already-blocking-them/), writing Monday, points to a [Wired report](https://www.wired.com/story/banks-are-cracking-down-on-ai-agents/) from Sunday: several of the largest U.S. banks have already changed their terms, or warned customers, about third-party AI agents that log into accounts with a customer's own credentials. The timing is the point. Bloomberg's Mark Gurman has said Siri could become more like an agent as early as next year, and Apple only last week posted, then deleted, a job listing about building autonomous agents. The banks are writing the rules before that product exists.

## What the banks actually changed

The moves are not identical. Some banks are banning a specific kind of access. Others are warning customers that if they hand an agent their login, the consequences are theirs.

Wired's Reece Rogers reported that in late October, "JPMorgan Chase changed its terms to ban third-party agents that log in with your credentials. That same day, Bank of America warned its customers not to share login info with agents." Bank of America's own security guidance is more specific. "Never share your user ID or password with another person or an outside service, including an AI-enabled tool or agent that offers to act on your behalf," the bank says. If you do share that login, "keep in mind that you're responsible for activity resulting from that access."

Wired also reported that Citibank and PNC have changed their terms to include warnings about agents. [TechCrunch](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) later confirmed both, and quoted a Citi spokesperson: "We recently updated our Online User Agreement to provide greater clarity about those risks and to reinforce that customers who choose to grant account access to third-party AI agents are responsible for activities conducted through those agents."

Wells Fargo's update is the most blunt, and it takes effect Tuesday, November 24. The bank's forthcoming [Online Access Agreement](https://www.wellsfargo.com/online-banking/online-access-agreement/upcoming/), in Section 15(e), says:

> Your use of any AI Agent is AT YOUR OWN RISK.

The same section tells customers they are responsible for monitoring an agent's activity, and that Wells Fargo does not "monitor, screen, or review AI Agent activities, including any transactions initiated by an AI Agent." The bank also reserves the right to limit, block, or terminate access by any AI Agent.

## Siri isn't an agent yet

None of this is a reaction to a Siri feature that shipped this morning. In his November 8 Power On newsletter, as quoted by [Mac Observer](https://www.macobserver.com/news/siri-ai-agent-2027-gurman/), Gurman wrote: "Apple ultimately wants to go in this direction, I'm told, and I believe the company could make Siri more like an agent as early as next year." We [covered that report](https://insidecupertino.com/articles/ternus-pushes-federighi-faster-software-siri-agent-3e7a91c2/) when it landed. "Could" and "as early as" are doing a lot of work in that sentence. Apple has not announced an agentic Siri, and it has not said anything about Siri logging into your bank.

What Apple has shipped, or is about to, is the plumbing. The iOS 27.3 betas opened Siri AI to every app through [App Intents](https://insidecupertino.com/articles/siri-ai-open-to-all-developers-app-intents-f1831ca3/), so a banking app could, in principle, expose specific actions to Siri without handing over a password. On the Mac, [macOS 27.3](https://insidecupertino.com/articles/macos-27-3-full-access-controls-7d4e2b91/) is tightening Full Disk Access so third-party agents cannot get a skeleton key without a harder, more explicit yes.

A since-deleted Apple job listing, spotted by Bloomberg and quoted by [The Verge](https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing) and [TechCrunch](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/), described the ambition more plainly. "We're building AI agents that can do the same," it said, after describing how people move between a browser, a document, a terminal, an editor, and a service. "These agents plan and carry out multi-step tasks across apps, browsers, command lines, code, and APIs, and they can coordinate specialized sub-agents along the way." The Verge noted on November 20 that the listing had been taken down.

## Analysis: the password is the problem, and Apple may not need it

The useful distinction in the banks' new rules is not "AI" versus "no AI." It is how the software gets in.

What JPMorgan banned, and what Bank of America, Citi, PNC, and Wells Fargo are warning about, is a third-party agent that signs in as you, with your username and password, and then clicks around the way you would. That credential-sharing model is a security problem for a bank. The agent might move money you did not intend, leak the login, or get compromised. From the bank's point of view, it cannot tell you from the bot.

Apple's usual posture points at a different door. Siri already acts in apps through App Intents, not by storing your banking password and driving the website. On-device processing and a privacy-first pitch are the company's default selling points. If a bank's official iPhone app exposed sanctioned intents — check a balance, send a payment, dispute a charge — Siri could ask the app to do those things the way it can already ask Mail or Maps, and the bank would still be in the loop.

That is the opening. It is also still hypothetical. Banks would have to build and allow those intents. Apple would need to make the authorization feel as clear as Apple Pay: you see what is about to happen, you confirm with Face ID or a passcode, and nothing moves without that step. An agent that can keep pursuing a goal in the background, the kind Gurman described, is a harder sell than a single, confirmed request. A bank that just told customers they are on the hook for an agent's mistakes is not going to accept a Siri that can pay a bill while the phone is in a pocket, unless the customer approved that specific payment.

None of this is a prediction that Apple will ship a banking agent, or that JPMorgan will bless one. It is the path that fits both Apple's architecture and the thing the banks are actually trying to stop.

## What this means if you have an iPhone today

Nothing about Siri and your bank account has changed this week. Siri cannot log into Chase or Wells Fargo for you, and it is not about to start paying your bills on its own.

The practical change is for anyone already handing a third-party chatbot or "computer use" agent their banking username and password. At the banks named above, that is now either banned or something the bank says you do at your own risk. Bank of America's advice, if you have already shared a password, is to change it immediately and review recent transactions. That is a security warning from the bank, not a product recommendation, and it is not financial advice.

If a more capable assistant ever reaches your banking app, the version worth waiting for is one that goes through the official app, asks you to confirm the action, and never needs your password. Until a bank and Apple actually ship that, treat any tool that asks for your login as the thing these new terms were written to cover.

*Sources: [9to5Mac](https://9to5mac.com/2026/11/23/as-apple-works-on-ai-agent-features-banks-are-already-blocking-them/) (Nov. 23), [Wired](https://www.wired.com/story/banks-are-cracking-down-on-ai-agents/) (Nov. 22), [Wells Fargo Online Access Agreement](https://www.wellsfargo.com/online-banking/online-access-agreement/upcoming/) (version effective Nov. 24, 2026), [Bank of America](https://web.bankofamerica.com/en/security/library/agentic-ai), [TechCrunch](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) (Nov. 18), [The Verge](https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing) (Nov. 19, updated Nov. 20), [TechCrunch](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/) (Nov. 19), and [Mac Observer](https://www.macobserver.com/news/siri-ai-agent-2027-gurman/) quoting Mark Gurman's Nov. 8 Bloomberg Power On newsletter. This is commentary, not financial or legal advice.*
