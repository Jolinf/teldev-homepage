Rich-text typography for a CMS-authored blog post — headings, lists, quotes, inline and block code, tables and images all styled from one `.ds-prose` wrapper.

**Anatomy.** Max-width 68 characters for body copy; `h2`/`h3` for in-article structure (never `h1` — the page title already used that rank); a brand-coloured left rule on blockquotes; a dark, `mono`-set code block; bordered tables with a `bg-subtle` header row.

**Accessibility.** Heading ranks inside an article must not skip a level (an `h2` must not be followed directly by an `h4`); tables use real `<th>` header cells, not bolded `<td>`s, so screen readers announce row/column context.
