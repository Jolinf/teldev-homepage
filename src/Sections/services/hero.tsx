import { motion } from 'framer-motion';

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

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
};

export default function ServicesHero() {
  return (
    <motion.section
      role="region"
      aria-label="Introduction to TELDEV Technologies services"
      tabIndex={-1}
      aria-live="polite"
      className="box-border py-30 px-4 sm:px-8 md:px-12 bg-[#0A0A0A] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Background Decorative Elements - aria-hidden since decorative */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
        style={{ willChange: 'transform, opacity' }}
      >
        <div
          className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#E0E7FF] leading-tight mb-10 transition-transform duration-300 ease-in-out hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
          variants={textVariants}
          tabIndex={0} // focusable for keyboard users
        >
          Technology that works for you
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#D1D5DB] leading-relaxed font-normal mb-8 max-w-4xl mx-auto"
          variants={paragraphVariants}
          tabIndex={0} // focusable to read via keyboard navigation
        >
          At TELDEV Technologies, we offer more than just technical support—we deliver customized
          solutions designed to make technology work for you. Whether you're running a small
          business, managing a growing team, or flying solo, our services are built to meet your
          needs, your pace, and your goals. From everyday IT support to long-term strategy and
          systems that scale, we partner with you to simplify the complex, secure what matters, and
          set you up for long-term success. Here's how we help you make technology your advantage.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
