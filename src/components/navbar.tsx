import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/teldev-logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/whoweare', label: 'Who we are' },
  { path: '/whatweoffer', label: 'What we do' },
  { path: '/blog', label: 'Blog' },
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      style={{ width: 'calc(100% - 17px)' }}
      className={`bg-[#0A0A0A] fixed z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A] shadow-lg' : 'bg-[#0A0A0A]/90'
      }`}
      variants={navVariants}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <motion.img
              src="/src/assets/teldev logo.svg"
              alt="Teldev Logo"
              className="h-8 w-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.ul
          className="hidden md:flex items-center space-x-[30px] text-sm tracking-wide list-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, i) => (
            <motion.li key={link.path} custom={i} variants={linkVariants}>
              <Link
                to={link.path}
                className={`no-underline transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#1C6CFE] border-b border-[#1C6CFE]'
                    : 'text-[#FFFFFF] hover:text-[#1C6CFE]'
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact Button */}
        <motion.div
          className="hidden md:flex justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

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
              className="fixed top-0 right-0 w-full h-screen bg-[#0A0A0A] z-50 md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, i) => (
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
                          ? 'text-[#1C6CFE]'
                          : 'text-[#FFFFFF] hover:text-[#1C6CFE]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="px-8 py-4 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
