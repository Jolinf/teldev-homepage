Text-only navigation — used inline in copy, as a card's "learn more," and for external references.

**Anatomy.** `link` colour, underlined only when inline in a paragraph (a standalone link relies on colour + an arrow glyph or `arrow-up-right` icon, plus its position, to read as interactive — never colour alone against surrounding body text of a different colour, since `text` and `link` are always distinguishably different values). An external link always adds the `arrow-up-right` icon so leaving the site is signalled visually, not just via `target="_blank"`.

**States.** default (`link`); `:hover`/`:focus-visible` (`link-hover`, underline, 2px focus ring).

**Accessibility.** Link text is always descriptive on its own ("Read the case study", never bare "click here"). External links get `rel="noreferrer"` and, ideally, a visually-hidden "(opens in a new tab)" suffix for screen-reader users.
