import { Lightbulb, Compass, Puzzle, PiggyBank } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function ItConsultingPage() {
  return (
    <ServicePageLayout
      icon={Lightbulb}
      eyebrow="What we offer"
      title="IT Consulting"
      intro={[
        "You don't need to understand every layer of IT to make good decisions about it. You need the right people in your corner. That's what IT Consulting is: we assess where you actually are, figure out where you're headed, and build a roadmap to get there with fewer expensive mistakes along the way. It's built for businesses that want to grow or modernize but aren't sure where to start.",
      ]}
      features={[
        {
          icon: Compass,
          title: 'Technology Strategy',
          paragraphs: [
            "Whether you need a full IT plan or just want to introduce a new system without breaking what already works, we build a strategy around your actual goals, timeline, and budget, not a generic best-practices document. From choosing platforms to scaling infrastructure, you move forward knowing why, not just what.",
          ],
        },
        {
          icon: Puzzle,
          title: 'System Integration',
          paragraphs: [
            "Running tools that don't talk to each other creates more work, not less. We connect your apps, devices, and platforms so they actually work together: fewer silos, cleaner data, less time spent reconciling the same information across three systems.",
          ],
        },
        {
          icon: PiggyBank,
          title: 'Cost Optimization',
          paragraphs: [
            "Most businesses are paying for tools they've outgrown, don't fully use, or never needed in the first place. We audit what you're actually running, cut what isn't earning its cost, and consolidate where it makes sense, so your IT spend maps to what the business actually needs.",
          ],
        },
      ]}
      highlight={{
        title: 'Why this matters',
        paragraphs: [
          "The goal isn't more tools. It's the right ones. IT Consulting exists to make sure every technology decision moves the business forward instead of adding another thing to manage.",
        ],
      }}
      closing={{
        title: "Let's build your tech strategy",
        paragraphs: [
          "Technology only helps when it's used well. Let's build a plan around what your business actually needs, not one that distracts from it.",
        ],
      }}
    />
  );
}
