/**
 * The TELDEV AI-Ready Schools Initiative (the TARS initiative): TELDEV's education initiative. Shown as the featured item
 * on /work, on its own page at /work/ai-ready-schools, and announced on the blog.
 *
 * Keep `status` and `progress` honest: only list what has actually happened.
 */

export interface TarsPhoto {
  src: string;
  alt: string;
}

export const TARS = {
  slug: 'ai-ready-schools',
  name: 'TELDEV AI-Ready Schools Initiative',
  short: 'TARS',
  status: 'Now booking schools',
  tagline: 'Getting classrooms ready for AI, starting in Lagos.',
  aim: 'The TARS initiative is TELDEV\'s effort to improve how Nigerian schools understand and use technology, starting with AI. We run hands-on workshops that teach students to study with AI, and help teachers use it in their teaching and handle its misuse fairly.',
  blogSlug: 'introducing-tars-teldev-ai-ready-schools',
  image: {
    src: '/work/tars-classroom.webp',
    alt: 'Secondary school students in uniform gathered around a laptop in a classroom, with a facilitator crouching beside them to guide.',
  } as TarsPhoto | undefined,

  facts: [
    { label: 'Who it\'s for', value: 'SS1 and SS2 students, and their teachers' },
    { label: 'Format', value: 'Hands-on sessions in school, for students and for teachers' },
    { label: 'Starting with', value: 'AI, with more technology topics to follow' },
    { label: 'Where', value: 'Secondary schools in Lagos, to start' },
  ],

  why: [
    {
      title: 'Students already use AI',
      body: 'AI tools are on every phone. Without guidance, many students use them to produce assignments rather than to understand them, and learn nothing in the process.',
    },
    {
      title: 'Teachers are left to guess',
      body: 'Few teachers have been shown how to use AI to save time, or how to respond when they suspect a student used it. Banning it stops it in class, not at home.',
    },
    {
      title: 'Detection tools are not proof',
      body: 'AI detectors are unreliable and more likely to wrongly flag students who write in English as a second language. Schools need fair practice, not guesswork.',
    },
  ],

  tracks: [
    {
      tag: 'Available now',
      title: 'Students: study smarter with AI',
      who: 'SS1 and SS2',
      body: 'Students use AI on a topic from their own syllabus: explaining it simply, quizzing themselves with exam-style questions and checking the answers against their textbook. They learn its limits too: it can be wrong, so every answer gets checked against the textbook.',
      points: ['Hands-on in small groups', 'A take-home prompt card for every student', 'Builds the habits they will need for WAEC, NECO and JAMB'],
    },
    {
      tag: 'Available now',
      title: 'Teachers: teaching with AI, and handling misuse',
      who: 'Secondary school teachers',
      body: 'Teachers use AI to draft lesson plans, practice questions and marking guides, then learn practical ways to prevent and respond to AI misuse: assignment design, short oral checks and a clear classroom policy.',
      points: ['A red, amber and green label for every assignment', 'What to do when misuse is suspected, fairly', 'A teacher prompt card to keep'],
    },
    {
      tag: 'Planned',
      title: 'SS3: ready for what\'s next',
      who: 'SS3, after final exams',
      body: 'For students finishing secondary school and waiting for admission: practical digital skills they can use to earn, work and keep learning, such as using AI responsibly at work, online safety, and the basics of offering a digital service. Timed after WAEC and NECO so it never competes with exam preparation.',
      points: ['Planned for after the 2027 exam season', 'Details to be announced'],
    },
  ],


  steps: [
    { title: 'Get in touch', body: 'A school contacts us, or we reach out. One short call to agree a date and the classes taking part.' },
    { title: 'We prepare', body: 'We confirm class sizes, the topics students find hardest, and the school\'s rules on devices and photos.' },
    { title: 'Workshop day', body: 'We bring the facilitators and materials, plus devices and internet where a school needs them. Students and teachers each get a hands-on session.' },
    { title: 'Follow-up', body: 'The school receives a short summary of what changed, from before-and-after questions.' },
  ],

  progress: [
    { date: 'October 2026', text: 'TARS initiative launched. Student and teacher workshop programmes written.' },
    { date: 'October 2026', text: 'Outreach to secondary schools across Lagos under way.' },
    { date: 'Next', text: 'First workshops, to be announced here as schools sign up.' },
  ],

  faq: [
    {
      q: 'Do students need their own phones?',
      a: 'No. We use the school\'s devices or bring our own, already set up, so students never sign up for anything or enter personal details. We work within your school\'s rules on phones.',
    },
    {
      q: 'Won\'t teaching AI encourage cheating?',
      a: 'Students already have AI on their phones. The workshop teaches them to use it to understand topics and check their own work, and teachers learn how to set work that AI cannot simply complete.',
    },
    {
      q: 'How do you handle safety and photos?',
      a: 'We follow each school\'s safeguarding rules. No identifiable photos of students are taken or published without the school\'s approval and parental consent.',
    },
    {
      q: 'Which schools can take part?',
      a: 'We are starting with secondary schools in Lagos. If your school is elsewhere, get in touch; we will tell you when we can reach you.',
    },
  ],
};
