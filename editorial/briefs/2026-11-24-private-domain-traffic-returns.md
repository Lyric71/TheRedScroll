---
brief_id: 12B
publish_date: 2026-11-24
week: 12
slot: B
slot_job: platform depth
week_theme: "Arm the buyer against bad agencies"
content_type: Cluster guide
status: not_started
---

# BRIEF 12B: Private domain traffic: what WeCom groups actually return

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
| Working H1 | Private domain traffic: what WeCom groups actually return |
| Slug | `/insights/private-domain-traffic-returns/` |
| Output file | `output/private-domain-traffic-returns.md` |
| Primary query | `private domain traffic china` |
| Secondary queries | `wecom groups roi`, `private traffic china marketing`, `china crm social` |
| Search intent | Informational |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

Extends our best-ranking article, the WeCom explainer, into the money question: what does a private domain program actually return. Publish real repeat-purchase and group retention figures from our own programs. Nobody else does.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What private domain means when you strip the jargon
2. The three assets: Official Account, WeCom, groups
3. What it costs to build and to run
4. Group retention curves: what normal looks like
5. Repeat purchase lift: real figures from our programs
6. The content cadence a group tolerates
7. Where private domain fails: the three patterns
8. How to start with one hundred customers

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Retention and repeat purchase figures from our own client programs, labeled as our sample with sample size
- One external dated source on private domain adoption in China

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Retention curve chart from our own program data
- Table: asset, build cost, run cost, what it returns
- Feature image: a group chat interface abstracted into shapes, no real content. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /insights/what-is-wecom/, which is our best-ranking article. Out: /services/crm-private-domain/, /pricing/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | What WeCom Groups Actually Return (33 chars) |
| Meta description | 152 chars | What a China private domain program costs and returns: group retention curves, repeat purchase lift, content cadence, and the three ways it fails. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is private domain traffic in China?
2. What retention should a WeCom group achieve?
3. How much does a private domain program cost?

## Calendar note for this week

Double 12 falls on Dec 12, after the plan ends. Add a Double 12 piece to week 14 if the cadence continues.

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
- [ ] File saved as `output/private-domain-traffic-returns.md`
