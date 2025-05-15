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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: '0 0 15px rgba(28,108,254,0.6)',
    transition: {
      duration: 0.3,
    },
  },
  focus: {
    scale: 1.03,
    boxShadow: '0 0 15px rgba(28,108,254,0.8)',
    transition: {
      duration: 0.3,
    },
  },
};

export default function Mission() {
  return (
    <motion.section
      className="box-border bg-black text-white px-[10%] py-20 flex flex-col md:flex-row items-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      aria-label="Mission and Vision Section"
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[10%] w-full max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
      >
        {/* Vision Card */}
        <motion.article
          tabIndex={0}
          role="region"
          aria-labelledby="vision-heading"
          className="p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1C6CFE]/70"
          variants={cardVariants}
          whileHover="hover"
          whileFocus="focus"
        >
          <motion.h2
            id="vision-heading"
            className="flex items-center text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span
              aria-hidden="true"
              className="inline-block w-8 h-8 mr-4 bg-[#1C6CFE] rounded-full"
            />
            Our Vision
          </motion.h2>
          <motion.div className="w-16 h-1 mb-6 bg-[#1C6CFE] rounded" aria-hidden="true" />
          <motion.p
            className="text-[#E0E0E0] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            To be a trusted leader in technology support and innovation, empowering individuals and
            businesses through accessible, customer-focused IT solutions that drive growth,
            efficiency, and digital confidence.
          </motion.p>
        </motion.article>

        {/* Mission Card */}
        <motion.article
          tabIndex={0}
          role="region"
          aria-labelledby="mission-heading"
          className="p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1C6CFE]/70"
          variants={cardVariants}
          whileHover="hover"
          whileFocus="focus"
        >
          <motion.h2
            id="mission-heading"
            className="flex items-center text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span
              aria-hidden="true"
              className="inline-block w-8 h-8 mr-4 bg-[#1C6CFE] rounded-full"
            />
            Our Mission
          </motion.h2>
          <motion.div className="w-16 h-1 mb-6 bg-[#1C6CFE] rounded" aria-hidden="true" />
          <motion.p
            className="text-[#E0E0E0] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions. We are dedicated to providing expert guidance, responsive
            service, and innovative tools that help our clients navigate and thrive in a rapidly
            evolving digital world.
          </motion.p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
