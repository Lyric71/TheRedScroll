---
brief_id: 13A
publish_date: 2026-11-30
week: 13
slot: A
slot_job: the money question
week_theme: "Ship the assets that earn links"
content_type: Tool
status: not_started
---

# BRIEF 13A: China social media budget calculator

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
| Working H1 | China social media budget calculator |
| Slug | `/tools/china-social-media-budget-calculator/` |
| Output file | `output/china-social-media-budget-calculator.md` |
| Primary query | `china marketing budget calculator` |
| Secondary queries | `china social media budget tool`, `estimate china marketing cost`, `china campaign budget estimator` |
| Search intent | Tool |
| Body length | Tool page plus 900 words of supporting copy (body only, per the char-count rule) |

## The angle

The single most linkable asset in the plan. Twish has an ads calculator for one platform. Ours covers four platforms, three cost lines and outputs a real monthly range that maps to our packages. It also captures an email at the export step.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Inputs: platforms, content volume, seeding volume, ad spend, agency model
2. Output: a monthly range with a line-item breakdown
3. The assumptions behind every number, published openly
4. How the estimate maps to our packages
5. What the calculator deliberately does not include
6. Supporting copy: how to use the output in a budget request

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Every default value in the calculator traces to a figure published in one of the twelve cost pieces above
- Publish the assumptions table. An unexplained calculator is not trustworthy.

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- The calculator itself: client-side, no login, four platform toggles and three sliders
- Assumptions table, visible below the tool
- Shareable result card the user can screenshot
- Feature image: a slider control rendered oversized and graphically

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from every cost piece in the plan, plus /pricing/. Out: /pricing/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Email me this estimate, then Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China Social Media Budget Calculator (36 chars) |
| Meta description | 152 chars | Estimate a China social media budget across WeChat, Xiaohongshu, Douyin and Weibo. Content, seeding, ad spend and agency fees, with published (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How is this estimate calculated?
2. Does the estimate include ad spend?
3. How accurate is a budget estimate before scoping?

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
- [ ] File saved as `output/china-social-media-budget-calculator.md`
