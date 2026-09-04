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
| Working H1 | Your WeChat open rate is under 3%. Here is what is wrong. |
| Slug | `/insights/wechat-open-rate-benchmark/` |
| Output file | `output/wechat-open-rate-benchmark.md` |
| Primary query | `wechat open rate benchmark` |
| Secondary queries | `wechat official account engagement`, `wechat article views dropping`, `wechat benchmark 2026` |
| Search intent | Problem |
| Body length | 1,700 words (body only, per the char-count rule) |

## The angle

Publish real benchmark data from our own managed accounts, by follower band and industry. Nobody in the set publishes benchmarks. It makes the page the reference, and reference pages get cited by AI answers.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What a normal WeChat open rate looks like in 2026, by account size
2. Why the number fell across the whole platform
3. Cause 1: you are publishing on the wrong day
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

- Our own benchmark data across managed accounts, clearly labeled as our sample with the sample size stated
- One external dated source on platform-wide engagement trends

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Benchmark table: open rate by follower band and sector. The centerpiece asset.
- Bar chart: open rate by day of week from our sample
- Feature image: a declining bar chart rendered as a physical object, paper or card. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

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
| Title | 52 chars | WeChat Open Rate Benchmarks for 2026 (36 chars) |
| Meta description | 152 chars | Real WeChat open rate benchmarks by account size and sector, why platform engagement fell, five common causes and a 30-day fix plan. (132 chars) |
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
