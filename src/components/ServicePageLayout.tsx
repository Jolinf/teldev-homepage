import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';
import useScrollToTopOnMount from '../Hooks/useScrollToTopOnMount';

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface ServicePageLayoutProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string[];
  features: ServiceFeature[];
  highlight: {
    title: string;
    paragraphs: string[];
  };
  closing: {
    title: string;
    paragraphs: string[];
  };
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

/**
 * Shared layout for all five service pages (Helpdesk, Network, Webdev, Cloud,
 * IT Consulting). Replaces the earlier breadcrumb/table-of-contents/prose
 * template with the icon-led card pattern already established on the
 * WhatWeOffer page (see src/Sections/services/services.tsx and
 * src/Sections/Homepage/whatweoffer.tsx): a hero with an icon badge, a grid
 * of feature cards, a highlighted callout for the "why this matters" point,
 * and a closing CTA banner. One shared template keeps all five pages
 * visually and structurally consistent instead of drifting independently.
 */
export default function ServicePageLayout({
  icon: Icon,
  eyebrow,
  title,
  intro,
  features,
  highlight,
  closing,
}: ServicePageLayoutProps) {
  useScrollToTopOnMount();
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section
        id="main-content"
        className="box-border px-4 sm:px-8 md:px-12 pt-40 pb-16 sm:pb-20"
        aria-label={`${title} introduction`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1C6CFE]/10 text-[#1C6CFE] mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={32} aria-hidden="true" />
          </motion.div>

          <motion.p
            className="uppercase tracking-widest text-sm text-[#1C6CFE] font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            {title}
          </motion.h1>

          {intro.map((para, i) => (
            <motion.p
              key={i}
              className="text-base sm:text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="px-4 sm:px-8 md:px-12 pb-16 sm:pb-20" aria-label={`${title} features`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="group rounded-2xl bg-[#0F1729] border border-white/10 p-7 sm:p-8 flex flex-col hover:border-[#1C6CFE]/60 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#1C6CFE]/10 text-[#1C6CFE] mb-5">
                  <FeatureIcon size={26} aria-hidden="true" />
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h2>
                {feature.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    className="text-[#D1D5DB] leading-relaxed mb-4 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
                {feature.list && (
                  <ul className="mt-4 space-y-2">
                    {feature.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#D1D5DB]">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1C6CFE] flex-shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Highlight / why this matters */}
      <section className="px-4 sm:px-8 md:px-12 pb-16 sm:pb-20">
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl border border-[#1C6CFE]/30 bg-[#1C6CFE]/10 p-8 sm:p-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1C6CFE]/20 text-[#1C6CFE] mb-5 mx-auto">
            <Sparkles size={22} aria-hidden="true" />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {highlight.title}
          </h2>
          {highlight.paragraphs.map((para, i) => (
            <p key={i} className="text-[#F5F5F5] leading-relaxed text-base sm:text-lg mb-4 last:mb-0 max-w-3xl mx-auto">
              {para}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Closing CTA */}
      <motion.section
        className="px-4 sm:px-8 md:px-12 pb-20 sm:pb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        aria-label="Call to action"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {closing.title}
          </h2>
          {closing.paragraphs.map((para, i) => (
            <p key={i} className="text-[#D1D5DB] leading-relaxed text-base sm:text-lg mb-8 last:mb-8 max-w-2xl mx-auto">
              {para}
            </p>
          ))}
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C6CFE] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-[#1752c4] transition-all duration-300 text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ContactUsPage')}
          >
            Talk to us
            <ArrowRight size={18} aria-hidden="true" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
