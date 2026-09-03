---
brief_id: 05A
publish_date: 2026-10-05
week: 05
slot: A
slot_job: the money question
week_theme: "Move the cluster to WeChat"
content_type: Cost page
status: not_started
---

# BRIEF 05A: WeChat marketing cost: account, ads, mini program and WeCom

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
| Working H1 | WeChat marketing cost: account, ads, mini program and WeCom |
| Slug | `/insights/wechat-marketing-cost/` |
| Output file | `output/wechat-marketing-cost.md` |
| Primary query | `wechat marketing cost` |
| Secondary queries | `wechat official account cost`, `wechat advertising cost`, `wechat mini program price` |
| Search intent | Cost |
| Body length | 2,400 words (body only, per the char-count rule) |

## The angle

BINGO answers cost questions inside a 27-question FAQ. A dedicated page beats a buried FAQ answer every time. We already have a WeChat ad formats article to link from, so this page inherits relevance.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The full WeChat cost picture in one table
2. Official Account: verification fee, annual renewal, overseas versus mainland
3. Content production: what an article actually costs to make
4. Advertising: Moments, Official Account and Channels, with minimums
5. Mini Program: build cost ranges by complexity
6. WeCom: licensing, setup and the people cost
7. Agency management fees
8. Three worked budgets: presence, growth, commerce
9. The costs that surprise people

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Official Account verification fee, cite Tencent documentation
- Ad account deposit, cite the platform
- Moments ad daily minimum, cite the platform or a dated agency source
- Our pricing page, referenced by name only. Never quote monthly figures, per-item rates or tier names (STYLE_GUIDE.md 6.4)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Master WeChat cost table
- Mini Program cost tiers table: simple, commerce, custom
- Three worked budget cards
- Feature image: a QR code printed on card stock, shallow focus

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the cost pillar and our WeChat ad formats article. Out: /pricing/, /wechat-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **See the full rate card**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | WeChat Marketing Cost: The Full Breakdown (41 chars) |
| Meta description | 152 chars | What WeChat marketing costs: Official Account verification, content, Moments and Channels ads, Mini Program builds, WeCom licensing and agency fees. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How much does a WeChat Official Account cost per year?
2. What is the minimum WeChat ad budget?
3. How much does a WeChat Mini Program cost to build?

## Calendar note for this week

Golden Week runs to Oct 7. Monday and Tuesday pieces must be written and scheduled before Sept 30. Normal working rhythm resumes Thursday Oct 8.

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
- [ ] File saved as `output/wechat-marketing-cost.md`
