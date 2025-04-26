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

const authorVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Homepagequote1() {
  return (
    <motion.section
      className="py-[5%] px-[10%] bg-[#050505] sm:px-[60px] md:px-[80px] lg:px-[100px] relative overflow-hidden"
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
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-4xl mx-auto relative z-10" variants={quoteVariants}>
        <motion.blockquote
          className="w-full md:w-[60%] text-base sm:text-lg md:text-xl text-[#FFFFFF] italic max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Technology is nothing. What's important is that you have faith in people, that they're
          basically good and smart, and if you give them tools, they'll do wonderful things with
          them."
        </motion.blockquote>

        <motion.div className="flex items-center justify-center gap-4" variants={authorVariants}>
          <motion.div
            className="w-1 h-8 bg-[#1C6CFE]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.span
            className="block font-semibold text-[#1C6CFE] text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Steve Jobs
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
