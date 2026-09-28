# TELDEV site: content tracker

Everything the site still needs before it can drop the remaining placeholders. Content
source for what's already filled: the old site in `teldev-homepage-main` (copy ported
2026-09-24). Tick items off as they land; when an item is filled, remove its
placeholder from the file(s) listed.

Status key: `[ ]` open · `[~]` partly in / waiting on someone · `[x]` done

## Content needed

- [ ] **1. Real photography.** No real TELDEV photos exist; the old site's images were
      stock (Unsplash) and illustrations. Photo slots still waiting (each shows an
      `ImagePlaceholder` with a note describing the shot):
  - Home hero: AI-generated placeholder in place (2026-09-24,
    `public/images/hero-engineer-client.webp`, set in `app/page.tsx`); replace with a
    real photo of the team with a client when one exists
  - About: wide team photo under the statement; `app/about/page.tsx` (`photo` prop)
  - Partnerships: event photo behind the hero copy (pass `photo={{ src, alt }}` to
    `PhotoHero`; until then the hero is a solid dark band); `app/partnerships/page.tsx`.
    NAMS convention photos: see item 7.
  - Work: case study image; `content/work/*.mdx`
  - Blog: article images (`image:` in each post's frontmatter) for future posts
  - Services, service pages and Contact no longer use photos (hero redesign, 2026-09-24).
- [~] **2. Founder portraits.** Joshua Ulinfun's added 2026-09-25
      (`public/team/joshua-ulinfun.webp`, set via `image` in `content/team.ts`; also used
      in his blog bylines). Consider a replacement without sunglasses and without the DHL
      sign in the background. Still needed: Olutunde Solabi, Kayode Ojedele. Use square
      photos, head and shoulders, plain background.
- [~] **3. Client / partner logos.** Bash (usebash.io) added 2026-09-24: logo in both
      strips, plus an "Our events run on Bash" section on Partnerships
      (`components/partner-spotlight.tsx`, facts in `content/partners.ts`). Before launch:
      confirm the wording ("official events & ticketing partner"; that TELDEV events are
      ticketed on Bash) and let Bash review the section.
  - Home "Organisations we work with": NAMS Western Region and Bash only (placeholders
    removed 2026-09-28); `app/page.tsx`
  - Partnerships strip: University of Lagos (text), NAMS Western Region, Bash (Partner D
    removed 2026-09-28); `app/partnerships/page.tsx`
  - To add another logo: put the SVG in `public/partners/`, add an entry like `BASH.logo`
    in `content/partners.ts`, and pass it to `LogoStrip`.
- [~] **4. Testimonials.** Two DRAFT quotes written 2026-09-28 in
      `content/testimonials.ts`, one for Bash and one for NAMS Western Region, with
      `approved: false`. The testimonial cards are hidden on Home and Work until at least
      one entry is approved. To publish: send each draft to your contact there, let them
      rewrite it, then fill in their real name and role and set `approved: true`. Never
      publish a quote someone hasn't approved.
- [ ] **5. Case studies**; at least one real project (problem, what we did, what
      changed, one metric). Placeholder: `content/work/cloud-migration-with-zero-downtime.mdx`
      (`placeholder: true`). Work is hidden from the header, footer and sitemap
      (2026-09-28); the /work pages still exist. To bring it back, uncomment the Work link
      in `components/header.tsx` and restore it in `components/footer.tsx` and
      `app/sitemap.ts`.
- [~] **6. Blog posts.** First real post published 2026-09-24: "Fitted but not used:
      Nigeria and the technology it already has"
      (`content/blog/nigeria-and-the-technology-it-already-has.mdx`), credited to
      Joshua Ulinfun, with an AI-generated cover image
      (`public/blog/nigeria-technology-cover.webp`; replace with a real photo if
      preferred). Posts are credited to "TELDEV Technologies" unless `author:` is set. The old site's posts lived in MongoDB (API was returning 500) and
      were never exported.
      Two more published 2026-09-28: "Five signs your business is ready for Microsoft
      365" and "A simple backup plan for a small office". A third, "What our UNILAG
      partnership covers", was written and then removed the same day (decision). Cover images generated with Gemini
      2026-09-28 (`public/blog/*-cover.webp`); replace with real photos if preferred. The Nigeria post is pinned as the blog's lead story with
      `featured: true`; remove that to go back to newest-first.
- [~] **7. Partnership & event details.**
  - NAMS Western Region (Nigerian Association of Microbiology Students, Western Region):
    added 2026-09-26 from instagram.com/namswrgram. Crest in both logo strips
    (`public/partners/nams-west-region.webp`, `NAMS_WR` in `content/partners.ts`); event
    card updated to the real 7th Western Region Convention ("The UNILAG Experience '26",
    University of Lagos, 24–27 September 2026).
  - Convention page added 2026-09-26: `/partnerships/nams-western-region-convention-2026`
    (`app/partnerships/nams-western-region-convention-2026/page.tsx`, all content in
    `content/events/nams-wr-convention-2026.ts`). The Partnerships card now opens it.
    Sources: convention website and programme PDF, NAMS WR's 1 July invitation and
    27 July acknowledgement letters, the prepared panel questions. The sponsorship amount
    is deliberately not published.
    - **Speech**: added 2026-09-27 from `NAMS_Speech.docx` and edited for the web
      (about 1,200 words cut to about 750, with Joshua's approval): greetings trimmed; the
      ChatGPT show-of-hands turned into a statement; "pandemic of ignorance" and "a
      different story in Africa" reworded; paragraphs tightened. The delivered text is
      in the .docx. Title and pull quote: `speechTitle`, `speechQuote`.
    - **Photos**: set `hero: { src, alt }` and `gallery: [{ src, alt, caption? }]`; put
      files in `public/events/nams-wr-2026/`. The hero photo also becomes the card image
      on Partnerships and the social share image.
    - **Confirm before launch**: TELDEV had a seat on the innovation panel; the panel
      answers are written as TELDEV's answers (review for accuracy of voice); the
      sponsorship went to delegate accommodation and NAMS Hub Buses.
  - University of Lagos sponsorship card: removed 2026-09-26 (decision).
- [ ] **8. Founder LinkedIn URLs.** Bios were removed from the About page cards
      (decision 2026-09-26), so only LinkedIn URLs remain; the icons link to `#` until
      they're added to `content/team.ts`.
- [ ] **9. Statement of Intent and TSIM manual**; not in the content folder. The site
      uses their wording as already ported into the old site's code; add the source
      documents to check against when they're available.
- [ ] **10. Legal documents review** (on hold, per decision 2026-09-24). Privacy Policy,
      Terms & Conditions and Cookie Policy exist as PDFs in Google Drive (all
      May 2025). Review for: NDPA 2023 compliance; Terms still mention
      "telecommunications solutions" and don't cover AI/automation work; Privacy
      Policy predates the current contact form (Microsoft Graph mailer, Vercel
      Analytics). After review, publish as pages: `/privacy` (currently
      `[Privacy policy text to be supplied]`, `noindex`), plus `/terms` and `/cookies`.

## Decisions needed

- [ ] **Illustrative figures in the decorative cards.** After the hero redesign these
      only remain on the Home hero ("Microsoft 365 migration 86%", "Ticket #2481",
      "Response in 42 minutes"; `components/hero-visual.tsx`), the placeholder case
      study ("0 hrs downtime"; `components/case-study.tsx` defaults and the MDX file)
      and the contact form's "We reply within one working day". Replace with real
      figures or remove.
- [ ] **Old-site content with no slot in the current design**; needs a design
      decision before it can go in: Mission & Vision (full text), Our Story, CEO quote
      ("Technology should not be something that people struggle to reach. We bring it
      to them."), the 8 core values, the full TSIM-based AI & Automation page (the
      detail template only has problem / what / outcomes), GitHub link
      (`github.com/TelDev-LTD`, no icon slot in the footer).
- [ ] **Leadership quotes** from the old site (CTO/COO lines) were not carried over:
      recommend one-line bios instead.
- [ ] **"24/7 technical assistance"** (old Helpdesk card) was not carried over; only
      add it back if someone actually covers out-of-hours.

## Filled from the old site (2026-09-24)

- Six services (Helpdesk Support, Network & Infrastructure, Application & Website
  Development, Cloud Solutions, IT Consulting, AI & Automation); nav, footer, contact
  form, services overview, six detail pages.
- Home hero lead (Statement of Intent wording), services intro, About hero lead
  (mission), five strategic pillars, roadmap wording.
- Founders' names and roles.
- Second phone number (+234 903 756 2951), LinkedIn and Instagram URLs, social
  profiles in structured data.
- Hero redesign (2026-09-24): one hero per page type; see `components/page-heroes.tsx`.
- Layout adjustments needed for the extra items, no visual redesign: service card grid
  is three per row on desktop (was four), and the team grid allows three founders across
  (was capped at two); both in `app/ds-components.css`.
