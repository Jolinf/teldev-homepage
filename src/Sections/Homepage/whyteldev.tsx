// src/sections/WhyTeldev.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Sample image imports — replace these with your actual image paths
import expertiseImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-expertise image.jpg';
import innovationImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-innovation image.jpg';
import securityImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-security image.jpg';
import scalabilityImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-Scalability image.jpg';
import supportImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-ongoing support image.jpg';
import performanceImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-performance image.jpg';
import customerImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-custome centric image.jpg';

const cards = [
  { title: 'Expertise', img: expertiseImg },
  { title: 'Innovation', img: innovationImg },
  { title: 'Security', img: securityImg },
  { title: 'Scalability', img: scalabilityImg },
  { title: 'Ongoing Support', img: supportImg },
  { title: 'Performance', img: performanceImg },
  { title: 'Customer-Centric Approach', img: customerImg },
  { title: 'Adaptability', img: supportImg },
];

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
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function WhyTeldev() {
  return (
    <section className="mb-[5%] px-[10%] justify-center bg-[#0A0A0A] text-[#FFFFFF] py-20 sm:px-6 md:px-8">
      <motion.h2
        className="text-center text-[1.8em] sm:text-[2em] text-3xl md:text-4xl lg:text-5xl font-semibold mb-[40px]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why <span className="text-[#1C6CFE]">us</span>? Why{' '}
        <span className="text-[#1C6CFE]">Teldev</span>?
      </motion.h2>

      <motion.div
        className="grid gap-6 grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-[1em] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 h-[90%] sm:h-[350px] md:h-[] p-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className={`w-full h-full object-cover rounded-[1em] transition-transform duration-500 group-hover:scale-110 `}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[1em]" /> */}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <h3
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-left"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
