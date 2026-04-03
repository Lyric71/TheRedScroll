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
