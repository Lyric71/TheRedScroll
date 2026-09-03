---
brief_id: 02B
publish_date: 2026-09-15
week: 02
slot: B
slot_job: platform depth
week_theme: "Own the Xiaohongshu cost answer"
content_type: Cluster guide
status: not_started
---

# BRIEF 02B: How the Xiaohongshu algorithm works in 2026

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
| Working H1 | How the Xiaohongshu algorithm works in 2026 |
| Slug | `/insights/xiaohongshu-algorithm/` |
| Output file | `output/xiaohongshu-algorithm.md` |
| Primary query | `xiaohongshu algorithm` |
| Secondary queries | `rednote algorithm`, `how xiaohongshu distribution works`, `xiaohongshu traffic pool` |
| Search intent | Informational |
| Body length | 2,000 words (body only, per the char-count rule) |

## The angle

InfluChina published an algorithm guide two weeks ago. Ours has to be better on one axis they cannot match: what we see in our own account analytics. Show a real traffic pool progression from an account we run. Specific beats comprehensive.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. The traffic pool model, explained without jargon
2. The four signals that decide whether a note escapes the first pool
3. Why the first hour matters more than the first day
4. Search versus feed: two different distribution paths
5. Tags, titles and covers: what the ranking actually reads
6. What gets a note limited without telling you
7. How to read your own note analytics
8. A real note, traced from post to 40,000 views

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Traffic pool thresholds, from our own account data, labeled as ours
- Share of Xiaohongshu traffic that comes from search, cite the platform
- Do not cite competitor blogs as sources for platform mechanics

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Diagram: the traffic pool escalation, five stages
- Annotated analytics screenshot from a real account, figures blurred where needed
- Table: signal, weight, what you control
- Feature image: abstract layered concentric shapes suggesting distribution tiers

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the Xiaohongshu guide. Out: /rednote-agency/, next piece on account setup

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How the Xiaohongshu Algorithm Works (35 chars) |
| Meta description | 152 chars | The Xiaohongshu traffic pool model explained: the four signals that decide distribution, why the first hour matters, and how to read your note (142 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Why did my Xiaohongshu note get no views?
2. How long does it take for a note to get distribution?
3. Does posting time matter on Xiaohongshu?

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
- [ ] File saved as `output/xiaohongshu-algorithm.md`
