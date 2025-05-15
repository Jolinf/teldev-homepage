import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
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
    backgroundColor: '#FFFFFF',
    color: '#0F1729',
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.7)', // Added subtle glow for better feedback
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export default function CTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="py-20 px-4 sm:px-8 md:px-12 bg-[#050505] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      aria-label="Call to Action section"
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
        <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-5xl mx-auto relative z-10" variants={containerVariants}>
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-[#FFFFFF] leading-tight mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={textVariants}
          tabIndex={-1} // Focusable programmatically for screen readers if needed
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg md:text-xl text-[#E5E7EB] leading-relaxed font-normal mt-6 mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={textVariants}
        >
          Let&apos;s discuss how our services can help you achieve your goals. Contact us today for
          a<strong> free consultation.</strong>
        </motion.p>

        <motion.div className="flex justify-center gap-4 sm:gap-6" variants={containerVariants}>
          <motion.button
            className="px-8 py-4 bg-[#0F1729] border-0 text-white font-semibold rounded-lg text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-[#1C6CFE] focus:ring-opacity-75 transition-shadow"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              navigate('/contactUsPage');
            }}
            aria-label="Get started with TELDEV Technologies - contact us"
          >
            Get started
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
