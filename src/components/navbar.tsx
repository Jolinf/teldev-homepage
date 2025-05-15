import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/teldev logo.svg';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change (desktop or mobile)
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (prev) {
        menuButtonRef.current?.focus();
      }
      return !prev;
    });
  };

  return (
    <motion.header
      className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 py-0 rounded-[20px] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 shadow-xl backdrop-blur-md'
          : 'bg-[#0A0A0A]/70 shadow-md backdrop-blur-sm'
      }`}
      variants={navVariants}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" aria-label="Go to home page">
            <motion.img
              src={logo}
              alt="Teldev logo"
              className="h-8 w-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              tabIndex={-1}
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
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.li key={link.path} custom={i} variants={linkVariants}>
                <Link
                  to={link.path}
                  className={`no-underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded ${
                    isActive
                      ? 'text-[#1C6CFE] border-b-2 border-[#1C6CFE]'
                      : 'text-[#FFFFFF] hover:text-[#1C6CFE] focus:text-[#1C6CFE]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Contact Button */}
        <motion.div
          className="hidden md:flex justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-4 bg-[#0F1729] border-0 text-[#FFFFFF] font-medium rounded-[10px] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1C6CFE]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate('/contactuspage');
            }}
            aria-label="Contact us"
            tabIndex={0}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          ref={menuButtonRef}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1C6CFE]"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={0}
        >
          {isMobileMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="fixed top-0 right-0 w-full h-screen bg-[#0A0A0A] z-50 md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  // trap focus inside mobile menu if needed - could enhance further with a library or custom code
                  // (not implemented here for brevity)
                }
              }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl no-underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded ${
                          isActive
                            ? 'text-[#1C6CFE]'
                            : 'text-[#FFFFFF] hover:text-[#1C6CFE] focus:text-[#1C6CFE]'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                        tabIndex={0}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.button
                  className="px-8 py-4 bg-[#0F1729] border-0 text-[#FFFFFF] font-medium rounded-[10px] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-base focus:outline-none focus:ring-2 focus:ring-[#1C6CFE]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate('/contactuspage');
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Contact us"
                  tabIndex={0}
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
