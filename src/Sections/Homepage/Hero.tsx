// src/sections/Hero.tsx
import heroImage from '../../assets/Homepage-images/Homepage-herosection image.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="box-border relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
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
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bringing Technology to <span className="text-[#1C6CFE]">You</span>
        </motion.h1>

        <motion.p
          className="text-white w-full sm:w-[70%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Delivering innovative software solutions, IT consulting, and cybersecurity to help your
          business thrive in a digital world.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 sm:px-12 py-4 sm:py-5 bg-[#1C6CFE] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#0F1729] hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started
          </motion.button>

          <motion.button
            className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0F1729] text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
