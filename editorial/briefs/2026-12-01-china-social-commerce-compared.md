---
brief_id: 13B
publish_date: 2026-12-01
week: 13
slot: B
slot_job: platform depth
week_theme: "Ship the assets that earn links"
content_type: Cluster guide
status: not_started
---

# BRIEF 13B: Social commerce compared: Xiaohongshu, Douyin and WeChat stores

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
| Working H1 | Social commerce compared: Xiaohongshu, Douyin and WeChat stores |
| Slug | `/insights/china-social-commerce-compared/` |
| Output file | `output/china-social-commerce-compared.md` |
| Primary query | `china social commerce` |
| Secondary queries | `xiaohongshu store vs douyin shop`, `wechat store setup`, `sell on chinese social media` |
| Search intent | Comparison |
| Body length | 2,200 words (body only, per the char-count rule) |

## The angle

Closes the e-commerce adjacency gap from a social angle rather than an operations angle. Three stores, three different economics, one comparison table. Commission rates and fulfilment requirements are the facts buyers cannot find in one place.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Three stores, three different businesses
2. Xiaohongshu store: who it suits and what it takes
3. Douyin Shop: volume, commission and the live requirement
4. WeChat store and Channels: the private domain advantage
5. Commission and fee comparison
6. Fulfilment, returns and the cross-border question
7. What each one requires from a foreign entity
8. Which to open first, by product type
9. What it costs to run each properly

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Commission rates per platform, cite each platform's merchant documentation, dated
- Cross-border requirements, cite the regulation

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Master comparison table: requirements, commission, fulfilment, best for
- Decision matrix by product type and price point
- Feature image: three shopping bags of different sizes, studio, plain background

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /insights/douyin-social-commerce-profitability/ and /insights/sell-on-wechat/. Out: /services/market-entry/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China Social Commerce Platforms Compared (40 chars) |
| Meta description | 152 chars | Xiaohongshu store, Douyin Shop and WeChat store compared on requirements, commission, fulfilment and cross-border rules, with a decision matrix by (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Which Chinese social platform is best for selling?
2. What commission does Douyin Shop charge?
3. Can a foreign company open a Xiaohongshu store?

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
- [ ] File saved as `output/china-social-commerce-compared.md`
