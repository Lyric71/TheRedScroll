---
brief_id: 06B
publish_date: 2026-10-13
week: 06
slot: B
slot_job: platform depth
week_theme: "Name the costs nobody quotes"
content_type: Cluster guide
status: not_started
---

# BRIEF 06B: Mini Programs: what they cost, what they do, who actually needs one

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
| Working H1 | Mini Programs: what they cost, what they do, who actually needs one |
| Slug | `/insights/wechat-mini-program-cost/` |
| Output file | `output/wechat-mini-program-cost.md` |
| Primary query | `wechat mini program cost` |
| Secondary queries | `mini program development price`, `do i need a wechat mini program`, `mini program vs website china` |
| Search intent | Cost |
| Body length | 1,900 words (body only, per the char-count rule) |

## The angle

Most brands are sold a Mini Program they do not need. Lead with the disqualifier: three cases where you should not build one. Saying no first is what earns the trust to say yes later.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. What a Mini Program is, in one paragraph
2. Three cases where you should not build one
3. The four types: content, commerce, service, loyalty
4. Build cost by type, with real ranges
5. Maintenance, hosting and the annual cost nobody budgets
6. Mini Program versus a mobile site in China
7. How Mini Programs get discovered, which is the real problem
8. What we would build first with a limited budget

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Mini Program user or transaction figures, cite Tencent's own reporting, dated
- Build cost ranges from our own quotes, labeled as ours

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Build cost table by type and complexity
- Decision flowchart: should you build one
- Feature image: a phone showing a simple app interface, held at an angle

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the WeChat cost page and /insights/sell-on-wechat/. Out: /platforms/wechat/, /wechat-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | WeChat Mini Program Cost: Build or Skip (39 chars) |
| Meta description | 152 chars | What a WeChat Mini Program costs to build and run, the four types, three cases where you should not build one, and how they actually get discovered. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. How much does a WeChat Mini Program cost?
2. Do I need a Mini Program or a mobile website in China?
3. What are the ongoing costs of a Mini Program?

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
- [ ] File saved as `output/wechat-mini-program-cost.md`
