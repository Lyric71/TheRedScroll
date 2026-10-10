# TheRedScroll editorial system

You are drafting articles for **theredscroll.com**, a China social media agency
with offices in Shanghai and Hong Kong. One article per draft run, every day,
from a brief file in `briefs/`. Every path in this folder is relative to
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
| 4. Publish | `/createblogarticle` + `/deep-translate` + build + git | Creates the post in `src/content/blog/`, wires the image, propagates to FR, ZH, DE and ES, runs `/deep-translate` (three passes) on each locale, runs `npm run build` and `npx astro check`, commits on main, pushes to origin | `published`, `published_on` |
| 5. Notify | `editorial/scripts/notify-publish.mjs` (Resend) | Emails a publish summary to Cyril | (noted in the run log) |

"Draft the next article." (the older "Draft today's article." means the same)
runs steps 0 to 3 on the next row in the queue and stops. Step 4 runs when a
person says "Publish <slug>", or in the scheduled publish run, which takes
every `image_ready` row (see `RUNBOOK.md`, "Automating it"). Step 5 follows
step 4 automatically.

## The queue order (standing rule, Cyril, Oct 10, 2026)

`publish_date` in `schedule.csv` orders the queue. It never gates a run, in
either mode. Waiting on it left five finished drafts unpublished and the draft
task idle three days a week (fixed Oct 10, 2026).

- **Drafting** first finishes a row an interrupted run left at `drafted` or
  `quality_passed`, else takes the earliest `not_started` row in
  `publish_date` order, whatever its date. A future date is never a reason to
  skip a row or end the run. "No row to draft, end the run" holds only when
  the queue is truly empty.
- **Publishing** takes every `image_ready` row, whatever its date, in
  `publish_date` order, one commit per row.
- **Non-date stops stay:** a `blocked` row is never drafted or published.
- **The one date exception is `content_type` Timely**, a piece tied to a real
  event (08D, the Double 11 countdown; 10D, the Double 11 results). A Timely
  row is drafted no earlier than the day before its `publish_date` (once that
  day comes it goes first) and published no earlier than that date. Until
  then the runs skip it and take the next row. A new event-bound brief gets
  `content_type` Timely; seasonal or evergreen pieces do not.

`editorial/scripts/check-queue.mjs` runs after every draft run and mails Cyril
once a day at most when drafting stalls two days with briefs waiting, a
finished draft sits at `image_ready` two days, or a week or less of briefs is
left. It reports facts, never an open items list.

Step 2 runs on all 52 articles, not only the six high-stakes ones the original
plan named. Step 3 uses the `generate-image-openai` skill only, never the
older `scripts/generate-image.mjs` in this repo.

## No TODO leaves a run (standing rule, Cyril, Oct 2, 2026)

A publishing job never leaves a TODO behind. That covers every step: the
research, the draft, the quality pass, the image, the publish run and the
notification email. No TODO marker, no "open items", no "for a person" list,
no "flag for Cyril", no "Phase 2" deferral, no "offer to propagate". Every
item a run finds is closed inside that run:

- **A missing or unverified fact** is researched to the source standard in
  this file and `SPEC.md`, or the claim is cut. Never a TODO marker in a
  body, table, caption, comment block or frontmatter.
- **An existing page the new piece contradicts** (an older article or a site
  page, in any locale) is fixed in the same run, in every locale, with
  `updatedDate` set on each content file whose body changed.
- **A brief or spec the research proved wrong** is amended at the source in
  `briefs/` or in this folder, including any later brief that repeats the
  error.
- **A missing link, slug or asset** is created when the destination can be
  verified; otherwise the settled fallback in `SPEC.md` ("Settled
  fallbacks") applies and the gap is not raised again. Link wiring and
  factual corrections made by a pipeline run apply to every live locale:
  this overrides the single-locale default in `TRANSLATION_GUIDE.md` for
  pipeline runs only.
- **A future watch item** (a page to recheck, a source that was down) goes
  into the repo's own mechanism: a dated note on the entry in
  `sources/verified-sources.md`, or a row note in `schedule.csv`. Never the
  email, never a list at the end of the log.

The run log records what was found and how each item was closed, under
"Items found and closed". It has no "Open items" section. The notification
email has no TODO or open items section, and `notify-publish.mjs` refuses to
send if asked to carry one. `node editorial/scripts/check-no-todo.mjs` fails
on any marker in `src/content`, runs inside `npm run build`, and the publish
step runs it on `output/<slug>.md` before anything moves.

**If something cannot be closed without Cyril's decision, the run stops
before publishing.** The draft run sets the row to `blocked` with the reason
in `notes`; the publish run leaves the row where it is, does not commit or
push, and sends the email with `--build failed` and the reason in `--note`,
written as a stop, not as a TODO. It never publishes with a TODO attached.

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

(Further settled decisions, so they are not raised again: the Oxford comma is
always used, per `STYLE_GUIDE.md` 4.9; editorial articles keep the English
slug in every locale, per `RUNBOOK.md`, and that is not flagged; the full
list of settled fallbacks is in `SPEC.md`.)

1. **SEO ceilings.** `content-quality-us` says title under 60 and meta under
   156. The house ceilings are tighter: title 52, meta 152, excerpt 25 words.
   The tighter number wins. The blog schema caps `metaTitle` at 60 and
   `metaDescription` at 155, so house-compliant copy always fits.
2. **Image paths.** The site keeps hero images at `public/images/blog/<slug>.webp`
   and references them as `/images/blog/<slug>.webp`. Use that, not
   `images/insights/`. Industry and tool pages use the same folder.
   **Image content, permanent rule:** every hero is China-related and shows
   Chinese social platforms on screen (WeChat, Xiaohongshu, Douyin, Weibo)
   in a typical Chinese city (varied, not only Shanghai), with only Chinese people in frame, shot as candid
   normal-life photography rather than AI polish, in crisp sharp focus with
   legible screens. Never ask for motion blur, smudges, noise or shallow
   depth of field (Cyril, Sept 10, 2026: those made the first heroes blurry).
   Convert with `editorial/scripts/convert-hero.mjs` and check its 100% crop.
   The brief's feature-image line is a subject hint only. See SPEC, Feature
   image.
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

Client figures, settled (Oct 2, 2026): a client figure or line may be used
only as it is published on that client's live case study page on this site
(`/work/<client>/`), quoted, cited to that page and dated. Publication on the
site, with the client named, is the clearance. Anything the page does not
publish (a monthly series, a campaign post-mortem, an unpublished outcome) is
not used and not estimated, and the article stands without it. No marker, no
sign-off chase in the log or the email. If a brief cannot stand without an
unpublished client figure, the draft run sets the row to `blocked` with that
reason before anything is written.

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
node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" --section insights --build passed --log editorial/logs/YYYY-MM-DD.md --note "<commit hash>"
```

It sends one email through Resend (key in `.env`) to cyril.drouin@outlook.com
(the only address Resend's testing mode can deliver to; switch the default in
the script to gmail once a sending domain is verified)
with the live URL per locale, the hero image path, build status and the run
log path. The email has no TODO or open items section: every item was closed
before the publish, or the publish did not happen (see "No TODO leaves a
run"). The script refuses `--todo` and any `--note` that reads like an open
item list. Use `--section industries` or `--section tools` for
those pages. Add `--dry-run` to preview. If the send fails, say so in the run
log and the final message instead of skipping silently.

## Where files go

| What | Where |
|---|---|
| The row's brief | `briefs/YYYY-MM-DD-slug.md` (the date is the row's `publish_date`, a queue position) |
| Finished draft | `output/slug.md` |
| Hero image | `../public/images/blog/slug.webp` |
| Published post | `../src/content/blog/slug.md` (plus `blog-fr`, `blog-zh`, `blog-de`, `blog-es`) |
| Published industry page | `../src/content/industries/slug.md` (plus `industries-fr`, `-zh`, `-de`, `-es`), live at `/industries/slug/`, `/fr/secteurs/slug/`, `/zh/hangye/slug/`, `/de/branchen/slug/`, `/es/sectores/slug/` |
| Published tool page | `../src/content/tools/slug.md` (plus `tools-fr`, `-zh`, `-de`, `-es`), live at `/tools/slug/`, `/fr/outils/slug/`, `/zh/gongju/slug/`, `/de/tools/slug/`, `/es/herramientas/slug/` |
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
