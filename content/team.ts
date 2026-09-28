/**
 * Founders, from the previous site's leadership section. `bio` is not shown on the About
 * page (removed 2026-09-26); LinkedIn URLs are still to be supplied (tracker item 8).
 *
 * `avatar` is the illustrated portrait shown on the About page (Pixar-style, generated
 * with Gemini). `image` is a real photo, used only where a real face matters (blog
 * bylines). Olutunde's and Kayode's avatars are fictional characters, not likenesses.
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  /** Square illustrated avatar under /public/team, shown on the About page. */
  avatar?: string;
  /** Square real photo under /public/team, used for blog bylines. */
  image?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Joshua Ulinfun',
    role: 'CEO & Co-Founder',
    bio: '[Bio to be supplied]',
    avatar: '/team/avatar-joshua-ulinfun.webp',
    image: '/team/joshua-ulinfun.webp',
  },
  {
    name: 'Olutunde Solabi',
    role: 'CTO & Co-Founder',
    bio: '[Bio to be supplied]',
    avatar: '/team/avatar-olutunde-solabi.webp',
  },
  {
    name: 'Kayode Ojedele',
    role: 'COO & Co-Founder',
    bio: '[Bio to be supplied]',
    avatar: '/team/avatar-kayode-ojedele.webp',
  },
];

/** The team member with this exact name, if any (used for blog bylines). */
export function findTeamMember(name: string) {
  return TEAM.find((m) => m.name === name);
}
