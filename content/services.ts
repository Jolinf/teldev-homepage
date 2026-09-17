import type { IconName } from '@/lib/icons';

export type ServiceSlug = 'website-development' | 'it-support' | 'cloud-microsoft-365' | 'ai-automation';

export interface ServiceNavItem {
  slug: ServiceSlug;
  name: string;
  desc: string;
  icon: IconName;
}

/** Nav/overview copy, ported from the reference implementation's `SERVICES`. */
export const SERVICES: ServiceNavItem[] = [
  { slug: 'website-development', name: 'Website development', desc: 'Marketing sites and web apps.', icon: 'building' },
  { slug: 'it-support', name: 'IT support, helpdesk & networking', desc: 'Keep the day-to-day running.', icon: 'server' },
  { slug: 'cloud-microsoft-365', name: 'Cloud & Microsoft 365 setup', desc: 'Migrate and configure with confidence.', icon: 'cloud' },
  { slug: 'ai-automation', name: 'AI, automation & custom software', desc: 'Purpose-built tools for your workflow.', icon: 'sparkles' },
];

export interface ServiceDetailCopy {
  title: string;
  lead: string;
  note: string;
  problem: string;
  what: string;
  outcomes: string;
}

/**
 * Detail-page copy, ported from the reference implementation's `SERVICE_PAGES`.
 * Illustrative card figures live alongside each page in app/services/[slug]/page.tsx,
 * not here — this module is prose content only.
 */
export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetailCopy> = {
  'website-development': {
    title: 'Website development',
    lead: 'Fast, clear websites and web apps your customers can actually use — built, launched and looked after.',
    note: 'Designer reviewing a new site on a phone with the client, natural light.',
    problem:
      "Many small businesses have a site that's slow on mobile data, hard to update, or out of date — so customers call to ask what the website should have told them.",
    what: 'We plan pages around what your customers need to do, design and build on a modern stack, and hand over a site your team can update without calling us.',
    outcomes: "A site that loads quickly on mobile, is found for what you sell, and turns visits into enquiries — with support after launch.",
  },
  'it-support': {
    title: 'IT support, helpdesk & networking',
    lead: 'Day-to-day IT that just works — a helpdesk your team can reach, and networks set up properly.',
    note: "TELDEV engineer fixing a network cabinet at a client's office, candid.",
    problem: 'When the printer, Wi-Fi or a laptop fails, work stops — and with nobody responsible for IT, fixes take days.',
    what: "We audit your devices and network, fix what's fragile, and give your team one helpdesk to call, with remote and on-site support in Lagos.",
    outcomes: 'Fewer outages, faster fixes, and a clear record of every device and licence you own.',
  },
  'cloud-microsoft-365': {
    title: 'Cloud & Microsoft 365 setup',
    lead: 'Move your team onto Microsoft 365 and the cloud, configured properly the first time.',
    note: "Team configuring a client's cloud tenancy, natural light, real Lagos office.",
    problem:
      "Most small teams either have no IT setup at all, or one that grew ad hoc and nobody fully understands — shared logins, no backups, licences nobody's tracking.",
    what: 'We audit what you have, design a Microsoft 365 tenancy around how your team actually works, and migrate your mail, files and identities without a weekend of downtime.',
    outcomes: 'Proper accounts and permissions, mail and files backed up, and a support line for when something breaks — typically live within a week.',
  },
  'ai-automation': {
    title: 'AI, automation & custom software',
    lead: 'Software built around how your business already works — with the repetitive parts automated.',
    note: "Developer walking a client's team through a new internal tool, candid.",
    problem: 'Staff spend hours re-typing data between spreadsheets, email and accounting tools — slow, and easy to get wrong.',
    what: "We map the workflow, automate the repetitive steps, and build custom tools where off-the-shelf software doesn't fit — using AI only where it clearly helps.",
    outcomes: 'Hours back every week, fewer errors, and software your team understands and owns.',
  },
};
