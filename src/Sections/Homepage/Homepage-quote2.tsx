import { motion } from 'framer-motion';

const quoteVariants = {
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
      delay: 0.3,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: '#FFFFFF',
    color: '#0F1729',
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

export default function Homepagequote2() {
  return (
    <motion.section
      className="py-[5%] px-[10%] bg-[#050505] sm:px-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-4xl mx-auto relative z-10" variants={quoteVariants}>
        <motion.blockquote
          className="w-full sm:w-[60%] text-[1.2em] sm:text-[1.4em] text-[#FFFFFF] italic max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Teldev, we don't just offer solutions — we build partnerships to help your business
          thrive.
        </motion.blockquote>

        <motion.div className="flex justify-center gap-4 sm:gap-6" variants={buttonVariants}>
          <motion.button
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition-all duration-300 text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover="hover"
            whileTap="tap"
          >
            Discover more
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
