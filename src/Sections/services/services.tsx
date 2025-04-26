import React from 'react';
import { motion } from 'framer-motion';
import ITsupport from '../../assets/homepage illustrations/Homepage-whatweoffer-helpdesk illustration.svg';
import cloud from '../../assets/homepage illustrations/Homepage-whatweoffer-cloudservices illustration.svg';
import security from '../../assets/homepage illustrations/Homepage-whatweoffer-Network&infrastructure illustration.svg';

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    borderColor: '#1C6CFE',
    boxShadow: '0 0 30px rgba(28, 108, 254, 0.3)',
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <motion.section
      className="box-border bg-black text-white px-[10%] py-[8%] min-h-screen flex flex-col items-center gap-16 relative overflow-hidden"
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

      <motion.h2
        className="text-[#FFFFFF] text-heading-2 font-bold text-center"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.div className="w-full max-w-7xl mx-auto space-y-16" variants={containerVariants}>
        {/* IT Support Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={ITsupport}
              alt="IT Support illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-6" variants={textVariants}>
            <motion.h3
              className="text-[#FFFFFF] text-heading-3 font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              IT Support
            </motion.h3>
            <motion.p
              className="text-[#FFFFFF] text-body-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Comprehensive IT support services including troubleshooting, system maintenance, and
              technical assistance to keep your business running smoothly.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cloud Services Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="md:order-2 flex justify-center md:justify-end"
            variants={imageVariants}
          >
            <motion.img
              src={cloud}
              alt="Cloud Services illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="md:order-1 text-left space-y-6" variants={textVariants}>
            <motion.h3
              className="text-[#FFFFFF] text-heading-3 font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Cloud Services
            </motion.h3>
            <motion.p
              className="text-[#FFFFFF] text-body-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Scalable cloud solutions for businesses of all sizes, including cloud migration,
              management, and optimization services.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Security Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={security}
              alt="Security illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-6" variants={textVariants}>
            <motion.h3
              className="text-[#FFFFFF] text-heading-3 font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Security
            </motion.h3>
            <motion.p
              className="text-[#FFFFFF] text-body-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Advanced security solutions to protect your business from cyber threats, including
              network security, data protection, and security audits.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
