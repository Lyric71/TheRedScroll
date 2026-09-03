# TheRedScroll editorial system

You are drafting articles for **theredscroll.com**, a China social media agency
with offices in Shanghai and Hong Kong. One article per working day, from a
brief file in `briefs/`. Every path in this folder is relative to
`editorial/` at the repo root.

Read this file and `SPEC.md` before every draft. **These two files override any
conflicting rule inside the createarticle, content-quality-us,
generate-image-openai and createblogarticle skills.** The repo's
`.claude/CLAUDE.md`, `STYLE_GUIDE.md`, `DESIGN_GUIDE.md` and
`TRANSLATION_GUIDE.md` still apply on top.

## The pipeline, in order

Every article goes through these steps. None is optional.

| Step | Skill or tool | What it does | Status it sets in `schedule.csv` |
|---|---|---|---|
| 0. Research | Chinese deep research (inside `/createarticle`) | Sources every figure in Chinese first, validates each source twice | (logged in the run log) |
| 1. Draft | `/createarticle` | 13 iterations from the brief to `output/<slug>.md` | `drafted`, `drafted_on` |
| 2. Quality | `/content-quality-us` | 18-pass loop on the draft, in place | `quality_passed`, `quality_passed_on` |
| 3. Image | `/generate-image-openai` | Hero image from the feature-image block | `image_ready`, `image_generated_on` |
| 4. Publish | `/createblogarticle` + build + git | Creates the post in `src/content/blog/`, wires the image, propagates locales, runs `npm run build` and `npx astro check`, commits on main, pushes to origin | `published`, `published_on` |
| 5. Notify | `editorial/scripts/notify-publish.mjs` (Resend) | Emails a publish summary to Cyril | (noted in the run log) |

"Draft today's article." runs steps 0 to 3 and stops. Step 4 runs only when a
person says "Publish <slug>" after reviewing the draft. Step 5 follows step 4
automatically. Nothing publishes itself.

Step 2 runs on all 52 articles, not only the six high-stakes ones the original
plan named. Step 3 uses the `generate-image-openai` skill only, never the
older `scripts/generate-image.mjs` in this repo.

## Project wins over runbook

When `RUNBOOK.md` or `SPEC.md` asks for something this repo cannot do, use
what the repo has and note the substitution in the run log. Do not stall, do
not invent a tool, do not ask. Examples already settled: email goes through
Resend (the contact form's provider), not a Gmail connector; images go to
`public/images/blog/`; industry and tool pages use the `industries` and
`tools` collections in `src/content/`.

## Model quality: no compromise

Every step of this pipeline runs on the most capable model available at the
time. Drafting, the quality loop, translation and review run on the best
Claude model in this environment, never a faster or smaller mode. Image
generation uses `gpt-image-2` at `--quality high`. If a step is offered a
cheaper path, decline it and say so in the log.

## Research before writing: Chinese first, validated twice

Not a sentence of body copy gets written before the research is done and
logged. The full procedure is Step 1 of the `createarticle` skill. The rules
that matter most:

- Search in Chinese first (微信, 小红书, 抖音, 微博, 哔哩哔哩, and the
  regulator or publication names in characters). English sources confirm,
  they do not lead.
- Prefer the platform's own documentation, regulators, listed-company
  filings and dated Chinese trade publications. Follow every figure back to
  its original source. Never cite a competitor's blog.
- **Every source is validated twice.** Check 1 at research time: fetch the
  URL, confirm the figure, unit, period and date are on the page. Check 2 in
  iteration 8, before the draft is finished: re-fetch every cited URL and
  confirm it still says what the blockquote says.
- Both check dates go into `sources/verified-sources.md`. A figure with one
  check is not publishable.
- The research note (claim, Chinese source, English gloss, date, URL,
  check 1 result) goes into the run log before iteration 1 starts.

## The one conflict you must resolve

The upstream CreateArticle skill plants deliberate typos in iteration 7. The
house copy installed at `.claude/skills/createarticle/` already replaces that
with a cadence pass, but the rule stands on its own: **no deliberate errors,
ever.** No planted misspellings, no missing apostrophes, no then/than swaps.
Humanize through cadence, sentence length, structure and word choice only.
Say in your log that iteration 7 ran as the cadence variant.

If a draft ever contains planted errors, the skill was ignored. Rerun
iteration 7.

## Three smaller conflicts, already decided

1. **SEO ceilings.** `content-quality-us` says title under 60 and meta under
   156. The house ceilings are tighter: title 52, meta 152, excerpt 25 words.
   The tighter number wins. The blog schema caps `metaTitle` at 60 and
   `metaDescription` at 155, so house-compliant copy always fits.
2. **Image paths.** The site keeps hero images at `public/images/blog/<slug>.webp`
   and references them as `/images/blog/<slug>.webp`. Use that, not
   `images/insights/`. Industry and tool pages use the same folder.
3. **Prices in public copy.** `STYLE_GUIDE.md` section 6.4 is the source of
   truth: never mention specific prices or package tier names in public
   content. That includes every article in this plan, cost pieces included.
   Say that TheRedScroll publishes a full rate card and refer readers to the
   pricing page by name. Never quote a monthly figure, a per-item rate or a
   tier name ("Start", "Most Popular", "Lead") in body copy, titles, slugs,
   meta descriptions, FAQs or tables. Cost articles still answer the cost
   question with market ranges from sourced third parties; our own numbers
   live on the pricing page only.

## Voice

American English. US daily-newspaper journalist style. Grade 8 reading level.
If a sentence is hard to read, rewrite it.

Short sentences. One idea each. No jargon, ever. Say what you mean in plain
words.

Write for humans first. Always.

## Absolute rules

- **No em dashes.** Not one. Use commas, periods, parentheses or colons.
- **No exclamation marks.** House style.
- **No deliberate errors.** See above.
- **No summary or conclusion section.** End on the CTA.
- **No "why work with us" paragraph.** No agency self-promotion framing.
- **No fabricated figures.** If it cannot be sourced, cut the claim.
- **No competitor names.** Listicles verify claims on the competitor's live
  site or drop the competitor. Aggregate data ("0 out of 37") is fine.
- **No markdown links in body copy.** Internal references are plain-text names.
  The publish step converts them to links.
- **No HTML in body copy.** HTML comments for section labels are the exception.
- **Banned words** from `STYLE_GUIDE.md`: partners, solutions, manage,
  leverage, holistic, synergy, ecosystem (except a named platform's ecosystem),
  digital landscape, unlock, seamless, end-to-end, turnkey.

## Brand vocabulary

| Always say | Never say |
|---|---|
| TheRedScroll | The Red Scroll, TRS, Red Scroll |
| Clients | Partners |
| Services | Solutions |
| We grow your brand on China's social platforms | We manage / handle / leverage your social networks |
| More leads | Better visibility / brand awareness |
| Book a call | Schedule a complimentary consultation |

## What TheRedScroll actually sells

Do not invent services. These are the seven, exactly as the site names them.

- Strategy, Campaigns and Analytics
- Advertising
- Content Production
- Influencer Marketing
- China Market Entry
- CRM and Private Domain Traffic
- Training and Consulting

Platform money pages exist for WeChat, RedNote (Xiaohongshu), Douyin and Weibo.
Eighteen platforms are covered in total.

## The positioning, in one line

Fixed scope. Fixed price. No surprises. Ad spend billed separately with no
markups. Six-month minimum contract.

TheRedScroll publishes a full rate card on its pricing page. **No competitor
in the market publishes a monthly retainer figure.** That is the wedge behind
this whole editorial plan: we are the ones who publish, so every cost article
sends the reader to the pricing page by name. The figures themselves never
appear in an article (see conflict 3 above). When citing the competitive
claim, use the approved form: "0 out of 37 agencies analyzed offer
fixed-price packages (TheRedScroll competitive analysis, April 2026)."

## Named clients you may reference

Camper, Marriott, Jaguar Land Rover, Viessmann, iGuzzini, JAC Motors, Langnese,
Master Martini, Mission Foods, Age20s, Blue Insurance.

Client figures must be cleared before publication. If a brief asks for a client
number you cannot verify in `sources/verified-sources.md`, flag it in your log
and leave a `TODO: client sign-off` marker rather than guessing.

## Audience

Every article in this plan uses createarticle `audience = people out of China`.
The site is English-language and sells to international brands.

Each brief adds a **reader stage** which drives the opening and the CTA:

- `pre-entry`: has not launched in China yet. Lead with what they do not know.
  Job of the piece: demystify and de-risk. CTA is a first call.
- `in-market`: already running accounts and unhappy with results. Lead with
  the symptom they recognize. Job of the piece: diagnose honestly, including
  the cases where their agency did nothing wrong. CTA is an audit.
- `pre-entry and in-market`: open on the shared problem, then split the
  middle of the article so both readers find their case.

## Chinese terms

English first, characters in parentheses, on first reference in each section.
No pinyin.

WeChat (微信), Xiaohongshu (小红书), Douyin (抖音), Weibo (微博),
Bilibili (哔哩哔哩), WeCom (企业微信), Alipay (支付宝), Baidu (百度),
Kuaishou (快手), Zhihu (知乎), Meituan (美团), Dianping (大众点评),
Singles' Day (双十一), zhongcao (种草), Blue V (蓝V).

Use "Xiaohongshu" as the primary term and "RedNote" as the secondary. Both
appear on the site, but Xiaohongshu carries the search volume.

## Statistics

Every figure gets a blockquote citation with a source name and a date.

> Xiaohongshu reached 350 million monthly active users in 2025.
> Source: [publisher name], [month year]

**Check `sources/verified-sources.md` before researching.** If the figure is
logged, still current and verified twice, reuse the logged citation. If you
find a new one, append it to the ledger before you finish. The ledger is what
stops the same number being researched fifty-two times and cited three
different ways.

Not one of our ten competitors sources their statistics. Doing it is a
differentiator, for readers and for AI answer engines. It is not optional.

## Publish notification

When step 4 finishes, run from the repo root:

```
node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" --section insights --build passed --log editorial/logs/YYYY-MM-DD.md --todo "<any open item>"
```

It sends one email through Resend (key in `.env`) to cyril.drouin@gmail.com
with the live URL per locale, the hero image path, build status, open TODOs
and the run log path. Use `--section industries` or `--section tools` for
those pages. Add `--dry-run` to preview. If the send fails, say so in the run
log and the final message instead of skipping silently.

## Where files go

| What | Where |
|---|---|
| Today's brief | `briefs/YYYY-MM-DD-slug.md` |
| Finished draft | `output/slug.md` |
| Hero image | `../public/images/blog/slug.webp` |
| Published post | `../src/content/blog/slug.md` (plus `blog-fr`, `blog-zh`, `blog-de`, `blog-es`) |
| Published industry page | `../src/content/industries/slug.md`, live at `/industries/slug/`, English only |
| Published tool page | `../src/content/tools/slug.md`, live at `/tools/slug/`, English only |
| Source ledger | `sources/verified-sources.md` |
| Site profile cache | `sources/site-profile.md` |
| Run log | `logs/YYYY-MM-DD.md` |
| Schedule and status | `schedule.csv` |

## Site fetch

createarticle Step 0 requires learning the website first. Do not fetch it
fifty-two times.

`sources/site-profile.md` caches the site's voice, service names, page
inventory and internal link targets. Read it instead. **Refresh it on the first
working day of each month**, or when a brief says the site has changed. The
repo itself is the ground truth: `src/pages/` for the page inventory,
`src/content/blog/` for existing articles, `src/pages/pricing.astro` for
prices.
