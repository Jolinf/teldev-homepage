The six small cards that sit on a `LayeredVisual` (or on a `CTABanner`, or the 404 page). Each shows one fact, the way a dashboard would.

- **ProgressCard** — `icon`, `title`, `sub`, `value` (0–100), `foot`. For work under way: a migration, an audit, a build. The bar fills when it comes into view.
- **TicketCard** — `code` (mono reference), `status`, `tone` (`Badge` tone, default `success`), `statusIcon`, `title`, `sub`. For something finished or flagged: a ticket, a handover, a 404.
- **FlowCard** — `label`, `steps` (2–3 short words), `doneIndex` (which chip is filled; defaults to the last). For a sequence: an automation, "what happens next", a roadmap. In a roadmap set `doneIndex` to the stage reached, never the end.
- **MetricCard** — `icon`, `label`, `value`, `sub`. One number or short value, set in `h4` at weight 800.
- **InfoCard** — `icon`, `title`, `sub`. A plain fact: a location, an email address.
- **EventMiniCard** — `mon`, `day`, `title`, `sub`. A dated event, using the `EventHighlight` date chip.

**Styling.** Each card sits on `surface-raised` with a `border`, `radius-lg` and `shadow-lg`; text uses `text` and `text-muted`, so contrast holds in both themes.

**Copy.** Keep every card to one idea and under about eight words per line. Use real, plausible specifics (a ticket number, a response time), not superlatives.
