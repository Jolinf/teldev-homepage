export default function ItConsultingPage() {
  return (
    <section
      className="box-border text-left bg-black text-[#FFFFFF] px-4 sm:px-8 md:px-12 py-8"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto mt-40">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          IT Consulting
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
                href="#Technology Strategy"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Technology Strategy
              </a>
            </li>
            <li>
              <a
                href="#System Integration"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                System Integration
              </a>
            </li>
            <li>
              <a
                href="#Cost Optimization"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200"
              >
                Cost Optimization
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
            You don’t need to know everything about IT to make great decisions—you just need the
            right people in your corner. That’s what TELDEV’s IT Consulting service is all about. We
            partner with you to assess where you are, understand where you’re headed, and create a
            tech roadmap that gets you there faster—with fewer mistakes and less waste. This service
            is perfect for businesses that want to grow, modernize, or streamline—but aren’t sure
            where to start.
          </p>
        </div>

        <div id="Technology Strategy" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Technology Strategy
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed mb-5">
            We help you think big—and plan smart. Whether you need a full IT plan or just want to
            introduce new systems, we create a technology strategy tailored to your goals, timeline,
            and budget. From choosing platforms to scaling infrastructure, you’ll move forward with
            clarity and confidence.
          </p>
        </div>

        <div id="System Integration" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            System Integration
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed">
            Using multiple tools that don’t talk to each other? We help connect the dots. Our
            integration experts align your apps, devices, and platforms to work together
            seamlessly—eliminating silos, improving data flow, and reducing confusion.
          </p>
        </div>

        <div id="Cost Optimization" className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cost Optimization
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed mb-5">
            A pretty website is useless if it’s slow or keeps breaking. We monitor your site or
            app’s performance, identify bottlenecks, and continuously optimize for speed, uptime,
            and user experience. Your clients get a smooth experience, and you get peace of mind.
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
            You don’t need more tools—you need the right tools. Our IT Consulting service ensures
            every decision you make moves your business in the right direction.
          </p>
        </div>

        <div>
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let’s Build Your Tech Strategy
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed">
            Technology is only powerful when it’s used well. Let’s work together to create a plan
            that supports your goals—not distracts from them.
          </p>
        </div>
      </div>
    </section>
  );
}
