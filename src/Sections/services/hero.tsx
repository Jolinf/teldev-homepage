import { motion } from 'framer-motion';

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

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
};

export default function ServicesHero() {
  return (
    <motion.section
      className="box-border py-30 px-4 sm:px-8 md:px-12 bg-[#0A0A0A] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border-2 border-[#1C6CFE] rounded-full" />
      </motion.div>

      <motion.div className="max-w-5xl mx-auto relative z-10" variants={containerVariants}>
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-tight mb-8"
          variants={textVariants}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Technology that works for you
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed font-normal mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={paragraphVariants}
        >
          At TELDEV Technologies, we offer more than just technical support—we deliver customized
          solutions designed to make technology work for you. Whether you're running a small
          business, managing a growing team, or flying solo, our services are built to meet your
          needs, your pace, and your goals. From everyday IT support to long-term strategy and
          systems that scale, we partner with you to simplify the complex, secure what matters, and
          set you up for long-term success. Here's how we help you make technology your advantage.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
