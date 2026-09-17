A row of real figures — never filler numbers. Ships with em-dashes until TELDEV supplies confirmed figures; do not invent placeholder statistics like "500+ clients."

**Anatomy.** A `display`-weight number in `primary`, a `small` `text-muted` label underneath.

**Motion.** Each stat reveals in a stagger. Numeric values ("120", "99.9%", "1,200+") count up from zero over 1.2s when they scroll into view, keeping their prefix, suffix and decimals; non-numeric values show as-is. Under `prefers-reduced-motion` the final number shows at once.

**Accessibility.** Screen readers get the final value as text; the counting digits are `aria-hidden`.
