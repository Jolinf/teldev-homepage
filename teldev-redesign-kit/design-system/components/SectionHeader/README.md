The overline + heading + lead pattern that opens nearly every section on the site.

**Anatomy.** `overline` (uppercase, `primary`-coloured, optional), `h2` heading, an optional `lead` paragraph in `text-muted`, max-width 640px (720px centred) so the lead never runs edge-to-edge on wide screens.

**Variants.** left-aligned (default, most sections); `center` (used sparingly — a section introduced with no adjacent asymmetric content, like a stats band).

**Accessibility.** Always a real heading element (`h2` by default) in document order — never a styled `<div>` standing in for a heading, since screen-reader users navigate a page by its heading outline.
