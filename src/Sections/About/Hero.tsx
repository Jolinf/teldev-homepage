import { motion } from 'framer-motion';
// import Image from 'next/image'; // Uncomment if using Next.js
import heroIllustration from '../../assets/whoweare illustrations/Whoweare-herosection-img.svg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export default function AboutHero() {
  return (
    <motion.section
      className="box-border bg-black text-white px-[10%] py-20 min-h-screen flex items-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      aria-label="About TELDEV Technologies - Customer-centric solutions"
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-[10%] items-center w-full max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
      >
        {/* Illustration */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={imageVariants}
          tabIndex={0} // Make focusable for keyboard users
          aria-label="Illustration representing customer-centric solutions"
        >
          {/* Use <Image> from next/image for optimized loading if possible */}
          <motion.img
            src={heroIllustration}
            alt="Customer-centric solutions illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(28,108,254,0.5)' }}
            whileFocus={{ scale: 1.05, boxShadow: '0 10px 20px rgba(28,108,254,0.5)' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-left md:text-left self-end space-y-6"
          variants={textVariants}
          tabIndex={-1}
        >
          <motion.h1
            className="text-white text-4xl md:text-6xl font-extrabold leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Customer-centric
            <br />
            <span
              className="text-[#1C6CFE]"
              style={{
                textShadow: '0 0 5px rgba(28,108,254,0.7)',
                fontWeight: '900',
              }}
            >
              solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-[#F5F5F5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From troubleshooting to consulting, TELDEV is dedicated to making technology work for
            you—effectively, affordably, and with a personal touch.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
