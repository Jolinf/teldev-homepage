import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

const servicesLinks = [
  { path: '/Helpdesk', label: 'Helpdesk Support' },
  { path: '/Network', label: 'Network and infrastructure' },
  { path: '/WebDev', label: 'Applications and Website Management' },
  { path: '/Cloud', label: 'Cloud Services' },
  { path: '/ItConsulting', label: 'IT Consulting' },
  { path: '/AiAutomation', label: 'AI & Automation' },
];

const navVariants = {
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
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
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-[#1752c4] text-white px-3 py-1 rounded z-50"
      >
        Skip to main content
      </a>

      <motion.header
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-3 sm:px-4 py-0 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C6CFE]/95 shadow-xl backdrop-blur-md'
            : 'bg-[#1C6CFE]/80 shadow-md backdrop-blur-sm'
        }`}
        variants={shouldReduceMotion ? undefined : navVariants}
        initial="visible"
        animate="visible"
      >
        <nav
          className="w-full py-2.5 flex items-center gap-2 sm:gap-3"
          aria-label="Services navigation"
          role="navigation"
        >
          <Link
            to="/WhatWeOffer"
            className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/85 hover:text-[#1C6CFE] hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Go back to What We Offer"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </Link>

          {/* Desktop tab strip: equal-width tabs, active state is a solid
              block behind the whole tab (not a text-hugging pill and not
              an underline), so two-line labels never overlap or clip. */}
          <motion.ul
            className="hidden md:grid flex-1 grid-cols-5 gap-1.5 text-sm tracking-wide list-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial="hidden"
            animate="visible"
          >
            {servicesLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.li key={link.path} custom={i} variants={shouldReduceMotion ? {} : linkVariants}>
                  <Link
                    to={link.path}
                    className={`flex items-center justify-center text-center h-full min-h-[52px] no-underline transition-colors duration-200 px-2 py-2 rounded-lg leading-snug focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive
                        ? 'bg-white text-[#1C6CFE] font-semibold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
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
            className="md:hidden ml-auto text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
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
                className="fixed top-0 right-0 w-full h-screen bg-[#1C6CFE] z-50 md:hidden overflow-auto flex flex-col items-center justify-center gap-3 px-6"
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
                      className="w-full max-w-sm"
                    >
                      <Link
                        to={link.path}
                        className={`block text-center text-xl no-underline transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
                          isActive
                            ? 'bg-white text-[#1C6CFE] font-semibold'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
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
