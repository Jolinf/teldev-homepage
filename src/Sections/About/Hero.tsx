import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function AboutHero() {
  return (
    <motion.section
      className="box-border bg-black text-white px-4 sm:px-8 md:px-12 py-24 sm:py-32 min-h-[70vh] flex items-center relative overflow-hidden"
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

      {/* Typography-led hero: no illustration. The headline and copy carry
          the section instead, consistent with the same treatment used on
          the homepage's What We Offer rebuild. */}
      <motion.div className="max-w-3xl relative z-10" variants={textVariants}>
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold leading-snug mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Customer-centric
          <br />
          <span className="text-[#1C6CFE]">solutions</span>
        </motion.h1>

        <motion.p
          className="text-[#F5F5F5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From troubleshooting to consulting, TELDEV is dedicated to making technology work for
          you: effectively, affordably, and with a personal touch.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
