import React from 'react';

export default function HowWeHelp() {
  return (
    <section className="box-border bg-black text-[#FFFFFF] Text-left px-[10%] pb-[8%]">
      <h2 className="text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
        How We Help
      </h2>
      <p className="text-left text-[1.3em] " style={{ fontFamily: 'Inter, sans-serif' }}>
        At TELDEV Technologies, our goal is simple: to make technology work for you. Whether you're
        running a small business, managing a growing team, or just need help navigating the digital
        world, we provide customized IT support and solutions designed to meet you where you are.
      </p>
      <p className="text-left text-[1.3em]" style={{ fontFamily: 'Inter, sans-serif' }}>
        From day-to-day troubleshooting and secure system setups to IT consulting, email support,
        and digital transformation strategies, we equip you with the tools and expertise you need to
        stay productive, protected, and ahead of the curve.
      </p>
      <p className="text-left text-[1.3em]" style={{ fontFamily: 'Inter, sans-serif' }}>
        We're not just here to fix problems—we're here to guide, empower, and grow with you.
      </p>
      <div className="flex justify-start">
        <a
          href="#"
          className="text-left no-underline hover:text-[#1C6CFE] hover:underline text-[1.3em]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          See what we offer
        </a>
      </div>
    </section>
  );
}
