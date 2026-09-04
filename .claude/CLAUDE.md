# TheRedScroll — Project Context for Claude Code

## MANDATORY: Design Guide
**Read `DESIGN_GUIDE.md` at the project root before writing any component, page, or style.**
Every color, font size, spacing value, border-radius, and component pattern is defined there. No exceptions. No deviations.

Key constraints from the guide:
- Only 6 core colors (white, rice paper, ink, vermillion, stone, warm gray) — no others
- No box-shadow, no gradients, no keyframe animations, no border-radius above 12px
- Font weights 400 and 500 only — never bold/600/700
- Vermillion is rationed — only for specific uses listed in the guide
- One dark (ink) section per page max (navbar/footer don't count)

## MANDATORY: Style Guide
**Read `STYLE_GUIDE.md` at the project root before writing any content, copy, or text.**
All brand voice, tone, terminology, and writing rules are defined there. No exceptions.

Key constraints from the guide:
- Brand name is always "TheRedScroll" — one word, PascalCase, no abbreviations
- American English only ("optimize" not "optimise")
- Banned words: partners, solutions, manage, leverage, holistic, synergy, ecosystem, digital landscape, unlock, seamless, end-to-end, turnkey
- No em dashes, no exclamation marks
- Grade 8 reading level. Short sentences (max 25 words). 2-3 line paragraphs on web.
- Font weights 400 and 500 only — never bold/600/700
- CTAs are direct: "Book a call" not "Schedule a complimentary consultation"
- Never name competitors. Use aggregate data: "0 out of 37"
- Never publish package tier names or specific prices in public content
- Every piece of content must pass the expertise test (section 3.3)

## MANDATORY: Translation Guide
**Read `TRANSLATION_GUIDE.md` at the project root before editing, drafting, translating, or fixing any non-English content.**
Applies to anything under `src/pages/fr/`, `src/pages/zh/` (and `src/pages/de/`, `src/pages/es/` once live), all non-English strings in `src/i18n/`, and every non-English alt text, meta description, button label, error message, or blog post. No exceptions.

Key constraints from the guide:
- Start from the existing locale page, never retranslate the full page from English
- Two-step process for any new or rewritten section: humanized translation, then mandatory native rewrite in-language
- Native journalistic register per language (Le Monde for FR, 财经 / 36氪 for ZH, El País for ES, FAZ / Handelsblatt for DE)
- Diacritics are mandatory: French accents (é è ê à ç…), Spanish ñ + ¿ ¡, German ß + umlauts
- ZH uses full-width punctuation 。 ， ： ； inside Chinese sentences
- Never use em dashes (U+2014) in any locale, including English
- Brand and product names stay canonical (TheRedScroll stays TheRedScroll in every locale)
- Single-locale default: copy edits apply only to the file referenced. Offer "Want me to propagate this to FR/ZH (and DE/ES once live)?" but never propagate without explicit approval. This overrides the auto-memory "always update translations" rule for content changes; shared infrastructure (CSS, components, config) still applies to all locales by nature
- Slugs under non-English locales must be in the target language, lowercase, hyphenated, diacritics stripped. Never silently rename an existing slug, always flag and propose a redirect plan

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Vercel (static adapter)
- **Content:** Astro Content Collections (Markdown + frontmatter)
- **Language:** TypeScript (strict mode)
- **Font:** Inter, self-hosted WOFF2 (weights 400, 500 only)

## Architecture Conventions
- Components in `src/components/` organised by scope:
  - `global/` — site-wide (Header, Footer, Nav)
  - `ui/` — reusable primitives (Button, Card, Container)
  - `home/` — homepage-specific sections
  - `pages/` — shared components across non-home pages
  - `sections/` — reusable section patterns
- Layouts extend: `BaseLayout.astro` → `PageLayout.astro`
- Service pages: `ServiceLayout.astro` + content collections
- Blog posts: `BlogLayout.astro` + sticky table of contents
- UI data (nav items, challenges, differentiators, packages): `src/data/`
- Static assets: `public/`
- Optimised images: `src/assets/images/` (Astro image pipeline)

## Content Collections
Services, platforms, blog posts, team members, and FAQs are Astro
content collections defined in `src/content/config.ts`.

## Performance Constraints
- CRITICAL: Never link to fonts.googleapis.com — all fonts self-hosted
- No external CDN dependencies
- Use Astro Image component for automatic optimisation
- Lazy-load all below-fold images
- Target: LCP < 2.5s, total page weight < 1.5MB

## Testing
- Run `npm run build` before committing
- Run `npx astro check` for TypeScript validation
- Verify responsive at 375px, 768px, 1280px

## File Naming
- Components: PascalCase (ServiceCard.astro)
- Pages: kebab-case (privacy-policy.astro)
- Content markdown: kebab-case (content-production.md)
- Data files: camelCase (differentiators.ts)

## Git Conventions
- Commit messages: conventional commits (feat:, fix:, chore:, docs:)
- Branch naming: feature/page-name, fix/description
- Always run build before pushing

## Editorial System (daily articles, Sept 7 to Dec 4, 2026)
The article pipeline lives in `editorial/`. When the user says "Draft today's
article", "Draft brief 04C" or "Publish <slug>", read `editorial/CLAUDE.md`
and `editorial/SPEC.md` first and follow `editorial/RUNBOOK.md`.

Pipeline, in order, none optional: Chinese deep research with every source
validated twice, `/createarticle` (house version, iteration 7 is a cadence
pass, never planted errors), `/content-quality-us` on every article,
`/generate-image-openai` for the hero image, then `/createblogarticle` only
when a person asks to publish, then one email to cyril.drouin@outlook.com via
`editorial/scripts/notify-publish.mjs` (Resend) when the publish is done.
House SEO ceilings are title 52, meta 152, excerpt 25 words. Hero images go to
`public/images/blog/<slug>.webp`. Industry pages publish to
`src/content/industries/`, tool pages to `src/content/tools/` (English only).

Two standing rules from Cyril: when the runbook asks for something the repo
cannot do, use what the repo has and log the substitution. Every pipeline
step runs on the most capable model available, never a faster or smaller
mode; images use gpt-image-2 at high quality.
