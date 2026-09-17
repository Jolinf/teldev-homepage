# TELDEV redesign — progress

Tracks the rebuild described in `teldev-redesign-kit/CLAUDE_CODE_PROMPT.md`. Update this
file at the start and end of every work session — check items off, add notes on decisions
made, and record anything blocked on the user. Don't let this drift from reality.

Branch: `redesign/new-site` (created, not yet pushed).

## Architecture note

This is a marketing site (no auth, no per-user data, no dashboards), so most of the
`/nextjs-app` skill's decision-gate machinery (auth, TanStack Query, permissions,
parallel-route layout slots, observability wrapper) does not apply — opting out of all of
them per that skill's "optional, drop these freely" table. What does apply and will be
followed: RSC-first pages, Server Actions for the one form, design tokens as the single
source of truth, dark mode first-class, `loading.tsx`/skeletons where content is
data-backed (blog/work listing pages).

## Ground rules (§0)

- [x] Branch `redesign/new-site` created from `main`.
- [x] Audit written to `docs/redesign/AUDIT.md`. Key flags: two deploy targets
      (Vercel vs GitHub Pages) coexist; contact form uses Microsoft Graph, not Resend
      (keeping Graph — brief conflict, flagged); blog posts live in MongoDB today, brief
      wants MDX (migrating to MDX for the new site, flagging Mongo export as follow-up).
- [ ] Commit audit + progress.md as the end of the "audit" step.

## Phase 1: Foundation

- [ ] Scaffold Next.js App Router project (TS strict). Decide: migrate in place at repo
      root (replacing Vite) vs. a subdirectory — **leaning toward replacing at root**, since
      the brief says "remove the old site's code only once its routes are mapped for
      redirects," implying one final app at repo root. Confirm no objection before deleting
      `src/`, `index.html`, `vite.config.ts`.
- [ ] `scripts/build-tokens.ts` compiling `docs/redesign/design-system/tokens.json` →
      `app/ds-tokens.css` (light `:root` + `[data-theme="dark"]`, resolve `{ref}` tokens,
      emit color/spacing/radius/shadow/opacity vars + type-style utility classes with mobile
      breakpoints). Run as `prebuild`, commit output.
- [ ] Motion variables + reduced-motion guard from `motion-and-tailwind.md`.
- [ ] `globals.css`, `@theme`, dark variant, fonts (Plus Jakarta Sans + IBM Plex Mono via
      `next/font/google`), `ThemeProvider` (next-themes), base layout (skip link, Header,
      `<main id="main">`, Footer).
- [ ] Layout primitives: `Container`, `Section`.

## Phase 2: Primitives

- [ ] Button, TextLink, Input, Textarea, Select, Checkbox, RadioSegmented, Badge
- [ ] ImagePlaceholder, Breadcrumbs, Pagination, Icon (lucide wrapper)

## Phase 3: Composite components

- [ ] Header (sticky/blur, Services dropdown, theme toggle, contact CTA, mobile sheet,
      active-route state)
- [ ] Footer
- [ ] LayeredVisual + 6 VisualCards, HeroVisual, PageHero, SplitHero
- [ ] Reveal, CountUp, SectionHeader, ServiceCard, ProcessSteps, StrategicPillars,
      Timeline, LogoStrip, Testimonial, CaseStudy, EventHighlight, BlogCard,
      ArticleProse (MDX components), TeamCard, StatBlock, CTABanner, EmptyState,
      NotFound, ContactForm

## Phase 4: Pages and routes

- [ ] `/` (Main.dc.html)
- [ ] `/services` (Services.dc.html)
- [ ] `/services/[slug]` × 4 (website-development, it-support, cloud-microsoft-365,
      ai-automation) — statically generated
- [ ] `/about`
- [ ] `/partnerships`
- [ ] `/work`, `/work/[slug]` (+ one placeholder MDX case study)
- [ ] `/blog`, `/blog/[slug]` (+ three draft: true example posts)
- [ ] `/contact` (Server Action + zod + honeypot, via Microsoft Graph per audit)
- [ ] `/privacy` (placeholder prose)
- [ ] `not-found.tsx`
- [ ] Wire all CTAs to real destinations (quote/partner query params on `/contact`,
      service cards, process-section anchor)
- [ ] Responsive check at 375/768/1024/1440

## Phase 5: SEO, metadata, performance

- [ ] Per-page metadata, OG/Twitter images via `next/og`, sitemap.ts, robots.ts, manifest,
      favicon from Logomark SVG
- [ ] JSON-LD: Organization/ProfessionalService (home), Service (service pages), Article
      (posts), BreadcrumbList
- [ ] 301 redirects from every old SPA route (see AUDIT.md table) via `next.config`
- [ ] `next/image` everywhere, no CLS from layered visuals
- [ ] Lighthouse ≥ 95 (Perf/A11y/BP/SEO) mobile, `/` and `/contact`

## Phase 6: Verification

- [ ] `pnpm|npm run lint`, `typecheck`, `build` clean
- [ ] Playwright: one `h1` per route, keyboard nav (header + mobile menu), theme toggle
      persists, contact form validation + success (mocked sender), 404 returns real 404
- [ ] axe: no serious/critical violations, light + dark, every route
- [ ] Reduced motion emulation: no drift, content visible immediately
- [ ] Screenshots at 375/1440, both themes, diffed against `page-designs/`

## Definition of done (§3)

- [ ] Branch pushed, draft PR opened with: stack + deviations summary, audit findings,
      screenshots (mobile+desktop × light+dark, every page), Lighthouse scores, placeholder
      checklist, env vars needed
- [ ] `README.md` updated: run/build/add-blog-post/add-case-study/regenerate-tokens/deploy

## Decisions (confirmed with user, 2026-09-17)

- **Deploy target: Vercel.** `.github/workflows/*.yml` GitHub Pages deploy is being removed
  as part of Phase 1 — Vercel is the only target going forward.
- **Blog CMS: Strapi (`blog-cms/`) is legacy/unused.** Proceeding with MDX-in-repo as the
  brief specifies. Existing MongoDB posts (via `api/posts.ts`) will be exported to MDX so
  nothing published is lost; `blog-cms/` itself is left untouched in the repo (not deleted)
  for the user to remove separately later.
- **`Server/` is not needed.** Left untouched in the repo (not deleted); only
  `api/contact.ts` (Microsoft Graph mailer) and `api/posts.ts` (Mongo export source) logic
  carries forward into the Next.js app.

## Open questions (not blocking build, still flag in PR)

Old→new route mapping for the four service sub-pages (`/Helpdesk`, `/Network`,
`/Webdev`, `/Cloud`, `/ItConsulting` → the four `services/[slug]` values) is a best guess in
AUDIT.md — confirm against real copy while porting `src/Pages/*` content, not blocking.

## Session log

- 2026-09-17: Branch created, audit written, progress tracker set up. User confirmed:
  Vercel-only deploy (drop GH Pages workflow), MDX blog (Strapi legacy, export Mongo posts),
  `Server/` not needed. Next: remove GH Pages workflow, scaffold Next.js at repo root.
