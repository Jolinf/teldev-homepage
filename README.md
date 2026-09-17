# TELDEV Technologies — website

The TELDEV Technologies marketing site: Next.js App Router, TypeScript, Tailwind CSS v4.
See `progress.md` for the full rebuild history and `docs/redesign/AUDIT.md` for the
pre-migration audit of the previous (Vite/React Router) site.

The site was built against a design-system kit (`teldev-redesign-kit/`: tokens.json,
component READMEs, page compositions, a reference implementation bundle) that has since
been deleted once every token, component and page was ported — `app/ds-tokens.css` and
`app/ds-components.css` are now the hand-maintained source of truth (see below).

## Stack

- Next.js 16 (App Router), TypeScript (strict)
- Tailwind CSS v4, mapped onto the design tokens in `app/ds-tokens.css`
- `next-themes` for light/dark (`data-theme` attribute, `defaultTheme="system"`)
- MDX (`next-mdx-remote`) for blog posts and case studies, `gray-matter` for frontmatter
- `react-hook-form`-free: the one form (contact) uses a Server Action + `zod` + `useActionState`
- `lucide-react` icons, `@vercel/analytics` + `@vercel/speed-insights`
- Playwright + `@axe-core/playwright` for e2e/accessibility tests

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

Other scripts: `npm run lint`, `npm run typecheck` (`tsc --noEmit`), `npm run test:e2e`
(Playwright — see below).

## Changing design tokens

`app/ds-tokens.css` (colour/spacing/radius/shadow/opacity custom properties, `:root` for
light and `[data-theme="dark"]` for dark, plus the `.h1`–`.h6`/`.body`/`.overline`
type-style classes) used to be generated from `teldev-redesign-kit/design-system/tokens.json`
by a `scripts/build-tokens.ts` compiler. Both the kit and the script were removed once
every token was ported — the file is now hand-edited directly. Mobile type sizes (the
`@media (max-width: 767px)` block at the bottom) were originally transcribed from a
typography table in the kit's `token-reference.md`; there's no longer a second source to
keep in sync with, since that table no longer exists in this repo.

Everything else design-system-related — component layout, motion, state (`.ds-btn`,
`.ds-card`, `.ds-lv`, etc.) — lives in `app/ds-components.css`, originally ported from the
kit's reference implementation bundle and now likewise hand-maintained directly.

## Adding a blog post

Add an `.mdx` file to `content/blog/`:

```mdx
---
title: "Post title"
excerpt: "One sentence for the card and the meta description."
category: "Guides"
date: "2026-03-01"
readTime: "4 min read"
draft: false
---

Post body in Markdown/MDX. See `components/article-prose.tsx` for the styled elements
available (headings, blockquote, code, tables, images).
```

`draft: true` posts render in development but are excluded from production builds (see
`lib/content.ts`) — that's how the three example posts shipped with this redesign work.
Set `draft: false` (or remove the field) when a post is ready to publish.

## Adding a case study

Same pattern, in `content/work/`:

```mdx
---
title: "Case study title"
summary: "One sentence for the card."
note: "A short scene description for the (currently placeholder) photograph."
metricLabel: "Downtime during move"
metricValue: "0 hrs"
placeholder: false
---

Case study body in MDX.
```

`placeholder: true` shows a warning badge on the detail page — use it for illustrative
entries the way `content/work/cloud-migration-with-zero-downtime.mdx` does until a real
project replaces it.

## Testing

```bash
npm run test:e2e
```

Runs the Playwright suite in `e2e/`: every route renders with exactly one `h1` and the
404 route returns a real 404 (`routes.spec.ts`); header keyboard navigation, theme
persistence, and contact-form validation (`navigation.spec.ts`); zero serious/critical
axe violations on every route in both themes (`accessibility.spec.ts`); reduced-motion
content is visible immediately with no drift (`reduced-motion.spec.ts`).

The config launches system Chrome (`channel: 'chrome'`) rather than Playwright's own
bundled browser — swap `playwright.config.ts` back to a plain `devices['Desktop Chrome']`
project (and run `npx playwright install chromium`) if you'd rather use Playwright's own
pinned browser build in an environment with normal internet access.

## Deploying

Vercel is the deploy target (see `docs/redesign/AUDIT.md` for why — a GitHub Pages
workflow existed alongside it before this redesign and has been removed). Required
environment variables:

| Variable | Purpose |
| --- | --- |
| `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET` | Microsoft Graph app registration the contact form sends mail through (`lib/mailer.ts`) |
| `GRAPH_TIMEOUT_MS` | Optional, defaults to 30000 |
| `CONTACT_SENDER_EMAIL` | Optional, defaults to `noreply@teldev.org` |
| `CONTACT_RECIPIENT_EMAIL` | Optional, defaults to `contact@teldev.org` |
| `CONTACT_EMAIL_LOGO_URL` | Optional absolute URL; falls back to a text logo in the notification email |

`vercel.json` carries security headers and image cache headers; Next.js handles routing,
`sitemap.xml`, `robots.txt`, and the manifest natively (see `app/sitemap.ts`,
`app/robots.ts`, `app/manifest.ts`).
