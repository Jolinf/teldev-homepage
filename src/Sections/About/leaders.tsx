import { motion } from 'framer-motion';
// import Image from 'next/image'; // Or use <img> if not using Next.js
import leader1 from '../../assets/whoweare-images/leader-placeholder.png'; // Replace with actual image path

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
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Leaders() {
  return (
    <motion.section
      className="box-border bg-black text-white px-[10%] py-20 min-h-screen flex flex-col items-center gap-16 relative overflow-hidden"
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

      <motion.h2
        className="text-[#FFFFFF] text-4xl md:text-5xl font-bold text-center"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Leaders
      </motion.h2>

      <motion.div className="w-full max-w-7xl mx-auto space-y-16" variants={containerVariants}>
        {/* CEO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={leader1}
              alt="CEO - Joshua Ulinfun"
              className="w-full max-w-md rounded-xl shadow-xl"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-6" variants={textVariants}>
            <motion.h1
              className="text-[#FFFFFF] text-3xl md:text-5xl font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              If it's not broken, don't fix it.
            </motion.h1>
            <motion.p
              className="text-[#F5F5F5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              - Joshua Ulinfun, CEO/CO-Founder
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="md:order-2 flex justify-center md:justify-end"
            variants={imageVariants}
          >
            <motion.img
              src={leader1}
              alt="CTO"
              className="w-full max-w-md rounded-xl shadow-xl"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="md:order-1 text-left space-y-6" variants={textVariants}>
            <motion.h1
              className="text-[#FFFFFF] text-3xl md:text-5xl font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              If it's not broken, don't fix it.
            </motion.h1>
            <motion.p
              className="text-[#F5F5F5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              - Olutunde Solabi, CTO/CO-Founder
            </motion.p>
          </motion.div>
        </motion.div>

        {/* COO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-[#0A0A0A] border border-[#1C6CFE]/20 shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="flex justify-center md:justify-start" variants={imageVariants}>
            <motion.img
              src={leader1}
              alt="COO - Kayode Ojedele"
              className="w-full max-w-md rounded-xl shadow-xl"
              whileHover="hover"
            />
          </motion.div>

          <motion.div className="text-left space-y-6" variants={textVariants}>
            <motion.h1
              className="text-[#FFFFFF] text-3xl md:text-5xl font-bold leading-snug"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              If it's not broken, don't fix it.
            </motion.h1>
            <motion.p
              className="text-[#F5F5F5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              - Kayode Ojedele, COO/CO-Founder
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
