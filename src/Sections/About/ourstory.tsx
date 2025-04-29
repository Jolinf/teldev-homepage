import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

const OurStory = () => {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = [
    `In a world that's becoming increasingly digital, the rapid advancement of technology has reshaped how we live, work, and connect. From artificial intelligence to cloud computing, smart automation to cybersecurity, tech is evolving faster than most of us can keep up with. Yet, somewhere along this high-speed highway of innovation, a troubling misconception took root: that cutting-edge technology is a luxury reserved for large corporations with deep pockets and entire IT departments.`,
    `We've seen small business owners hesitate to digitize their operations, freelancers manage their work manually, and passionate entrepreneurs put off automation—not because they don't value technology, but because they believe it's out of reach. And we get it. The tech world often seems overwhelming, jargon-filled, and built for those already in the know. But the truth is this: <span class="text-[#1C6CFE] font-semibold">technology belongs to everyone.</span>`,
    `Whether you're running a one-man design studio, a growing logistics business, or a local retail store, the right technology, custom-fitted to your specific needs can simplify your operations, enhance your reach, and scale your potential. You don't need to be a tech giant to use powerful tools; you just need a partner who understands your vision and knows how to bring the right solutions to life.`,
    `That belief; that technology should be <span class="text-[#1C6CFE] font-semibold">accessible</span>, <span class="text-[#1C6CFE] font-semibold">understandable</span>, and <span class="text-[#1C6CFE] font-semibold">empowering</span> for everyone, is what gave birth to <span class="text-[#1C6CFE] font-bold">TELDEV Technologies</span>.`,
    `Our story began in 2021, right after three friends; <span class="text-[#1C6CFE] font-semibold">Joshua</span>, <span class="text-[#1C6CFE] font-semibold">Kayode</span>, and <span class="text-[#1C6CFE] font-semibold">Tunde</span> graduated with Computer Science degrees and found themselves asking one big question: <span class="text-[#1C6CFE] font-semibold">"What if we could change the way people experience technology?"</span>`,
    `We weren't interested in simply joining big corporations and working behind the scenes. We wanted to do something more personal, more meaningful. We saw firsthand how many individuals and small businesses struggled with tech not because they lacked the need, but because they lacked the support, the understanding, and the tailored solutions that would meet them where they are.`,
    `So we started <span class="text-[#1C6CFE] font-semibold">TELDEV</span>, short for <span class="text-[#1C6CFE] font-semibold">Technology Evolution and Development</span>, with a mission to bridge that gap. What started as a simple idea between friends quickly grew into a passion project, and from there, into a fully-fledged IT firm focused on delivering custom-made tech solutions for individuals, small businesses, and growing enterprises alike.`,
    `We made it our purpose to demystify technology, breaking down complex concepts into simple, actionable steps, and to build systems that feel like a natural extension of your work—not a barrier to it. Whether we're offering basic IT support, setting up secure infrastructures, or consulting on digital transformation strategies, our focus is always on <span class="text-[#1C6CFE] font-semibold">people first, technology second.</span>`,
    `But more than just making tech accessible, we want to raise the standard of digital literacy and awareness. We believe everyone should not only have access to the right tools but also a working understanding of how those tools can transform their lives and businesses.`,
    `At <span class="text-[#1C6CFE] font-semibold">TELDEV</span>, we don't just fix problems, we build relationships, educate, and empower. We listen, we learn, and we adapt, so our solutions always fit the people and purposes they're built for.`,
    `From our humble beginnings in a shared workspace to working with clients across industries, one thing has remained the same: our dream to see technology as a right, not a privilege.`,
    `Because in the end, it's not about how advanced the tools are, it's about who they serve, and how far they can take you.`,
  ];

  const maxParagraphs = 3;
  const displayedParagraphs = expanded ? paragraphs : paragraphs.slice(0, maxParagraphs);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.section
      className="box-border bg-[#0A0A0A] flex justify-left text-left text-[#FFFFFF] px-[10%] py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-7xl mx-auto relative z-10" variants={containerVariants}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h2>

        <motion.div className="max-w-4xl mx-auto space-y-6" variants={containerVariants}>
          <AnimatePresence mode="wait">
            {displayedParagraphs.map((para, index) => (
              <motion.p
                key={index}
                className="text-[#FFFFFF] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </AnimatePresence>

          {paragraphs.length > maxParagraphs && (
            <motion.button
              onClick={toggleExpanded}
              className="m-[0] p-[0] border-0 bg-transparent text-[#1673FF] font-medium hover:underline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {expanded ? 'Read less' : 'Read more'}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurStory;
