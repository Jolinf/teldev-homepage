import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const socialLinks = [
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaXTwitter />, href: '#' },
  { icon: <FaLinkedinIn />, href: '#' },
];

const footerLinks = {
  company: ['Home', 'Who we are', 'What we do', 'Blog'],
  services: [
    'Helpdesk Support',
    'Network & Infrastructure',
    'Application & website management',
    'Cloud Services',
    'IT Consulting',
  ],
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
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#1E64F0] text-[#FFFFFF]">
      <motion.div
        className="px-[10%] py-[8%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex justify-between flex-wrap gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Stay Connected */}
          <motion.div
            className="text-left"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={itemVariants}
          >
            <motion.h3
              className="text-[1.5em] font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Stay connected
            </motion.h3>
            <motion.div className="flex gap-4 text-xl mb-4" variants={containerVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-[1.3em] text-[#000000] hover:text-gray-300 no-underline pr-[20px] transition-colors duration-300"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.div className="space-y-0" variants={containerVariants}>
              <motion.p className="m-[0] text-[1.2em]" variants={itemVariants}>
                contact@teldev.org
              </motion.p>
              <motion.p className="m-[0] text-[1.2em]" variants={itemVariants}>
                +234 903 756 2951
              </motion.p>
              <motion.p className="m-[0] text-[1.2em]" variants={itemVariants}>
                +234 708 403 6561
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Company */}
          <motion.div className="text-left" variants={itemVariants}>
            <motion.h3
              className="text-[1.5em] font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Company
            </motion.h3>
            <motion.ul
              className="space-y-2 text-sm list-none text-left justify-left pl-[0]"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={containerVariants}
            >
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} className="pb-[10px]" variants={itemVariants}>
                  <motion.a
                    href="#"
                    className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline transition-colors duration-300"
                    whileHover="hover"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div className="text-left" variants={itemVariants}>
            <motion.h3
              className="text-[1.5em] text-xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Services
            </motion.h3>
            <motion.ul
              className="space-y-2 text-sm list-none pl-[0]"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={containerVariants}
            >
              {footerLinks.services.map((service, index) => (
                <motion.li key={index} className="pb-[10px]" variants={itemVariants}>
                  <motion.a
                    href="#"
                    className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline transition-colors duration-300"
                    whileHover="hover"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer bottom row */}
      <motion.div
        className="border-t border-[#FFFFFF]/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-wrap justify-between items-center py-6 px-[10%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex gap-6 text-sm" variants={containerVariants}>
            {['Terms & Conditions', 'Cookie Policy', 'Sitemap'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-[#FFFFFF] mr-[10px] hover:text-gray-200 transition-colors duration-300"
                variants={itemVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-[1em]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={itemVariants}
          >
            © 2025 Teldev. All Rights Reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
