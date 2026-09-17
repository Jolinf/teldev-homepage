The sticky site header — logo, primary nav with a Services dropdown, the Contact CTA, and a theme toggle. Try it live: click "Services", the sun/moon icon, and (narrow the preview) the menu icon.

**Anatomy.** Logo lockup (mark + wordmark) · nav links (Services ▾, About, Partnerships, Work, Blog) · theme toggle · primary `Button` (Contact) · mobile menu button (shown under `lg`, 1024px).

**Behaviour.** Sticky (`position: sticky; top: 0`) with a translucent blurred background so content is still legible scrolling underneath. The Services item is a dropdown listing all four live services with a one-line description each. Under 1024px, the nav links and CTA collapse behind a menu button that opens a sheet.

**States.** rest; scrolled (background gains the blur + `border` bottom, applied via a scroll listener in the real implementation — the sticky positioning here is the token-level contract, the scroll-triggered background swap is an implementation detail); dropdown open/closed; mobile sheet open/closed; theme light/dark.

**Spacing.** 72px bar height; `space-6` between nav items; `space-4`/`space-8` container gutters (mobile/desktop).

**Accessibility.** Logo links to `/` with an accessible name ("TELDEV, home"). The Services trigger is a real `<button aria-haspopup="true" aria-expanded>`; the panel is `role="menu"` with `role="menuitem"` entries, closable with Escape (wire this in the app — the preview demonstrates the open/closed visual states). Focus order: logo → nav items left to right → theme toggle → Contact → mobile menu button. The mobile menu button toggles `aria-expanded` and swaps its icon and accessible name between "Open menu"/"Close menu".
