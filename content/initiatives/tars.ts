/**
 * The TELDEV AI-Ready Schools Initiative (the TARS initiative): TELDEV's long-term, research-led programme to
 * improve learning in Nigerian schools. Shown as the featured item on /work, on its own page at
 * /work/ai-ready-schools, and announced on the blog.
 *
 * Keep `status` and `progress` honest: only list what has actually happened. Steps 2 to 4 are the plan,
 * and the copy must never present them as under way until they are.
 *
 * Framing: the coach frame. Schools are never described as failing or broken; the initiative helps
 * students and teachers gain more. Exam failure rates stay off this page on purpose.
 */

export interface TarsPhoto {
  src: string;
  alt: string;
}

export interface TarsStat {
  value: string;
  label: string;
  source: string;
  href: string;
}

export const TARS = {
  slug: 'ai-ready-schools',
  name: 'TELDEV AI-Ready Schools Initiative',
  short: 'TARS',
  status: 'Now booking schools',
  tagline: 'Helping Nigerian schools find where their students can gain the most, and get them there.',
  aim: 'The TARS initiative is TELDEV\'s long-term programme to help Nigerian schools find where their students can gain the most, and help them get there. It starts by showing students and teachers how to use AI to learn better now, and grows into research, targeted support for teaching and learning, and a learning assistant for students and teachers.',
  blogSlug: 'introducing-tars-teldev-ai-ready-schools',
  image: {
    src: '/work/tars-classroom.webp',
    alt: 'Secondary school students in uniform gathered around a laptop in a classroom, with a facilitator crouching beside them to guide.',
  } as TarsPhoto | undefined,

  facts: [
    { label: 'Who it\'s for', value: 'Secondary school students and teachers, senior secondary first' },
    { label: 'Starts with', value: 'AI readiness workshops for students and teachers' },
    { label: 'Built on', value: 'Research, with each school\'s permission and parents\' consent' },
    { label: 'Where', value: 'Lagos, to start: private, public and mission schools' },
  ],

  whyLead: 'Nigeria\'s future depends on what its students actually learn. Today, no one can say exactly where they struggle, or why.',
  stats: [
    {
      value: '1 in 4',
      label: 'Nigerian children aged 7 to 14 show foundational reading and numeracy skills.',
      source: 'UNICEF',
      href: 'https://www.unicef.org/nigeria/media/14381/file/Nigeria%20SitAn%202024%20Report_pdf.pdf.pdf',
    },
    {
      value: '4 in 10',
      label: 'students in their final year of junior secondary have not yet reached foundational numeracy.',
      source: 'World Bank analysis, via BusinessDay',
      href: 'https://businessday.ng/news/article/nigerias-37m-children-cant-read-understand-simple-text-world-bank/',
    },
    {
      value: '60',
      label: 'students per classroom, on average, in Nigeria\'s public basic and secondary schools.',
      source: 'Athena Centre, via ThisDay',
      href: 'https://www.thisdaylive.com/2026/08/01/report-nigerias-education-crisis-now-about-system-capacity-not-school-enrolment/',
    },
    {
      value: '~2 years',
      label: 'of typical learning gained in six weeks of teacher-guided AI tutoring in Edo State.',
      source: 'World Bank',
      href: 'https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria',
    },
  ] as TarsStat[],
  why: [
    {
      title: 'Gaps start early',
      body: 'Gaps in reading and numeracy follow students into senior secondary school, where every new topic builds on what came before.',
    },
    {
      title: 'Teachers cannot reach every student',
      body: 'Large classes, limited time and a growing load of administration make it hard to give each student the explanation, practice and feedback they need.',
    },
    {
      title: 'Results show that, not why',
      body: 'Exam results show students are struggling. They rarely show which concepts, at which stage, or under what conditions. Without that, any improvement is a guess.',
    },
  ],

  approachLead: 'The initiative works the way a good coach does: better methods your students and teachers can use straight away, then a close look at where they can gain the most, then support built around what we find. Each step builds on what the one before it shows.',
  approach: [
    {
      title: 'Better learning, now',
      focus: 'Students and teachers learn to use AI to support learning today: explaining difficult topics, practising and checking work, and saving teachers time on preparation.',
      note: 'Under way',
    },
    {
      title: 'A closer look',
      focus: 'With the school\'s permission and parents\' consent, we study how students learn, how teachers teach and what takes their time, to find where learning can gain the most.',
      note: 'Planned for 2027',
    },
    {
      title: 'Targeted support',
      focus: 'With partners, we strengthen teaching, learning materials and school conditions where the research shows the biggest gains. This reaches every class, whatever technology a school has.',
      note: 'Planned',
    },
    {
      title: 'A learning assistant',
      focus: 'A learning and teaching assistant for students and teachers, built from what the research shows, piloted carefully and introduced as schools are ready.',
      note: 'Planned',
    },
  ] as { title: string; focus: string; note?: string }[],

  stagesLead: 'Step 1 for SS1 and SS2 students is TARS Launchpad, a series in five stages. Every school begins with Learning with AI, and schools that want to go further continue through the series.',
  stages: [
    {
      title: 'Learning with AI',
      focus: 'What AI is, what it can and cannot do, and how it can support learning.',
      note: 'Where every school begins',
    },
    {
      title: 'Study Smarter with AI',
      focus: 'Using AI for revision, study schedules, practice questions and understanding difficult subjects.',
    },
    {
      title: 'Thinking Critically with AI',
      focus: 'Spotting AI mistakes, misinformation and deepfakes, and knowing the difference between AI assistance and cheating.',
    },
    {
      title: 'Prompting AI Effectively',
      focus: 'Communicating clearly with AI: structuring prompts, refining responses and using AI tools well.',
    },
    {
      title: 'Creating with AI',
      focus: 'How AI works, and putting everything students have learned into a practical project.',
    },
  ] as { title: string; focus: string; note?: string }[],
  ss3: {
    title: 'SS3: ready for what\'s next',
    body: 'For students finishing secondary school and waiting for admission: practical digital skills they can use to earn, work and keep learning. Timed after WAEC and NECO so it never competes with exam preparation. Planned; details to be announced.',
  },

  teachersLead: 'Teachers are an equal focus of the initiative. The aim is to equip them to bring out the best in every student, and to give them back time for teaching.',
  teachers: [
    {
      when: 'Now',
      title: 'A teacher session at every school',
      body: 'Using AI to save time on lesson plans, practice questions and marking guides, and practical ways to keep assessment fair, such as assignments AI cannot simply complete and short oral checks.',
    },
    {
      when: 'In the research',
      title: 'Learning from how teachers teach',
      body: 'We study the teaching methods that help students most, and measure how much of a teacher\'s week goes to administration, so improvements rest on evidence from real classrooms.',
    },
    {
      when: 'Later',
      title: 'Less admin, more teaching',
      body: 'Training and materials built on what works, and an assistant that takes on routine administrative work so teachers can focus on their students.',
    },
  ],
  teachersNote: 'Nothing gathered is ever used to appraise or rank an individual teacher, and teachers see findings about their own classes first.',

  researchLead: 'Step 2 starts with questions, not answers. It is planned for 2027, once a university research partner and ethics approval are in place.',
  research: [
    {
      title: 'A deep look in a few schools',
      body: 'About four schools of different kinds: private, public and mission. In SS1 and SS2, across four subjects that ask different things of students: Mathematics, English, Biology, and Economics or Government. Over several weeks, researchers observe lessons, talk with teachers and students, and use short diagnostic tests to see exactly where understanding breaks.',
    },
    {
      title: 'A wider check across many schools',
      body: 'What the deep look finds is then tested with 1,000 or more students in 15 to 20 schools, to see which findings hold widely, and for which students.',
    },
  ],
  researchQuestions: [
    'How students learn, and what they do when they don\'t understand',
    'Which teaching methods help students most',
    'How much of teachers\' time goes to administration',
    'How school conditions shape learning',
  ],
  researchNote: 'A university research partner, not TELDEV, leads the analysis and signs off the findings. Each school receives its own findings privately before anything is published.',

  commitmentsLead: 'The research only works if schools and parents can trust it. These commitments hold for every school.',
  commitments: [
    { title: 'Invited, never required', body: 'A school can take the workshops and decline the research.' },
    { title: 'Consent first', body: 'No student takes part in research without a parent\'s consent and the student\'s own agreement.' },
    { title: 'Anonymous', body: 'Findings never identify a student or teacher, or a school without its permission.' },
    { title: 'Never sold', body: 'Student data is never sold or used for advertising. TELDEV owns the tools it builds, not students\' data.' },
    { title: 'Agreed in writing', body: 'Each school\'s participation is set out in a written agreement on what is collected and how it is protected.' },
    { title: 'Within the law', body: 'Data is handled in line with the Nigeria Data Protection Act 2023, and research is reviewed by an ethics committee.' },
  ],

  steps: [
    { title: 'Get in touch', body: 'A school contacts us, or we reach out. One short call to agree a date and the classes taking part.' },
    { title: 'Workshop day', body: 'We bring the facilitators and materials, plus devices and internet for schools that need them. Students and teachers each get a hands-on session.' },
    { title: 'An invitation to the research', body: 'We explain the research and what the school gets from it. The school decides; the workshops do not depend on it.' },
    { title: 'Follow-up', body: 'The school receives a short summary of the session, and, if it joins the research, findings about its own students it can act on.' },
  ],

  partnersLead: 'Improving learning at scale takes more than one organisation. We are looking for partners who share the aim.',
  partners: [
    { title: 'Researchers and universities', body: 'Lead the research in Step 2: design, ethics review, supervision and analysis.' },
    { title: 'School leaders', body: 'Host the workshops and take part in research that shows where your students can gain the most.' },
    { title: 'Policymakers', body: 'Help align the initiative with education priorities and open the way for public schools to take part.' },
    { title: 'Funders and technology partners', body: 'Support the research and improvements while they run, or contribute devices, connectivity and platforms.' },
  ],

  progress: [
    { date: 'October 2026', text: 'TARS initiative launched. Student and teacher workshop programmes written.' },
    { date: 'October 2026', text: 'First invitations sent to secondary schools across Lagos.' },
    { date: 'Next', text: 'First workshops, and a university research partner for Step 2, which is planned for 2027. Announced here as they happen.' },
  ],

  faq: [
    {
      q: 'Do we have to take part in the research?',
      a: 'No. The research is an invitation. A school can take the workshops and decline it, and nothing about the workshops changes.',
    },
    {
      q: 'Is the research a way to assess our teachers?',
      a: 'No. It studies teaching methods and working conditions, including how much time administration takes, so teachers can be better supported. Nothing gathered is used to appraise or rank an individual teacher.',
    },
    {
      q: 'Who carries out the research?',
      a: 'A research team led by a university partner, which also reviews the ethics, leads the analysis and signs off the findings. TELDEV coordinates with schools.',
    },
    {
      q: 'What happens to student data?',
      a: 'We collect only what the research needs, with consent, anonymise it for analysis and never sell it. Each school\'s participation is covered by a written agreement.',
    },
    {
      q: 'Is the learning assistant available now?',
      a: 'Not yet. It will be built from what the research shows, piloted in a small number of schools and evaluated before it is offered more widely.',
    },
    {
      q: 'Do students need their own phones?',
      a: 'No. We use the school\'s devices or bring our own, already set up, so students never sign up for anything or enter personal details. We work within your school\'s rules on phones.',
    },
    {
      q: 'Won\'t teaching AI encourage cheating?',
      a: 'Students already have AI on their phones. The workshops teach them to use it to understand topics and check their own work, and teachers learn how to set work that AI cannot simply complete.',
    },
    {
      q: 'How do you handle safety and photos?',
      a: 'We follow each school\'s safeguarding rules. No identifiable photos of students are taken or published without the school\'s approval and parental consent.',
    },
    {
      q: 'Which schools can take part?',
      a: 'Secondary schools of every kind: private, public and mission. We are starting in Lagos. If your school is elsewhere, get in touch; we will tell you when we can reach you.',
    },
  ],
};
