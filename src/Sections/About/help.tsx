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
      aria-labelledby="how-we-help-title"
      className="box-border bg-black text-white text-left px-[10%] py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      role="region"
    >
      {/* Background Decorative Elements */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
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
          id="how-we-help-title"
          className="text-4xl md:text-5xl font-extrabold mb-8 font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How We Help
        </motion.h2>

        <motion.div className="max-w-4xl space-y-8" variants={containerVariants}>
          {[
            `At TELDEV Technologies, our goal is simple: to make technology work for you. Whether
             you're running a small business, managing a growing team, or just need help navigating
             the digital world, we provide customized IT support and solutions designed to meet you
             where you are.`,
            `From day-to-day troubleshooting and secure system setups to IT consulting, email
             support, and digital transformation strategies, we equip you with the tools and
             expertise you need to stay productive, protected, and ahead of the curve.`,
            `We're not just here to fix problems—we're here to guide, empower, and grow with you.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed font-inter"
              variants={textVariants}
            >
              {text}
            </motion.p>
          ))}

          <motion.div className="flex justify-start" variants={textVariants}>
            <motion.a
              href="#services"
              role="button"
              tabIndex={0}
              aria-label="See what TELDEV Technologies offers"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter no-underline text-[#F5F5F5] hover:text-[#1C6CFE] focus:text-[#1C6CFE] focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded transition-colors duration-300"
              variants={linkVariants}
              whileHover="hover"
              whileFocus="hover"
            >
              See what we offer →
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
