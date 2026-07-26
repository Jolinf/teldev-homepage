import ServicePageLayout from '../components/ServicePageLayout';

export default function NetworkPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Network and Infrastructure"
      title="Network and Infrastructure"
      intro={[
        "Your network is the part of the business nobody thinks about until it stops working. It's not just an internet connection or a few computers wired together — it's the foundation everything else runs on top of, every day.",
        "We build and maintain that foundation, including for the businesses that assume they're too small to need one. If you use a computer, store a file, or connect to anything at all, you already have infrastructure — the only question is whether it's actually being looked after.",
      ]}
      sections={[
        {
          title: 'Network Monitoring',
          paragraphs: [
            "Think of it as a performance tracker running quietly in the background. We watch how your systems behave in real time, catching slowdowns and unusual activity before they turn into a real problem — less downtime, faster connections, and fewer surprises.",
          ],
        },
        {
          title: 'Infrastructure Setup and maintenance',
          paragraphs: [
            "Starting from nothing or upgrading what's already there — either way, we design and deploy infrastructure around your actual business, not a generic template. That covers servers, routers, switches, internal networks, and shared access for your team, and it doesn't stop at launch: we keep tuning it as the business grows.",
          ],
        },
        {
          title: 'Security management',
          paragraphs: [
            "Cybersecurity isn't only a large-company problem. We manage network security to industry best practice — firewalls, access controls, patching, and active monitoring for anything that looks off — so your data, your clients, and your reputation stay protected.",
          ],
        },
        {
          title: 'Why this matters',
          paragraphs: [
            "A network that's slow, unprotected, or prone to dropping isn't just an annoyance — it's a cost, in time and in money. Infrastructure built to scale with you means it keeps up as the business grows, instead of becoming the thing holding it back.",
          ],
        },
      ]}
      closing={{
        title: 'Build a better foundation',
        paragraphs: [
          "Network and Infrastructure work isn't really about wires and hardware — it's an investment in how reliably the business runs day to day. Let's make sure yours is as solid as what you're building on top of it.",
        ],
      }}
    />
  );
}
