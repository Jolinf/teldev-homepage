import ServicePageLayout from '../components/ServicePageLayout';

export default function HelpdeskPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Helpdesk Support"
      title="Helpdesk Support"
      intro={[
        "Technology should make your day easier, not harder. When a laptop won't wake up, an inbox stops syncing, or a login just refuses to work, momentum stalls — and that's exactly the moment our Helpdesk Support is built for.",
        "Think of us as the tech partner on call: fast to respond, easy to reach, and straightforward to talk to. No hold music, no jargon, no being passed between three different people. Just someone who picks up and fixes it.",
      ]}
      sections={[
        {
          title: 'First-Line Support',
          paragraphs: [
            "Most problems don't need an escalation — they need someone who answers quickly and knows what they're looking at. That's the first line: real people, responding fast, without the transfer-and-repeat routine.",
          ],
          list: [
            'Slow computer performance',
            'Connectivity problems',
            'Basic hardware/software conflicts',
            'Access and login issues',
          ],
        },
        {
          title: 'Troubleshooting Services',
          paragraphs: [
            "You shouldn't have to be technical to get technical help. We look past the symptom to find what's actually causing it, then fix it and explain what happened in plain language — whether that's a printer that's gone quiet, an app that keeps crashing, or an error message that means nothing to anyone outside IT.",
          ],
        },
        {
          title: 'Email Setup Assistance',
          paragraphs: [
            "Outlook, Gmail, or something else entirely — we'll get your email working properly across phone, tablet, and desktop, not just technically connected but actually usable day to day.",
          ],
          list: [
            'Setting up business email accounts',
            'Configuring custom domains (yourname@yourcompany.com)',
            'Making sure security settings and backups are actually in place',
          ],
        },
        {
          title: 'Step-by-step Guidance',
          paragraphs: [
            "A fix that isn't explained just becomes the next support ticket. So alongside solving the problem in front of us, we walk you through system updates, new installs, and the basic security habits that stop the same issue from coming back.",
          ],
        },
        {
          title: 'Why this matters',
          paragraphs: [
            "You don't need a full IT department to get IT support that actually works. Whether it's one person or a small team, help should be one message away — not a project.",
          ],
        },
      ]}
      closing={{
        title: "Let's Work Together",
        paragraphs: [
          'Reliable tech support isn’t a luxury reserved for large companies. Helpdesk Support is there so the tech stays out of your way and lets you get back to running the business.',
        ],
      }}
    />
  );
}
