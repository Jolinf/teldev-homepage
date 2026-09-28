import type { IconName } from '@/lib/icons';

export type ServiceSlug =
  | 'helpdesk-support'
  | 'network-infrastructure'
  | 'website-development'
  | 'cloud-solutions'
  | 'it-consulting'
  | 'ai-automation';

export interface ServiceNavItem {
  slug: ServiceSlug;
  name: string;
  desc: string;
  icon: IconName;
}

/** Nav/overview copy; the six service lines, ported from the previous site's service pages. */
export const SERVICES: ServiceNavItem[] = [
  {
    slug: 'helpdesk-support',
    name: 'Helpdesk support',
    desc: 'Fast, human help when something breaks.',
    icon: 'headset',
  },
  {
    slug: 'network-infrastructure',
    name: 'Network & infrastructure',
    desc: 'The foundation everything else runs on.',
    icon: 'server',
  },
  {
    slug: 'website-development',
    name: 'Application & website development',
    desc: 'Sites and apps built to hold up.',
    icon: 'building',
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud solutions',
    desc: 'Migrate, store and scale without the hardware.',
    icon: 'cloud',
  },
  {
    slug: 'it-consulting',
    name: 'IT consulting',
    desc: 'A tech roadmap built around your business.',
    icon: 'compass',
  },
  {
    slug: 'ai-automation',
    name: 'AI & automation',
    desc: 'Automate only what earns its keep.',
    icon: 'sparkles',
  },
];

export interface ServiceDetailCopy {
  title: string;
  lead: string;
  problem: string;
  what: string;
  outcomes: string;
}

/**
 * Detail-page copy, ported from the previous site's service pages (src/Sections/*page.tsx
 * in teldev-homepage-main) and condensed into the problem / what / outcomes blocks.
 * Illustrative card figures live alongside each page in app/services/[slug]/page.tsx.
 */
export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetailCopy> = {
  'helpdesk-support': {
    title: 'Helpdesk support',
    lead: 'Your first stop for swift and reliable IT help. From device issues to email setup, we troubleshoot, resolve and support every step of the way.',
    problem:
      "When a laptop won't wake up, an inbox stops syncing, or a login just refuses to work, momentum stalls. Most problems don't need an escalation. They need someone who answers quickly and knows what they're looking at.",
    what: "Real people, responding fast, without the transfer-and-repeat routine. We fix slow computers, connectivity problems, software conflicts and login issues, set up business email on your own domain across phone, tablet and desktop, and explain every fix in plain language so it doesn't come back.",
    outcomes:
      "IT support that works without a full IT department. Whether it's one person or a small team, help is one message away, so the tech stays out of your way and you get back to running the business.",
  },
  'network-infrastructure': {
    title: 'Network & infrastructure',
    lead: 'Strong infrastructure is the backbone of a modern business. We design, monitor and secure your network for maximum uptime and performance, from initial setup through ongoing maintenance.',
    problem:
      "Your network is the part of the business nobody thinks about until it stops working. If you use a computer, store a file, or connect to anything at all, you already have infrastructure. The only question is whether it's actually being looked after.",
    what: 'We design and deploy servers, routers, switches, internal networks and shared access around your actual business, not a generic template. We monitor your systems in real time to catch slowdowns and unusual activity early, and manage security to industry best practice: firewalls, access controls, patching and active monitoring.',
    outcomes:
      'Less downtime, faster connections and fewer surprises. Infrastructure built to scale keeps up as the business grows, instead of becoming the thing holding it back.',
  },
  'website-development': {
    title: 'Application & website development',
    lead: 'We build and manage applications and websites tailored to your goals, so your online presence stays fast, functional and secure.',
    problem:
      "Your website or app is usually the first impression someone forms of your business. People don't wait around for a slow page to load. If it doesn't work well, they leave, and they often don't come back.",
    what: 'We build custom applications (internal tools that cut out manual work, or customer-facing apps) and websites from landing pages to full e-commerce, designed with you and built for every screen size. We monitor performance, fix the real bottlenecks, and set up a content system your team can update without calling a developer.',
    outcomes:
      "A site or app that keeps performing as your needs change, not just on launch day. We don't build and walk away: we manage, optimise and keep improving alongside you.",
  },
  'cloud-solutions': {
    title: 'Cloud solutions',
    lead: 'Scalable cloud solutions for businesses of any size: migration, ongoing management and optimisation, built around your budget instead of a one-size-fits-all plan.',
    problem:
      "Full hard drives, backups nobody is sure actually ran, and systems quietly falling behind. A crashed laptop or a power surge at the office shouldn't mean losing your work.",
    what: 'We move your data, systems and applications to Microsoft 365, Azure, Google Cloud or AWS, whichever fits, through a process built around your current setup. Cloud storage keeps your data backed up, encrypted and reachable from anywhere, and our backup and recovery planning keeps the business running through the unexpected.',
    outcomes:
      "The same tools large companies use, without the enterprise IT budget. Work that isn't tied to one office or one machine, and a move that is smooth, secure and genuinely useful.",
  },
  'it-consulting': {
    title: 'IT consulting',
    lead: "Make smarter tech decisions with advice that aligns your business goals with the right technology, whether that's integration, strategy or cutting costs.",
    problem:
      "You don't need to understand every layer of IT to make good decisions about it. But tools that don't talk to each other create more work, not less. And most businesses pay for tools they've outgrown, don't fully use, or never needed.",
    what: "We assess where you are, work out where you're headed, and build a roadmap around your goals, timeline and budget. We connect your apps, devices and platforms so they work together, and audit what you're running to cut what isn't earning its cost.",
    outcomes:
      'Fewer expensive mistakes, cleaner data, and IT spend that maps to what the business actually needs. You move forward knowing why, not just what.',
  },
  'ai-automation': {
    title: 'AI & automation',
    lead: 'Repetitive, rule-based work is where most businesses quietly lose their hours. We map the process, remove the steps that should not exist, and automate what survives.',
    problem:
      'Re-keying the same customer into three systems. Chasing an approval that has never once been refused. AI and automation can take that load off. Applied carelessly, though, they produce the same mistakes faster and at greater scale.',
    what: 'We optimise before we automate: every step is eliminated, combined, simplified or kept, and only what survives becomes a candidate. Each candidate is scored on value and risk, every automation gets a defined boundary and failure mode, and AI is used only where it clearly saves time, cost or error, and a person stays in any decision that carries consequence.',
    outcomes:
      'A shorter process, fewer handoffs, and a small number of automations that each pay for themselves. Thirty to ninety days after go-live we re-measure the numbers agreed at the start, and say so plainly if a target was missed.',
  },
};
