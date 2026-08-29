import { Bot, ListChecks, Workflow, Share2, Sparkles, FlaskConical, GraduationCap } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

/**
 * AI & Automation service page.
 *
 * The content here is a client-facing summary of how TELDEV actually runs
 * automation work under the TELDEV Systems Integration Methodology (TSIM):
 * optimize the process before automating it, score each candidate activity on
 * value and risk rather than technical possibility, give every automation a
 * defined boundary and failure mode, and re-measure the agreed numbers after
 * deployment. Nothing here claims a named client or a delivered outcome.
 */
export default function AiAutomationPage() {
  return (
    <ServicePageLayout
      icon={Bot}
      eyebrow="What we offer"
      title="AI & Automation"
      intro={[
        "Most businesses lose their hours in the same place: work that repeats, follows rules a person could write down, and produces the same result every time. Re-keying the same customer into three systems. Chasing an approval that has never once been refused. Retyping a letter from a record that already exists.",
        "AI and automation can take that load off. They can also, applied carelessly, produce the same mistakes faster and at greater scale. So we start with the process, not the software, and we automate only the parts that earn it.",
      ]}
      features={[
        {
          icon: Workflow,
          title: 'We optimize before we automate',
          paragraphs: [
            "Automating a bad process makes a bad process permanent. Before anything is automated, every step in the workflow is run through the same sequence: can it be eliminated, combined with the step next to it, standardized, simplified, or delegated to someone less constrained? Only what survives that is a candidate for automation.",
            "Each step gets a recorded decision and one line of reasoning, so you can see exactly why the process ended up the shape it did.",
          ],
        },
        {
          icon: ListChecks,
          title: 'Automation opportunity assessment',
          paragraphs: [
            "We decide what to automate on value and risk, not on what is technically possible. Every candidate activity is scored on how often it runs, how much time it consumes, how clearly its rules can be written down, what an error costs when it is done by hand, and how stable the inputs are.",
          ],
          list: [
            'Work that genuinely needs human judgment stays with humans',
            'Every automation gets an explicit boundary: where the machine starts, where it stops, and what you see at each edge',
            'Payback is calculated with ongoing maintenance included, because leaving it out makes the arithmetic fiction',
            'Every automation gets a stated failure mode: if it fails quietly, who finds out, and how fast',
          ],
        },
        {
          icon: Share2,
          title: 'Integration and data flow',
          paragraphs: [
            "Most automation value sits in the space between your systems. Each connection we build is specified as a written contract before it is built: what triggers it, what data moves, how it is transformed, and what happens if the same event fires twice.",
            "Connections run on dedicated service accounts with least privilege, never on a staff member's personal login that walks out of the door when they do. Error handling is designed before the happy path, so every failure has a retry policy, a named person who is alerted, and a written recovery procedure.",
          ],
        },
        {
          icon: Sparkles,
          title: 'AI where it earns its place',
          paragraphs: [
            "We introduce AI where it demonstrably saves time, cost, or error, and we say so plainly when it does not. Before recommending a tool or a model, we ask which specific problem you already have that it fixes.",
            "Where a decision carries consequence, the design keeps a person in it. 'Automated, with a human approval checkpoint' is a common and healthy answer, not a failure of ambition.",
          ],
        },
        {
          icon: FlaskConical,
          title: 'Proof of concept before investment',
          paragraphs: [
            "Where something is genuinely uncertain, we answer that one question cheaply before you commit to a full build. The question is written down first, the pass and fail criteria are agreed with you in advance, the work is time-boxed to a few weeks, and it is tested on your real data rather than a tidy sample.",
            "If the answer is no, you have found that out for the cost of an experiment instead of a project.",
          ],
        },
        {
          icon: GraduationCap,
          title: 'Training, handover, and measured outcomes',
          paragraphs: [
            "An automation nobody understands is a liability waiting for the person who built it to leave. Training is hands-on and built around your real scenarios, including what to do when something goes wrong. Procedures are written for the newest person who will ever perform them, and tested by someone who did not write them.",
            "Between thirty and ninety days after go-live we come back and re-measure the numbers we agreed at the start. Where a target was missed, we say so and diagnose why. Work is judged by whether those numbers moved, not by what was delivered.",
          ],
        },
      ]}
      highlight={{
        title: 'Automation is the last resort, not the first instinct',
        paragraphs: [
          "If we can remove a step entirely, that beats automating it. If a rule can be simplified, that beats encoding the complicated version forever. Universal automation is a warning sign, not a triumph, and on a healthy assessment at least one candidate always gets rejected.",
          "What you should end up with is a shorter process, fewer handoffs, and a small number of automations that each pay for themselves and can be explained in a sentence.",
        ],
      }}
      closing={{
        title: 'Find out what is actually worth automating',
        paragraphs: [
          "Bring us the process that costs you the most hours. We will map it, tell you honestly which parts should be automated, which should simply be removed, and what the realistic payback looks like once maintenance is counted.",
        ],
      }}
    />
  );
}
