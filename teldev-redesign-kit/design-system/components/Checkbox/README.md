A single checkbox with its label as part of the click/tap target.

**Anatomy.** 20px box (`radius-sm`, `border-strong`), a `primary`-filled check mark when checked, label in `body` immediately to the right — the whole row is the 44px-tall click target, not just the box.

**States.** default; `:checked` (`primary` fill, white check); `:focus-visible` (`focus-ring`); `disabled` (50% opacity).

**Accessibility.** A real `<input type="checkbox">` wrapped by its `<label>`, never a `div` with a click handler — this keeps Space-to-toggle and screen-reader state announcement native.
