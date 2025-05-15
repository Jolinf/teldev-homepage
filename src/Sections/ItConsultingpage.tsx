import { Link } from 'react-router-dom';

export default function ItConsultingPage() {
  return (
    <section
      className="box-border text-left bg-black text-white px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label="IT Consulting Page Section"
    >
      <div className="max-w-5xl mx-auto mt-35">
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
              IT Consulting
            </li>
          </ol>
        </nav>

        <h1
          className="text-4xl sm:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          IT Consulting
        </h1>

        <div className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h3>
          <ul className="text-left space-y-2">
            {[
              'Technology Strategy',
              'System Integration',
              'Cost Optimization',
              'Why this matters',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="no-underline text-[#1C6CFE] hover:underline focus:underline transition-colors duration-200 focus:outline-none"
                  aria-label={`Jump to section ${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <p className="text-base md:text-lg leading-relaxed mb-4 text-[#FAFAFA] max-w-prose">
            You don’t need to know everything about IT to make great decisions—you just need the
            right people in your corner. That’s what TELDEV’s IT Consulting service is all about. We
            partner with you to assess where you are, understand where you’re headed, and create a
            tech roadmap that gets you there faster—with fewer mistakes and less waste. This service
            is perfect for businesses that want to grow, modernize, or streamline—but aren’t sure
            where to start.
          </p>
        </div>

        <section
          id="Technology Strategy"
          className="mb-12"
          aria-labelledby="technology-strategy-title"
        >
          <h3
            id="technology-strategy-title"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Technology Strategy
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-5 text-[#F5F5F5] max-w-prose">
            We help you think big—and plan smart. Whether you need a full IT plan or just want to
            introduce new systems, we create a technology strategy tailored to your goals, timeline,
            and budget. From choosing platforms to scaling infrastructure, you’ll move forward with
            clarity and confidence.
          </p>
        </section>

        <section
          id="System Integration"
          className="mb-12"
          aria-labelledby="system-integration-title"
        >
          <h3
            id="system-integration-title"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            System Integration
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-[#F5F5F5] max-w-prose">
            Using multiple tools that don’t talk to each other? We help connect the dots. Our
            integration experts align your apps, devices, and platforms to work together
            seamlessly—eliminating silos, improving data flow, and reducing confusion.
          </p>
        </section>

        <section id="Cost Optimization" className="mb-12" aria-labelledby="cost-optimization-title">
          <h3
            id="cost-optimization-title"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cost Optimization
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-5 text-[#F5F5F5] max-w-prose">
            A pretty website is useless if it’s slow or keeps breaking. We monitor your site or
            app’s performance, identify bottlenecks, and continuously optimize for speed, uptime,
            and user experience. Your clients get a smooth experience, and you get peace of mind.
          </p>
        </section>

        <section id="Why this matters" className="mb-12" aria-labelledby="why-this-matters-title">
          <h3
            id="why-this-matters-title"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why this matters
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-[#F5F5F5] max-w-prose">
            You don’t need more tools—you need the right tools. Our IT Consulting service ensures
            every decision you make moves your business in the right direction.
          </p>
        </section>

        <div>
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let’s Build Your Tech Strategy
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-[#F5F5F5] max-w-prose">
            Technology is only powerful when it’s used well. Let’s work together to create a plan
            that supports your goals—not distracts from them.
          </p>
        </div>
      </div>
    </section>
  );
}
