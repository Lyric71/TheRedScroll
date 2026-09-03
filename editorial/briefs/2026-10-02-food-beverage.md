---
brief_id: 04D
publish_date: 2026-10-02
week: 04
slot: D
slot_job: vertical or teardown
week_theme: "Show what the money buys"
content_type: Industry page
status: not_started
---

# BRIEF 04D: Food and beverage marketing in China

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
| Working H1 | Food and beverage marketing in China |
| Slug | `/industries/food-beverage/` |
| Output file | `output/food-beverage.md` |
| Primary query | `food and beverage marketing china` |
| Secondary queries | `fmcg marketing agency china`, `food brand china strategy`, `imported food marketing china` |
| Search intent | Commercial |
| Body length | 1,700 words (body only, per the char-count rule) |

## The angle

Anchored to three real clients: Langnese, Master Martini and Mission Foods. Covers both the consumer side and the foodservice B2B side, which nobody else separates. GMA publishes F&B content weekly, so this page has to be more useful than a blog post.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Two different games: retail consumer and foodservice B2B
2. Import labelling and health claims: what you cannot say
3. The recipe content engine: why it outperforms product content
4. Douyin and the impulse purchase
5. Foodservice on WeChat: reaching chefs and distributors
6. Seasonal peaks in the China food calendar
7. What a food and beverage package includes and what it costs

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- China imported food market figure, cite a dated source
- Labelling requirement for imported food, cite the regulation
- Client outcomes from our own case studies

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Table: consumer play versus foodservice play, side by side
- China food calendar graphic: the six seasonal peaks
- Feature image: ingredients laid out on a work surface, overhead, natural light

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /work/langnese/, /work/master-martini/, /work/mission-foods/. Out: those case studies, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Food and Beverage Marketing in China (36 chars) |
| Meta description | 152 chars | How food and beverage brands grow in China. Retail and foodservice strategies, labelling rules, recipe content, Douyin commerce and seasonal peaks. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What health claims can imported food make in China?
2. Which platform works best for food brands in China?
3. How do foodservice brands reach chefs in China?

## Calendar note for this week

Golden Week starts Oct 1. Thursday and Friday pieces must be written, reviewed and scheduled by Sept 30. The China team is off from Oct 1 to 7.

> **Scheduling flag:** Golden Week. Schedule by Sept 30.

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
- [ ] File saved as `output/food-beverage.md`
