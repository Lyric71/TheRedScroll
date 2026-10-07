---
title: "WeChat Mini Program Cost: Build or Skip"
slug: wechat-mini-program-cost
description: "What a WeChat Mini Program costs to build and run, the four types, three cases where you should not build one, and how they actually get discovered."
excerpt: "What a WeChat Mini Program costs to build and run, from dated public award prices, and three cases where you should skip one entirely."
template: insight
---

<!-- HERO SECTION -->

# WeChat Mini Program cost: what you pay, what it does, who needs one

Public award notices put a custom WeChat Mini Program build at 199,800 to 2.3
million yuan in 2025 and 2026. Tencent's own fees are small. Plenty of brands
should not build one at all.

<!-- INTRODUCTION -->

Most brands are sold a Mini Program (小程序) for WeChat (微信) before anyone asks
what it is for. So this guide starts with the reasons to say no. Then it
breaks down WeChat Mini Program cost line by line, ending with the part most
plans skip: getting people to open it.

The build prices come from award notices on China's government procurement
site. They are public contracts, not private quotes. They are also the only
build prices we found that are dated, independent, and public. Every source
was checked twice on October 6, 2026.

| Cost line                  | Published figure                                                   | Paid to          |
|----------------------------|--------------------------------------------------------------------|------------------|
| Build, content             | 199,800 to 500,000 yuan                                            | A developer      |
| Build, service or booking  | 282,000 to 1,497,300 yuan                                          | A developer      |
| Build, multi-function      | 999,800 to 2,288,000 yuan                                          | A developer      |
| Build, commerce or loyalty | No public award prices one                                         | A developer      |
| Verification               | 99 US dollars once (overseas); 300 yuan, renewed yearly (mainland) | Tencent          |
| Hosting                    | From 19.9 yuan a month on Tencent CloudBase                        | Tencent Cloud    |
| Payments                   | 0.6% to 1% a sale (mainland); rate unpublished (cross-border)      | WeChat Pay       |
| Running it for a year      | 585,000 yuan in one public contract                                | A team or agency |

<!-- SECTION: What it is -->

## What a Mini Program is, and why people use it

A Mini Program (小程序) is an app that runs inside WeChat (微信). Nobody
installs it. People open it from a chat, a search, an article, or a code on a
box, and close it when they're done. It can take payment, book a slot, or
hold a membership card, all without leaving WeChat.

> WeChat describes the Mini Program as "a new way to connect users and
> services" that people can find and share easily inside WeChat.
> Source: WeChat Open Docs (微信开放文档), Mini Program introduction, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/introduction/

> WeChat chief Zhang Xiaolong (张小龙) said Mini Programs would need no
> download or installation, and confirmed a launch on January 9, 2017.
> Source: Beijing Youth Daily (北京青年报) via People's Daily Online (人民网), December 2016. http://media.people.com.cn/n1/2016/1229/c40606-28984508.html

Use is still growing.

> Mini Program user time grew more than 20% year on year in the fourth
> quarter of 2025.
> Source: Tencent Holdings 2025 annual results, reported by China Fund News (中国基金报), March 2026. https://www.chnfund.com/article/AR1231fcdd-25ff-01cd-2836-3a2015e46b1d

Much of the newest growth crosses borders.

> Mini Programs serve users in 100 countries and regions. Cross-border and
> overseas users opened them more than 5 billion times in 2025, and
> transaction value in the second half of 2025 rose more than 70% year on
> year.
> Source: WeChat Open Class PRO 2026, reported by Sina Tech (新浪科技), January 2026. https://finance.sina.com.cn/tech/2026-01-20/doc-inhhyfuv7357415.shtml

<!-- SECTION: Three cases where you should not build one -->

## Three cases where you should not build one

A Mini Program (小程序) keeps costing money after launch, for hosting and fixes
and, above all, for the work of getting people to open it. If one of these three
cases fits you, the money does more somewhere else.

**1. You only need a shop, and you have a mainland company.** WeChat Store
(微信小店) costs nothing to open. You pay a fee on each sale instead of a
build, and Tencent runs the checkout, the order pages, and the payment.

> Opening a WeChat Store account is free. The platform charges a technical
> service fee of 1% to 5% on each sale in most categories, with no monthly or
> annual fee.
> Source: Tencent Marketing (腾讯营销), WeChat Store FAQ, August 2026. https://e.qq.com/faq/wechat-store/growth/faq-zcjc-008/

The catch for foreign brands is the entity rule. A company registered in
China, such as a wholly foreign-owned subsidiary, qualifies. A head office
in Paris or Chicago does not.

> WeChat Store accepts only companies and sole traders legally registered in
> mainland China. A foreign legal representative is accepted.
> Source: WeChat Store (微信小店), store entry rules, June 2026. https://store.weixin.qq.com/chengzhang/webdoc/wiki/2063/9c63c672daee8eca/growth_center_rule_for_store

**2. You plan to wrap your website.** The cheapest Mini Program is one that
shows your mobile site inside a frame, called a web-view. It looks like a quick
win, but it adds a step for the user and gains nothing in search.

> WeChat's Mini Program search does not index any content inside a web-view.
> Source: WeChat Open Docs (微信开放文档), Mini Program search optimization guide, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/dev/framework/search/seo.html

**3. Nothing will send people to it.** No Official Account (公众号), no ad budget,
no stores, no packaging. A Mini Program has no front door of its own (the
discovery section below explains why). Without traffic it sits unused, and the
hosting and running costs don't stop.

One case is the reverse. If customers need to book, order, check a status,
or show a member card again and again, a Mini Program earns its keep. Here
is the decision in one table:

| Your situation                                         | Do this instead                  |
|--------------------------------------------------------|----------------------------------|
| Mainland company, you only need a shop                 | Open a WeChat Store              |
| The plan is to show your mobile site inside WeChat     | Keep the mobile site             |
| No account, ads, stores, or packaging to drive traffic | Build the Official Account first |
| People need to book, order, check, or join, often      | Build a Mini Program             |

<!-- SECTION: The four types -->

## The four types: content, commerce, service, loyalty

Most Mini Programs (小程序) do one of four jobs, and each job puts the money
in a different place.

| Type     | What it does                           | Where the cost goes                     |
|----------|----------------------------------------|-----------------------------------------|
| Content  | Catalog, guides, store finder, sign-up | Pages, design, and keeping them current |
| Commerce | Cart, checkout, orders, stock          | Payment, order links, returns           |
| Service  | Booking, queueing, tracking, support   | Links to the systems behind it          |
| Loyalty  | Membership card, points, coupons       | Customer data and CRM links             |

Content is the cheapest type to build. It's also the easiest to neglect. A
product catalog that nobody updates is worse than none. Commerce adds
payment, stock, and returns, and every one of them links to a system
somewhere. In the awards below, service Mini Programs cost more than content
ones. Each booking or status check has to read from a system you already
run. Loyalty sits on top of the other three and needs your customer data in
good order first.

Overseas companies don't get the full menu. They pick from their own,
shorter list of categories.

> Overseas entities choose from a separate category list. Overseas education
> Mini Programs may only display information, not play or sell courses.
> Cross-border e-commerce needs an agreement naming a mainland company as
> jointly liable, and medicines, medical devices, and alcohol are excluded.
> Source: WeChat Open Docs (微信开放文档), Mini Program service categories, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/product/material.html

Loyalty has its own condition.

> Card and coupon features work only in verified Mini Programs.
> Source: WeChat Open Docs (微信开放文档), wx.addCard, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html

<!-- SECTION: Build cost by type -->

## WeChat Mini Program cost to build, by type

Developer price lists are sales material. Award notices are not. Each one
names the buyer, the project, the winning bid, and the date. We read 21
build and feature awards for WeChat Mini Programs (小程序) dated 2025 and 2026
on the China Government Procurement Network (中国政府采购网).

| Type               | Lowest award                        | Highest award                                         |
|--------------------|-------------------------------------|-------------------------------------------------------|
| Content            | 199,800 yuan, a college lecture app | 500,000 yuan, a tourism guide, with a year of service |
| Service or booking | 282,000 yuan, a county hospital     | 1,497,300 yuan, a children's hospital                 |
| Multi-function     | 999,800 yuan, a hospital follow-up  | 2,288,000 yuan, maritime services                     |
| New features later | 43,500 yuan, a hospital             | 525,000 yuan, a district service app                  |
| Commerce, loyalty  | No public award                     | No public award                                       |

> Zhejiang Economic and Trade Polytechnic paid 199,800 yuan for a lecture
> Mini Program.
> Source: China Government Procurement Network (中国政府采购网), award notice, November 2025. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202511/t20251120_25730500.htm

> Yunyang District in Shiyan, Hubei, paid 500,000 yuan for a tourism Mini
> Program, with one year of service after delivery.
> Source: China Government Procurement Network (中国政府采购网), award notice, August 2026. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202608/t20260812_27120718.htm

> A county hospital in Ningyang, Shandong, paid 282,000 yuan for a patient
> Mini Program built within 60 days.
> Source: China Government Procurement Network (中国政府采购网), award notice, January 2026. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202601/t20260120_26093602.htm

> Beijing Children's Hospital paid 1.4973 million yuan for a Mini Program
> built in three months, with a two-year warranty.
> Source: China Government Procurement Network (中国政府采购网), award notice, February 2025. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202502/t20250211_24152021.htm

> The China-Japan Friendship Hospital paid 999,800 yuan for a patient
> follow-up Mini Program.
> Source: China Government Procurement Network (中国政府采购网), award notice, October 2025. http://www.ccgp.gov.cn/cggg/zygg/zbgg/202510/t20251016_25514047.htm

> The Maritime Safety Administration paid 2.288 million yuan for its
> "Haishitong" Mini Program.
> Source: China Government Procurement Network (中国政府采购网), award notice, May 2025. http://www.ccgp.gov.cn/cggg/zygg/zbgg/202505/t20250516_24611552.htm

> A Xinjiang hospital paid 43,500 yuan to add features to its Mini Program.
> Source: China Government Procurement Network (中国政府采购网), award notice, August 2026. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202608/t20260828_27225391.htm

> A district office in Handan, Hebei, paid 525,000 yuan to expand its Mini
> Program.
> Source: China Government Procurement Network (中国政府采购网), award notice, July 2025. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202507/t20250716_24975725.htm

A word on reading them. Treat these as a reality check, not a quote. A hospital
that books appointments has to connect the Mini Program to its own patient
systems (registration, payments, test results). That is where the money goes. A
brand's store finder has far less to connect.

Scope moves the price far more than the platform does. When a developer quotes
you, ask for the same split this page uses: build, hosting, verification, and a
year of running it.

Public buyers rarely buy shops or loyalty apps. In our search, no award
priced a commerce or membership build. Our pricing page lists membership Mini
Programs as a custom quote for that reason.

There is a cheaper route if you have someone to do the work.

> Tencent's low-code builder, WeDa (微搭), now comes inside CloudBase plans:
> personal at 19.9 yuan a month (a limited-time price), standard at 199, and
> enterprise at 999.
> Source: Tencent Cloud (腾讯云), WeDa price document, September 2026. https://cloud.tencent.com/document/product/1301/122385

Low-code lowers the bill, though someone on your side still designs the pages
and ships each update.

<!-- SECTION: Running costs -->

## Maintenance, hosting, and the annual cost nobody budgets

The build is paid once. Everything in this section comes back, some of it every
month.

**Verification.** Overseas and mainland rules differ, and overseas is the
cheaper one to keep.

> Overseas Mini Program verification costs 99 US dollars per application, a
> one-off fee charged whether or not it succeeds. Review takes 7 to 15
> working days.
> Source: Tencent customer service (腾讯客服), overseas Mini Program verification FAQ, confirmed October 2026. https://kf.qq.com/faq/190712yYfY7v190712u2YjQ3.html

> Overseas Mini Programs currently need neither filing nor an annual review.
> A Mini Program counts as overseas because of the company that runs it, not
> where its server sits.
> Source: Tencent overseas Mini Program team (小程序境外专项), WeChat Open Community, August 2025. https://developers.weixin.qq.com/community/minigame/doc/00044a834b47f83e94c35fbee6b809

> An overseas company must complete verification within 45 days of
> registering, before the Mini Program can go live.
> Source: WeChat Open Community (微信开放社区), overseas Mini Program launch guide, November 2024. https://developers.weixin.qq.com/community/business/doc/0006eaf7f14ae8155172387406b80d

> An overseas company's first code submission goes to a local cyberspace
> review that takes about seven days and can't be rushed.
> Source: WeChat Open Community (微信开放社区), review announcement, July 2022. https://developers.weixin.qq.com/community/develop/doc/00002a9e18cdc0a04669375a95b001

Put the two waits together. Verification takes 7 to 15 working days and the
first code review about a week, so allow a month before the first user arrives.

A mainland company pays in yuan and has a step to repeat every year.

> A mainland company verifies its Mini Program by paying a 300-yuan fee.
> Source: WeChat Open Docs (微信开放文档), Mini Program introduction, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/introduction/

> A mainland Mini Program's verified status lasts one year. Without an annual
> review, verification ends and advanced features are withdrawn.
> Source: WeChat Open Docs (微信开放文档), verification guide, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/product/renzheng.html

Filing is the other mainland step. A mainland Mini Program (小程序) is filed (备案)
before it goes live.

> From September 1, 2023, new Mini Programs must complete filing before
> launch. Those already live had until March 31, 2024.
> Source: Beijing Daily (北京日报), August 2023. https://xinwen.bjd.com.cn/content/s64d42e11e4b03d11a64e6373.html

Filing is done once, not every year.

> The provincial review of a Mini Program filing takes 1 to 20 working days,
> and the filing number stays valid until it is canceled.
> Source: WeChat Open Docs (微信开放文档), Mini Program filing FAQ, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/product/record/record_faq.html

**Hosting and domains.** Tencent publishes its cloud prices, which makes this
the easiest line to budget.

> CloudBase (云开发) plans cost 19.9 yuan a month (a limited-time price), 199,
> or 999. A free trial environment expires 15 days after the Mini Program
> goes live.
> Source: Tencent Cloud (腾讯云), CloudBase price document, August 2026. https://cloud.tencent.com/document/product/876/75213

> WeChat's network rules say a Mini Program may only call domains set up in
> advance, and those domains must have an ICP filing.
> Source: WeChat Open Docs (微信开放文档), network, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html

Foreign companies hit a snag here, and Tencent's overseas team spells it out.

> Tencent's overseas team says domains registered abroad need not, and
> cannot, be filed, warns that unfiled links may be unstable inside a Mini
> Program, and recommends building with native Mini Program features.
> Source: Tencent overseas Mini Program team (小程序境外专项), WeChat Open Community, August 2025. https://developers.weixin.qq.com/community/minigame/doc/00044a834b47f83e94c35fbee6b809

In practice, that means building with native features, calling as few
outside domains as you can, and testing from a phone in China before launch.

Two small fees come with every use, one for logins and one for payments.

> The phone-number quick verification component costs 0.03 yuan per
> successful call since August 28, 2023, after 1,000 free calls.
> Source: WeChat Open Docs (微信开放文档), getPhoneNumber, August 2023. https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html

> Mainland merchants pay WeChat Pay (微信支付) a service fee of 0.6% to 1% per
> transaction. The application asks for a business license and a corporate
> bank account.
> Source: WeChat Pay (微信支付), Mini Program onboarding guide, confirmed October 2026. https://pay.weixin.qq.com/static/applyment_guide/applyment_detail_miniapp.shtml

Overseas companies use cross-border WeChat Pay (微信支付) instead.

> Overseas merchant IDs come with Mini Program payment switched on. The Mini
> Program must belong to the same company as the merchant ID.
> Source: WeChat Pay (微信支付), cross-border payment FAQ, February 2025. https://pay.weixin.qq.com/doc/global/v2/en/4013665012

> Direct access to cross-border WeChat Pay is open only in Hong Kong,
> Singapore, and the UK. Tencent recommends the institution route, through an
> acquiring bank or payment company.
> Source: WeChat Pay (微信支付), cross-border access modes, February 2025. https://pay.weixin.qq.com/doc/global/v2/en/4013662658

Tencent takes a service charge before it pays you out. Its cross-border
merchant pages don't publish the rate, so ask for it in writing.

> Settlement equals gross turnover minus the WeChat Pay service charge. Payout
> starts once turnover reaches 800 US dollars.
> Source: WeChat Pay (微信支付), cross-border merchant FAQ, confirmed October 2026. https://act.weixin.qq.com/static/merchant_overseas/faq_en.html

Then there's the line nobody budgets: running the thing. Content goes stale,
WeChat (微信) updates its base library, a payment fails at 11 p.m., and
someone has to answer for all of it. Public buyers put a price on that too.

> Caidian District in Wuhan paid 585,000 yuan for one year of running its
> tourism Mini Program and Official Account.
> Source: China Government Procurement Network (中国政府采购网), award notice, September 2025. http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202509/t20250922_25390184.htm

That is more than the 500,000 yuan Yunyang paid to build a tourism Mini Program,
a year of service included. Put the two side by side. A year of running cost can
match the whole build.

<!-- SECTION: Mini Program versus a mobile site -->

## Mini Program versus a mobile site in China

Both need paperwork on the mainland. They get found in different places.

| Question           | Mini Program                                           | Mobile site                                |
|--------------------|--------------------------------------------------------|--------------------------------------------|
| Where it runs      | Inside WeChat only                                     | Any browser, any app                       |
| Filing             | Mini Program filing (mainland); none overseas, for now | ICP filing if hosted on the mainland       |
| How people find it | WeChat Search, chats, codes, articles                  | Search engines, links, shares              |
| Inside WeChat      | Native                                                 | An outside link, under WeChat's link rules |
| Taking payment     | WeChat Pay, built in                                   | A checkout you set up yourself             |

A mobile site served from the mainland needs an ICP filing.

> Running an unfiled website in mainland China brings an order to correct and
> a 10,000-yuan fine.
> Source: Ministry of Industry and Information Technology (工业和信息化部), ICP filing measures, February 2024. https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html

Inside WeChat (微信), that site is an outside link, and WeChat polices those.

> WeChat's external link rules list links to unfiled websites as a violation,
> and ban H5 games and quizzes.
> Source: WeChat (微信), external link content rules, October 2025. https://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification

The rule of thumb: if your buyers live in WeChat and come back often, the
Mini Program (小程序) wins. If they find you through Baidu (百度), keep the site, and
link to it from your Official Account (公众号).

<!-- SECTION: Discovery -->

## How Mini Programs get discovered, which is the real problem

Now the hard part. A website gets found by search engines whether or not you
plan for it. A Mini Program (小程序) doesn't. It was designed that way.

> Before launch, Zhang Xiaolong explained that a Mini Program has no entry
> point of its own. People start it by scanning a code or searching.
> Source: Beijing Youth Daily (北京青年报) via People's Daily Online (人民网), December 2016. http://media.people.com.cn/n1/2016/1229/c40606-28984508.html

Almost ten years on, every visit still starts somewhere else.

> WeChat logs where each Mini Program visit starts: search results, chat
> cards, Mini Program codes, Official Account articles and menus, Channels
> (视频号) links, and the "recently used" bar.
> Source: WeChat Open Docs (微信开放文档), scene values, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html

Search does some of the work. The search team at WeChat (微信) gave the last
public figure in early 2023, and Tencent hasn't published a newer split.

> WeChat Search (搜一搜) drove 20% of new Mini Program daily users in 2022.
> Source: WeChat Open Class PRO 2023, reported by Sina Tech (新浪科技), January 2023. https://finance.sina.com.cn/tech/roll/2023-01-10/doc-imxztfeh2280083.shtml

That leaves most new users to come from channels you control. The Official
Account (公众号) is the main one, because every article and menu can open
the Mini Program directly.

> An Official Account can link 10 Mini Programs from the same company and 3
> from others. Articles can carry Mini Program cards without any link.
> Source: WeChat Open Docs (微信开放文档), Mini Program introduction, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/introduction/

Codes do the offline work.

> Mini Program codes never expire.
> Source: WeChat Open Docs (微信开放文档), Mini Program codes, confirmed October 2026. https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html

Print them on packaging, receipts, shelf cards, and trade fair stands. A code on
a product box keeps sending people for as long as the box sits in someone's
kitchen (which can be months). Then add Channels (视频号) videos and paid ads that
open the Mini Program, and check where visits come from every month. Before any
build, try to name where the first visits will come from. If the list is short,
fix that first.

<!-- SECTION: What we would build first -->

## What we would build first with a limited budget

Start with the account, not the app. A verified service account (服务号) gives
you articles and a menu: a place to send people. That is the traffic a Mini
Program (小程序) needs.

Next, one small Mini Program for one repeat job: book a visit, check an
order, find a store, or sign up. Keep it to the content or service end of
the award table. If someone on your team can run it, try Tencent's low-code
route first. Register it from the verified account, and you skip the second
fee.

> A verified overseas service account can register Mini Programs without
> paying the 99-dollar fee again, up to five a month.
> Source: Tencent customer service (腾讯客服), quick registration FAQ, confirmed October 2026. https://kf.qq.com/faq/170705YVZFZZ170705eyI7Rr.html

Build it with the native components WeChat (微信) provides, not a wrapped website.
Search can't read a web-view, and Tencent's overseas team steers foreign
companies the same way. A small native build is also cheaper to change once you
see what people actually use.

Add selling once the traffic shows up. If you have a mainland company, try a
WeChat Store (微信小店) before a custom checkout. If you don't, set up
cross-border WeChat Pay (微信支付) under the same company as the Mini Program,
and get the service charge in writing first.

Loyalty comes last. Points and tiers do little for someone who has bought once,
so wait until people come back on their own.

Our WeChat platform page shows how the account, the Mini Program, and WeCom
(企业微信) fit together. Our WeChat agency page covers the setup we run for foreign
brands.

<!-- SECTION: FAQ -->

## FAQ

### How much does a WeChat Mini Program cost?

Public award notices from 2025 and 2026 put a content Mini Program (小程序) at
199,800 to 500,000 yuan. A service or booking one ran 282,000 to about 1.5
million, and bigger platforms reached 2.3 million. Those are public
contracts, not private quotes. On top, Tencent charges an overseas company
99 US dollars, once, to verify.

### Do I need a Mini Program or a mobile website in China?

Build a Mini Program if your buyers find you inside WeChat (微信) and come back to
book, order, or check something. Keep a mobile site if they find you through
search engines. Both need filing on the mainland. A Mini Program that only
wraps your site gains nothing, because WeChat Search (搜一搜) can't read it.

### What are the ongoing costs of a Mini Program?

Hosting on Tencent CloudBase (云开发) starts at 19.9 yuan a month. Mainland Mini
Programs renew verification every year, and overseas ones currently don't.
Phone-number logins cost 0.03 yuan each. The big line is running it: someone has
to keep the content and the code current. One public contract paid 585,000 yuan
for a year.

<!-- CTA -->

CTA: Book a call

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/images/blog/wechat-mini-program-cost.webp
- Reference:  /images/blog/wechat-mini-program-cost.webp
- Format:     .webp, landscape 3:2, web-optimized (China CDN friendly)
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, Chinese social platforms
              visible on screen (WeChat, Xiaohongshu, Douyin, Weibo). No
              AI polish, no diagrams, no infographics, no watermark.

IMAGE PROMPT (use verbatim):

A candid, documentary-style photograph taken on an ordinary weekday afternoon inside a small two-person software studio in a converted apartment in a residential tower in Zhengzhou, Henan, China, shot handheld from just behind the shoulder of a Chinese developer in his late twenties wearing a grey hoodie, who holds a smartphone tilted at an angle toward the camera; the phone screen clearly shows a simple WeChat Mini Program booking page with a white background, the WeChat capsule menu button at the top right, a row of date chips, three appointment time slots in Chinese characters and a green WeChat-style confirm button, all legible; on the cluttered desk in front of him an open laptop displays the WeChat DevTools window with a phone simulator on the left showing the same booking page and code on the right, and beside it a second phone lies face up showing a WeChat chat with a shared Mini Program card; his colleague, a Chinese woman in her forties with reading glasses pushed up on her head, leans in from the right mid-gesture, pointing at the laptop; the desk carries tangled charging cables, a paper cup of tea, two plain sticky notes with a few short handwritten Chinese characters only (no English words, no device or brand names, no file names), a test phone in a cracked case and a small potted plant; through the window behind them the beige towers and air-conditioning units of a Zhengzhou housing estate in flat late-afternoon light; slightly tilted framing, uneven mixed light from the window and a ceiling panel, a cropped edge of a chair in the foreground, no readable signage, no brand logos and no text anywhere except the app interfaces on the screens; photorealistic, natural colors, no cinematic color grade, no studio lighting; the whole scene in crisp, sharp focus with deep depth of field, fine detail and legible screen interfaces. No motion blur, no soft focus, no bokeh, no smudges, no grain or sensor noise, no haze.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: yes, 3 questions
Breadcrumb: Home > Insights > WeChat Mini Program Cost: Build or Skip
Author: TheRedScroll
datePublished: 2026-10-13
-->

<!-- ASSET BRIEF
TABLES: (1) Answer table in the introduction: seven cost lines with the published figure and who is paid, all sourced in the body. (2) Decision table in "Three cases where you should not build one": situation and what to do instead; it replaces the decision flowchart the brief asked for (settled fallback 7). (3) Four types and where the cost goes. (4) Build cost by type: lowest and highest award per type from China Government Procurement Network notices dated 2025 and 2026, each award cited in a blockquote below the table. (5) Mini Program versus mobile site.
CHARTS: none
SCREENSHOTS: none (settled fallback 7)
DOWNLOADS: none
INTERNAL LINKS:
our pricing page -> /pricing/
Our WeChat platform page -> /platforms/wechat/
Our WeChat agency page -> /wechat-agency/
In-links to wire at publish, every locale where both pages exist: /insights/wechat-marketing-cost/ (Mini Program section and FAQ) -> /insights/wechat-mini-program-cost/ ; /insights/sell-on-wechat/ (section 3, Sell with Mini Programs) -> /insights/wechat-mini-program-cost/
CLIENT FIGURES: none
-->
