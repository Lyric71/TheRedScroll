---
brief_id: 06D
publish_date: 2026-10-16
week: 06
slot: D
slot_job: vertical or teardown
week_theme: "Name the costs nobody quotes"
content_type: Teardown
status: not_started
---

# BRIEF 06D: Viessmann and iGuzzini: how two B2B brands built China social from zero

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | pre-entry and in-market |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | B2B China social media case study: Viessmann and iGuzzini (amended 2026-10-08: the primary query goes in the H1, and "from zero" is cut because Viessmann already had Tmall and JD stores and iGuzzini was already known to architects, per both case pages) |
| Slug | `/insights/b2b-china-social-teardown/` |
| Output file | `output/b2b-china-social-teardown.md` |
| Primary query | `b2b china social media case study` |
| Secondary queries | `b2b wechat marketing example`, `industrial brand china social media` |
| Search intent | Proof |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

B2B social in China is treated as impossible by most agencies, so nobody publishes a real B2B teardown. Two clients, two different approaches, honest numbers. Sets up the B2B vertical page next week.

Amended 2026-10-08 by the 06D draft run (settled fallbacks 2 and 5): the live case pages, /work/viessmann/ and /work/iguzzini/, publish no figure, no lead count and no month of a first lead. They describe two trade-channel brands (Viessmann sells through dealers, installers and service companies; iGuzzini is specified by architects and designers) whose social programs reached the end buyer: the household choosing a heating system, the consumer choosing a lamp. The sale closed on Tmall, JD, in WeCom chats or through distributors, not through a B2B lead pipeline. The angle is therefore: B2B brands whose product an end user also chooses can use Chinese social to reach that person, and it took about two years on both case pages. "Honest numbers" means only what the pages publish, quoted and cited, plus dated market data (boiler retail share, online lighting sales, Xiaohongshu home research, WeCom scale).

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Why B2B brands assume Chinese social will not work
2. Viessmann: the technical authority play (amended 2026-10-08: on the case page this is technical content turned into homeowner benefits on Douyin, Xiaohongshu search proof and WeCom pre-sale and after-sale chats)
3. iGuzzini: the specifier and architect play (amended 2026-10-08: on the case page designers, architects and renovation creators carried the brand to consumers on Xiaohongshu, with WeChat as home base, Weibo for reach and livestreams)
4. What content a B2B audience in China actually reads
5. WeChat as a lead engine, not a magazine (amended 2026-10-08: "home base", since neither page describes WeChat lead capture)
6. The WeCom handoff: where social becomes pipeline (amended 2026-10-08: where a question becomes a sale, per the Viessmann page)
7. How long it took to see a qualified lead (amended 2026-10-08: the pages publish no first-lead date; the section reports "roughly two years" and "24 months" as published)
8. What we would do differently

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Client outcomes from our own engagements, cleared before publishing (amended 2026-10-08: settled 2026-10-02, only what /work/viessmann/ and /work/iguzzini/ publish; neither publishes a figure, so the article quotes their lines and uses no client number)
- One external dated source on B2B buyer behavior in China (amended 2026-10-08: no dated survey of which channels Chinese B2B buyers use exists from a citable publisher, so the article says so (fallback 1); KPMG China's November 2025 white paper on industrial purchasing is the dated buyer-behavior source)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Side-by-side comparison table of the two approaches
- Lead flow diagram: content to WeCom to sales (amended 2026-10-08: carried as a four-step numbered list in the body, settled fallback 7)
- Feature image: an industrial detail shot, machined metal or a lighting fixture, close crop. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo in crisp sharp focus with legible screens (never blur, smudges or noise), no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /work/viessmann/, /work/iguzzini/. Out: those case studies, /services/crm-private-domain/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How Two B2B Brands Built China Social (37 chars) |
| Meta description | 152 chars | Viessmann and iGuzzini sell through dealers and architects. How Chinese social reached the buyer behind the order, and why it took two years. (141 chars; amended 2026-10-08, the approved draft promised "how long the first lead took", which neither case page publishes) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Does B2B marketing work on Chinese social media?
2. Which platform is best for B2B in China?
3. How long before B2B social generates leads in China?

## Definition of done

- [ ] Every statistic carries a dated, linked blockquote citation
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] Chinese terms formatted as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Internal links present as plain-text name references
- [ ] Feature image block appended with the correct slug path
- [ ] Body character count reported and on target
- [ ] File saved as `output/b2b-china-social-teardown.md`
