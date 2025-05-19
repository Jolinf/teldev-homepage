// src/sections/Hero.tsx
import heroImage from '../../assets/boliviainteligente-dCvqMHRUIhY-unsplash.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 h-full w-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/70 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-[85rem] px-6 mt-24 sm:mt-32 lg:mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight pb-25"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Latest <span className="text-[#1C6CFE]">Tech</span> Insights
        </motion.h1>
      </motion.div>
    </section>
  );
}
