/**
 * Client and partner quotes. Only entries with `approved: true` are shown on the site;
 * while none are approved, the testimonial cards are hidden on Home and Work.
 *
 * The two below are DRAFTS written for Bash and NAMS Western Region to review. Send each
 * one to your contact there, let them rewrite it in their own words, and publish only with
 * their name, role and permission. See docs/content-tracker.md (item 4).
 */
export type TestimonialEntry = {
  quote: string;
  name: string;
  role: string;
  approved: boolean;
};

export const TESTIMONIALS: TestimonialEntry[] = [
  {
    quote:
      'TELDEV runs its events on Bash and has been a thoughtful partner from the start. They give us honest, useful product feedback, and they bring the same care to their own clients.',
    name: '[Name, to be confirmed by Bash]',
    role: '[Role], Bash',
    approved: false,
  },
  {
    quote:
      'As our Official Tech & Innovation Partner for the 7th Western Region Convention, TELDEV delivered on every commitment. Their support helped get delegates to Lagos, and their session showed our members how technology fits into microbiology.',
    name: '[Name, to be confirmed by NAMS Western Region]',
    role: '[Role], NAMS Western Region',
    approved: false,
  },
];

export const APPROVED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.approved);
