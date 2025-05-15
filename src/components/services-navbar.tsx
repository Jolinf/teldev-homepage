import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const servicesLinks = [
  { path: '/Helpdesk', label: 'Helpdesk Support' },
  { path: '/Network', label: 'Network and infrastructure' },
  { path: '/WebDev', label: 'Applications and Website Management' },
  { path: '/Cloud', label: 'Cloud Services' },
  { path: '/ItConsulting', label: 'IT Consulting' },
];

const navVariants = {
  visible: { opacity: 1, y: 0 },
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
    transition: { duration: 0.2 },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const ServicesNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-[#1C6CFE] text-white px-3 py-1 rounded z-50"
      >
        Skip to main content
      </a>

      <motion.header
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 py-0 rounded-[20px] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C6CFE]/90 shadow-xl backdrop-blur-md'
            : 'bg-[#1C6CFE]/70 shadow-md backdrop-blur-sm'
        }`}
        variants={shouldReduceMotion ? undefined : navVariants}
        initial="visible"
        animate="visible"
      >
        <nav
          className="w-full sm:px-6 lg:px-8 py-5 flex items-center justify-between m-auto"
          aria-label="Services navigation"
          role="navigation"
        >
          {/* Desktop Navigation Links */}
          <motion.ul
            className="hidden md:flex items-center justify-center space-x-[30px] text-sm tracking-wide list-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial="hidden"
            animate="visible"
            variants={shouldReduceMotion ? undefined : undefined}
          >
            <motion.li>
              <Link
                to="/WhatWeOffer"
                className="text-lg inline-block text-white no-underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="Go back to What We Offer"
              >
                ←
              </Link>
            </motion.li>
            {servicesLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.li
                  key={link.path}
                  custom={i}
                  variants={shouldReduceMotion ? {} : linkVariants}
                  whileHover={shouldReduceMotion ? {} : 'hover'}
                >
                  <Link
                    to={link.path}
                    className={`no-underline transition-colors duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive
                        ? 'text-white border-b-2 border-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                className="fixed top-0 right-0 w-full h-screen bg-[#1C6CFE] z-50 md:hidden overflow-auto flex flex-col items-center justify-center space-y-8 px-4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={shouldReduceMotion ? {} : mobileMenuVariants}
                role="menu"
                aria-label="Mobile services menu"
              >
                {servicesLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      custom={i}
                      variants={shouldReduceMotion ? {} : linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block text-2xl no-underline transition-colors duration-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white ${
                          isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                        }`}
                        onClick={closeMobileMenu}
                        aria-current={isActive ? 'page' : undefined}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default ServicesNavbar;
