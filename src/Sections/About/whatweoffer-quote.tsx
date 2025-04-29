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
    backgroundColor: '#FFFFFF',
    color: '#0F1729',
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export default function WhatWeOfferQuote2() {
  return (
    <motion.section
      className="py-20 px-[10%] bg-[#050505] sm:px-8 relative overflow-hidden"
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
          className="w-full sm:w-[60%] sm:text-[1.4em] text-[#FFFFFF] max-w-2xl mx-auto mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={textVariants}
        >
          Let's build the right solution together—tailored to you, and ready to grow with your
          vision.
        </motion.h2>

        <motion.div className="flex justify-center gap-4 sm:gap-6" variants={containerVariants}>
          <motion.button
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get started
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
