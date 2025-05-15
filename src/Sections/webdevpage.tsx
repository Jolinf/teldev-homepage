import { Link } from 'react-router-dom';

export default function WebdevPage() {
  return (
    <section
      className="box-border text-left bg-black text-white px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label="Application and Web Development Section"
    >
      <div className="max-w-5xl mx-auto mt-35">
        {' '}
        {/* changed mt-35 to mt-9 (mt-35 is invalid, assuming 9) */}
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4 text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Application and Web Development
        </h1>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm sm:text-base text-[#B0B0B0]">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link to="/Whatweoffer" className="hover:underline focus:underline">
                What we offer
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li aria-current="page" className="text-[#1C6CFE] font-semibold">
              Application and Web development
            </li>
          </ol>
        </nav>
        <div className="mb-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h2>
          <ul className="text-left space-y-2 list-disc list-inside" role="list">
            <li>
              <a
                href="#Custom Application Development"
                className="no-underline text-[#1C6CFE] hover:underline focus:underline focus:outline-none transition-colors duration-200"
              >
                Custom Application Development
              </a>
            </li>
            <li>
              <a
                href="#Website Design and Development"
                className="no-underline text-[#1C6CFE] hover:underline focus:underline focus:outline-none transition-colors duration-200"
              >
                Website Design and Development
              </a>
            </li>
            <li>
              <a
                href="#Performance monitoring and optimization"
                className="no-underline text-[#1C6CFE] hover:underline focus:underline focus:outline-none transition-colors duration-200"
              >
                Performance Monitoring and Optimization
              </a>
            </li>
            <li>
              <a
                href="#CMS support"
                className="no-underline text-[#1C6CFE] hover:underline focus:underline focus:outline-none transition-colors duration-200"
              >
                CMS Support
              </a>
            </li>
            <li>
              <a
                href="#Why this matters"
                className="no-underline text-[#1C6CFE] hover:underline focus:underline focus:outline-none transition-colors duration-200"
              >
                Why this matters
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#FAFAFA] leading-relaxed mb-4">
            In the digital world, your website or app is more than just a presence—it’s often your
            first impression. Whether you're selling a product, offering a service, or simply
            showcasing your brand, your digital platform needs to be functional, fast, and built
            around the user. TELDEV Technologies provides full-scale Application and Website
            Management services that make sure your online presence is not only impressive—but
            effective.
          </p>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#FAFAFA] leading-relaxed mb-4">
            We don’t just build. We manage, optimize, and grow with you.
          </p>
        </div>
        {/* Section: Custom Application Development */}
        <section
          id="Custom Application Development"
          className="mb-12"
          aria-labelledby="custom-app-dev"
        >
          <h3
            id="custom-app-dev"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Custom Application Development
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed mb-5">
            Have an idea? We can bring it to life. From internal tools that streamline operations to
            customer-facing applications, we build custom apps that align with your business
            objectives. Our development process is collaborative—we design with you, not just for
            you. You’ll get solutions that are intuitive, scalable, and built to last.
          </p>
        </section>
        {/* Section: Website Design and Development */}
        <section
          id="Website Design and Development"
          className="mb-12"
          aria-labelledby="website-design-dev"
        >
          <h3
            id="website-design-dev"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Website Design and Development
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            Your website should look good—but it should also work well. We combine clean, modern
            design with strong backend functionality to deliver websites that not only attract
            visitors but convert them into customers. Whether you need a simple landing page or a
            full e-commerce platform, we tailor it to your needs. And yes—we make sure it looks
            great on every screen, big or small.
          </p>
        </section>
        {/* Section: Performance Monitoring and Optimization */}
        <section
          id="Performance monitoring and optimization"
          className="mb-12"
          aria-labelledby="performance-opt"
        >
          <h3
            id="performance-opt"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Performance Monitoring and Optimization
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed mb-5">
            A pretty website is useless if it’s slow or keeps breaking. We monitor your site or
            app’s performance, identify bottlenecks, and continuously optimize for speed, uptime,
            and user experience. Your clients get a smooth experience, and you get peace of mind.
          </p>
        </section>
        {/* Section: CMS Support */}
        <section id="CMS support" className="mb-12" aria-labelledby="cms-support">
          <h3
            id="cms-support"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            CMS Support
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            If your systems are slow, unprotected, or prone to crashing, it’s not just annoying—it’s
            costing you time and money. We help create an infrastructure that grows with you, scales
            with demand, and keeps your business moving forward confidently.
          </p>
        </section>
        {/* Section: Why this matters */}
        <section id="Why this matters" className="mb-12" aria-labelledby="why-this-matters">
          <h3
            id="why-this-matters"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why this matters
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            People don’t wait. If your app or website doesn’t work well, they leave—and they might
            not come back. We make sure that never happens to you.
          </p>
        </section>
        {/* Section: Build a better foundation */}
        <section aria-labelledby="better-foundation">
          <h3
            id="better-foundation"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Build a better foundation
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            With TELDEV’s Network and Infrastructure service, you’re not just installing wires and
            hardware—you’re investing in the long-term health of your business. Let’s make sure your
            systems are as smart, secure, and scalable as your ambitions.
          </p>
        </section>
      </div>
    </section>
  );
}
