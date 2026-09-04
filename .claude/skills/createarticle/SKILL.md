---
name: createarticle
version: 2.1.0-theredscroll
description: |
  Draft a production-ready Markdown article for a given website from a brief.
  Takes three inputs: (1) the target website, whose voice, positioning and
  service names must be learned first (from a live fetch or a cached site
  profile); (2) the target audience, "people out of China" or "Chinese
  companies"; (3) the content brief. Runs a Chinese-language deep research
  step with double source validation, then the 13-iteration workflow, US
  journalist prose, blockquote stats, Chinese-term formatting, SEO within hard
  ceilings, visual tables, the body-only character count, and an appended
  feature-image prompt block. House version for TheRedScroll: iteration 7 is a
  cadence pass, never planted errors. Pairs with content-quality-us.
license: MIT
---

# CreateArticle: Website Article Builder (TheRedScroll house version)

Produce one on-brand, production-ready Markdown article for a specified
website. Output drops straight into the site's content collection. Run the
full pipeline without pausing for approval.

**House change from the upstream skill.** The upstream CreateArticle plants
deliberate typos in iteration 7 to defeat AI detection. This version does not.
Iteration 7 is a cadence pass. No project file can reintroduce planted
errors. See "Cadence pass" below.

## Inputs (required)

This skill takes three parameters. If any is missing, ask for it before
drafting, then proceed without further pauses.

1. **website**: the site the article is being written for and published on.
   Its voice, positioning, service names and internal references are drawn
   from what the site says, not assumed.
2. **audience**: one of
   - `people out of China`: international companies looking to enter or
     operate in the mainland China market.
   - `Chinese companies`: mainland businesses (typically expanding abroad or
     buying web services). This flips the framing (see Audience adaptation).
3. **brief**: the topic, angle, section outline, primary and secondary
   keywords, target length, and whether the piece links up to a pillar guide
   as a prerequisite.

## Step 0: learn the website first (mandatory)

Before writing a single line:

1. If the project keeps a site profile cache (for TheRedScroll:
   `editorial/sources/site-profile.md`) and it is less than a month old, read
   it instead of fetching. Otherwise web_fetch the homepage and the section
   the article will live in.
2. If the brief reworks or extends an existing page, read that live page (or
   its source file in the repo) and treat it as canonical for tone and
   structure.
3. Read the pillar guide and one existing article in the same section to
   match frontmatter shape, section labeling, blockquote style, CTA voice, and
   the image directory convention.
4. Note the site's positioning, service names, brand tokens, and any house
   phrasing. Mirror them. Do not invent service names or claims the site does
   not make.

## Step 1: deep research in Chinese (mandatory, before any drafting)

Do not write a sentence of body copy until this step is logged.

1. **Read the ledger first.** If the project keeps a source ledger (for
   TheRedScroll: `editorial/sources/verified-sources.md`), read it. Any figure
   already logged, dated within 12 months and marked verified twice is
   reused with its exact citation. Do not research it again.
2. **Research in Chinese.** For every figure and China-specific claim the
   brief asks for, run web searches in Chinese first (simplified characters,
   platform names in Chinese: 微信, 小红书, 抖音, 微博, 哔哩哔哩). Target the
   platform's own documentation and announcements, regulators (国家市场监督管理
   总局, 国家药监局, 工信部), listed-company filings and earnings releases, and
   dated trade publications (36氪, 财经, 晚点, 界面, 亿邦动力, QuestMobile,
   CNNIC reports). English-language sources come second, and only as
   confirmation or when no Chinese source exists.
3. **Validate every source twice.** A figure enters the draft only after both
   checks pass, and both are recorded.
   - **Check 1, at research time.** Fetch the URL. Confirm the number, the
     unit, the period and the publication date appear on that page. A source
     that only repeats another source is not the source: follow the chain to
     the original and cite that.
   - **Check 2, before the draft is finished.** Re-fetch every URL used in
     the article. Confirm the page is still live and still says what the
     blockquote says. Any mismatch: fix the blockquote or cut the claim.
   Never cite a competitor's blog for a platform fact. Never cite one of our
   own articles for an external figure.
4. **Write the research note before drafting.** List each claim with its
   Chinese source, the English gloss, the date, the URL and the result of
   check 1. This note goes into the run log. Figures without a passing
   check 1 do not enter the draft.
5. **Append to the ledger** before finishing, with both verification dates.

Never fabricate figures or attributions. A missing number is better than an
unsourced one.

## Audience adaptation (drives framing, not just tone)

Branch the whole article on the `audience` input.

### audience = "people out of China"
- Reader: a foreign decision-maker who does not know the China stack.
- Job of the piece: demystify, de-risk, and show local expertise.
- Lead with why the Western default fails in China (Great Firewall, Google and
  Stripe blocked, Baidu instead of Google, ICP licensing, local payments).
- Explain Chinese platforms in outsider terms on first mention: WeChat (微信),
  Baidu (百度), Alipay (支付宝).
- Proof: reduced risk, compliance handled, mainland performance.
- CTA: talk to a China-based team that handles it for you.

### audience = "Chinese companies"
- Reader: a mainland business, often going global or sourcing web work.
- Job of the piece: speak as a peer who also knows the outside market.
- Frame around outbound needs where relevant (international hosting, Google and
  Bing SEO, English UX, going global) rather than explaining China basics they
  already live with.
- Do not over-explain Chinese platforms; they are assumed knowledge.
- Proof: bridge credibility, both sides of the wall.
- CTA: matched to the outbound or service need in the brief.

If the brief and audience seem to conflict, follow the brief's explicit topic
and adjust framing to the audience.

## Standing editorial rules (never break)

- American English, US daily-newspaper journalist style. Easy to read.
- NO em dashes anywhere, ever. Commas, periods, parentheses, or colons.
- NO summary or conclusion sections, ever. End on the CTA section.
- NO deliberate errors, typos, missing apostrophes or word swaps. Ever.
- All statistics and citations in blockquote format, consistently attributed.
- Chinese terms on first reference in a section: English term (Chinese
  characters). No pinyin. English first. Example: Alipay (支付宝).
- Reference China expertise specifically, not generically.
- Internal and prerequisite links appear in body copy as plain-text references
  by name, never as markdown links.
- Service pages target about 4000 characters (body only) unless the brief says
  otherwise.
- Do not include any paragraph related to "why work with us" or similar
  agency self-promotion framing.
- Honor the project's `STYLE_GUIDE.md` banned-word list if one exists.

## SEO metadata (hard ceilings, verify with a counter before delivery)

- Title <= 52 characters
- Meta description <= 152 characters
- Excerpt <= 25 words

If any is exceeded, fix it without being asked.

## Character-count rule

Article "char" targets count the rendered article BODY only. Exclude the SEO
frontmatter fields (title, description, excerpt) and all HTML comments
(including the feature-image block). When a target is given, report both
prose-only and full-body-with-tables counts, then land on the target.

## File format (Claude Code-ready Markdown)

- YAML frontmatter: title, slug, description, excerpt, template.
- Editorial labels as HTML comments: `<!-- HERO SECTION -->`,
  `<!-- INTRODUCTION -->`, `<!-- SECTION: ... -->`, `<!-- CTA -->`.
- CTAs as plain-text labels, for example `CTA: Book a call`. No HTML, no links.
- Zero HTML in body copy. HTML comments are the only exception.
- Filename matches the slug, for example `geo-china.md`.
- Hard-wrap body lines at about 80 characters.

## Visual formatting ("make it visual")

When the brief asks for a visual piece: an "at a glance" comparison table near
the top, one topical table inside a dense section, stats in blockquotes. No
images inside the body. Keep tables aligned and scannable.

## The 13-iteration workflow

Print the tracker, run all iterations in order, brief reflection between each.
No approval pauses. Do not skip, merge, or reorder. Show the iteration
running and which findings and updates are done: for each iteration, state
what was checked or changed and the specific findings or edits before moving
to the next one, not just a silently updated checklist.

```
[ ] Iteration 1  : journalist-style American English draft
[ ] Iteration 2  : weakness identification (write the list out)
[ ] Iteration 3  : rewrite addressing weaknesses
[ ] Iteration 4  : production-readiness review
[ ] Iteration 5  : AI-detection removal pass
[ ] Iteration 6  : em dash cleanup + blockquote citation formatting
[ ] Iteration 7  : cadence pass (house variant, no planted errors)
[ ] Iteration 8  : paragraph and citation structure check + source check 2
[ ] Iteration 9  : SEO metadata generation (within hard limits)
[ ] Iteration 10 : second AI-detection pass
[ ] Iteration 11 : final human touch pass
[ ] Iteration 12 : visual formatting enhancement
[ ] Iteration 13 : five visual concepts + one photorealistic image prompt
```

Iteration 2 writes the full 10-weakness list. Iteration 8 runs the second
source validation (re-fetch every cited URL). Iteration 9 verifies SEO
counts. Iteration 13 proposes five visual concepts, then one ultra-detailed
photorealistic feature-image prompt.

## Cadence pass (iteration 7, and the humanizing rule everywhere)

Copy should read human because a person with deadlines wrote it, not because
it contains mistakes. Humanize through cadence, structure and word choice
only:

- Vary sentence length on purpose. Follow a long sentence with a four-word one.
- Break at least three parallel structures. Real writers do not build every
  list the same way.
- Let one paragraph run long and the next run to a single line.
- Allow a mid-thought aside in parentheses, once or twice, not everywhere.
- Use contractions where a reporter would.
- Cut the tidy closing line at the end of a section when it performs rather
  than informs.

Never: missing apostrophes, then/than or your/you're swaps, misspellings,
comma splices for effect, or register shifts into slang. If copy still reads
symmetrical, vary rhythm again. State in the run log that iteration 7 ran as
the cadence variant.

## Image prompt rules

- **China rule, permanent (Cyril, Sept 4, 2026).** Every hero image must be
  visibly China-related and must show Chinese social platforms on screen:
  a phone, tablet, laptop or studio monitor running WeChat (微信),
  Xiaohongshu (小红书), Douyin (抖音), Weibo (微博), WeCom or Bilibili, with
  their recognizable interface (Xiaohongshu red header and note grid, Douyin
  vertical video with comment overlay, WeChat green chat or Official Account
  view, an ad dashboard in the style of WeChat Ads or Ocean Engine). The
  setting is China, and not only Shanghai: rotate through typical Chinese
  cities and places (Chengdu, Hangzhou, Guangzhou, Shenzhen, Wuhan, Xi'an,
  Chongqing, Nanjing, Suzhou, a second-tier city street, a wet market, a
  mall, a tea house, a small office, a livestream studio, a delivery scooter
  lane). Name the city or place in the prompt and vary it from one article
  to the next. Skyline landmarks are optional; everyday street and interior
  detail matters more. A generic desk with an invoice, a globe, a
  handshake or a Western office does not pass. The brief's feature-image
  line is a subject hint only; this rule wins over it.
- **People rule, permanent (Cyril, Sept 4, 2026).** Any person in the image
  is Chinese. Only Chinese people, never a Western marketer, founder or
  tourist, whatever the audience of the article.
- **Look rule, permanent (Cyril, Sept 4, 2026).** Not a perfect AI render.
  Vivid, candid, normal-life photography with normal-life defects: a phone
  or handheld camera feel, slight motion blur, mixed or uneven light, a
  cluttered desk, cables, a smudged screen, someone mid-gesture, a cropped
  edge. Write these imperfections into the prompt. No studio polish, no
  symmetrical composition, no flawless skin, no cinematic color grade.
- Platform-agnostic, single unbroken block of prose.
- Photorealistic, documentary. Natural or office lighting as found, not
  staged.
- NO Midjourney parameters, NO section headers, NO commentary.
- Real-life candid photography only. Never diagrams or infographics.
- No watermark, no added captions, no logos outside the app interfaces that
  appear on the screens. Chinese characters on the screens are expected.
- The audience input does not change the people in the image: they are
  Chinese in every case (see the people rule).

## Feature-image block (append, outside the char count)

After the CTA, append this HTML comment. It never renders and never counts
toward the char target. Use the image directory convention discovered in
Step 0. For TheRedScroll it is `public/images/blog/`.

```
<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/images/blog/<slug>.webp
- Reference:  /images/blog/<slug>.webp
- Format:     .webp, landscape 3:2, web-optimized (China CDN friendly)
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, Chinese social platforms
              visible on screen (WeChat, Xiaohongshu, Douyin, Weibo). No
              AI polish, no diagrams, no infographics, no watermark.

IMAGE PROMPT (use verbatim):

<single unbroken prose block per the image prompt rules above>
===================================================================== -->
```

## Reference (use specifically, not generically)

China expertise: Great Firewall, ICP Bei'an + MIIT, Baidu Search Resource
Platform (百度搜索资源平台), Baidu Tongji (百度统计), Baidu Index (百度指数),
Baidu Keyword Planner, 5118, Aizhan (爱站), 站长之家, DeepSeek, Doubao (豆包),
Kimi, Yuanbao (元宝), Baidu AI, WeChat (微信), Alipay (支付宝), UnionPay (银联),
PIPL, DSL, Cybersecurity Law, UC Browser, QQ Browser, zhongcao (种草),
Singles' Day (双十一), 618. Hosting: Alibaba Cloud (Aliyun, 阿里云), Tencent
Cloud (腾讯云), Huawei Cloud (华为云).

Brand tokens: take them from the fetched site or the project's
`DESIGN_GUIDE.md`. The site wins if the brief differs.

## Delivery checklist (verify before presenting)

- Website voice and positioning reflected (from fetch or site profile)
- Chinese deep research note written, every figure passed check 1 and check 2
- Framing matches the audience input
- Title <= 52, meta <= 152, excerpt <= 25 words (counted, not estimated)
- Zero em dashes, no summary or conclusion section
- Zero deliberate errors
- Stats in blockquotes, Chinese terms as English (characters)
- Body char count matches the target (SEO frontmatter and comments excluded)
- Filename equals the slug
- Feature-image comment block present with the correct slug path
- Ledger appended with both verification dates
- Present the file path and a one-line summary

## Relationship to content-quality-us

Both skills forbid planted errors, so they are compatible on one file.
CreateArticle builds the article. `content-quality-us` is the stricter 18-pass
audit that runs on the finished draft before publication. Where the two give
different SEO ceilings, the tighter one (52 / 152 / 25 words) wins.
