import { Link } from 'react-router-dom';

export default function HelpdeskPage() {
  return (
    <section
      className="box-border text-left text-white px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label="Helpdesk Support Section"
    >
      <div className="max-w-5xl mx-auto mt-35">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm sm:text-base" aria-label="Breadcrumb">
          <ol className="list-reset flex text-[#a0a0a0]">
            <li>
              <Link
                to="/whatweoffer"
                className="hover:text-[#1C6CFE] focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                What we offer
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li aria-current="page" className="text-white font-semibold">
              Helpdesk Support
            </li>
          </ol>
        </nav>

        <h1
          className="text-4xl sm:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Helpdesk Support
        </h1>

        <div className="mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-5 mt-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h3>
          <ul className="text-left space-y-2 list-inside list-disc">
            {[
              'First-Line Support',
              'Troubleshooting Services',
              'Email Setup Assistance',
              'Step-by-step Guidance',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-[#FAFAFA] max-w-prose">
            At TELDEV Technologies, we know that technology should simplify your work—not make it
            harder. But when your systems lag, your email won't load, or your team hits a technical
            wall, productivity comes to a standstill. That's where our Helpdesk Support steps in.
            Think of us as your go-to tech partner—the people you can count on when things go wrong,
            and even before they do. Our Helpdesk Support service is designed for quick, reliable,
            and friendly assistance, so you can focus on running your business, not fixing IT
            issues. Here's what we bring to the table:
          </p>
        </div>

        {/* Sections */}
        {[
          {
            id: 'First-Line Support',
            title: 'First-Line Support',
            paragraphs: [
              "We're your first line of defense against technical disruptions. Whether it's a minor glitch or a recurring error, our team is ready to step in and resolve the issue quickly. We don't believe in long wait times or frustrating call transfers—you get fast, human support right when you need it.",
              "This level of support ensures you're never left guessing when something goes wrong.",
            ],
            list: [
              'Slow computer performance',
              'Connectivity problems',
              'Basic hardware/software conflicts',
              'Access and login issues',
            ],
          },
          {
            id: 'Troubleshooting Services',
            title: 'Troubleshooting Services',
            paragraphs: [
              "You don't need to be tech-savvy to get things working again—we've got you covered. Our troubleshooting goes beyond surface fixes. We dig into the problem, diagnose what's really going on, and provide clear, effective solutions. Whether it's a printer that won't connect, apps that keep crashing, or mysterious system errors, we solve it and explain it in simple language—no jargon, no confusion.",
            ],
          },
          {
            id: 'Email Setup Assistance',
            title: 'Email Setup Assistance',
            paragraphs: [
              "Still struggling with setting up professional emails or syncing them across your devices? We'll get you sorted—fast. Whether you use Outlook, Gmail, or another platform, we configure your email environment to work seamlessly across your phone, tablet, and desktop. We'll also help with:",
            ],
            list: [
              'Creating Business email accounts',
              'Setting up custom domains (e.g. yourusername@yourcompany.com)',
              'Ensuring security settings and backups are in place',
            ],
          },
          {
            id: 'Step-by-step Guidance',
            title: 'Step-by-step Guidance',
            paragraphs: [
              "Technology is only helpful if you understand how to use it. That's why we don't just solve problems—we teach you how to avoid them. Our Helpdesk Support comes with personalized, step-by-step guidance that helps you build confidence using your tech. We walk you through new system updates, app installations, and even basic cybersecurity practices—because an empowered user is a protected one.",
            ],
          },
        ].map(({ id, title, paragraphs, list }) => (
          <section key={id} id={id} className="mb-12" aria-labelledby={`${id}-heading`}>
            <h3
              id={`${id}-heading`}
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {title}
            </h3>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed mb-5 text-[#F5F5F5] max-w-prose"
              >
                {para}
              </p>
            ))}
            {list && (
              <ul className="list-disc list-inside ml-4 space-y-1 max-w-prose">
                {list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Additional Sections */}
        {[
          {
            title: 'Why It Matters',
            paragraphs: [
              "You don't need a full IT department to have reliable tech support. Whether you're a one-person business or managing a small team, we make sure help is always one message or call away. We're not here to confuse you—we're here to support, explain, and simplify.",
            ],
          },
          {
            title: "Let's Work Together",
            paragraphs: [
              "Technology isn't just for big corporations—it's for you, too. Our Helpdesk Support is your safety net, your tech translator, and your business booster. Let's take the stress out of your tech so you can focus on what you do best.",
            ],
          },
        ].map(({ title, paragraphs }) => (
          <div key={title} className="mb-12" aria-label={title}>
            <h3
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {title}
            </h3>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-[#F5F5F5] max-w-prose"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
