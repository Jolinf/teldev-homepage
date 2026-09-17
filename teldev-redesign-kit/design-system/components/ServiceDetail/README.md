**Sample composition** — a service page, built with the same design as the homepage: a `PageHero` with breadcrumbs, the service name, quote and "How we work" buttons, and a `LayeredVisual` whose cards show that service at work. Below it, three cards (the problem, what we do, outcomes) reveal on scroll. Use the switcher in the preview to see all four services.

**Props.** `service` — `web`, `it`, `cloud` (default) or `ai`.

**Cards per service.** Website: mobile performance score, launch checklist, design → build → live. IT support: resolved ticket, network uptime, network audit. Cloud: Microsoft 365 migration progress, licences tracked, migration order. AI and automation: invoice automation, time saved, workflow build. All figures and service copy are illustrative; replace them before launch.

**Layout.** Headline and visual side by side from `lg`; the three explanation cards run 1-up on mobile and 3-up from `md`.

**Accessibility.** One `h1` (the service name); the three cards use `h2`. The visual is `aria-hidden`, so nothing in it is the only place a fact appears.
