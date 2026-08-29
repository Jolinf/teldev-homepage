import { motion } from 'framer-motion';

/**
 * "Where we are going" — the five strategic pillars from the TELDEV Statement
 * of Intent, plus the continental horizon behind them. The site previously
 * described only the first pillar (digital transformation / IT services),
 * which left the company looking like an IT support vendor rather than the
 * business the Statement of Intent actually describes.
 */
const pillars = [
  {
    number: '01',
    title: 'Digital Transformation',
    body: "We help businesses and organizations modernize the way they operate: technology services, websites, cloud solutions, infrastructure, Microsoft 365 and the business systems that hold the day together. Our initial focus is small and medium-sized businesses building a stronger digital presence, beginning with website development and expanding into broader technology solutions as their needs develop. The objective is not to hand a business technology. It is to help it perform better.",
  },
  {
    number: '02',
    title: 'Artificial Intelligence and Automation',
    body: "Many organizations still perform repetitive, time-consuming tasks by hand. We help identify where that is happening and implement solutions that reduce repetitive work, improve operational efficiency and consistency, remove unnecessary cost, and free people to spend their time on work that actually needs them. Automation is not a side offering here; it is a core part of how we think technology should make work easier.",
  },
  {
    number: '03',
    title: 'Technology Education and Digital Empowerment',
    body: "Access to technology is incomplete without the knowledge to use it. Through training, awareness, demonstrations and partnerships, we work to support individuals, students, businesses and institutions that have had limited exposure to modern technology, including those facing barriers of funding, location, infrastructure or opportunity. The goal is not only to provide technology, but to leave people able to use it.",
  },
  {
    number: '04',
    title: 'Software and Technological Innovation',
    body: "TELDEV will not remain solely a services company. We intend to develop and support technology of our own: software applications, digital platforms, services and products built to solve real problems, alongside strategic partnerships with existing platforms and providers whose capabilities align with ours. The objective is to contribute to technological innovation rather than simply consume it.",
  },
  {
    number: '05',
    title: 'Partnerships and Community Impact',
    body: "Technological advancement does not happen in isolation. Partnerships with educational institutions, student organizations, businesses, technology providers and community organizations let us introduce technology to new audiences, provide education and training, identify real technological needs, and support communities that would otherwise have limited access. This part of our strategy is both commercially and socially important to us.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Ambition() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#0A0A0A] px-4 sm:px-8 md:px-12 py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      aria-labelledby="ambition-heading"
    >
      {/* Background decorative elements, matching the other About sections */}
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

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={containerVariants}>
        <motion.h2
          id="ambition-heading"
          className="text-[#FFFFFF] text-4xl md:text-5xl font-bold text-center mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={cardVariants}
        >
          Where We Are Going
        </motion.h2>

        <motion.p
          className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-14"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={cardVariants}
        >
          Our strategy rests on five pillars. They are not ranked; each is an integral part of the
          same long-term direction. Our starting point is Nigeria, and the intention is to take the
          knowledge, systems and solutions developed here and extend their impact across Africa.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.number}
              variants={cardVariants}
              className={`rounded-2xl bg-[#0F1729] border border-[#1C6CFE]/20 p-7 sm:p-8 hover:border-[#1C6CFE]/60 transition-colors duration-300 ${
                i === pillars.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <span
                className="block text-[#1C6CFE] font-bold text-sm tracking-widest mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-hidden="true"
              >
                {pillar.number}
              </span>
              <h3
                className="text-[#FFFFFF] text-xl sm:text-2xl font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-[#D1D5DB] text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="text-[#F5F5F5] text-lg sm:text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto mt-14 font-semibold"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={cardVariants}
        >
          If the technology we introduce makes someone&rsquo;s work easier, creates an opportunity,
          solves a meaningful problem or produces measurable value, then we are moving in the right
          direction.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
