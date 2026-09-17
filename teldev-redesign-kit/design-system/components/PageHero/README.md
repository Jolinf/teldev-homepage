The opening section of every interior page (About, Partnerships, Work, Blog, each service page): headline and actions on the left, a `LayeredVisual` on the right. It carries the homepage hero's design onto the rest of the site.

**Props.** `breadcrumbs` (Home › page, or Home › Services › service), `title`, `accent` (the last words, set in `link` colour), `lead`, `actions` (array of keyed `Button`s), `visual` (a `LayeredVisual`).

**Rules.** One `h1` per page, which this is. Keep `accent` to the two or three words that carry the page's promise. At most one primary button plus one ghost button.

**Motion.** The text block fades up on load; the visual animates as described in `LayeredVisual`. Off under `prefers-reduced-motion`.

**Layout.** Stacked on mobile, two equal columns from `lg` (1024px).

**No pill labels.** Pages open with breadcrumbs, not a rounded eyebrow badge with a status dot — that pattern reads as a generic AI-built template. The breadcrumb does the same job (says where you are) and is useful navigation.
