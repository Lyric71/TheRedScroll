---
brief_id: 03D
publish_date: 2026-09-25
week: 03
slot: D
slot_job: vertical or teardown
week_theme: "Make the pricing model the story"
content_type: Teardown
status: not_started
---

# BRIEF 03D: Camper in China: 43K to 187K followers and a 31% sales lift. The full teardown.

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
| Working H1 | Camper in China: 43K to 187K followers and a 31% sales lift. The full teardown. |
| Slug | `/insights/camper-china-teardown/` |
| Output file | `output/camper-china-teardown.md` |
| Primary query | `china social media case study` |
| Secondary queries | `foreign brand china social media success`, `china follower growth case study` |
| Search intent | Proof |
| Body length | 2,200 words (body only, per the char-count rule) |

## The angle

Our best proof asset is buried in a portfolio page nobody searches. Turn it into a real article: the strategy, the content that worked, the content that failed, the month-by-month numbers. Publishing the failures is what makes it worth linking to.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Where the account was in month zero
2. The decision that changed everything: the content pillar rewrite
3. What we published, and the three formats that carried the growth
4. Month by month: the follower curve and what caused each jump
5. The two campaigns that did not work, and why
6. How social growth turned into a 31% sales lift
7. The reporting we used, and what we measured
8. What we would do differently in 2026

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- All figures from our own Camper engagement, cleared with the client before publishing
- Any market context figure gets an external dated source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Follower growth line chart, 18 months, annotated with the three inflection points
- Content format performance table: format, volume, average engagement
- Before and after grid of account covers
- Feature image: a pair of shoes on a plain studio backdrop, product photography style. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /work/camper/, the fashion vertical, the homepage. Out: /work/camper/, /industries/fashion-apparel/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Camper in China: A Social Media Teardown (40 chars) |
| Meta description | 152 chars | How Camper went from 43K to 187K followers in China with a 31% sales lift. The strategy, the content that worked, the campaigns that failed, month by (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How long does it take to grow a Chinese social account?
2. What content format grows a brand account fastest in China?
3. Does follower growth actually drive sales in China?

## Calendar note for this week

Mid-Autumn Festival runs Sept 25 to 27. Friday's piece still publishes, since the audience is English-speaking and largely outside China, but China-side review has to finish by Thursday.

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
- [ ] File saved as `output/camper-china-teardown.md`
