export default function NetworkPage() {
  return (
    <section
      className="box-border text-left bg-black text-[#FFFFFF] px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto mt-35">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Network and infrastructure
        </h1>

        <div className="mb-12">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h3>
          <ul className="text-left space-y-2">
            <li>
              <a
                href="#Network Monitoring"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Network Monitoring
              </a>
            </li>
            <li>
              <a
                href="#Infrastructure Setup and maintenance"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Infrastructure Setup and maintenance
              </a>
            </li>
            <li>
              <a
                href="#Security management"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Security management
              </a>
            </li>
            <li>
              <a
                href="#Why this matters"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Why this matters
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FAFAFA] leading-relaxed mb-4">
            When it comes to running a successful business in today’s digital world, your network
            and infrastructure are everything. It’s not just about having internet access or a
            couple of computers hooked together—it’s about having a secure, efficient, and
            dependable foundation that keeps your operations running smoothly, day in and day out.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FAFAFA] leading-relaxed mb-4">
            At TELDEV Technologies, we help you build and maintain that foundation. Our Network and
            Infrastructure services are designed for businesses of all sizes—especially those who
            think they’re too small to need "IT infrastructure." The truth? If you use a computer,
            store files, or depend on any form of connectivity, you already have an
            infrastructure—you just need the right support to optimize it.
          </p>
        </div>

        <div id="Network Monitoring" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Network Monitoring
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed mb-5">
            Think of this as your virtual security camera and performance tracker for everything
            that happens on your network. We keep a close eye on how your systems perform in real
            time—spotting slowdowns, unusual traffic, and early signs of trouble before they become
            major issues. This means less downtime, faster connections, and proactive
            problem-solving—so you're always ahead of the game.
          </p>
        </div>

        <div id="Infrastructure Setup and maintenance" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Infrastructure Setup and maintenance
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed">
            Whether you’re starting from scratch or upgrading an existing setup, we help design and
            deploy a robust IT infrastructure tailored to your business goals. This includes setting
            up servers, configuring routers and switches, establishing internal networks, and
            creating shared access points for your team. And we don’t stop there. We continue to
            maintain and fine-tune your infrastructure as your business grows.
          </p>
        </div>

        <div id="Security management" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Security management
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed mb-5">
            Cybersecurity isn’t just for big businesses. Every organization—no matter how
            small—needs protection. From firewalls to access controls, we manage your network
            security with industry best practices. We monitor for suspicious behavior, ensure your
            systems stay up-to-date with patches, and implement safeguards to keep your data, your
            clients, and your reputation safe.
          </p>
        </div>

        <div id="Why this matters" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why this matters
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed">
            If your systems are slow, unprotected, or prone to crashing, it’s not just annoying—it’s
            costing you time and money. We help create an infrastructure that grows with you, scales
            with demand, and keeps your business moving forward confidently.
          </p>
        </div>

        <div>
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Build a better foundation
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed">
            With TELDEV’s Network and Infrastructure service, you’re not just installing wires and
            hardware—you’re investing in the long-term health of your business. Let’s make sure your
            systems are as smart, secure, and scalable as your ambitions.
          </p>
        </div>
      </div>
    </section>
  );
}
