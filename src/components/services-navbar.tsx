import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/teldev-logo.png';

const servicesLinks = [
  { path: '/Helpdesk', label: 'Helpdesk Support' },
  { path: '/Network', label: 'Network and infrastructure' },
  { path: '/WebDev', label: 'Applications and Website Management' },
  { path: '/Cloud', label: 'Cloud Services' },
  { path: '/ItConsulting', label: 'IT Consulting' },
];

const navVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const ServicesNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 py-0 rounded-[20px] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C6CFE]/90 shadow-xl backdrop-blur-md'
          : 'bg-[#1C6CFE]/70 shadow-md backdrop-blur-sm'
      }`}
      variants={navVariants}
    >
      <nav className="w-full sm:px-6 lg:px-8 py-5 flex items-center justify-between m-auto">
        {/* Desktop Navigation Links */}

        <motion.ul
          className="hidden md:flex items-center justify-center space-x-[30px] text-sm tracking-wide list-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial="hidden"
          animate="visible"
        >
          <motion.li>
            <Link
              to="/WhatWeOffer"
              className="text-lg inline-block text-[#FFFFFF] text-left no-underline transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ←
            </Link>
          </motion.li>
          {servicesLinks.map((link, i) => (
            <motion.li key={link.path} custom={i} variants={linkVariants}>
              <Link
                to={link.path}
                className={`no-underline transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#FFFFFF] border-b border-[#FFFFFF]'
                    : 'text-[#FFFFFF]/80 hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 w-full h-screen bg-[#1C6CFE] z-50 md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {servicesLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl no-underline transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-[#FFFFFF]'
                          : 'text-[#FFFFFF]/80 hover:text-[#FFFFFF]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default ServicesNavbar;
