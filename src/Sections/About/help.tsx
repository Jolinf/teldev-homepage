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

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    x: 5,
    color: '#1C6CFE',
    transition: {
      duration: 0.2,
    },
  },
};

export default function HowWeHelp() {
  return (
    <motion.section
      className="box-border bg-black text-[#FFFFFF] text-left px-[10%] pb-[8%] relative overflow-hidden"
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

      <motion.div className="max-w-7xl mx-auto relative z-10" variants={containerVariants}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How We Help
        </motion.h2>

        <motion.div className="max-w-4xl space-y-8" variants={containerVariants}>
          <motion.p
            className="text-[1.3em] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={textVariants}
          >
            At TELDEV Technologies, our goal is simple: to make technology work for you. Whether
            you're running a small business, managing a growing team, or just need help navigating
            the digital world, we provide customized IT support and solutions designed to meet you
            where you are.
          </motion.p>

          <motion.p
            className="text-[1.3em] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={textVariants}
          >
            From day-to-day troubleshooting and secure system setups to IT consulting, email
            support, and digital transformation strategies, we equip you with the tools and
            expertise you need to stay productive, protected, and ahead of the curve.
          </motion.p>

          <motion.p
            className="text-[1.3em] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={textVariants}
          >
            We're not just here to fix problems—we're here to guide, empower, and grow with you.
          </motion.p>

          <motion.div className="flex justify-start" variants={textVariants}>
            <motion.a
              href="#"
              className="text-[1.3em] no-underline hover:text-[#1C6CFE] transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={linkVariants}
              whileHover="hover"
            >
              See what we offer →
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
