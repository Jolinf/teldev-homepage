import { Link } from 'react-router-dom';

export default function CloudPage() {
  return (
    <section
      className="box-border text-left bg-black text-[#FFFFFF] px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label="Cloud services main section"
    >
      <div className="max-w-5xl mx-auto mt-35">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm sm:text-base text-[#B0B0B0]">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link to="/whatweoffer" className="hover:underline focus:underline">
                What we offer
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li aria-current="page" className="text-[#1C6CFE] font-semibold">
              Cloud Services
            </li>
          </ol>
        </nav>

        <h1
          className="text-4xl sm:text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Cloud Services
        </h1>

        <div className="mb-12">
          <h3
            className="text-xl sm:text-xl md:text-2xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h3>
          <ul className="text-left space-y-2">
            <li>
              <a
                href="#Cloud Migration and Setup"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                Cloud Migration and Setup
              </a>
            </li>
            <li>
              <a
                href="#Data Storage and Security"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                Data Storage and Security
              </a>
            </li>
            <li>
              <a
                href="#Disaster Recovery"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                Disaster Recovery
              </a>
            </li>
            <li>
              <a
                href="#Why this matters"
                className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                Why this matters
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#FAFAFA] leading-relaxed mb-4">
            The cloud isn't just some mysterious tech buzzword. It’s a powerful, flexible way to run
            your business more efficiently—without being tied down by physical hardware or outdated
            systems. With TELDEV’s Cloud Services, you get access to world-class computing power,
            storage, and collaboration tools—designed to scale with your needs and budget. Whether
            you’re just exploring cloud solutions or ready for a full migration, we’ll guide you
            every step of the way.
          </p>
        </div>

        <div id="Cloud Migration and Setup" className="mb-12">
          <h3
            className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cloud Migration and Setup
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed mb-5">
            Moving to the cloud doesn’t have to be overwhelming. We help you migrate your data,
            systems, and applications to trusted cloud platforms like Microsoft Azure, Google Cloud,
            or AWS—without disrupting your operations. Our process is safe, seamless, and customized
            to fit your current setup.
          </p>
        </div>

        <div id="Data Storage and Security" className="mb-12">
          <h3
            className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Data Storage and Security
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            Say goodbye to full hard drives and fragile local backups. With cloud storage, your data
            is secure, backed up, and accessible from anywhere. We implement cloud-based storage
            solutions that protect your files with end-to-end encryption and controlled access.
            Whether you’re storing client records, business documents, or multimedia content, your
            data stays safe—and available when you need it.
          </p>
        </div>

        <div id="Disaster Recovery" className="mb-12">
          <h3
            className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Disaster Recovery
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed mb-5">
            What happens when your laptop crashes? Or your office gets hit by a power surge? With
            TELDEV’s disaster recovery planning, you don’t lose your data—or your progress. We
            design backup and recovery systems that ensure your business keeps running, even if the
            unexpected happens.
          </p>
        </div>

        <div id="Why this matters" className="mb-12">
          <h3
            className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why this matters
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            The cloud levels the playing field. It gives small businesses the same tools as big
            ones—without the massive IT budget. It’s fast, secure, and gives you the freedom to work
            from anywhere.
          </p>
        </div>

        <div>
          <h3
            className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let’s Get You Connected
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-lg text-[#F5F5F5] leading-relaxed">
            The future of business is in the cloud. Whether you’re starting small or going all-in,
            we’ll make the transition smooth, safe, and smart.
          </p>
        </div>
      </div>
    </section>
  );
}
