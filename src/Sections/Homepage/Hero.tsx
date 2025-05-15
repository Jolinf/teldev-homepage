// src/sections/Hero.tsx
import heroImage from '../../assets/Homepage-images/Homepage-herosection image.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-[85rem] px-6 mt-24 sm:mt-32 lg:mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bringing Technology to <span className="text-[#1C6CFE]">You</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[#F5F5F5] max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed font-medium mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Delivering innovative software solutions, IT consulting, and cybersecurity to help your
          business thrive in a digital world.
        </motion.p>

        {/* Call-to-Actions */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-[#1C6CFE] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-[#1752c4] transition-all duration-300 text-base sm:text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ContactUsPage')}
          >
            Get Started
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0F1729] transition-all duration-300 text-base sm:text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Whoweare')}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
