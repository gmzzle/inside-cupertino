---
title: "Meta's 816B-Parameter AI Model Runs on Mac Studio. Today, That Means Four of Them."
description: "Meta and Apple tuned Muse Spark Open for M5 Ultra Mac Studios. The two-Mac setup needs a 512GB model Apple hasn't shipped, so for now it's four Macs and $43,000+."
pubDate: 2026-10-15T22:15:00.000Z
draft: false
author: "Inside Cupertino"
tags:
  - mac-studio
  - m5-ultra
  - mlx
  - meta
  - muse-spark
  - ai
  - john-ternus
source:
  name: "Apple Machine Learning Research"
  url: "https://machinelearning.apple.com/research/mlx-distributed-inference"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop"
heroAlt: "Server racks behind mesh doors in a dark room, threaded with orange and blue network cables and dotted with green status lights"
---

Apple and Meta announced something together on Thursday. That sentence alone would have been hard to picture a year ago.

Meta released the weights for [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open), which it calls "the most capable US open-weight model to date," and says it was optimized to run locally on Mac Studio with M5 Ultra using Apple's MLX framework. At the same time, Apple posted [benchmarks and setup details](https://machinelearning.apple.com/research/mlx-distributed-inference) on its Machine Learning Research site, along with a new version of MLX.

The pitch is a frontier-class model running at your desk instead of in someone's data center. The fine print is how many desks' worth of Mac you need.

## What Meta released

Per Meta's announcement, Muse Spark Open is a natively multimodal mixture-of-experts model with **816 billion total parameters (42 billion active)** and a **1-million-token context window**, built for coding and agentic work. It's released under Meta's Muse Model License, which has limited commercial terms. Weights are on Hugging Face and other model hubs, and hosted access is available through Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter, and Together AI.

Meta says it tested agentic workflows running entirely on-device, including shipping real iOS changes to the open-source Mastodon client Ice Cubes and driving DaVinci Resolve end to end.

## Why it takes more than one Mac

The model is too big for a single machine. Apple's post says Muse Spark Open would need more than 1.6TB of RAM for its parameters at native BF16 precision. Quantized to 4-bit NVFP4, it drops to about 493GB. Add the memory inference needs on top of that, and it won't fit in one Mac Studio, even a maxed-out one.

So MLX splits it across machines. Meta's [setup docs](https://dev.meta.ai/docs/muse-spark-open/hardware-platforms) list two supported Mac configurations:

- **Two** Mac Studios with M5 Ultra and **512GB** of unified memory each, or
- **Four** Mac Studios with M5 Ultra and **256GB** each.

Every pair of Macs needs a direct Thunderbolt 5 link. Meta recommends two cables per pair to double the bandwidth, which is also how Apple ran its tests. Each Mac needs macOS 26.2 or later, which added the RDMA-over-Thunderbolt driver, and MLX 0.30.1 or later. With four Macs, each one connects to the other three. Meta budgets about four hours for the setup.

## The catch: the 512GB Mac Studio isn't on sale

Meta's headline configuration is two Macs. But Apple still hasn't released the 512GB Mac Studio. When it [launched the M5 Max and M5 Ultra models in August](/articles/mac-studio-gets-update-to-m5-max-and-m5-ultra-7a4701d339/), Apple said the 512GB option was "coming in late October," and it hasn't published a price. [MacRumors](https://www.macrumors.com/2026/10/15/meta-muse-spark-open-mac-studio/) notes it is still expected later this month.

That leaves four 256GB machines as the only Mac route you can order today. [CNBC](https://www.cnbc.com/2026/10/15/apple-meta-partner-ai.html) puts an M5 Ultra Mac Studio with 256GB at a minimum of $10,799. Four of them is at least **$43,196** before tax, cables, or storage upgrades for the checkpoint on each Mac. Don't assume the two-Mac route will be cheap either. [AppleInsider](https://appleinsider.com/articles/26/08/25/you-can-spend-18299-on-a-mac-studio-today-or-more-in-october) noted in August that the jump from 96GB to 256GB alone costs $4,000 and expects the 512GB option to cost considerably more.

This is not a consumer feature. It's a statement about what Apple silicon can do, aimed at developers and labs that would otherwise rent GPUs.

## How fast it runs

Apple's own numbers, measured with `mlx_lm.benchmark` at an 8,192-token context:

- **Four M5 Ultras (tensor parallel):** 36.73 tokens per second, time to first token 4.8 seconds.
- **Two M5 Ultras (tensor parallel):** 24.99 tokens per second, 8.2 seconds to first token.
- **Two M5 Ultras (pipeline parallel):** 15.74 tokens per second, 8.4 seconds to first token.

Apple calls the four-Mac result "well above average human reading speed." At a much longer 65,536-token context, the four-Mac setup took 40.6 seconds to the first token. That matters if you're feeding it a big codebase.

Apple also used the post to compare generations on models that fit on one machine. It says M5 Ultra's GPU Neural Accelerators cut time to first token by up to 4.6× compared with M3 Ultra, and its 1.2TB/s of memory bandwidth (up from 819GB/s) made generation up to 1.6× faster. Running those models, Apple measured peak power at about 300W for a single M5 Ultra Mac Studio.

## Ternus and Zuckerberg, on the record

The partnership is the bigger story. According to CNBC, Mark Zuckerberg posted on X that Muse Spark Open "runs great on new Mac Studios thanks to work with @johnternus and Apple," and Ternus replied: "Congrats to the team! Amazing to run a model of Muse Spark Open's caliber and scale this efficiently, right from your desk."

That's a notable change in tone. Under Tim Cook, Apple and Meta mostly traded shots over privacy, and CNBC notes the two companies haven't had a public partnership since 2017. Meta AI chief Alexandr Wang told [Axios](https://9to5mac.com/2026/10/15/meta-launches-new-muse-spark-open-model-optimized-to-run-on-mac-studio/), as quoted by 9to5Mac, that the companies have been working together for several months and that he's "excited for mommy and daddy to be playing nice again." He credited Daniel Gross, a former Apple director now on his team, with bringing the two together, in interviews with both outlets.

Neither company would say whether this leads to a deeper relationship, per CNBC. Nothing here touches Apple Intelligence or Siri AI. Muse Spark Open is a developer download, not something built into macOS.

## What it means for Apple

For Apple, the win is positioning. Nvidia owns the data center. Apple wants the Mac Studio seen as the obvious place to run large open models locally, and getting Meta to build its flagship open release around MLX and Thunderbolt-linked Mac Studios helps make that case.

What to watch:

- **The 512GB Mac Studio.** Price and ship date. It decides whether "two Macs" is realistic or just a talking point.
- **Independent benchmarks.** Every number above comes from Apple or Meta.
- **More Apple–Meta work.** Today's release is a model and a framework update. Anything that reaches Apple's own software would be a much bigger deal.
