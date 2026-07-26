import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function CoreValues() {
  const coreValues = useMemo(
    () => [
      {
        title: 'Expertise',
        content: `Our team has spent years in the parts of IT that are easy to underestimate until something breaks: network configuration, helpdesk escalations, cloud migrations, application support. That's where the certifications and the instincts come from. When a client's setup doesn't match a textbook case, we've usually seen something close to it before.`,
      },
      {
        title: 'Innovation',
        content:
          "We use AI and automation where they genuinely save a client time or money, not because it's trendy. Before we recommend a new tool or workflow, we ask whether it fixes a specific problem you already have. If it doesn't, we say so.",
      },
      {
        title: 'Security',
        content:
          "Network security audits, data encryption, and ongoing monitoring aren't a checklist we run once and forget. We set them up as standing practice, so an issue gets caught during a routine check instead of during an incident.",
      },
      {
        title: 'Scalability',
        content:
          "When your team doubles or your traffic spikes, we'd rather your infrastructure flex than have you rip it out and start over. That's the difference between a cloud setup planned for growth and one that just happens to work today.",
      },
      {
        title: 'Ongoing Support',
        content:
          "Support doesn't stop at go-live. When something breaks, you reach an actual person who already knows your setup, not a ticket queue that starts from zero every time.",
      },
      {
        title: 'Performance',
        content:
          "We monitor systems proactively so a slowdown gets caught before it becomes downtime. Most performance problems we fix never reach the point where a client notices them.",
      },
      {
        title: 'Customer-centric Approach',
        content:
          'A five-person startup and a fifty-person company don\'t need the same IT setup, so we don\'t sell them the same package. We scope solutions around your actual budget, team size, and constraints, not a template.',
      },
      {
        title: 'Adaptability',
        content:
          "Most clients don't arrive with a clean slate — they have existing tools, old habits, and systems already in place. We work with what's already there instead of forcing a migration nobody asked for.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    setTimeout(() => {
      if (newIndex !== null) {
        const el = document.getElementById(`core-value-toggle-${newIndex}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // Matches transition duration
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.section
      className="bg-[#0A0A0A] text-white px-4 sm:px-8 md:px-12 py-20 font-inter relative overflow-hidden"
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
          className="text-[#FFFFFF] text-3xl font-bold mb-8 text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Core values
        </motion.h2>

        <motion.div
          className="divide-y divide-[#1C6CFE] border-t border-b border-[#1C6CFE]"
          variants={containerVariants}
        >
          {coreValues.map((value, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <motion.button
                onClick={() => toggleValue(index)}
                className="w-full flex items-center justify-between py-5 px-4 bg-transparent border-0 text-left"
                whileHover={{ backgroundColor: 'rgba(28, 108, 254, 0.1)' }}
                transition={{ duration: 0.2 }}
                aria-expanded={openIndex === index}
                aria-controls={`core-value-content-${index}`}
                id={`core-value-toggle-${index}`}
              >
                <motion.h3
                  className="text-[#FFFFFF] text-xl font-semibold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {value.title}
                </motion.h3>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={openIndex === index ? 'minus' : 'plus'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: openIndex === index ? 180 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#FFFFFF]"
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    id={`core-value-content-${index}`}
                    role="region"
                    aria-labelledby={`core-value-toggle-${index}`}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-left text-[#F5F5F5] pb-6 px-4"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {value.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
