import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    backgroundColor: '#FFFFFF',
    color: '#0F1729',
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export default function Homepagequote2() {
  const navigate = useNavigate();

  return (
    <motion.section
      aria-labelledby="quote2-heading"
      className="py-20 px-6 sm:px-8 md:px-16 bg-[#050505] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Decorative Circles */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-3xl mx-auto relative z-10" variants={quoteVariants}>
        <blockquote
          className="text-center text-white italic leading-relaxed text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          At Teldev, we don’t just offer solutions — <strong>we build partnerships</strong> to help
          your business thrive.
        </blockquote>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            type="button"
            className="px-8 py-4 bg-[#1C6CFE] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-[#1C6CFE]/60 transition-all duration-300 text-base sm:text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/Whoweare')}
            aria-label="Discover more about Teldev"
          >
            Discover More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
