A native `<select>`, styled to match `Input` with a trailing chevron.

**Anatomy.** Same label/control/helper stack as `Input`; a `chevron-down` icon sits absolutely inside the control, pointer-events disabled so clicks reach the native select underneath (which keeps native keyboard and screen-reader behaviour intact — this is deliberately not a custom listbox).

**States.** Same as `Input`. **Accessibility.** Native `<select>` semantics are preserved throughout — arrow keys, type-ahead and screen-reader announcement all come free; do not replace it with a `div`-based custom dropdown for this control.
