# Apple Human Interface Guidelines audit

Site: the Next.js rebuild in this repo (production build, served locally), checked on
2026-09-24 at 390×844 (phone) and 1440×900 (desktop) with reduced motion on, plus a
read of the relevant components and CSS.

## Read this first: what the HIG does and doesn't cover

The HIG is written for native apps on Apple platforms (iOS, macOS, visionOS and so on),
not for marketing websites. Parts of it don't transfer at all: Liquid Glass, SF Symbols,
Dynamic Type APIs, launch screens, size classes. This audit uses only the principles that
translate to the web, and maps Apple's point values to CSS pixels (1pt ≈ 1 CSS px). Where
a finding is really a web-accessibility (WCAG) issue that the HIG also calls for, it says
so.

Sources: HIG pages Accessibility, Typography, Layout, Color, Motion, Writing, Buttons and
Branding (developer.apple.com/design/human-interface-guidelines).

## Summary

| # | Finding | HIG area | Severity |
|---|---|---|---|
| 1 | Every page opens with the same hero, and on a phone it pushes real content more than one full screen down | Layout, Branding | High |
| 2 | Decorative "floating cards" with invented figures sit in the most important space on every page | Branding, Layout | High |
| 3 | Most body text is 14px | Typography | High |
| 4 | Many tap targets are under 44×44 on phones | Accessibility, Buttons | High |
| 5 | Font sizes are fixed in px, so browser text-size settings are ignored | Accessibility, Typography | Medium |
| 6 | Scroll-reveal on almost every block, plus an endless floating animation | Motion | Medium |
| 7 | Brand blue is used for too many things at once | Color, Branding | Medium |
| 8 | No high-contrast mode | Color, Accessibility | Low |
| 9 | Button and link labels: vague "Learn more", noun-only "Contact" | Writing, Buttons | Low |
| 10 | Blog empty state has no next step | Writing | Low |
| 11 | Services menu is marked up as an app menu but doesn't work like one from the keyboard | Accessibility (keyboard) | Medium |
| 12 | Consent checkbox is ticked by default | Writing (and NDPA) | Medium |

What already meets the HIG: light and dark mode both designed and contrast-checked (axe,
both themes); no light font weights; two typefaces only (Plus Jakarta Sans, IBM Plex Mono);
color is never the only signal (timeline and form errors pair color with text or shape);
reduced motion is respected; nothing autoplays; error messages say what to do ("Enter a
valid email address.") without "oops" or blame; one clear primary action per view in most
places; sentence case used consistently for headings and buttons.

## Findings

### 1. Same hero on every page, and it buries content on phones (High)

**HIG:** "Order content by relative importance. Place the most important items near the
top." (Layout) · "Ensure branding always defers to content." (Branding)

**What the site does:** About, Services, all six service pages, Partnerships, Work, Blog
and Contact use one template: headline with a blue accent phrase, a lead paragraph, and a
`LayeredVisual` (photo slot plus three floating cards). The home page uses a variant of the
same layout. So yes, the pages do all feel the same, because they are built from the same
block.

On a 390px phone the first real content (the first section heading or card below the hero)
starts at:

| Page | First content (px from top) | Screen height |
|---|---|---|
| Home | 1,085 | 844 |
| Services | 1,249 | 844 |
| Helpdesk support | 1,117 | 844 |
| About | 1,143 | 844 |
| Partnerships | 1,124 | 844 |
| Work | 1,003 | 844 |

That's a full screen or more of headline plus decoration before a phone visitor sees what
the page is actually about. On a service page, "The problem / What we do / Outcomes" (the
whole point of the page) is all below that.

**Fix:** give each page type a hero that matches its job, and keep the layered visual for
the home page only:
- Service pages: headline + lead + the three problem/what/outcomes blocks visible straight
  away; drop the layered visual or reduce it to one real photo.
- About: lead with the mission, or a team photo once one exists.
- Work: lead with the case studies themselves.
- Contact: form first on phones (it's the only reason to be on the page).
- On phones, hide the floating cards entirely; if a photo exists, show it once, below the
  headline.

### 2. Decorative cards with invented figures (High)

**HIG:** "Ensure branding always defers to content." · "Using screen space for an element
that does nothing but display a brand asset can mean there's less room for the content
people care about." (Branding)

**What the site does:** 2 to 5 decorative cards per page (Home 4, Services 4, Work 5)
showing "Ticket #2481", "99.9% uptime", "38 of 44 mailboxes", "11 hrs saved". They take
the prime spot next to every headline, they aren't real, and visitors will read them as
claims. (Already logged in `docs/content-tracker.md` under decisions.)

**Fix:** remove them, or replace with real figures once there are case studies. Pairs
naturally with finding 1.

### 3. Body text is mostly 14px (High)

**HIG:** default text size 17pt on iPhone, 13pt on Mac; "Use font sizes that most people
can read easily." (Typography)

**What the site does:** the `.small` style (14px) is by far the most common size on every
page (e.g. 39 of 88 text runs on Home, 51 of 104 on Services). All the substantive copy
on service pages (problem / what / outcomes on the overview), pillar descriptions, card
descriptions, footer and team text are 14px. Captions go down to 12px, and event card
labels on Partnerships to 11px (the HIG floor on iPhone).

**Fix:** make 16px the minimum for any sentence people are meant to read, 17–18px on
phones for body copy; keep 14px for metadata only (dates, labels). 11–12px only for
decorative or supplementary labels.

### 4. Tap targets under 44×44 on phones (High)

**HIG:** controls default 44×44pt on iPhone, 28×28pt absolute minimum; "about 12 points
padding around elements with bezels". (Accessibility, Buttons)

**What the site does (390px):**
- Footer links: 21px tall, stacked 10px apart (every page, 13 links).
- "Privacy" link: 44×14.
- Social icons: 40×40 (footer), 36×36 (team LinkedIn).
- "Learn more" links on service cards: 24px tall.
- "Other services" chips on service pages: 36px tall.
- Contact form segmented control ("Hire us / Partnership / Other"): 38px tall.
- Breadcrumb links: 21px tall.

**Fix:** give footer and breadcrumb links at least 44px of tap height (padding, not
bigger text), make social icons 44×44, make the whole service card the link instead of
only "Learn more", and bump chips and the segmented control to 44px.

### 5. Text size is fixed in px (Medium)

**HIG:** "Support larger text sizes... at least 200%." (Accessibility) Web equivalent:
respect the browser's text-size setting (WCAG 1.4.4).

**What the site does:** all 25 type sizes in `app/ds-tokens.css` are in px, 0 in rem. Page
zoom still works, but someone who has set a larger default text size in their browser or
phone settings gets no change.

**Fix:** convert the type scale to rem (16px = 1rem). No visual change at default settings.

### 6. Motion on almost everything (Medium)

**HIG:** "Add motion purposefully... Don't add motion for the sake of adding motion." ·
"Don't make people wait for an animation to complete." · "Generally avoid adding motion
to UI interactions that occur frequently." (Motion)

**What the site does:** 19 separate scroll-reveal blocks on the home page (12 on About),
each fading up with staggered delays, so content appears in sequence as you scroll. The
CTA card floats up and down forever (`ds-float`, 7s, infinite), and progress bars animate
on load. Reduced motion is honoured, which is good, but the default experience is busy and
every scroll waits on a fade.

**Fix:** keep one entrance animation (the hero), remove the scroll reveals or limit them to
one per section with no stagger, and drop the infinite float.

### 7. Brand blue does too many jobs (Medium)

**HIG:** "Apply your app's accent color judiciously. Using your brand color too broadly can
overwhelm your interface and dilute its impact... use it intentionally for primary actions
or status indicators." · "Avoid using the same color to mean different things."
(Branding, Color)

**What the site does:** the same blue is used for primary buttons, headline accent words
on every page, links, icon tiles, the timeline, progress bars, the full-blue "Hire us"
panel and the full-blue CTA banner. On the home page the blue "Hire us" panel and the blue
"Start a partnership" button sit side by side, so neither reads as *the* primary action.

**Fix:** reserve solid blue for the one primary action per view. Drop the blue accent
phrase from headlines (or keep it on the home page only), and make the "Hire us" panel
and CTA banner neutral with a blue button.

### 8. No high-contrast mode (Low)

**HIG:** "Make sure all your app's colors work well in light, dark, and increased contrast
contexts." (Color)

**What the site does:** no `prefers-contrast` or `forced-colors` rules. Muted grey text
and hairline borders are the parts that suffer.

**Fix:** a small `@media (prefers-contrast: more)` block that darkens `--text-muted` and
borders.

### 9. Button and link labels (Low)

**HIG:** "Use verbs for button and link labels." Example: "Learn more about UX Writing",
not "Click here". (Writing, Buttons)

- "Learn more →" on six cards: identical visible text (screen readers get a real label,
  sighted users don't). Fix: make the whole card the link, drop the extra text.
- Header "Contact": use "Contact us" or "Get a quote".
- "How we work" as a button: reads as a heading, not an action. Use "See how we work".

### 10. Blog empty state (Low)

**HIG:** "Provide clear next steps on blank screens... with a button or link." (Writing)

The blog shows "No articles yet. Check back soon…" with nothing to do. Either hide Blog
from navigation until there are posts (tracker item 6), or add a link to Services or
Contact.

### 11. Services menu keyboard behaviour (Medium)

**HIG:** support full keyboard access. (Accessibility) Web equivalent: ARIA menu pattern.

The dropdown panel uses `role="menu"` / `role="menuitem"`, which tells screen readers
"arrow keys work here", but only Tab, Enter and Escape are handled. Fix: either add
arrow-key handling, or (simpler, and correct for site navigation) drop the `menu` roles
and use a plain list of links with `aria-expanded` on the button.

### 12. Pre-ticked consent box (Medium)

**HIG:** "Help people avoid errors... be clear about what someone can do." (Writing) This
is mostly a legal point: under the NDPA consent has to be a clear, affirmative action, and
a box that is already ticked isn't that.

The contact form's "I agree to be contacted about this enquiry" checkbox is
`defaultChecked`. Fix: untick it by default (validation already rejects the form without
it). Worth including in the legal review (tracker item 10).

## Suggested order

1. Findings 1 + 2 together (hero per page type, remove decorative cards). This is a
   design change and needs a decision first.
2. Findings 3, 4, 5 (type size, tap targets, rem). Mechanical, no visual redesign beyond
   slightly larger text.
3. Findings 6, 7 (motion, color restraint).
4. Findings 8–12 (small fixes).

## Status (2026-09-24)

| # | Status |
|---|---|
| 1, 2 | Fixed. One hero per page type (`components/page-heroes.tsx`): Services index, compact service pages with tabs, About statement, Partnerships photo band, Work and Blog title bar with content as the hero, Contact form-first. The layered visual and its illustrative cards now appear on Home only. Where the first real content starts on a 390px phone, before → after: Services 1,249 → 644px (the service index), service pages 1,117 → 744px, About 1,143 → 987px, Partnerships 1,124 → 670px, Work 1,003 → 365px, Contact 869 → 405px (the form). |
| 3 | Fixed. Reading copy (card descriptions, pillars, process steps, timeline, service blocks, team bios, blog excerpts, case study summaries, empty states) moved from 14px to 16px; mobile body text raised from 15px to 17px. 14px kept for metadata only (footer, breadcrumbs, roles, labels). |
| 4 | Fixed. On touch screens every link and control is at least 44×44 (footer, breadcrumbs, Privacy, logo, text links, small buttons, segmented control, mobile menu); social icons are 44×44 everywhere. Service cards are fully tappable. Desktop layout unchanged. |
| 5 | Fixed. All type sizes and line heights are in rem; identical at default browser settings. |
| 6 | Left as is by decision (animations and transitions stay). |
| 7 | Partly fixed. Blue accent words now only on the Home headline. Still open: the solid blue "Hire us" panel and CTA banner. |
| 8 | Fixed. `prefers-contrast: more` darkens muted text and borders in both themes. |
| 9 | Fixed. Header button "Contact us"; "See how we work"; "Learn more" now covers the whole service card. |
| 10 | Fixed. Blog empty state links to Services. |
| 11 | Fixed. Services menu is a plain disclosure (button with `aria-expanded`/`aria-controls` and a list of links), not an ARIA app menu. |
| 12 | Fixed. Consent checkbox starts unticked; the server still rejects the form without it. |

Verified: typecheck, lint, production build, and the Playwright suite (39/39, including
axe in both themes).
