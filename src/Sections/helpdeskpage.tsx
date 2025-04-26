export default function HelpdeskPage() {
  return (
    <section
      className="box-border bg-black text-[#FFFFFF] text-left px-[10%] py-[15%]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div>
        <h1>Helpdesk Support</h1>
      </div>

      <div>
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {' '}
          Contents
        </h2>
        <ul className="list-none text-left">
          <li>
            <a href="#First-Line Support" className="no-underline text-[#1C6CFE]">
              First-Line Support
            </a>
          </li>
          <li>
            <a href="#Troubleshooting Services" className="no-underline text-[#1C6CFE]">
              Troubleshooting Services
            </a>
          </li>
          <li>
            <a href="#Email Setup Assistance" className="no-underline text-[#1C6CFE]">
              Email Setup Assistance
            </a>
          </li>
          <li>
            <a href="#Step-by-step Guidance" className="no-underline text-[#1C6CFE]">
              Step-by-step Guidance
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-[1.2em]">
          At TELDEV Technologies, we know that technology should simplify your work—not make it
          harder. But when your systems lag, your email won't load, or your team hits a technical
          wall, productivity comes to a standstill. That's where our Helpdesk Support steps in.
          Think of us as your go-to tech partner—the people you can count on when things go wrong,
          and even before they do. Our Helpdesk Support service is designed for quick, reliable, and
          friendly assistance, so you can focus on running your business, not fixing IT issues.
          Here’s what we bring to the table:
        </p>
      </div>

      <div id="First-Line Support">
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          First-Line Support
        </h2>
        <p className="text-[1.2em]">
          We’re your first line of defense against technical disruptions. Whether it’s a minor
          glitch or a recurring error, our team is ready to step in and resolve the issue quickly.
          We don’t believe in long wait times or frustrating call transfers—you get fast, human
          support right when you need it
        </p>
        <ul>
          <li>Slow computer performance</li>
          <li>Connectivity problems</li>
          <li>Basic hardwar/software conflicts</li>
          <li>Access and login issues</li>
        </ul>
        <p>This level of support ensures you're never left guessing when something goes wrong</p>
      </div>

      <div id="Troubleshooting Services">
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Troubleshooting Services
        </h2>
        <p className="text-[1.2em]">
          You don’t need to be tech-savvy to get things working again—we’ve got you covered. Our
          troubleshooting goes beyond surface fixes. We dig into the problem, diagnose what’s really
          going on, and provide clear, effective solutions. Whether it’s a printer that won’t
          connect, apps that keep crashing, or mysterious system errors, we solve it and explain it
          in simple language—no jargon, no confusion.
        </p>
      </div>

      <div id="Email Setup Assistance">
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Email Setup Assistance
        </h2>
        <p className="text-[1.2em]">
          Still struggling with setting up professional emails or syncing them across your devices?
          We’ll get you sorted—fast. Whether you use Outlook, Gmail, or another platform, we
          configure your email environment to work seamlessly across your phone, tablet, and
          desktop. We’ll also help with:
        </p>
        <ul>
          <li>Creating Business email accounts</li>
          <li>Setting up custom domains (e.g.yourusername@yourcompany.com)</li>
          <li>Ensuring security settings and backups are in place</li>
        </ul>
      </div>

      <div id="Step-by-step Guidance">
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Step-by-step Guidance
        </h2>
        <p className="text-[1.2em]">
          Technology is only helpful if you understand how to use it. That’s why we don’t just solve
          problems—we teach you how to avoid them. Our Helpdesk Support comes with personalized,
          step-by-step guidance that helps you build confidence using your tech. We walk you through
          new system updates, app installations, and even basic cybersecurity practices—because an
          empowered user is a protected one.
        </p>
      </div>

      <div>
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Why It Matters
        </h2>
        <p className="text-[1.2em]">
          You don’t need a full IT department to have reliable tech support. Whether you’re a
          one-person business or managing a small team, we make sure help is always one message or
          call away. We’re not here to confuse you—we’re here to support, explain, and simplify.
        </p>
      </div>

      <div>
        <h2 className="text-[2em]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Let's Work Together
        </h2>
        <p className="text-[1.2em]">
          Technology isn’t just for big corporations—it’s for you, too. Our Helpdesk Support is your
          safety net, your tech translator, and your business booster. Let’s take the stress out of
          your tech so you can focus on what you do best.
        </p>
      </div>
    </section>
  );
}
