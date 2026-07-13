---
name: linkedin-content
description: >
  Create two pieces of native LinkedIn content: a scroll-stopping LinkedIn
  post (clickbait hook + emojis) and a standalone LinkedIn article. Use when
  the user asks to create, draft, or repurpose LinkedIn content from a blog
  post, insights article, markdown file, URL, or topic brief.
  Output is copy-paste-ready text. This skill does not publish.
---

# LinkedIn content creation: native post + article

Turn ONE source (blog article or topic brief) into TWO deliverables:

1. A LinkedIn **post**: short, aggressive hook, emojis, built for reach.
2. A LinkedIn **article**: standalone long-form, editorial register, built for authority and saves.

The post grabs. The article proves. They share facts but never share sentences.

## Step 1 — Gather inputs

- Read the source article in full (file path or URL provided by the user).
- If there is no source article, only a topic: gather facts first. Search the project's existing content for material on the topic, and run web searches for current, citable statistics. Never draft from memory alone; both deliverables live on attributed numbers.
- Look for a brand style guide at the project root (`STYLE_GUIDE.md`, `BRAND.md`, `CLAUDE.md` writing rules). If one exists, its rules OVERRIDE the defaults below wherever they conflict (banned words, punctuation rules, brand name casing, CTA wording, competitor policy).
- Note every statistic and its source. Clickbait framing is allowed; invented or rounded-up numbers are not. Every claim in the output must survive a fact-check against the source article. Convert currencies honestly.

## Step 2 — Check whether the algorithm rules are stale

The rules below reflect LinkedIn's algorithm as of mid-2026. If the current date is more than ~6 months past that, run 2-3 web searches ("LinkedIn algorithm <year> external links", "LinkedIn post best practices <year>", "LinkedIn hooks <year>") and update tactics before drafting. Otherwise skip this step.

## Hard rules (2026 algorithm)

- **NO external links. Anywhere.** Not in the post body (50-70% reach penalty), and not in the first comment either (LinkedIn now detects "bridge behavior" and penalizes it the same way). The content must be fully self-contained. Do not mention the blog URL at all.
- **No hashtags.** Posts with more than 3 hashtags perform ~71% worse than posts with none. Default to zero.
- **No engagement bait.** "Comment YES if you agree", reaction polls, and artificial urgency are actively suppressed. A genuine question is fine; a gimmick is not.
- **What the algorithm rewards:** dwell time, saves (~5x the weight of a like), substantive comment threads, "see more" expansions, and engagement in the first 60-90 minutes.

## Step 3 — Draft the POST

**Hook (the first 2 lines, ~140 characters total, shown above the mobile fold):**
- First line under 10 words. Clickbait energy: shock stat, cost collapse, contrarian claim, or curiosity gap.
- Open with one emoji as a visual anchor (🚨 🤯 🔥 or a relevant flag).
- Second line pays off or escalates the first, then baits the expansion with 👇.

**Body:**
- 1,200-1,800 characters total. One idea per line. Blank line between every line or pair.
- A stats block of 3 bullets, each opening with a relevant emoji (📊 🎬 💰), each number attributed to its source in parentheses.
- One "why this matters" turn that gives the reader a mechanism, not just numbers.
- 1-2 concrete named examples (real brands, real results, from the source article).
- One insider tactic the reader likely hasn't seen ("my favorite play 👉 ..."). This is the shareable nugget.
- A one-line punchline that reframes the topic (X used to be the problem. Now it's Y.).

**Close:**
- A genuine question that invites comments. No links, no "DM me" funnels.

**Also produce 3 alternate hook stacks** (2 lines each) with different psychological angles: shock stat + curiosity, cheat-code, loss-aversion. Label them so the user can A/B.

## Step 4 — Draft the ARTICLE

Reframe, never copy. The article must read as standalone thought leadership, not a mirror of the blog post. Different title, different opening angle, and at least one substantial section that does not exist in the source.

- **Title:** concrete and specific, built around the strongest number or tension (pattern: "The [striking detail]: how [shift] changed [domain]").
- **Length:** 800-1,200 words. Sentence-case section headers.
- **Register:** editorial, confident, first-person-plural is fine. Calmer than the post; this is the proof layer.
- **Required section: a numbered framework or playbook (3-7 steps)** synthesized from the source's implications. Structured frameworks are what people save, and saves are the strongest algorithm signal. Ground every step in the source material.
- **Every stat attributed inline** (source name, year). No footnote links.
- **Close:** a discussion question, then a short brand boilerplate with a native CTA only: follow the page, comment, or send a message on LinkedIn. No URLs.
- **Suggest a cover image** from the project's existing assets if any fit (LinkedIn renders covers at 1280x720+).

## Step 5 — Deliver

- Save both drafts as markdown files (project scratchpad or a location the user names), with a short header block noting format, length, image suggestion, and posting notes.
- Show both drafts in full in the reply. The user copy-pastes into LinkedIn; there is no API path for articles and posting is manual unless the user sets up their own tooling.
- Include these publishing notes:
  - Publish from a **personal profile**, not a company page (~65% vs ~5% of feed allocation). Reshare from the company page afterward.
  - Sequence: article first, post 1-2 days later.
  - Attach one image to the post; convert webp to JPEG/PNG if needed.
  - Reply to every comment within the first 60-90 minutes; that window decides distribution.
  - Best slots: Tuesday-Thursday mornings in the audience's main timezone.
- Offer one follow-up: converting the article's framework into a PDF carousel (document posts are LinkedIn's highest-engagement format at ~6.6%).

## Style defaults (when no project style guide exists)

- Short sentences. One idea each. Grade 8 reading level. Contractions welcome.
- No em dashes, no exclamation marks (emojis carry the energy in posts).
- Numerals for 10+, for all metrics, and for all percentages ("53.1%").
- Spell out acronyms on first use ("AIGC (AI-Generated Content)").
- Never name competitors. Never invent data.
