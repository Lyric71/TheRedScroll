---
title: How the Xiaohongshu Algorithm Works
slug: xiaohongshu-algorithm
description: The Xiaohongshu traffic pool model explained: the four signals that decide distribution, why the first hour matters, and how to read your note.
excerpt: What the platform's own engineers have said about distribution, what nobody publishes, and how to read your note analytics instead of guessing.
template: insight
---

<!-- HERO SECTION -->

# How the Xiaohongshu algorithm works in 2026

The platform's own engineering team has described the machine that decides
who sees your note. Most of what circulates in English about the Xiaohongshu
algorithm is not from them.

<!-- INTRODUCTION -->

Your note stalled at a few hundred views. Somebody told you it fell out of
the first traffic pool, and somebody else quoted a scoring formula with
weights in it. One of those things is documented. The other is not. Here is the
split, before anything else.

| The question you are asking | What the platform has actually published | Source |
|---|---|---|
| Is distribution staged? | Yes. Recall, coarse ranking, fine ranking, named by the platform's own engineers | Xiaohongshu tech team, March 2023 |
| How many people see it first? | Nothing. No pool size is published | Not published |
| What is a save worth against a like? | Nothing. No weighting is published | Not published |
| How fast does the system react? | Interaction labels used to be collected about 30 minutes after a note was shown; the pipeline now updates in minutes | Xiaohongshu tech team, March 2023 |
| Do new notes get their own shot? | Notes published in the last day are close to half of all homepage feed exposure | Xiaohongshu tech team, March 2023 |
| How big is search? | 800 million searches a day; 77% of daily users search to solve a problem | Platform figure, May 2026; Huxiu, May 2026 |

Three of those six rows say the same thing: nobody publishes it. That is the
real state of public knowledge about this platform, and it is where most
guides start filling in numbers of their own. Every source below was checked
twice in September 2026.

<!-- SECTION: What a traffic pool is -->

## What a traffic pool actually is

"Traffic pool" (流量池) is operator shorthand, not a term Xiaohongshu (小红书)
publishes. What the platform does publish is the shape of the pipeline your
note enters after review.

> In the first half of 2021, the main recall, coarse-ranking and
> fine-ranking modules behind the Xiaohongshu home feed were all updating on
> a daily cycle. The team rebuilt recall channels, index updates and model
> training to update by the minute.
> Source: Xiaohongshu technology and intelligent distribution department
> (小红书技术部), March 2023. https://www.6aiq.com/article/1679451572481

Read that backwards and the model falls out. Recall gathers candidate notes
that might suit a given user. Coarse ranking cuts that set down cheaply.
Fine ranking orders what survives. Every slot in every feed is filled that
way, for every user, every time they pull to refresh.

So your note is never "released" to a fixed audience of 200. It is entered
into a competition it either keeps winning or stops winning. The pool
language describes the result, which is that reach grows in steps rather
than smoothly, because each step needs the note to keep beating whatever else
recall dragged in.

And the competition is large.

> Xiaohongshu users publish more than 9 million notes and leave more than 70
> million comments a day.
> Source: Xiaohongshu (小红书) WILL 2026 conference, reported by 100EC
> (网经社), December 2025. https://www.100ec.cn/detail--6655530.html

Nobody publishes the rung sizes. Not the platform. Not its engineers, and no
regulator has ever asked them to. Every ladder you have seen (200, then 2,000, then 20,000) traces
back to an operator post quoting another operator post. We left it out.

<!-- SECTION: The four signals -->

## The four things the Xiaohongshu algorithm reads first

Four signals decide whether a note escapes its first audience. The platform
names all four. It publishes a weight for none of them.

| Signal | What the system reads | What you control | Published weight |
|---|---|---|---|
| Subject | Image, video, text and tags, read together | Cover, first line, topic tags | None |
| Match | Which users recall pulls your note for | The vocabulary your buyer actually uses | None |
| Early response | Clicks, reading, likes, saves, comments, follows | Hook, first screen, the question you ask | None |
| Standing | Whether the note and the account are clean | Filing paid work, honest claims | Not a weight, a gate |

**Subject** is not the caption. The platform reads the picture too.

> Multimodal understanding of content runs through the whole of Xiaohongshu's
> search, recommendation and transaction systems, with applications including
> short-video understanding, content quality evaluation and multimodal
> retrieval.
> Source: QbitAI (量子位), April 2022. https://www.qbitai.com/2022/04/34112.html

That is a 2022 statement and it has only become more true. A cover image that
says nothing in Chinese is a cover image the system cannot classify.

**Match** is the one nobody checks. If recall never pulls your note for the people who
would like it, nothing downstream matters. This is why a beautiful note about
"sustainable outerwear" dies while a plainer one about hardshell jackets
(冲锋衣) travels.

**Early response** is what the ranking models learn from.

> When a user interacts with a note, by liking or saving it, that tells the
> system the user is interested. When the interest is new for that user, a
> faster system learns it sooner and can surface related notes while the user
> keeps scrolling.
> Source: Xiaohongshu technology and intelligent distribution department
> (小红书技术部), March 2023. https://www.6aiq.com/article/1679451572481

**Standing** is not a score at all. It is a gate, and the section on holds
further down deals with it.

Now the formula. A scoring equation circulates widely in Chinese operator
posts and in English guides, giving likes and saves one point, comments and
shares four, and a new follower eight. It appears on no platform page, in no
engineering talk and in no filing. The Chinese post most often credited with
it introduces the formula as the version that circulates most widely, which
is not a source. We do not use it, and we would not price a campaign on it.

<!-- SECTION: The first hour -->

## Why the first hour matters more than the first day

Because Xiaohongshu (小红书) is built around fresh notes, and because the
system used to wait half an hour to find out whether yours was any good.

> Notes published in the last day have long made up a high share of homepage
> exposure on Xiaohongshu, and during this period that share grew quickly to
> close to half.
> Source: Xiaohongshu technology and intelligent distribution department
> (小红书技术部), March 2023. https://www.6aiq.com/article/1679451572481

Half the shelf, reserved for yesterday. That is the whole reason a dead note
feels so final: tomorrow the shelf refills.

> The traditional approach waits about 30 minutes after an item is shown
> before collecting the interaction labels it will train on.
> Source: Xiaohongshu technology and intelligent distribution department
> (小红书技术部), March 2023. https://www.6aiq.com/article/1679451572481

The team's whole project was cutting that lag, and the payoff was specific.

> Moving ranking and recall from daily to minute-level updates delivered over
> 10% more average time per user in the home feed, over 15% more
> interactions, and close to 50% better new-note efficiency.
> Source: Xiaohongshu technology and intelligent distribution department
> (小红书技术部), March 2023. https://www.6aiq.com/article/1679451572481

What that buys you in practice: the window where your own effort changes the
outcome is short, and it is at the start. Answer comments while they arrive.
Post when the people you want are holding their phones, not when your head
office is at its desk. Do not publish six notes in a row and then nothing for
nine days, because each one lands in a market that has already restocked.

<!-- SECTION: Search and feed -->

## Search and feed are two different machines

That is everything about the feed. Now the half of the platform that most
foreign teams never budget for.

Foreign brands tune the Xiaohongshu (小红书) feed and then wonder why the
numbers collapse after week one. They are tuning the half of the platform
that forgets.

> 77% of Xiaohongshu's daily active users use search to solve a problem, and
> 75% browse the recommendation feed.
> Source: Huxiu (虎嗅), May 2026. https://www.huxiu.com/article/4861801.html

Those add to more than 100 because most people do both. Search is not the
small path.

> Xiaohongshu passed 400 million monthly active users and 800 million
> searches a day.
> Source: Xiaohongshu (小红书) report, reported by Beijing Business Today
> (北京商报) via Sina Finance, May 2026.
> https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml

That number has roughly tripled in three years.

> Xiaohongshu handled about 300 million searches a day in mid-2023 and about
> 600 million a day in the fourth quarter of 2024.
> Source: Zhou Tian Finance (周天财经), reported by 199IT, December 2024.
> https://www.199it.com/archives/1731824.html

And a large share of it is shopping.

> 39 million users a day show product purchase-seeking behavior on
> Xiaohongshu, 140 million instances a day.
> Source: 36Kr (36氪), reporting Xiaohongshu's GROW merchant conference,
> April 2026. https://www.36kr.com/newsflashes/3758099821871879

| | Recommendation feed | Search |
|---|---|---|
| What starts it | The system picks you | The user types a need |
| Peak window | Hours | Months, sometimes years |
| What decays | Fast, once the note is no longer new | Slowly, while the note still answers the query |
| What you tune | Cover, hook, first screen | The words your buyer types |
| What it is good for | Discovery and reach | Demand that already exists |
| How it fails | The note simply stalls | The note never gets pulled for the query |

The practical consequence: a note can flop in the feed and still earn for a
year, if it is the best answer to a question people keep asking. Our guide to
Xiaohongshu marketing for foreign brands covers the account side of this.

<!-- SECTION: What the ranking reads -->

## Tags, titles and covers: what the ranking actually reads

Everything at once, which is the part people get wrong. The multimodal work
quoted above means the cover image, the video frames, the title, the body
text and the topic tags are read as one object. A gorgeous shot with no
Chinese text on it and a title in English is not a subtle note. It is an
unlabeled one.

Four rules follow, and not one of them is a secret.

**Write the cover, do not just shoot it.** Put the promise in Chinese
characters on the image. It is the only text guaranteed to be read before
anyone clicks.

**Put the query in the title, not the brand line.** If your buyer would type
it, it belongs in the first twenty characters.

Tags are the third one. They tell recall which neighborhood the note lives
in, so treat them as topics rather than confetti. Twenty unrelated tags make
that job harder, not easier, and a lot of foreign accounts are running twenty.

**Say the thing on the first screen.** Reading depth is an early signal, and
an introduction that clears its throat for four lines has already spent it.

No platform source publishes a keyword density, a title length or a tag
count. Anyone who quotes one is quoting themselves.

<!-- SECTION: Held back -->

## The ways a note gets held back without a warning

A note can be live on Xiaohongshu (小红书), visible on your own profile, and
still be going nowhere, because enforcement here is mostly about display
rather than deletion. The scale is published.

> Between March and the end of August 2025, Xiaohongshu banned over 12
> million fake accounts, actioned 13.76 million false marketing notes and
> cleared over 360 million fake comments.
> Source: China Daily (中国日报网), January 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

Thirteen million notes in six months. Commercial behavior is explicitly in
scope now.

> Xiaohongshu launched Community Convention 2.0 on 19 January 2026, adding a
> section on orderly commerce (有序经营) to the community rules.
> Source: China Daily (中国日报网), January 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

The most common own goal for a foreign brand is paying a creator off
platform. Filed collaborations run through Pugongying (蒲公英), the platform's
own creator marketplace, and the fee is public.

> Pugongying charges 10% of the deal in its standard mode and 20% in the
> premium mode that adds platform promotion.
> Source: Niaoge Biji (鸟哥笔记), October 2022.
> https://www.niaogebiji.com/article-482538-1.html

Chinese advertising rules point the same way.

> Content that promotes a product through knowledge sharing, experience
> sharing or a product review and attaches a purchase link is advertising,
> and the publisher has to label it conspicuously as an advertisement.
> Source: State Administration for Market Regulation (国家市场监督管理总局),
> Internet Advertising Measures, Article 9, in force May 2023.
> https://www.gov.cn/gongbao/2023/issue_10506/202306/content_6885261.html

A brand that routes payment around the marketplace is not saving 10%. It is
buying an unmarked ad. The brief is unenforceable too, and the creator is
the one carrying the risk. On a platform that actioned 13.76 million marketing notes in half a
year, seeding (种草) filed properly is the cheaper option.

Nothing in the published rules promises you a notification. The platform
reports what it actioned in aggregate, six months at a time. Your first
signal is the analytics panel, which is why the next section is the one that
matters most.

<!-- SECTION: Reading your own analytics -->

## How to read your own note analytics

Your account is the only benchmark you can verify. Every market average you
have been shown was computed by somebody selling something.

The creator dashboard gives you views, likes, saves, comments, shares, new
followers and where the traffic came from. Four ratios turn that into a
diagnosis, and all four are arithmetic you can do yourself.

**Views against impressions** tells you whether the cover and title work. A
note the system showed to plenty of people and nobody opened has a packaging
problem, not a distribution problem.

Saves against likes tell you what kind of note you actually wrote. A like is
politeness. A save means somebody intends to come back to it, and coming back
is the behavior this whole platform is built on, so a note with plenty of
likes and almost no saves was enjoyed rather than used.

**Follows against views** is the account's own report card. A note that went
wide and converted nobody usually went wide of the people you sell to, which
is a targeting result, not a content result, and it will repeat next month
unless the subject signal changes.

**Search share over time** is the one foreign teams never look at. Pull it at
day three, day thirty and day ninety on the same note. If the search share is
climbing while total views fall, the note is working exactly as it should.

Track those four on every note for eight weeks and you will know more about
your own distribution than any published guide can tell you, including this
one.

<!-- SECTION: Tracing a note -->

## Tracing one note, from post to plateau

This traces the mechanics, not one of our accounts. We do not publish client
figures without written sign-off, so there are no view counts here. The
numbers that matter are the ones already sitting in your own dashboard.

| Stage | What is happening | What you see | What it means if it stalls here |
|---|---|---|---|
| Review | The note is checked before it enters distribution | Note live, views near zero | Normal. No published review time exists |
| First audience | Recall pulls your note for a small matched set | Views move, impressions low | The subject signal is weak. Fix the cover and the title |
| Early response | Interaction labels feed the ranking models | Views rise, saves flat | People clicked and left. The first screen is not delivering |
| Wider feed | The note keeps winning slots against fresh notes | Views climb for hours, not days | Expected. Fresh notes take back the shelf |
| Search tail | The note answers a query people keep typing | Views low but steady for weeks | The title does not carry the words buyers type |

In a weekly report the second and third stalls look identical, and they need
opposite fixes. One is a packaging problem, the other is a content problem,
and telling them apart is most of the job.

For the account setup that sits under all of this, see our guide to
Xiaohongshu business account setup. For what the work costs once you are
running, see our Xiaohongshu marketing cost guide. The RedNote agency page
lists what we run for clients on the platform.

<!-- SECTION: FAQ -->

## Frequently asked questions

### Why did my Xiaohongshu note get no views?

Usually the subject signal, not a penalty. If the cover carries no Chinese
text and the title uses brand language instead of the words people search,
recall struggles to place the note and nothing downstream happens. Check
whether the note is being shown at all. Low impressions means a matching
problem. High impressions with no clicks means a packaging problem.

### How long does it take for a note to get distribution?

Faster than it used to. Xiaohongshu's engineers rebuilt ranking and recall
from daily updates to minute-level ones, and notes published in the last day
account for close to half of home feed exposure. The platform publishes no
review time, so treat the first hour as the window that matters and judge a
note over its first day, not its first ten minutes.

### Does posting time matter on Xiaohongshu?

Yes, for the feed, and much less for search. Early interaction is what the
ranking models learn from, so posting when your buyers are awake in China
gives the system real signals to read. A note that earns search traffic keeps
earning it for months regardless of when it went up. No platform source
publishes a best hour to post.

<!-- CTA -->

## Stop guessing at your own distribution

Send us the account. We will read the last ninety days of note analytics,
tell you which of the four signals is failing, and show you the search queries
you are not being pulled for.

CTA: Book a call

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/images/blog/xiaohongshu-algorithm.webp
- Reference:  /images/blog/xiaohongshu-algorithm.webp
- Format:     .webp, landscape 3:2, web-optimized (China CDN friendly)
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, Chinese social platforms
              visible on screen (WeChat, Xiaohongshu, Douyin, Weibo). No
              AI polish, no diagrams, no infographics, no watermark.

FIVE VISUAL CONCEPTS CONSIDERED (iteration 13):

1. Abstract concentric layered shapes suggesting distribution tiers, the
   brief's subject hint. Rejected: an abstract render is a diagram, fails
   the China rule and the photography rule outright.
2. A Shenzhen content creator at a kitchen table checking a note's
   analytics panel on her phone the morning after posting, laptop open on
   the Xiaohongshu creator dashboard. Selected and written below.
3. A Chongqing bubble tea shop owner filming a note on a phone clamped to a
   tripod. Rejected: shows production, not distribution, which is what the
   article is about.
4. A Nanjing co-working desk with two people arguing over a printed list of
   search keywords. Rejected: too close to the Xi'an cost-sheet hero used
   for 02A, and no analytics on screen.
5. A night market stall in Wuhan with a phone showing the Xiaohongshu search
   results page. Rejected: strong scene, but the search page alone does not
   carry the analytics idea the article turns on.

IMAGE PROMPT (use verbatim):

Candid phone snapshot in a small apartment kitchen in Shenzhen early on a weekday morning. A Chinese woman in her late twenties in a loose gray t-shirt sits sideways at a cluttered kitchen table, elbow on the table, holding her phone up close and frowning slightly at it. The phone screen clearly shows a Chinese social app analytics panel in the style of the Xiaohongshu creator dashboard: white background, a red header bar, a line chart trending flat, rows of Chinese labels with small numbers beside them. Her laptop is open beside her at an angle and shows the Xiaohongshu app interface with a grid of lifestyle note thumbnails and Chinese captions, red accents on white. A second older phone lies face up next to a bowl, playing a vertical Douyin video with Chinese comment text scrolling over it. Around them the ordinary mess of a weekday morning: a half-eaten bowl of congee with a spoon resting in it, a stainless steel thermos, a torn courier bag, a pink hair clip, two charger cables running off the table edge, a stack of unopened mail, a potted green plant on the windowsill behind her. Warm morning light from a window on the right mixed with a cool ceiling light, slightly tilted handheld framing, the corner of a refrigerator cropped at the left of the frame. Shot like a recent flagship smartphone photo in good light: the entire scene in crisp, sharp focus, deep depth of field, fine detail in the fabric, the cables, the congee and the table surface, all three screen interfaces sharp and legible. No motion blur, no soft focus, no bokeh, no smudges, no grain or sensor noise, no haze. Real everyday moment, unposed, not a polished studio render, no watermark, no captions. No brand names or logos on the thermos, the bowl, the laptop lid or any object; the only logos allowed are inside the app interfaces on the screens.

(Generated Sept 11, 2026, gpt-image-2 at high quality, 1536x1024. Accepted on
the first attempt. convert-hero.mjs scored the full frame at 1406.1 and the
100% crop at 1436.9, against floors of 120 and 200. Both were opened and
checked: the data center header, the account overview numbers, the seven-day
trend chart, the Xiaohongshu logo and note grid on the laptop and the vertical
video on the second phone are all legible with no smearing. City rotation:
Shanghai, Chengdu, Hangzhou, Guangzhou and Xi'an were used for the first five
heroes, so this one is Shenzhen. The figures visible on the phone screen are
scene dressing produced by the image model, not data, and are never referenced
in the copy.)
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: yes, 3 questions
Breadcrumb: Home > Insights > How the Xiaohongshu Algorithm Works
Author: TheRedScroll
datePublished: 2026-09-15
-->

<!-- ASSET BRIEF
TABLES:
  1. Published versus not published (introduction): six reader questions, the
     published answer where one exists, and the source. Three rows are
     deliberately blank. This is the page's centerpiece and the reason it
     beats a competitor guide. Do not fill the blank rows.
  2. The four signals (four signals section): signal, what the system reads,
     what you control, published weight. The last column reads "None" three
     times on purpose. Keep it.
  3. Feed versus search (search and feed section): six rows comparing what
     starts distribution, peak window, decay, what you tune, what it suits
     and how it fails.
  4. Note lifecycle (tracing a note section): stage, what is happening, what
     you see in the dashboard, what a stall at that stage means. Label it as
     mechanics, not measured data. No view counts anywhere in this table.
CHARTS:
  Line chart, "Xiaohongshu daily searches, 2023 to 2026": mid-2023 about 300
  million, Q4 2024 about 600 million, May 2026 about 800 million. Three
  points only, no interpolation implied between them, sources labeled per
  point (Zhou Tian Finance via 199IT for the first two, the platform figure
  for the third). Ink line, vermillion for the 2026 point only.
  Do NOT build the five-stage traffic pool escalation diagram the brief asks
  for. No pool sizes are published, so the diagram would have to invent its
  own axis. The note lifecycle table replaces it.
SCREENSHOTS:
  Annotated creator dashboard view showing the four ratios in the analytics
  section, with account name, follower count and all absolute numbers
  removed, not blurred. BLOCKED until client sign-off, see below. Until then
  ship the section without a screenshot.
DOWNLOADS: none
INTERNAL LINKS:
  "our guide to Xiaohongshu marketing for foreign brands" (search and feed section) -> /insights/xiaohongshu-marketing-foreign-brands/
  "our guide to Xiaohongshu business account setup" (tracing a note section) -> /insights/xiaohongshu-business-account-setup/
  "our Xiaohongshu marketing cost guide" (tracing a note section) -> /insights/xiaohongshu-marketing-cost/
  "The RedNote agency page" (tracing a note section) -> /rednote-agency/
  IN-LINKS to add on publish: from /insights/xiaohongshu-marketing-foreign-brands/
  per the brief. Note that /insights/xiaohongshu-business-account-setup/ is
  brief 03B and is not published yet; if it is still missing at publish time,
  leave that reference as plain text and wire it when 03B goes live.
CLIENT SIGN-OFF NEEDED:
  TODO: client sign-off. Brief 02B asks for a real traffic pool progression
  and a note traced to 40,000 views from an account we run, plus an annotated
  analytics screenshot. None of it is in sources/verified-sources.md, which
  lists "Xiaohongshu traffic pool progression from a live account (brief 02B)"
  under Needed. No first-party figure was estimated. The article ships
  complete without it. To add it later, the data pull needs the same
  treatment as brief 13D: named account, sample period, exclusions and
  written clearance, logged in the first-party section of the ledger.
-->
