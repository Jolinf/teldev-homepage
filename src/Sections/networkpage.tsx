import { Link } from 'react-router-dom';

export default function NetworkPage() {
  return (
    <section
      aria-label="Network and Infrastructure Services"
      className="box-border text-left bg-black text-[#FFFFFF] px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto mt-35">
        {' '}
        {/* mt-35 is invalid, replaced with mt-10 for spacing */}
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm sm:text-base text-[#B0B0B0]">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link to="/whatweoffer" className="hover:underline focus:underline">
                What we offer
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li aria-current="page" className="text-[#1C6CFE] font-semibold">
              Network and Infrastructure
            </li>
          </ol>
        </nav>
        <h1
          className="text-4xl sm:text-5xl font-bold mb-8 text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Network and Infrastructure
        </h1>
        {/* Contents Section */}
        <section aria-labelledby="contents-heading" className="mb-12">
          <h2
            id="contents-heading"
            className="text-2xl sm:text-3xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h2>
          <ul className="text-left space-y-2">
            {[
              'Network Monitoring',
              'Infrastructure Setup and maintenance',
              'Security management',
              'Why this matters',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="no-underline text-[#1C6CFE] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </section>
        {/* Intro Paragraphs */}
        <section aria-label="Introduction" className="mb-12 space-y-4">
          <p className="text-base md:text-lg text-[#FAFAFA] leading-relaxed max-w-prose">
            When it comes to running a successful business in today’s digital world, your network
            and infrastructure are everything. It’s not just about having internet access or a
            couple of computers hooked together—it’s about having a secure, efficient, and
            dependable foundation that keeps your operations running smoothly, day in and day out.
          </p>
          <p className="text-base md:text-lg text-[#FAFAFA] leading-relaxed max-w-prose">
            At TELDEV Technologies, we help you build and maintain that foundation. Our Network and
            Infrastructure services are designed for businesses of all sizes—especially those who
            think they’re too small to need "IT infrastructure." The truth? If you use a computer,
            store files, or depend on any form of connectivity, you already have an
            infrastructure—you just need the right support to optimize it.
          </p>
        </section>
        {/* Sections with anchors */}
        {[
          {
            id: 'Network Monitoring',
            title: 'Network Monitoring',
            content:
              "Think of this as your virtual security camera and performance tracker for everything that happens on your network. We keep a close eye on how your systems perform in real time—spotting slowdowns, unusual traffic, and early signs of trouble before they become major issues. This means less downtime, faster connections, and proactive problem-solving—so you're always ahead of the game.",
          },
          {
            id: 'Infrastructure Setup and maintenance',
            title: 'Infrastructure Setup and maintenance',
            content:
              'Whether you’re starting from scratch or upgrading an existing setup, we help design and deploy a robust IT infrastructure tailored to your business goals. This includes setting up servers, configuring routers and switches, establishing internal networks, and creating shared access points for your team. And we don’t stop there. We continue to maintain and fine-tune your infrastructure as your business grows.',
          },
          {
            id: 'Security management',
            title: 'Security management',
            content:
              'Cybersecurity isn’t just for big businesses. Every organization—no matter how small—needs protection. From firewalls to access controls, we manage your network security with industry best practices. We monitor for suspicious behavior, ensure your systems stay up-to-date with patches, and implement safeguards to keep your data, your clients, and your reputation safe.',
          },
          {
            id: 'Why this matters',
            title: 'Why this matters',
            content:
              'If your systems are slow, unprotected, or prone to crashing, it’s not just annoying—it’s costing you time and money. We help create an infrastructure that grows with you, scales with demand, and keeps your business moving forward confidently.',
          },
        ].map(({ id, title, content }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id.replace(/\s+/g, '-').toLowerCase()}-heading`}
            className="mb-12"
          >
            <h3
              id={`${id.replace(/\s+/g, '-').toLowerCase()}-heading`}
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {title}
            </h3>
            <p className="text-base md:text-lg text-[#F5F5F5] leading-relaxed max-w-prose">
              {content}
            </p>
          </section>
        ))}
        {/* Final Callout */}
        <section aria-label="Build a better foundation">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Build a better foundation
          </h3>
          <p className="text-base md:text-lg text-[#F5F5F5] leading-relaxed max-w-prose">
            With TELDEV’s Network and Infrastructure service, you’re not just installing wires and
            hardware—you’re investing in the long-term health of your business. Let’s make sure your
            systems are as smart, secure, and scalable as your ambitions.
          </p>
        </section>
      </div>
    </section>
  );
}
