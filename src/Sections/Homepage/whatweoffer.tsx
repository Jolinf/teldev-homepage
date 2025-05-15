import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ITsupport from '../../assets/homepage illustrations/Homepage-whatweoffer-helpdesk illustration.svg';
import cloud from '../../assets/homepage illustrations/Homepage-whatweoffer-cloudservices illustration.svg';
import network from '../../assets/homepage illustrations/Homepage-whatweoffer-Network&infrastructure illustration.svg';
import application from '../../assets/homepage illustrations/Homepage-whatweoffer-Application&webdev illustration.svg';
import consulting from '../../assets/homepage illustrations/Homepage-whatweoffer-ITConsulting illustration.svg';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const slideTransition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

const MotionLink = motion(Link);

export default function WhatWeOffer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      title: 'Helpdesk Support',
      image: ITsupport,
      items: ['24/7 Technical Assistance', 'Network Configuration', 'Software Installation'],
      link: '/Helpdesk',
    },
    {
      title: 'Network & Infrastructure',
      image: network,
      items: ['Advanced Threat Protection', 'Security Audits', 'Data Encryption'],
      link: '/Network',
    },
    {
      title: 'Application and Website Management',
      image: application,
      items: [
        'Custom Application Development',
        'Website Design & Development',
        'Performance monitoring & optimization',
        'CMS (Content Management System) Support',
      ],
      link: '/Webdev',
    },
    {
      title: 'Cloud Solutions',
      image: cloud,
      items: ['Scalable Cloud Infrastructure', 'Data Storage & Backup', 'Seamless Integration'],
      link: '/Cloud',
    },
    {
      title: 'IT Consulting',
      image: consulting,
      items: ['Technology Strategy', 'System Integration', 'Cost Optimization'],
      link: '/ItConsulting',
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideChange = (dir: number) => {
    if (dir > 0) nextSlide();
    else prevSlide();
  };

  return (
    <section
      aria-label="What We Offer"
      className="what-we-offer-section box-border px-[10%] py-20 mb-[5%] sm:px-6 md:px-12 text-white bg-[#0A0A0A]"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-center mb-10 font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          tabIndex={-1} // for screen readers to jump here if needed
        >
          What We Offer
        </motion.h2>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg shadow-lg bg-[#0F1729]"
              aria-roledescription="slide"
              aria-label={`${slides[currentSlide].title} service`}
            >
              <motion.div
                className="w-full md:w-1/2 p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={`${slides[currentSlide].title} illustration`}
                  className="w-full h-auto rounded-lg object-contain transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 text-left mt-6 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3
                  className="mb-6 text-2xl font-semibold text-[#1C6CFE] sm:text-3xl"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slides[currentSlide].title}
                </h3>
                <ul
                  className="list-disc list-inside space-y-4 text-lg font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {slides[currentSlide].items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3" aria-label={item}>
                      <span className="text-[#1C6CFE] text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <MotionLink
                  to={slides[currentSlide].link}
                  className="inline-block mt-8 text-[#FFFFFF] hover:text-[#1C6CFE] text-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  aria-label={`Learn more about ${slides[currentSlide].title}`}
                >
                  Learn More →
                </MotionLink>
              </motion.div>
            </motion.article>
          </AnimatePresence>

          <nav
            aria-label="What We Offer carousel navigation"
            className="flex justify-end gap-4 mt-10"
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleSlideChange(-1);
              }}
              className="bg-[#1C6CFE] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-300 hover:bg-[#0F1729] focus:outline-none focus:ring-4 focus:ring-[#1C6CFE]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous Slide"
              type="button"
            >
              ←
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleSlideChange(1);
              }}
              className="bg-[#1C6CFE] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-300 hover:bg-[#0F1729] focus:outline-none focus:ring-4 focus:ring-[#1C6CFE]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next Slide"
              type="button"
            >
              →
            </motion.button>
          </nav>
        </div>
      </motion.div>
    </section>
  );
}
