import { motion } from 'framer-motion';

const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const authorVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.5, ease: 'easeOut' },
  },
};

export default function Homepagequote1() {
  return (
    <motion.section
      className="py-24 px-[10%] bg-[#050505] sm:px-[60px] md:px-[80px] lg:px-[100px] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-36 h-36 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-0 w-36 h-36 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-5xl mx-auto relative z-10" variants={quoteVariants}>
        <motion.blockquote
          className="w-full md:w-[70%] mx-auto mb-10 text-white italic font-semibold text-2xl sm:text-3xl md:text-4xl leading-relaxed tracking-wide"
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

        <motion.div
          className="flex items-center justify-center gap-6"
          variants={authorVariants}
          style={{ letterSpacing: '0.05em' }}
        >
          <motion.div
            className="w-1 h-10 bg-[#1C6CFE]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.span
            className="block text-[#1C6CFE] font-semibold text-xl sm:text-2xl"
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
