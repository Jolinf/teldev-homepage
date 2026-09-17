# Pre-redesign audit

Findings from inspecting the repo before starting the Next.js migration, per
`teldev-redesign-kit/CLAUDE_CODE_PROMPT.md` §0.2.

## Current framework

- Vite 6 + React 19 + TypeScript, client-side routed with `react-router-dom` v7
  (`BrowserRouter`, routes declared in [src/App.tsx](../../src/App.tsx)).
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`, plus `framer-motion` for animation.
- Entry: [src/main.tsx](../../src/main.tsx), [index.html](../../index.html).

## Hosting / deploy config

- **Two deploy targets exist simultaneously**:
  - `vercel.json` at repo root — SPA rewrite (`/:path*` → `/index.html`), asset
    caching headers, and a security-header set (HSTS, CSP, X-Frame-Options, etc.)
    on every route. CSP currently allowlists `va.vercel-scripts.com` (Analytics)
    and `vitals.vercel-insights.com` (Speed Insights) only — will need
    `resend.com`/other new origins added if introduced.
  - `.github/workflows/*.yml` — a "Deploy to GitHub Pages" workflow that builds
    with `npm ci && npm run build` and publishes `./dist` on every push to `main`.
  - **Flag for the user**: unclear which of these two is the live production
    target for teldev.org. Preserving both is not possible as-is once the app
    moves to Next.js SSR (GitHub Pages is static-only). Default to Vercel per
    the brief's own stack table; the GitHub Pages workflow should be removed or
    explicitly kept as a secondary static mirror — needs a decision.
- Two more subprojects with their own deploy surfaces:
  - `Server/` — a separate Node server (`Server/index.js` + its own
    `package.json`/`.env`), purpose not yet confirmed against `api/*.ts`.
  - `blog-cms/` — a **Strapi 5** application (`blog-cms/package.json`:
    `"description": "A Strapi application"`), with its own `config/`,
    `database/`, `.env.example`. However, the live post-reading/writing API
    (`api/posts.ts`) talks directly to **MongoDB**, not to Strapi's REST/GraphQL
    API. Strapi appears to be either legacy, unused, or mid-migration — needs
    confirmation before deciding whether MDX file-based blog content (per the
    brief) fully replaces it or whether Strapi/Mongo stays as the CMS.

## Analytics and tracking

- `@vercel/analytics` (`<Analytics />`) and `@vercel/speed-insights`
  (`<SpeedInsights />`), both mounted in [src/main.tsx](../../src/main.tsx).
  No other tracking scripts (no GA, no Meta Pixel, no GTM) found in
  `index.html` or `src/`.
- **Carry over as-is**: swap in the Next.js equivalents
  (`@vercel/analytics/next`, `@vercel/speed-insights/next`) in the new root layout.

## Forms and where they submit

- Contact form posts to `POST /api/contact` ([api/contact.ts](../../api/contact.ts)),
  a Vercel serverless function that sends mail via **Microsoft Graph**
  (client-credentials OAuth → `POST /users/{sender}/sendMail`), **not** Resend.
  - Required env: `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`.
  - Optional env: `GRAPH_TIMEOUT_MS`, `CONTACT_SENDER_EMAIL`
    (default `noreply@teldev.org`), `CONTACT_RECIPIENT_EMAIL`
    (default `contact@teldev.org`), `CONTACT_EMAIL_LOGO_URL`.
  - Server-side validation already covers required fields, terms-agreed
    checkbox, and email format; returns `{ success, error }` JSON.
  - **Conflicts with the brief** (which specifies Resend). Per ground rule 2
    ("if it conflicts, keep the old behaviour working and flag it"): the new
    Server Action will keep sending through Microsoft Graph using this same
    handler's logic, not switch providers. Flagging this deviation for the PR
    description rather than silently adopting Resend.
- A second API, `POST /api/posts` ([api/posts.ts](../../api/posts.ts)), lets an
  admin (`x-admin-secret` header checked against `ADMIN_POST_SECRET`) write blog
  posts directly into MongoDB. `GET /api/posts` and `GET /api/posts?slug=` read
  them back. This is the backing store for `/BlogPage`, `/blog/:slug`, and the
  `/admin/blog/new` authoring page in the current SPA.
  - **Conflicts with the brief's "MDX files in the repo, no CMS yet" content
    model.** Decision needed: migrate existing Mongo posts to MDX at build/audit
    time (one-off script) and retire this API, or keep Mongo-backed posts and
    treat MDX as additive for new content. Flagging for the PR — proceeding with
    MDX per the brief for the new site's blog routes, since that's ground-rule-1
    "decided" behaviour, but the existing Mongo posts should be exported to MDX
    before `api/posts.ts` is removed so no published content is lost.

## Environment variables (found)

From `api/*.ts` and `Server/.env` / `blog-cms/.env.example` (names only, no
values read):
- `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, `GRAPH_TIMEOUT_MS`
- `CONTACT_SENDER_EMAIL`, `CONTACT_RECIPIENT_EMAIL`, `CONTACT_EMAIL_LOGO_URL`
- `teldevdb_MONGODB_URI` (note the mixed-case name — must be preserved exactly)
- `ADMIN_POST_SECRET`
- `NODE_ENV` (standard)
- `Server/.env` and `blog-cms/.env.example` contain their own vars for those
  subprojects; not yet enumerated since they're outside the SPA the redesign
  is replacing. Will confirm before deleting either directory.

## Existing routes (current SPA, react-router)

| Current path | New route (per brief) |
|---|---|
| `/` | `/` |
| `/whoweare` | `/about` |
| `/whatweoffer` | `/services` |
| `/Helpdesk` | `/services/it-support` (best-guess mapping, to confirm against copy) |
| `/Network` | `/services/it-support` or split — to confirm |
| `/Webdev` | `/services/website-development` |
| `/Cloud` | `/services/cloud-microsoft-365` |
| `/ItConsulting` | `/services/it-support` (to confirm) |
| `/AiAutomation` | `/services/ai-automation` |
| `/ContactUsPage` | `/contact` |
| `/BlogPage` | `/blog` |
| `/blog/:slug` | `/blog/[slug]` |
| `/admin/blog/new` | dropped (no CMS in new content model — flag if still needed) |

All of the above get 301 redirects in `next.config` from old path → new path
(case differences included, e.g. `/Helpdesk` → lowercase target) per Phase 5.

## Domain / DNS-related files

- None found in-repo (no `CNAME` file, no DNS config). Domain is presumably
  managed directly in Vercel/registrar dashboards, outside this repo.

## Content worth keeping

- `src/Sections/*` and `src/Pages/*` hold the current copy per section/page —
  useful as a cross-check for real facts (team, services, contact details) when
  filling the new content modules, but the brief's own `page-designs/*.dc.html`
  is the source of truth for structure and copy. Will consult the old copy only
  to avoid inventing facts the brief leaves as placeholders.
- `src/assets/*` image directories — real photography/illustrations that may be
  reusable; not blindly ported since the new design uses `ImagePlaceholder` /
  `next/image` per the design system, but worth a pass before marking things as
  placeholders that already have a real asset available.

## Open questions for the user (not blocking Phase 1, flagged in PR)

1. Vercel or GitHub Pages as the real production target — GitHub Pages can't
   serve a Next.js SSR app.
2. Is Strapi (`blog-cms/`) live/in-use, or legacy? Confirms whether the new MDX
   blog is additive or a full replacement.
3. Is `Server/` still needed once its functionality (if any, beyond `api/*.ts`)
   is confirmed?
4. Confirm the old-route → new-route mapping above, particularly the four
   service sub-pages that don't map 1:1 to the four new service slugs.
