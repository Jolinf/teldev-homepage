import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function WhatWeOffer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      title: 'Helpdesk Support',
      image: ITsupport,
      items: ['24/7 Technical Assistance', 'Network Configuration', 'Software Installation'],
      link: '/teldev-homepage/Helpdesk',
    },
    {
      title: 'Network & Infrastructure',
      image: network,
      items: ['Advanced Threat Protection', 'Security Audits', 'Data Encryption'],
      link: '/teldev-homepage/Network',
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
      link: '/teldev-homepage/Webdev',
    },
    {
      title: 'Cloud Solutions',
      image: cloud,
      items: ['Scalable Cloud Infrastructure', 'Data Storage & Backup', 'Seamless Integration'],
      link: '/teldev-homepage/Cloud',
    },
    {
      title: 'IT Consulting',
      image: consulting,
      items: ['Technology Strategy', 'System Integration', 'Cost Optimization'],
      link: '/teldev-homepage/ItConsulting',
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

  const handleSlideChange = (direction: number) => {
    // Prevent any default behavior
    if (direction > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="what-we-offer-section box-border px-[10%] py-20 mb-[5%] sm:px-8 text-[#FFFFFF] bg-[#0A0A0A]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold text-center mb-[40px] text-base sm:text-lg md:text-xl lg:text-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="flex-shrink-0 w-full h-auto rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 bg-[#0F1729]"
            >
              <motion.div
                className="w-full md:w-1/2 p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-auto rounded-lg object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 text-left mt-[3%]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h2
                  className="text-xl font-medium text-[#1C6CFE] text-[1.5em] text-left mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.ul
                  className="list-none list-inside text-[1.5em] font-regular text-left p-[0] space-y-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {slides[currentSlide].items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-left flex items-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <span className="text-[#1C6CFE]">•</span> {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.a
                  href={slides[currentSlide].link}
                  className="inline-block mt-8 text-[#FFFFFF] hover:text-[#1C6CFE] text-left no-underline transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Learn More →
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-end m-8 gap-4">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleSlideChange(-1);
              }}
              className="bg-[#1C6CFE] border-0 text-white p-3 shadow-lg hover:bg-[#0F1729] transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleSlideChange(1);
              }}
              className="bg-[#1C6CFE] border-0 text-white p-3 shadow-lg hover:bg-[#0F1729] transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
