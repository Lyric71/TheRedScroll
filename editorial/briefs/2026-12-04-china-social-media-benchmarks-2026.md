---
brief_id: 13D
publish_date: 2026-12-04
week: 13
slot: D
slot_job: vertical or teardown
week_theme: "Ship the assets that earn links"
content_type: Original data
status: not_started
---

# BRIEF 13D: China social media benchmarks 2026: engagement by platform and sector

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
| Working H1 | China social media benchmarks 2026: engagement by platform and sector |
| Slug | `/insights/china-social-media-benchmarks-2026/` |
| Output file | `output/china-social-media-benchmarks-2026.md` |
| Primary query | `china engagement rate benchmark` |
| Secondary queries | `china social media benchmarks`, `wechat engagement rate 2026`, `xiaohongshu engagement benchmark` |
| Search intent | Reference |
| Body length | 2,800 words (body only, per the char-count rule) |

## The angle

The flagship link earner and the piece the whole quarter builds to. Original data from our own managed accounts, published with methodology and sample size. Nobody in the set publishes benchmarks. Reference pages are what journalists cite and what AI answers quote, and it is the only asset here a rival cannot copy.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Method: sample size, period, how each metric is defined
2. Headline benchmarks: engagement rate by platform
3. WeChat: open rate and read rate by follower band
4. Xiaohongshu: engagement and save rate by sector
5. Douyin: completion rate and engagement by video length
6. Weibo: interaction rate and the campaign effect
7. Sector table: eight sectors across four platforms
8. What moved since last year, and why
9. How to use these benchmarks without misreading them
10. Download the full data table

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- All figures from our own managed accounts. State the sample size, the period, and the exclusions.
- Define every metric explicitly. A benchmark page that does not define its denominator gets ignored.
- Where we compare to prior years, say whether the sample is like for like.

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- The master benchmark table: platform by sector. The reason the page exists.
- Four small multiple charts, one per platform, showing distribution not just averages
- Downloadable data table, CSV
- Methodology box, visible and prominent
- Feature image: a grid of small charts printed on paper, overhead, the data-report look. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from every problem-slot piece and the engagement drop article. Out: /work/, /pricing/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Download the data, then Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China Social Media Benchmarks 2026 (34 chars) |
| Meta description | 152 chars | Engagement benchmarks for WeChat, Xiaohongshu, Douyin and Weibo by sector, from live managed accounts, with full methodology and a downloadable data (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is a good engagement rate on Xiaohongshu?
2. What is a normal WeChat read rate?
3. How were these benchmarks measured?

## Calendar note for this week

Week 13 produces the two assets the whole quarter has been building toward. Both need more production time than a normal week, so start them in week 11.

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
- [ ] File saved as `output/china-social-media-benchmarks-2026.md`
