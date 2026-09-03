---
brief_id: 11C
publish_date: 2026-11-19
week: 11
slot: C
slot_job: audience piece
week_theme: "Get into the AI answers"
content_type: Audience
status: not_started
---

# BRIEF 11C: Do you need Baidu SEO if you are already doing social?

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.theredscroll.com |
| audience | people out of China |
| reader stage | pre-entry |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Do you need Baidu SEO if you are already doing social? |
| Slug | `/insights/baidu-seo-vs-social-media/` |
| Output file | `output/baidu-seo-vs-social-media.md` |
| Primary query | `baidu seo vs social media` |
| Secondary queries | `do i need baidu seo`, `china search vs social`, `baidu or wechat for traffic` |
| Search intent | Decision |
| Body length | 1,800 words (body only, per the char-count rule) |

## The angle

Covers the adjacency without pretending to be an SEO shop. The honest answer is that it depends on whether your category is searched or discovered, and giving that answer plainly is more credible than upselling. Sets up referrals we can make and receive.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Two different demand types: searched and discovered
2. When Baidu matters more than social
3. When social matters more than Baidu
4. The B2B case, where Baidu usually wins
5. In-platform search: Xiaohongshu and WeChat as search engines
6. What a minimum viable Baidu presence costs
7. The website and ICP filing question
8. How to decide in one afternoon

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Baidu search share in China, cite a dated source
- In-platform search volume figures, cite each platform

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Decision table: category type, primary channel, secondary
- Diagram: the two demand types and where each is captured
- Feature image: a search field rendered typographically, oversized

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the platform selection piece and the GEO pillar. Out: /services/strategy-campaigns/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Do You Need Baidu SEO If You Do Social? (39 chars) |
| Meta description | 152 chars | When Baidu SEO matters more than social media in China, when it does not, the B2B exception, in-platform search, and what a minimum Baidu presence (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Is Baidu SEO still necessary in 2026?
2. Do I need a Chinese website to run social media?
3. Is Xiaohongshu a search engine?

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
- [ ] File saved as `output/baidu-seo-vs-social-media.md`
