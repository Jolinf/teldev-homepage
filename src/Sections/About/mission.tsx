import React from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // Or use <img> if not using Next.js

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
    transition: {
      duration: 0.3,
    },
  },
};

export default function Mission() {
  return (
    <motion.section
      className="box-border bg-black text-white px-[10%] pb-[8%] flex items-center relative overflow-hidden"
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-[10%] items-center w-full max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
      >
        {/* Vision Card */}
        <motion.div
          className="p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            className="text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-[#FFFFFF] text-sm md:text-base leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            To be a trusted leader in technology support and innovation, empowering individuals and
            businesses through accessible, customer-focused IT solutions that drive growth,
            efficiency, and digital confidence.
          </motion.p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            className="text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-[#FFFFFF] text-sm md:text-base leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions. We are dedicated to providing expert guidance, responsive
            service, and innovative tools that help our clients navigate and thrive in a rapidly
            evolving digital world.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
