import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function CoreValues() {
  const coreValues = useMemo(
    () => [
      {
        title: 'Expertise',
        content: `At TELDEV Technologies, expertise is at the heart of everything we do. It reflects our dedication to mastering the tools, technologies, and trends that shape today's digital landscape. Our team brings years of hands-on experience, technical certifications, and a problem-solving mindset to every challenge. We don't just offer support—we offer smart, strategic solutions that are informed, reliable, and forward-thinking. By consistently honing our skills and sharing our knowledge, we empower our clients with the confidence to navigate technology with ease.`,
      },
      {
        title: 'Innovation',
        content:
          'At TELDEV Technologies, innovation drives our approach to solving complex challenges. We continuously explore emerging technologies and creative solutions to deliver cutting-edge services that keep our clients ahead of the curve. Our commitment to innovation ensures that we not only meet current needs but also anticipate future opportunities, helping businesses thrive in an ever-evolving digital landscape.',
      },
      {
        title: 'Security',
        content:
          "Security is our top priority at TELDEV Technologies. We implement robust security measures and best practices to protect our clients' data and systems. From secure infrastructure setup to ongoing monitoring and threat prevention, we ensure that your digital assets remain safe and protected against evolving cyber threats.",
      },
      {
        title: 'Scalability',
        content:
          "We design solutions that grow with your business. Our scalable IT services and infrastructure ensure that your technology needs are met today while preparing for tomorrow's growth. Whether you're expanding operations or adapting to new challenges, our solutions scale seamlessly to support your evolving requirements.",
      },
      {
        title: 'Ongoing Support',
        content:
          "Our commitment to your success doesn't end with implementation. We provide continuous support, maintenance, and guidance to ensure your systems run smoothly. Our dedicated support team is always available to address your questions, troubleshoot issues, and help you make the most of your technology investments.",
      },
      {
        title: 'Performance',
        content:
          'We optimize your technology for peak performance. Through careful monitoring, regular maintenance, and performance tuning, we ensure that your systems operate at their best. Our focus on performance helps you achieve maximum efficiency and productivity in your daily operations.',
      },
      {
        title: 'Customer-centric Approach',
        content:
          'Your success is our success. We take the time to understand your unique needs, challenges, and goals. Our customer-centric approach means we tailor our solutions to your specific requirements, providing personalized service and support that puts your business first.',
      },
      {
        title: 'Adaptability',
        content:
          'In a rapidly changing technological landscape, adaptability is key. We stay agile and responsive to new developments, ensuring that our services and solutions remain relevant and effective. Our ability to adapt allows us to meet your changing needs and help you navigate technological shifts with confidence.',
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
      className="bg-[#0A0A0A] text-white px-[10%] py-20 font-inter relative overflow-hidden"
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
          className="divide-y divide-[#1673FF] border-t border-b border-[#1673FF]"
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
