---
brief_id: 11B
publish_date: 2026-11-17
week: 11
slot: B
slot_job: platform depth
week_theme: "Get into the AI answers"
content_type: Pillar
status: not_started
---

# BRIEF 11B: GEO in China: how brands get cited by DeepSeek, Doubao, Qwen and Baidu AI

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
| Working H1 | China generative engine optimization: how to earn useful citations |
| Slug | `/insights/china-generative-engine-optimization/` |
| Output file | `output/china-generative-engine-optimization.md` |
| Primary query | `china generative engine optimization` |
| Secondary queries | `china geo`, `deepseek seo`, `china ai search optimization`, `doubao optimization` |
| Search intent | Informational |
| Body length | 2,600 words (body only, per the char-count rule) |

## The angle

Second pillar of the plan. Distinguish Chinese consumer apps, model families, and developer search services using primary Chinese documentation. Use our own robots.txt, IndexNow configuration, and emitted schema as an inspectable example, not as proof of citation performance or superiority over competitors. Research correction, October 23, 2026: no universal ranking formula or citation guarantee was established.

## Section outline

Follow this order. Rename headings into plain reader language. Do not add a
summary or conclusion section. End on the CTA.

1. Why China's AI search layer is a separate problem
2. The models that matter: DeepSeek, Doubao, Qwen, ERNIE and Baidu AI
3. How each one sources its answers
4. Five editorial checks, explicitly not proven ranking signals
5. Structured data: what the implementation proves and what provider documentation does not establish
6. The Chinese-language content problem: translation is not enough
7. Third-party citation: judge sources by evidence, without claiming directories or listicles have greater weight in China
8. Measuring AI visibility without a paid tool
9. A working checklist, using our own site as the example

## Statistics to source

Every figure below needs a dated, linked source in blockquote format. Check
`../sources/verified-sources.md` first: if the figure is already logged and
still current, reuse the logged citation instead of researching again. If you
find a new figure, append it to that ledger before you finish.

- Model market share or usage figures in China, cite dated sources
- Crawler behavior, cite each model provider's published documentation where it exists
- Our own robots.txt, IndexNow and schema setup as a demonstrated example

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Assets to brief

Describe each of these in the handoff block at the end of the file. Do not
embed images in body copy.

- Table: model, how it sources answers, what to optimize
- Five-check table (SPEC fallback 7; no diagram)
- Working checklist table the reader can apply
- Feature image: a citation bracket rendered large and typographically, no robot imagery. China rule: set the scene in China and show Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin or Weibo interface on a phone, laptop or studio monitor); set in a typical Chinese city, varied from article to article and not only Shanghai, only Chinese people in frame, candid normal-life photo in crisp sharp focus with legible screens (never blur, smudges or noise), no AI polish; this rule wins over the subject hint

## Tables required

At least one comparison table near the top, and one topical table inside the
densest section. Keep them aligned and scannable.

## Internal links

In: from /ai/ and the platform pieces. Out: /ai/, /services/strategy-campaigns/, /contact/

Write these as plain-text references by name in body copy. Never as markdown
links.

## CTA

Final section only. CTA label: **Book a call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China generative engine optimization: a guide (45 chars; corrected October 23, 2026, to match the evidence-led scope and primary query) |
| Meta description | 152 chars | China generative engine optimization: check how AI tools find sources, publish useful Chinese answers, and track accurate citations to your brand. (146 chars; corrected October 23, 2026, to remove unsupported five-signal framing) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved. Use them unless the finished article
makes them inaccurate, in which case rewrite within the same ceilings and note
the change.

## FAQ block

Add these as a FAQ section before the CTA, marked up for FAQPage schema in the
handoff block. Answer each in 40 to 70 words.

1. What is GEO and how is it different in China?
2. How do I get my brand cited by DeepSeek?
3. Does Chinese AI search read structured data?

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
- [ ] File saved as `output/china-generative-engine-optimization.md`
