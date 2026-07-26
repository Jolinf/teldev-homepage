import { Cloud, UploadCloud, Lock, LifeBuoy } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function CloudPage() {
  return (
    <ServicePageLayout
      icon={Cloud}
      eyebrow="What we offer"
      title="Cloud Services"
      intro={[
        "The cloud isn't a buzzword. It's a practical way to run a business without being tied to physical hardware or systems that are quietly falling behind. Our Cloud Services give you real computing power, storage, and collaboration tools that scale with your needs and your budget, whether you're just starting to explore or ready for a full migration.",
      ]}
      features={[
        {
          icon: UploadCloud,
          title: 'Cloud Migration and Setup',
          paragraphs: [
            "Moving to the cloud doesn't have to mean disrupting how you already work. We migrate your data, systems, and applications to Microsoft Azure, Google Cloud, or AWS, whichever fits, through a process built around your current setup, not a generic checklist.",
          ],
        },
        {
          icon: Lock,
          title: 'Data Storage and Security',
          paragraphs: [
            "No more full hard drives or backups you're not sure actually ran. Cloud storage keeps your data secure, backed up, and reachable from anywhere, with end-to-end encryption and access controls: client records, business documents, or media, all protected and available when you need it.",
          ],
        },
        {
          icon: LifeBuoy,
          title: 'Disaster Recovery',
          paragraphs: [
            "A crashed laptop or a power surge at the office shouldn't mean losing your work. Our backup and recovery planning is built so the business keeps running through the unexpected, not just recovers from it eventually.",
          ],
        },
      ]}
      highlight={{
        title: 'Why this matters',
        paragraphs: [
          "The cloud closes the gap between small businesses and large ones: the same tools, without the enterprise IT budget. It's fast, it's secure, and it means work isn't tied to one office or one machine.",
        ],
      }}
      closing={{
        title: "Let's get you connected",
        paragraphs: [
          "The cloud isn't the future of business anymore. It's the current baseline. Whether you're starting small or moving everything at once, we'll make the transition smooth, secure, and genuinely useful.",
        ],
      }}
    />
  );
}
