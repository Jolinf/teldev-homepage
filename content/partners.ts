import type { IconName } from '@/lib/icons';

export interface PartnerLogo {
  name: string;
  /** Logo for light backgrounds, under /public. */
  logo: string;
  /** Logo for dark backgrounds; falls back to `logo`. */
  logoDark?: string;
  /** Intrinsic width/height ratio of the logo file. */
  ratio: number;
  href?: string;
  /** Height in logo strips; round crests need more than the default 32px to stay legible. */
  stripHeight?: number;
}

/**
 * NAMS Western Region: the Nigerian Association of Microbiology Students, Western Region.
 * NAMS WR announced TELDEV Technologies as an official partner of its 7th Regional Convention
 * ("The UNILAG Experience '26", University of Lagos, 24-27 September 2026) on 26 August 2026,
 * and listed TELDEV among the convention's sponsors. Facts and logo from
 * instagram.com/namswrgram, September 2026.
 */
export const NAMS_WR = {
  name: 'NAMS Western Region',
  fullName: 'Nigerian Association of Microbiology Students, Western Region',
  url: 'https://www.instagram.com/namswrgram/',
  logo: {
    name: 'NAMS Western Region',
    logo: '/partners/nams-west-region.webp',
    ratio: 496 / 512,
    href: 'https://www.instagram.com/namswrgram/',
    stripHeight: 56,
  } satisfies PartnerLogo,
  convention: {
    title: '7th NAMS Western Region Convention',
    dates: '24–27 September 2026',
    venue: 'University of Lagos',
    theme:
      'The Microbial Frontier: Exploring Emerging Technologies and Career Pathways in Modern Microbiology',
    /** NAMS WR's post announcing TELDEV as an official partner (26 August 2026). */
    announcement: 'https://www.instagram.com/namswrgram/p/DcfyBLzttT_/',
  },
};

/** Bash (usebash.io): TELDEV's events and ticketing partner. Facts from usebash.io, September 2026. */
export const BASH = {
  name: 'Bash',
  url: 'https://www.usebash.io',
  logo: {
    name: 'Bash',
    logo: '/partners/bash-logo.svg',
    logoDark: '/partners/bash-logo-white.svg',
    ratio: 3328 / 1171,
    href: 'https://www.usebash.io',
  } satisfies PartnerLogo,
  cities: ['Lagos', 'Abuja', 'Accra', 'Nairobi', 'Johannesburg', 'Kampala'],
  features: [
    {
      icon: 'layout-template',
      title: 'An event page in minutes',
      body: 'Add the details and ticket types, publish, and share one link. It looks right on any phone.',
    },
    {
      icon: 'qr-code',
      title: 'QR tickets, scanned with any phone',
      body: 'Every ticket is emailed the moment checkout completes. One scan at the door and guests are in.',
    },
    {
      icon: 'wallet',
      title: 'Paid automatically',
      body: 'Ticket revenue lands in the organiser’s account, with a live dashboard of sales and check-ins.',
    },
    {
      icon: 'gift',
      title: 'Free to use',
      body: 'No monthly fees and no per-ticket charges, so more of every event budget goes to the event.',
    },
  ] satisfies { icon: IconName; title: string; body: string }[],
};
