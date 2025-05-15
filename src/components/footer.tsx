import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: <FaFacebookF aria-hidden="true" />, href: '#', label: 'Facebook' },
  {
    icon: <FaInstagram aria-hidden="true" />,
    href: 'https://www.instagram.com/teldev_ltd/',
    label: 'Instagram',
  },
  { icon: <FaXTwitter aria-hidden="true" />, href: '#', label: 'X Twitter' },
  {
    icon: <FaLinkedinIn aria-hidden="true" />,
    href: 'https://www.linkedin.com/company/teldev-ng/',
    label: 'LinkedIn',
  },
];

const footerLinks = {
  company: [
    { name: 'Home', path: '/' },
    { name: 'Who we are', path: '/Whoweare' },
    { name: 'What we do', path: '/Whatweoffer' },
    { name: 'Blog', path: '/blog' },
  ],
  services: [
    { name: 'Helpdesk Support', path: '/Helpdesk' },
    { name: 'Network & Infrastructure', path: '/Network' },
    { name: 'Application & website management', path: '/Webdev' },
    { name: 'Cloud Services', path: '/Cloud' },
    { name: 'IT Consulting', path: '/Itconsulting' },
  ],
  info: [
    {
      name: 'Terms & Conditions',
      path: 'https://drive.google.com/file/d/1WgnbAN0rfbcewvMtAXZelDz0y4F9Ahh-/view?usp=sharing',
    },
    {
      name: 'Cookie Policy',
      path: 'https://drive.google.com/file/d/1BaZBusTblq8GmC361zt3TJhq0IPf3aEu/view?usp=sharing',
    },
    { name: 'Site Map', path: '' },
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
    <footer className="bg-[#1E64F0] text-white" aria-label="Footer">
      <motion.div
        className="px-[10%] py-16"
        initial={{ opacity: 1 }}
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
          <motion.section
            className="text-left max-w-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={itemVariants}
            aria-labelledby="footer-stay-connected"
          >
            <motion.h3
              id="footer-stay-connected"
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Stay Connected
            </motion.h3>
            <motion.div
              className="flex gap-6 text-2xl mb-6"
              variants={containerVariants}
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-black hover:text-gray-300 no-underline pr-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  variants={itemVariants}
                  whileHover="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  tabIndex={0}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.address
              className="not-italic space-y-2 text-base sm:text-lg md:text-xl lg:text-lg text-[#F5F5F5]"
              variants={itemVariants}
            >
              <a
                href="mailto:contact@teldev.org"
                className="block hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                contact@teldev.org
              </a>
              <a
                href="tel:+2349037562951"
                className="block hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                +234 903 756 2951
              </a>
              <a
                href="tel:+2347084036561"
                className="block hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                +234 708 403 6561
              </a>
            </motion.address>
          </motion.section>

          {/* Company */}
          <motion.nav
            className="text-left"
            variants={itemVariants}
            aria-labelledby="footer-company"
          >
            <motion.h3
              id="footer-company"
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Company
            </motion.h3>
            <motion.ul
              className="space-y-3 text-base list-none pl-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={containerVariants}
            >
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-white no-underline hover:underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>

          {/* Services */}
          <motion.nav
            className="text-left"
            variants={itemVariants}
            aria-labelledby="footer-services"
          >
            <motion.h3
              id="footer-services"
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              variants={itemVariants}
            >
              Services
            </motion.h3>
            <motion.ul
              className="space-y-3 text-base list-none pl-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={containerVariants}
            >
              {footerLinks.services.map((service, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={service.path}
                    className="text-white no-underline hover:underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </motion.div>
      </motion.div>

      {/* Footer bottom row */}
      <motion.div
        className="border-t border-white/70"
        initial={{ opacity: 1, y: 20 }}
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
          <motion.nav
            className="flex gap-6 text-sm"
            aria-label="Legal and site info links"
            variants={containerVariants}
          >
            {footerLinks.info.map((link, index) => (
              <motion.a
                key={index}
                href={link.path || '#'}
                className="text-white mr-3 hover:text-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                variants={itemVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                tabIndex={0}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
          <motion.p
            className="text-base text-[#F5F5F5]"
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
