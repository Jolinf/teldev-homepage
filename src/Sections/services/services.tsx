import React from 'react';
import { motion } from 'framer-motion';
import Network from '../../assets/whatweoffer illustrations/whatweoffer-network-illustration.svg';
import Helpdesk from '../../assets/whatweoffer illustrations/whatweoffer-helpdesk-illustration.svg';
import ITconsulting from '../../assets/whatweoffer illustrations/whatweoffer-itconsulting-illustration.svg';
import cloud from '../../assets/whatweoffer illustrations/whatweoffer-cloud-illustrations.svg';
import webdev from '../../assets/whatweoffer illustrations/whatweoffer-app&webdev-illustrations.svg';
import { Link } from 'react-router-dom';

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
      className="box-border bg-black text-white px-4 sm:px-8 md:px-12 py-12 sm:py-20 min-h-screen flex flex-col items-center gap-16 relative overflow-hidden"
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
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#FFFFFF] mb-12"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.div className="w-full max-w-5xl mx-auto space-y-16" variants={containerVariants}>
        {/*Helpdesk support */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={Helpdesk}
              alt="Helpdesk illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-4" variants={textVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-[#1C6CFE] leading-snug mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Helpdesk Support
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Your first stop for swift and reliable IT help.From device issues to email setup, we
              offer step-by-step guidance to keep your business running smoothly. We're here to
              troubleshoot, resolve, and support—every step of the way.
            </motion.p>
            <div className="mt-4 z-10 relative">
              <Link
                to="/Helpdesk"
                className="inline-flex items-center gap-2 text-[#1C6CFE] hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg cursor-pointer no-underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Network & Infrastructure Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="text-left space-y-4" variants={textVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-[#1C6CFE] leading-snug mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Network & Infrastructure
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Strong infrastructure is the backbone of a modern business. We design, monitor, and
              secure your network for maximum uptime and performance.From setup to maintenance, we
              make sure your systems work flawlessly.
            </motion.p>
            <div className="mt-4 z-10 relative">
              <Link
                to="/Network"
                className="inline-flex items-center gap-2 text-[#1C6CFE] hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg cursor-pointer no-underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>

          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={Network}
              alt="Network & Infrastructure illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>
        </motion.div>

        {/* Web Development Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={webdev}
              alt="Web Development illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-4" variants={textVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-[#1C6CFE] leading-snug mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Application and Website Development
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We build and manage applications and websites tailored to your goals. From development
              to optimization, we handle it all. Keep your online presence fast, functional, and
              secure—with zero hassle.
            </motion.p>
            <div className="mt-4 z-10 relative">
              <Link
                to="/Webdev"
                className="inline-flex items-center gap-2 text-[#1C6CFE] hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg cursor-pointer no-underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Cloud Services Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
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

          <motion.div className="md:order-1 text-left space-y-4" variants={textVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-[#1C6CFE] leading-snug mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Cloud Services
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Scalable cloud solutions for businesses of all sizes, including cloud migration,
              management, and optimization services.
            </motion.p>
            <div className="mt-4 z-10 relative">
              <Link
                to="/Cloud"
                className="inline-flex items-center gap-2 text-[#1C6CFE] hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg cursor-pointer no-underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* IT Support Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={ITconsulting}
              alt="IT Consulting illustration"
              className="w-full max-w-md"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-4" variants={textVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-[#1C6CFE] leading-snug mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              IT Consulting
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Make smarter tech decisions with expert advice.We help align your business goals with
              the right technology. Whether it's integration, strategy, or cost-saving, we guide you
              toward better results.
            </motion.p>
            <div className="mt-4 z-10 relative">
              <Link
                to="/ItConsulting"
                className="inline-flex items-center gap-2 text-[#1C6CFE] hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg cursor-pointer no-underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
