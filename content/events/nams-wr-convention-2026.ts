/**
 * 7th NAMS Western Region Convention ("The UNILAG Experience '26").
 *
 * Sources, all September 2026:
 * - instagram.com/namswrgram (announcement of TELDEV as an official partner, 26 August 2026;
 *   convention flyer listing hosts, speakers and sponsors)
 * - namswestconvention.com.ng and its programme PDF (itinerary, tracks, 26 chapters)
 * - TELDEV's prepared panel questions for "AI & Innovations in Nigerian Bio-entrepreneurship"
 * - NAMS West Region's letters to TELDEV: partnership proposal (1 July 2026) and
 *   acknowledgement of TELDEV's acceptance (27 July 2026). The sponsorship amount is
 *   deliberately not published.
 *
 * Still to be supplied (see docs/content-tracker.md): photos (hero + gallery) and the text
 * of TELDEV's address to delegates.
 */

export interface EventPhoto {
  /** Path under /public, e.g. /events/nams-wr-2026/01.webp */
  src: string;
  alt: string;
  caption?: string;
}

export const NAMS_WR_CONVENTION = {
  slug: 'nams-western-region-convention-2026',
  title: '7th NAMS Western Region Convention',
  edition: "The UNILAG Experience '26",
  dates: '24–27 September 2026',
  dateShort: { mon: 'Sep', day: '24' },
  venue: 'University of Lagos, Akoka, Lagos',
  organiser: 'Nigerian Association of Microbiology Students (Western Region)',
  theme:
    'The Microbial Frontier: Exploring Emerging Technologies and Career Pathways in Modern Microbiology',
  summary:
    'Microbiology students from 26 university chapters across South-West Nigeria spent four days at the University of Lagos exploring how new technologies are reshaping their field. TELDEV Technologies was an official partner.',

  links: {
    announcement: 'https://www.instagram.com/namswrgram/p/DcfyBLzttT_/',
    website: 'https://namswestconvention.com.ng',
    instagram: 'https://www.instagram.com/namswrgram/',
  },

  /** Hero photo; also the Partnerships card image and the social share image. */
  hero: {
    src: '/events/nams-wr-2026/group-photo.webp',
    alt: "Speakers, organisers and delegates standing together in front of the 7th NAMS Western Region Convention banner at the University of Lagos.",
  } as EventPhoto | undefined,
  /** Gallery photos. The first one is shown wide. */
  gallery: [
    {
      src: '/events/nams-wr-2026/panel-session.webp',
      alt: 'Three panellists seated on stage, with Joshua Ulinfun speaking into a microphone and the convention programme on the screen behind them.',
      caption: 'The panel on AI & Innovations in Nigerian Bio-entrepreneurship.',
    },
    {
      src: '/events/nams-wr-2026/joshua-speaking.webp',
      alt: 'Joshua Ulinfun, seated, speaking into a microphone during the panel session.',
      caption: 'Joshua Ulinfun speaking during the panel.',
    },
    {
      src: '/events/nams-wr-2026/plaque-presentation.webp',
      alt: 'Joshua Ulinfun receiving a plaque from a convention official in front of the event banner.',
      caption: 'Receiving a plaque on behalf of TELDEV Technologies.',
    },
    {
      src: '/events/nams-wr-2026/panelist-speaking.webp',
      alt: 'A fellow panellist in a cap speaking into a microphone while Joshua Ulinfun listens.',
      caption: 'A fellow panellist makes his point.',
    },
    {
      src: '/events/nams-wr-2026/joshua-listening.webp',
      alt: 'Joshua Ulinfun seated on stage, listening, beside a Microbial banner.',
      caption: 'On stage beside convention partner Microbial.',
    },
    {
      src: '/events/nams-wr-2026/group-delegates.webp',
      alt: 'Six delegates posing in front of the convention banner.',
      caption: 'With delegates at the convention.',
    },
  ] as EventPhoto[],

  glance: [
    { label: 'Dates', value: '24–27 September 2026' },
    { label: 'Venue', value: 'University of Lagos, Akoka' },
    { label: 'Organiser', value: 'NAMS Western Region' },
    {
      label: 'Delegates from',
      value: '26 university chapters in Lagos, Ogun, Oyo, Osun, Ondo and Ekiti',
    },
    { label: 'Partners', value: 'Microbiology Society (UK), Microbial AI, TELDEV Technologies' },
    { label: "TELDEV's role", value: 'Official Tech & Innovation Partner and sponsor' },
  ],

  about: [
    "The Nigerian Association of Microbiology Students (NAMS) brings together microbiology students from universities across Nigeria. Its Western Region holds an annual convention for chapters across the South-West, and in 2026 the seventh edition came to the University of Lagos as The UNILAG Experience '26.",
    "The theme, The Microbial Frontier, asked a practical question: what do emerging technologies such as AI, bioinformatics and computational genomics mean for the work and careers of today's microbiology students? The organisers moved away from back-to-back lectures towards workshops, competitions and conversations.",
  ],

  tracks: [
    {
      title: 'Research pitch and seed grants',
      partner: 'With the Microbiology Society (UK)',
      body: 'A regional abstract and research pitch competition, with cash prizes for the best presenters and publication mentorship.',
    },
    {
      title: 'AI and bio-computing',
      partner: 'With Microbial AI',
      body: 'Sessions on AI in genomics and research, and a route into the Microbial AI digital internship.',
    },
    {
      title: 'The Lagos experience',
      partner: 'Hosted by UNILAG',
      body: 'A campus tour, inter-chapter sports, debate and quiz finals, and an award night to close the convention.',
    },
  ],

  programme: [
    {
      day: 'Day 1',
      date: 'Thursday 24 September',
      title: 'Arrival',
      items: ['Registration and accreditation', 'Welcome orientation', 'Dinner and movie night'],
    },
    {
      day: 'Day 2',
      date: 'Friday 25 September',
      title: 'Keynote & Innovation Day',
      items: [
        'Opening ceremony and roll call of chapters',
        'Keynote lecture on the convention theme',
        'Panel: AI & Innovations in Nigerian Bio-entrepreneurship',
        'Quiz, spelling bee and indoor games',
        'Abstract contest',
      ],
    },
    {
      day: 'Day 3',
      date: 'Saturday 26 September',
      title: 'Finale & Award Night',
      items: [
        'UNILAG campus tour',
        'Address by the ASM Young Ambassador',
        'Debate and quiz finals',
        'Regional elections',
        'Grand award night',
      ],
    },
    {
      day: 'Day 4',
      date: 'Sunday 27 September',
      title: 'Departure',
      items: ['Drafting and signing of the convention communiqué', 'Departure of delegates'],
    },
  ],

  /** Hosts and speakers as listed on the official convention flyer. */
  people: [
    { name: 'Prof. G. O. Oyetibo', role: 'Dean, Faculty of Life Sciences', part: 'Host' },
    { name: 'Prof. O. F. Obidi', role: 'Head of Department, NAMS UNILAG', part: 'Host' },
    { name: 'Dr. G. A. Adewunmi', role: '', part: 'Keynote speaker' },
    { name: 'Comr. Precious Omotayo', role: 'Governor, West Region', part: 'Convener' },
    { name: 'Dr. B. T. Odumosu', role: 'Staff Adviser', part: 'Convener' },
    { name: 'Mr. Akinboade A. O.', role: 'Team Lead, Microbial AI', part: 'Speaker' },
    { name: 'Mr. Y. A. Tajudeen', role: 'ASM Young Ambassador', part: 'Speaker' },
    { name: 'Mr. Damilola Adesuyi', role: 'Microbiology Society UK Champion', part: 'Speaker' },
  ],

  teldev: {
    intro:
      "NAMS Western Region invited TELDEV Technologies to be the convention's Official Tech & Innovation Partner because, in their words, modern microbiology is now a data-driven field. For us the fit was obvious: a convention asking what technology means for microbiology is exactly the conversation TELDEV exists to have.",
    points: [
      {
        title: 'Official Tech & Innovation Partner',
        body: 'TELDEV backed the convention as a sponsor and official partner, alongside the Microbiology Society (UK) and Microbial AI, and our logo appeared on the official convention flyer and materials.',
      },
      {
        title: 'Getting delegates to Lagos',
        body: 'Our sponsorship went towards delegate accommodation and the NAMS Hub Buses, which brought students from institutions across the South-West to UNILAG. For many delegates, getting to Lagos is the hardest part of attending.',
      },
      {
        title: 'A seat on the innovation panel',
        body: 'TELDEV joined the panel on AI & Innovations in Nigerian Bio-entrepreneurship on Keynote & Innovation Day, talking about where AI and biotechnology meet and how students can turn research into businesses.',
      },
      {
        title: 'An address to delegates',
        body: 'Joshua Ulinfun spoke to delegates about technology as a prosthetic limb: something that expands what people can do rather than replacing them. Education and digital empowerment is one of the five pillars of our Statement of Intent, and a student convention is the most direct place to act on it.',
      },
    ],
    /** TELDEV's address to delegates, one string per paragraph. Edited for reading from the delivered text (NAMS_Speech.docx). */
    speech: [
      "First, I would like to thank UNILAG and the Nigerian Association of Microbiology Students for the opportunity to address you today.",
      "Some time ago, I came across research into bionic limbs that can feel touch: robotic parts connected to the nervous system. The world has moved on from simply replacing a lost limb. It is now giving that limb the ability to respond to stimuli, by connecting it to the body's own nerves.",
      "That is science and technology working in tandem, as they always should. Microbiology already sits where living systems, research and technological innovation meet. Whether we are talking about biotechnology, pharmaceuticals, diagnostics, food science or environmental work, the question is no longer only what science can discover. It is also what technology allows us to do with that discovery.",
      "Here in Nigeria, we often treat technology as a luxury. Some of us think it is too expensive to acquire; others think it is too advanced to learn. Next to research like bionic limbs, I understand why it can feel like a pipe dream.",
      "But most of the technology that matters to us is neither out of reach nor hard to learn. In its everyday form, it already works like a prosthetic limb: something that extends what you can do. From the woman who sells provisions at the end of your street to the office worker who compiles reports every day, there is a tool that can make their effort go further. The problem is not always access. Often it is knowing what technology can actually do for you.",
      "To the students here: you have heard the advice to work hard all your life, and it is still true. But its meaning has changed. Energy and attitude still matter, and today working hard also means working effectively. It does not matter how much strength you put into cutting down a tree; if your axe is dull, you will be there far longer than the person who sharpened theirs first.",
      "Many of you will soon graduate into the job market. You will meet people who are smarter, better positioned and better connected than you. What will set you apart is your effectiveness. If you and a colleague are given the same research and the same report to write, and it takes them the whole day while it takes you two hours, people will notice. Your degree opens the door; your capacity decides how far you go. And the most reliable way to expand your capacity is to keep learning, especially how to use the tools in front of you. The moment you stop learning is the moment you put a cap on what you can do.",
      "Take AI. Almost everyone here has used ChatGPT, Claude or Gemini in some form. But for many of us, the main use is getting assignments done. Having access to a technology and knowing how to use it well are two different things.",
      "I have been a student, and I have had the privilege of being a teacher, and I can tell you this: however good a teacher is, there will always be a student who does not grasp a topic at the same pace as the rest of the class. That student is not slow; they simply learn differently. The teacher cannot leave the ninety-nine to chase the one, and often nobody even notices that the one needs a different approach.",
      "That is where AI earns its place. When something the teacher said does not register, you can take that topic to an AI assistant and ask it to teach you in a way that works for you, as many times as you need. You have found a teacher beyond the classroom, one whose only job is to make sure you understand. That is one example from a student's life. There are many more like it, for AI and for technology in general. You only need to apply yourself.",
      "I started with prosthetic limbs. A prosthetic does not replace the person or make them any less human; it improves what they can do. I want you to think of technology the same way.",
      "As you leave here today, ask yourself: how can I improve? Then ask: how can technology help me improve? Because technology is not here to replace your ability. It is here to expand it.",
      "My name is Joshua Ulinfun. I am the CEO and co-founder of TELDEV Technologies, and our mission is to bring technology to you.",
    ] as string[] | undefined,
    speechTitle: 'Technology as a prosthetic limb',
    speechQuote: 'Technology is not here to replace your ability. It is here to expand it.',
    speechBy: 'Joshua Ulinfun, CEO & Co-Founder, TELDEV Technologies',
  },

  /** How the partnership came together, from NAMS West Region's letters and posts. */
  timeline: [
    {
      date: '1 July 2026',
      text: 'NAMS West Region invites TELDEV to be Official Tech & Innovation Partner for the convention.',
    },
    { date: '22 July 2026', text: 'TELDEV accepts the invitation.' },
    {
      date: '27 July 2026',
      text: 'NAMS West Region confirms the partnership and plans for TELDEV branding.',
    },
    { date: '26 August 2026', text: 'The partnership is announced publicly on Instagram.' },
    {
      date: '24–27 September 2026',
      text: 'The convention runs at the University of Lagos, with TELDEV on the innovation panel.',
    },
  ],

  panel: {
    title: 'AI & Innovations in Nigerian Bio-entrepreneurship',
    when: 'Friday 25 September, 2:00 PM',
    where: 'LT 026, Faculty of Life Sciences',
    questions: [
      {
        q: 'Nigeria has a growing pool of scientists, innovators and entrepreneurs. What opportunities exist at the intersection of biotechnology and AI that we are not taking enough advantage of yet?',
        a: [
          'The biggest untapped opportunity is our own data. Nigeria produces a lot of biological information, from hospital laboratory results to soil, water and crop samples, and very little of it is digitised, organised or shared. AI is only as useful as the data it learns from, so whoever builds good local datasets will be able to build tools that fit Nigerian problems instead of importing ones trained elsewhere.',
          'Close behind that are diagnostics and surveillance: reading microscopy and culture results faster, and tracking patterns of antimicrobial resistance across labs. None of this needs frontier research. It needs people who understand both the biology and the tools.',
        ],
      },
      {
        q: "AI is increasingly being used to accelerate research, analyse biological data and develop new solutions. Where can AI make the most immediate difference in Nigeria's biotechnology space?",
        a: [
          'In the unglamorous parts of the work. Most labs and research groups still lose hours to manual record-keeping, re-typing results, and searching literature by hand. AI tools that already exist, and are often free, can summarise papers, help draft protocols, organise data and flag errors.',
          'The next step is analysis: image recognition for microscopy and colony counts, and simple models on existing lab data. Starting there saves time today and builds the data habits that more ambitious AI work depends on later.',
        ],
      },
      {
        q: 'With the growing interest in both AI and biotechnology, what opportunities should Nigeria be paying more attention to at the intersection of these two fields, particularly in solving local challenges and creating viable businesses?',
        a: [
          'Look for problems people already pay to solve. Agriculture is one: crop disease detection, biofertilisers and biopesticides, and reducing post-harvest losses. Food processing is another, where many traditional fermentation processes could be standardised and made safer. Water quality testing, bioremediation of polluted sites, and diagnostics for clinics outside the big cities are all real markets.',
          'The businesses that last usually start as services, such as testing, data analysis or contract research, before they become products. AI makes those services cheaper and faster to deliver.',
        ],
      },
      {
        q: 'Nigeria has a lot of scientific research coming out of its universities, yet relatively little makes it to the market. What needs to change to bridge the gap between scientific discovery and successful bio-entrepreneurship?',
        a: [
          'Research is mostly rewarded for being published, not for being used, so very few projects start by asking who needs the result and whether they would pay for it. That needs to change at every level.',
          'Practically, it means earlier conversations with industry, clinics and farmers; technology transfer offices that actually help researchers protect and license their work; shared access to equipment; small grants for turning a result into a prototype; and more collaboration between science and business or computing students. Partnerships like the ones at this convention are part of that bridge.',
        ],
      },
      {
        q: 'For young Nigerian scientists and innovators who want to build businesses around biotechnology, what are the biggest barriers they face, and how can those barriers be addressed?',
        a: [
          'Money, infrastructure and isolation. Lab work is expensive, power is unreliable, and many students do not know anyone who has built a science business.',
          'Each has a workaround. Start with services and small pilots that need little equipment, and use shared or university labs. Use cloud tools and AI to do analysis that used to need expensive software and specialist staff. Learn the regulatory path, such as NAFDAC, early rather than late. And build a team that mixes skills, because the scientist rarely needs to be the coder, the marketer and the accountant as well. Associations like NAMS are where those teams can start.',
        ],
      },
      {
        q: 'Looking ahead, what would a thriving AI-driven bio-entrepreneurship ecosystem in Nigeria look like, and what needs to happen now to get us there?',
        a: [
          'It would look like local companies selling tools and services to hospitals, farms, food processors and government, built on Nigerian data and Nigerian expertise. Universities would have working incubators, students would graduate comfortable with both lab work and data, and investors would understand that science businesses take longer to grow.',
          'What needs to happen now is simple to say: digitise and share data responsibly, teach basic data skills such as Python and bioinformatics alongside microbiology, and create more collaboration between science departments, technology companies and industry.',
        ],
      },
      {
        q: 'If someone here has a scientific idea they believe could become a business but has no entrepreneurial or AI background, what should they do first?',
        a: [
          'Start with the problem, not the technology. Write down in one paragraph who has the problem, how they deal with it today, and why your idea is better. Then talk to at least ten of those people before building anything.',
          'Next, find one person whose skills complement yours, whether in business or in technology. Use the free AI tools available today to learn quickly and test ideas cheaply. Enter competitions like the research pitch at this convention, and ask for mentorship. You do not need to know everything before you start; you need to start small enough that being wrong is cheap.',
        ],
      },
    ],
  },
};
