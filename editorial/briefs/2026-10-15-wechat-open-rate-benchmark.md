---
brief_id: 06C
publish_date: 2026-10-15
week: 06
slot: C
slot_job: audience piece
week_theme: "Name the costs nobody quotes"
content_type: Audience
status: not_started
---

# BRIEF 06C: Your WeChat open rate is under 3%. Here is what is wrong.

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | in-market |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | WeChat open rate benchmark: what under 3% really means (amended 2026-10-08: the primary query goes in the H1, and the research shows under 3% is common for a brand service account, so the H1 no longer calls it a fault) |
| Slug | `/insights/wechat-open-rate-benchmark/` |
| Output file | `output/wechat-open-rate-benchmark.md` |
| Primary query | `wechat open rate benchmark` |
| Secondary queries | `wechat official account engagement`, `wechat article views dropping`, `wechat benchmark 2026` |
| Search intent | Problem |
| Body length | 1,700 words (body only, per the char-count rule) |

## The angle

Publish the best dated benchmark data available, defined and sourced, so the page becomes the reference. Nobody in the set publishes benchmarks, and reference pages get cited by AI answers.

Amended 2026-10-08 by the 06C draft run: no first-party open-rate figure is logged in the ledger, so settled fallback 3 applies and the article is built on published sources (KAWO's December 2022 brand-account study for the bands, 36Kr and NewRank for the platform trend, Tencent's own rules for the push limits). The research also showed that follower band does not predict open rate for brand accounts (KAWO 2022), so the benchmark is by account type, not follower band, and no current benchmark by industry exists (fallback 1). Foreign brands run service accounts, so the service account column is the one that matters.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What a normal WeChat open rate looks like in 2026, by account size
2. Why the number fell across the whole platform
3. Cause 1: you spend scarce pushes on the wrong posts (amended 2026-10-08: the only day-of-week data, KAWO 2019, shows WeChat use nearly flat across the week; the real timing constraint is the service account's four pushes a month)
4. Cause 2: your titles are written for search, not for a feed
5. Cause 3: your follower base is stale and half of it is muted
6. Cause 4: you are not using Channels or Moments to reseed
7. Cause 5: your content has no reason to be forwarded
8. The 30-day fix plan

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Open-rate bands for brand accounts, with the study's sample, period and definition (amended 2026-10-08: KAWO, December 2022, about 15,000 brand posts; first-party data is used only once it is logged in the ledger's first-party section, settled fallback 3)
- One external dated source on platform-wide engagement trends (36Kr, March 2025; NewRank, January and March 2025)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Benchmark table: open rate by performance band and account type (amended 2026-10-08: no current published figure by follower band or sector exists, see the angle). The centerpiece asset.
- Bar chart: open rate by day of week. Not produced (amended 2026-10-08: no dated day-of-week data exists; settled fallback 7, the timing section carries the finding as text)
- Feature image: a declining bar chart rendered as a physical object, paper or card. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo in crisp sharp focus with legible screens (never blur, smudges or noise), no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /insights/china-engagement-rate-drop/ and the WeChat cost page. Out: /wechat-agency/, /services/strategy-campaigns/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Request an account audit**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | WeChat Open Rate Benchmarks: What Is Normal Now (47 chars; amended 2026-10-08, the newest public brand benchmark is from 2022, so "for 2026" would mislead) |
| Meta description | 152 chars | WeChat open rate benchmarks by account type, why reads moved from the push to recommendation, five common causes of a low rate, and a 30-day fix plan. (150 chars; amended 2026-10-08, no benchmark by account size or sector exists) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is a good WeChat open rate in 2026?
2. Why did my WeChat views drop?
3. How often should a brand publish on WeChat?

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
- [ ] File saved as `output/wechat-open-rate-benchmark.md`
