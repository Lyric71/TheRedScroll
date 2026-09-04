---
brief_id: 04C
publish_date: 2026-10-01
week: 04
slot: C
slot_job: audience piece
week_theme: "Show what the money buys"
content_type: Audience
status: not_started
---

# BRIEF 04C: Sensitive words that get your Xiaohongshu posts hidden

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
| Working H1 | Sensitive words that get your Xiaohongshu posts hidden |
| Slug | `/insights/xiaohongshu-sensitive-words/` |
| Output file | `output/xiaohongshu-sensitive-words.md` |
| Primary query | `xiaohongshu banned words` |
| Secondary queries | `xiaohongshu sensitive keywords`, `rednote content restrictions`, `why was my xiaohongshu post removed` |
| Search intent | Problem |
| Body length | 1,600 words (body only, per the char-count rule) |

## The angle

Operational, specific, and highly citable. This is the kind of page other people link to and AI answers quote. Publish a real categorized list, explain the mechanism, and give safe alternatives rather than only warnings.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. How content review actually works on Xiaohongshu
2. Absolute superlatives: the advertising law problem
3. Health and efficacy claims
4. Money, pricing and off-platform transaction words
5. Competitor and comparison language
6. Contact details and traffic diversion
7. Politically sensitive categories, handled plainly
8. Safe alternatives: a rewrite table
9. What to do when a note is already limited

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- China Advertising Law provisions on superlatives, cite the law directly
- Platform community guidelines, cite and date them
- Examples from our own moderated posts, labeled as ours

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Rewrite table: risky phrase, why it fails, safe alternative. This is the asset the page is built around.
- Category table with severity rating
- Feature image: a redacted text block, typographic, no stock photography. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo with real-life defects, no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from the algorithm piece and the not-growing piece. Out: /services/content-production/, /rednote-agency/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Request an account audit**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Xiaohongshu Words That Get Posts Hidden (39 chars) |
| Meta description | 152 chars | The words and claims that get Xiaohongshu notes limited or removed, why they fail under China advertising law, and safe alternatives you can use (144 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. Why was my Xiaohongshu note removed?
2. Can I use the word best in Chinese advertising?
3. How do I recover a limited note?

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
- [ ] File saved as `output/xiaohongshu-sensitive-words.md`
