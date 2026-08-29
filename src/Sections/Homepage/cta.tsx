import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Closing call to action for the homepage, placed directly after What We
 * Offer. The six service cards each send visitors to a specific page; this
 * section catches the visitor who does not yet know which of the six their
 * problem belongs to, and gives the page a single ending action instead of
 * running out into the footer. It reuses the bordered blue panel already
 * established by the "why this matters" callout on the service pages.
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function HomepageCTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="bg-[#0A0A0A] px-4 sm:px-8 md:px-12 pb-20 sm:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      aria-labelledby="homepage-cta-heading"
    >
      <div className="max-w-5xl mx-auto rounded-2xl border border-[#1C6CFE]/30 bg-[#1C6CFE]/10 px-6 py-12 sm:px-12 sm:py-16 text-center">
        <motion.h2
          id="homepage-cta-heading"
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={fadeUp}
        >
          Not sure which one you need?
        </motion.h2>

        <motion.p
          className="text-[#F5F5F5] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={fadeUp}
        >
          Most people arrive with a problem rather than a service name: work that takes far longer
          than it should, a system that keeps breaking, a tool nobody trusts, a process that lives
          in one person&rsquo;s head.
        </motion.p>

        <motion.p
          className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={fadeUp}
        >
          Tell us what is slowing the business down and we will tell you what would actually fix it,
          what it would realistically take, and where the cheaper answer is simply to change how
          something is done. No jargon, no obligation.
        </motion.p>

        <motion.button
          type="button"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1752c4] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-[#123f8f] transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/ContactUsPage')}
        >
          Contact us
          <ArrowRight size={18} aria-hidden="true" />
        </motion.button>
      </div>
    </motion.section>
  );
}
