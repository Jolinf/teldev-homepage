import React, { useState } from 'react';

const OurStory = () => {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = [
    `In a world that’s becoming increasingly digital, the rapid advancement of technology has reshaped how we live, work, and connect. From artificial intelligence to cloud computing, smart automation to cybersecurity, tech is evolving faster than most of us can keep up with. Yet, somewhere along this high-speed highway of innovation, a troubling misconception took root: that cutting-edge technology is a luxury reserved for large corporations with deep pockets and entire IT departments.`,
    `We've seen small business owners hesitate to digitize their operations, freelancers manage their work manually, and passionate entrepreneurs put off automation—not because they don't value technology, but because they believe it's out of reach. And we get it. The tech world often seems overwhelming, jargon-filled, and built for those already in the know. But the truth is this: <span class="text-[#1C6CFE] font-semibold">technology belongs to everyone.</span>`,
    `Whether you're running a one-man design studio, a growing logistics business, or a local retail store, the right technology, custom-fitted to your specific needs can simplify your operations, enhance your reach, and scale your potential. You don't need to be a tech giant to use powerful tools; you just need a partner who understands your vision and knows how to bring the right solutions to life.`,
    `That belief; that technology should be <span class="text-blue-500 font-semibold">accessible</span>, <span class="text-blue-500 font-semibold">understandable</span>, and <span class="text-blue-500 font-semibold">empowering</span> for everyone, is what gave birth to <span class="text-[#1C6CFE] font-bold">TELDEV Technologies</span>.`,
    `Our story began in 2021, right after three friends; <span class="text-[#1C6CFE] font-semibold">Joshua</span>, <span class="text-[#1C6CFE] font-semibold">Kayode</span>, and <span class="text-[#1C6CFE] font-semibold">Tunde</span> graduated with Computer Science degrees and found themselves asking one big question: <span class="text-[#1C6CFE] font-semibold">“What if we could change the way people experience technology?”</span>`,
    `We weren’t interested in simply joining big corporations and working behind the scenes. We wanted to do something more personal, more meaningful. We saw firsthand how many individuals and small businesses struggled with tech not because they lacked the need, but because they lacked the support, the understanding, and the tailored solutions that would meet them where they are.`,
    `So we started <span class="text-[#1C6CFE] font-semibold">TELDEV</span>, short for <span class="text-[#1C6CFE] font-semibold">Technology Evolution and Development</span>, with a mission to bridge that gap. What started as a simple idea between friends quickly grew into a passion project, and from there, into a fully-fledged IT firm focused on delivering custom-made tech solutions for individuals, small businesses, and growing enterprises alike.`,
    `We made it our purpose to demystify technology, breaking down complex concepts into simple, actionable steps, and to build systems that feel like a natural extension of your work—not a barrier to it. Whether we’re offering basic IT support, setting up secure infrastructures, or consulting on digital transformation strategies, our focus is always on <span class="text-[#1C6CFE] font-semibold">people first, technology second.</span>`,
    `But more than just making tech accessible, we want to raise the standard of digital literacy and awareness. We believe everyone should not only have access to the right tools but also a working understanding of how those tools can transform their lives and businesses.`,
    `At <span class="text-[#1C6CFE] font-semibold">TELDEV</span>, we don’t just fix problems, we build relationships, educate, and empower. We listen, we learn, and we adapt, so our solutions always fit the people and purposes they’re built for.`,
    `From our humble beginnings in a shared workspace to working with clients across industries, one thing has remained the same: our dream to see technology as a right, not a privilege.`,
    `Because in the end, it’s not about how advanced the tools are, it’s about who they serve, and how far they can take you.`,
  ];

  const maxParagraphs = 3;
  const displayedParagraphs = expanded ? paragraphs : paragraphs.slice(0, maxParagraphs);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="box-border bg-[#0A0A0A] text-left text-[#FFFFFF] px-[10%] pb-[8%] ">
      <h2
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Our Story
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {displayedParagraphs.map((para, index) => (
          <p
            key={index}
            className="text-[#FFFFFF] text-[1.3em] leading-relaxed text-lg md:text-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}

        {paragraphs.length > maxParagraphs && (
          <button
            onClick={toggleExpanded}
            className="m-[0] p-[0] border-0 bg-transparent text-[#1673FF] font-medium hover:underline"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </section>
  );
};

export default OurStory;
