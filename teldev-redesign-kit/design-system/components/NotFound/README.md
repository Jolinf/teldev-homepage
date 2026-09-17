The 404 page body.

**Anatomy.** A floating `TicketCard` ("Error 404 · Not found") above an `h1` "Page not found", one line of explanation, and a primary `Button` back to the homepage.

**Motion.** Card, heading and copy fade up in sequence; the card then drifts slowly. Off under `prefers-reduced-motion`.

**Accessibility.** The card is `aria-hidden`. The page `<title>` should say "Page not found" and the server must return a real HTTP 404.
