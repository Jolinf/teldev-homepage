# TELDEV website overhaul: brief for Claude Code

You are rebuilding the TELDEV Technologies website (https://www.teldev.org) from the ground up in this repository. The design is already finished and signed off. Your job is to turn it into a production site that matches it faithfully. Don't reinterpret the design.

Everything you need is in `docs/redesign/` (this folder):

- `design-system/README.md`: brand voice, colour, type, spacing, imagery and iconography rules. **Read this first, in full.**
- `design-system/tokens.json`: the single source of truth for every colour (light and dark), type style, spacing, radius, shadow and opacity value.
- `design-system/token-reference.md`: the same tokens as readable tables.
- `design-system/motion-and-tailwind.md`: motion spec plus the exact Next.js + Tailwind v4 + next-themes wiring. Follow it.
- `design-system/accessibility-and-conflicts.md`: the WCAG 2.1 AA floor and how brand-vs-contrast conflicts were resolved. Non-negotiable.
- `design-system/components/<Name>/README.md`: anatomy, variants, states, motion and accessibility for each of the ~40 components. `components/index.d.ts` has their prop contracts.
- `design-system/reference-implementation/bundle.js` + `bundle.css`: a working React 18 reference build of every component, with its markup, class structure, copy and exact values. Use it as the spec for structure and numbers. Port it to typed, idiomatic components. Don't ship the bundle itself.
- `page-designs/*.dc.html` + `canvas.json`: the approved page compositions for Home, Services, About, Partnerships, Work, Blog and Contact. They mount the components from the bundle, so read them together. Section order, headings, copy and placeholders on these pages are the intended content.

## 0. Ground rules

1. **Branch first.** Create `redesign/new-site` from the default branch before touching anything. Commit at the end of every phase below with a clear message. Never push to or merge into the default branch. When finished, push the branch and open a **draft PR**.
2. **Audit before deciding.** Before phase 1, inspect the existing repo and report back in a short summary (as a markdown note in `docs/redesign/AUDIT.md`, committed):
   - current framework
   - hosting/deploy config (Vercel/Netlify/Cloud Run/Docker, etc.)
   - analytics and tracking scripts
   - forms and where they submit
   - environment variables
   - existing URLs/routes and any content worth keeping
   - domain/DNS-related files
   Preserve deploy config, analytics IDs and anything domain-related unless it conflicts with the stack below. If it conflicts, keep the old behaviour working and flag it.
3. **Don't invent facts.** No made-up clients, testimonials, statistics, team members, prices, dates or case studies. Where the design has a bracketed placeholder (e.g. `[Client name]`), keep it as a clearly marked placeholder in a content file. Where the design system flags figures as illustrative (the status cards on hero visuals), keep them but list them for review. Gather every placeholder into the PR description as a checklist.
4. **Match the design exactly.** Copy exact numeric values (paddings, radii, font sizes, line heights, shadows, durations) from the tokens and `bundle.css`. Don't round them to a framework default or "improve" the design. If something is ambiguous or genuinely broken, choose the option closest to the reference, note it in the PR, and move on. Don't stop to ask.
5. **Avoid the anti-patterns in the README:**
   - gradient washes
   - pill eyebrow badges with status dots (interior pages open with breadcrumbs instead)
   - emoji
   - stock-photo heroes
   - carousels and marquees
   - over-rounding past `radius-xl`
   - Inter/Roboto/Arial
   - dark neon "AI startup" styling
6. **Write copy in British English**, in sentence case. Buttons are verbs. Keep the two audiences distinct on every CTA: **Hire us** (businesses) and **Partner with us** (sponsors, institutions).

## 1. Stack (decided — use this unless the audit finds a hard blocker)

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (current stable, App Router) + TypeScript (strict)** | Static generation for a marketing site, great SEO primitives, matches the team's stack and the design system's own wiring guide |
| Styling | **Tailwind CSS v4** with CSS custom properties generated from `tokens.json`, exposed through `@theme` exactly as in `motion-and-tailwind.md` | One source of truth. The tokens drive both CSS variables and utilities |
| Theming | **next-themes**, `attribute="data-theme"`, `defaultTheme="system"`, `enableSystem`, plus `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));` | The tokens key dark values off `[data-theme="dark"]` |
| Fonts | **next/font/google**: Plus Jakarta Sans (400–800) as `--font-sans`, IBM Plex Mono (400/500) as `--font-mono` | No render-blocking font request |
| Icons | **lucide-react**, stroke 1.75 (2 at 16px), sizes 16/20/24 | Per the README. The bundle's local icon set is a stand-in for Lucide |
| Motion | CSS keyframes + a small `useInView` (IntersectionObserver) hook; **no animation library** | The spec is fade-up, reveal, drift, count-up and bar-fill only. Must honour `prefers-reduced-motion` |
| Content | **MDX files in the repo** for blog posts and case studies (e.g. `content/blog/*.mdx`, `content/work/*.mdx`) with typed, validated frontmatter; site copy for services, pillars, steps, events and team in typed TS content modules under `content/` | No CMS yet, and placeholders stay easy to find and replace |
| Contact form | **Server Action** + **zod** validation + honeypot field, sending through **Resend** (`RESEND_API_KEY`, `CONTACT_TO_EMAIL` env vars; document them in `.env.example`). Progressive enhancement: works without JS | Simple, no third-party form service |
| Quality | ESLint, Prettier, `tsc --noEmit`, **Playwright** smoke tests with **@axe-core/playwright** | Enforce the accessibility floor automatically |
| Deploy | Keep the host the audit finds. If there is none or it is static-only, target **Vercel** | |

Use pnpm unless the repo already uses another package manager.

## 2. Phases

### Phase 1: Foundation
- Scaffold (or migrate into) the Next.js App Router project. Remove the old site's code only once its routes are mapped for redirects.
- Write `scripts/build-tokens.ts` to compile `docs/redesign/design-system/tokens.json` into `app/ds-tokens.css`:
  - `:root` for light values and `[data-theme="dark"]` for dark values
  - resolve `{blue-600}`-style references
  - emit colour, spacing, radius, shadow, opacity and font-family variables
  - emit type-style utility classes (`.display`, `.h1`–`.h6`, `.lead`, `.body`, `.small`, `.caption`, `.overline`, `.label`, `.label-sm`, `.code`, `.code-sm`) with their mobile sizes below 768px, as documented in each style's `usage` note
  - run it as a `prebuild` script, and commit the output too
- Add the motion variables and the global reduced-motion guard from `motion-and-tailwind.md`.
- Wire up `globals.css`, `@theme`, the dark variant, fonts, `ThemeProvider` and a base layout: skip-to-content link, `<Header>`, `<main id="main">`, `<Footer>`.
- Layout primitives: `Container` (max 1280, gutters 16/32), `Section` (64/80/128px block padding at base/md/lg, `subtle` variant).

### Phase 2: Primitives
Port these from the READMEs + bundle, fully typed, with every state (hover, focus-visible, active, disabled, loading, error):
- `Button` (primary/secondary/ghost/link × sm/md/lg; `asChild` or `href` for navigation using `next/link`)
- `TextLink`, `Input`, `Textarea`, `Select` (native), `Checkbox`, `RadioSegmented` (with arrow-key navigation), `Badge`
- `ImagePlaceholder` (swappable for `next/image` when a `src` is given), `Breadcrumbs`, `Pagination`, `Icon` wrapper over lucide

### Phase 3: Composite components
- `Header`:
  - sticky with blur
  - Services dropdown (real `aria-expanded`, Escape to close, click-outside)
  - theme toggle
  - Contact CTA
  - mobile sheet below 1024px
  - active-route state
  - real links to all routes
- `Footer`: real routes, `mailto:`/`tel:` links, social links with `aria-label`s.
- `LayeredVisual` + the six `VisualCards` (`ProgressCard`, `TicketCard`, `FlowCard`, `MetricCard`, `InfoCard`, `EventMiniCard`), `HeroVisual`, `PageHero`, `SplitHero`.
- `Reveal`, `CountUp`, `SectionHeader`, `ServiceCard`, `ProcessSteps` (`<ol>`), `StrategicPillars`, `Timeline` (`<ol>`), `LogoStrip`, `Testimonial`, `CaseStudy`, `EventHighlight`, `BlogCard`, `ArticleProse` (MDX components), `TeamCard`, `StatBlock`, `CTABanner`, `EmptyState`, `NotFound`, `ContactForm`.
- Keep components server components by default. Only interactive or animated pieces get `"use client"`.

### Phase 4: Pages and routes
Build each page to match its composition in `page-designs/`, plus the component README for that page (`Homepage`, `ServiceDetail`, `AboutPage`, `PartnershipsPage`, `WorkPage`, `BlogPage`, `ContactPage`):

| Route | Source |
|---|---|
| `/` | `page-designs/Main.dc.html` |
| `/services` | `page-designs/Services.dc.html` |
| `/services/[slug]`: `website-development`, `it-support`, `cloud-microsoft-365`, `ai-automation` | `components/ServiceDetail/README.md` + `SERVICE_PAGES` in `bundle.js` (statically generated) |
| `/about` | `About.dc.html` |
| `/partnerships` | `Partnerships.dc.html` |
| `/work`, `/work/[slug]` | `Work.dc.html` + MDX case studies (ship one clearly-marked placeholder entry) |
| `/blog`, `/blog/[slug]` | `Blog.dc.html` + MDX posts. Use the three example titles as draft posts marked `draft: true`, excluded from production builds |
| `/contact` | `Contact.dc.html`. Show the error state only after invalid submission, not by default |
| `/privacy` | Simple prose page with a clear `[Privacy policy text to be supplied]` placeholder |
| `not-found.tsx` | `components/NotFound/README.md`. Must return a real 404 |

- Wire every CTA to a real destination:
  - "Request a quote" → `/contact?type=hire`
  - "Start a partnership" → `/contact?type=partner`, preselecting the form's segmented control
  - service cards → their detail pages
  - "How we work" → the process section anchor
- All four page layouts must be responsive: stacked on mobile, with the breakpoints given in each README (`md` 768, `lg` 1024). Check them at 375, 768, 1024 and 1440px widths.

### Phase 5: SEO, metadata, performance
- Per-page `metadata` (title template `%s · TELDEV Technologies`, description, canonical), Open Graph/Twitter images (generated with `next/og` in the brand style), `sitemap.ts`, `robots.ts`, `manifest`, favicon from the TELDEV logomark (the SVG path is in `bundle.js` → `Logomark`).
- JSON-LD: `Organization`/`ProfessionalService` (Lagos, Nigeria, contact details) on the homepage, `Service` on service pages, `Article` on posts, `BreadcrumbList` wherever breadcrumbs show.
- 301 redirects from every old URL found in the audit to its new equivalent (`next.config` `redirects`).
- `next/image` for all real imagery with explicit sizes. No layout shift from the layered visuals.
- Target Lighthouse ≥ 95 for Performance, Accessibility, Best Practices and SEO on mobile for `/` and `/contact`.

### Phase 6: Verification (don't skip)
- `pnpm lint`, `pnpm typecheck` and `pnpm build` all pass with zero errors.
- Playwright tests:
  - every route renders with one `h1`
  - header nav and the mobile menu work by keyboard
  - the theme toggle persists
  - the contact form shows validation errors and succeeds against a mocked sender
  - the 404 route returns status 404
- axe checks on every route in **both light and dark themes** report no serious or critical violations.
- Reduced motion: with `prefers-reduced-motion: reduce` emulated, content is visible immediately and nothing drifts.
- Screenshot each page at 375 and 1440px in both themes. Compare them side by side with the `page-designs` compositions and fix any drift in spacing, type or colour.

## 3. Definition of done
- Branch `redesign/new-site` pushed, with a draft PR containing:
  - a summary of the stack and any deviations from this brief (with reasons)
  - the audit findings
  - screenshots (mobile + desktop, light + dark) of every page
  - Lighthouse scores
  - **a checklist of every placeholder and illustrative figure to replace before launch**: testimonials, client and partner logos, case studies, team names/bios/portraits, photography, event dates/details, blog dates, pillar wording, privacy policy, hero card figures, and confirmation of `contact@teldev.org` / `+234 708 403 6561`
  - the env vars needed to deploy
- `README.md` updated with how to run, build, add a blog post or case study, regenerate tokens from `tokens.json`, and deploy.
