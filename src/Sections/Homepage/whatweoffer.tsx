import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headset, Network, Code2, Cloud, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Helpdesk Support',
    icon: Headset,
    description: 'Fast, human help when something breaks, not a ticket queue.',
    items: ['24/7 technical assistance', 'Network configuration', 'Software installation'],
    link: '/Helpdesk',
    cta: 'Get support',
    featured: true,
  },
  {
    title: 'Network & Infrastructure',
    icon: Network,
    description: 'The foundation everything else runs on, monitored and maintained.',
    items: ['Advanced threat protection', 'Security audits', 'Data encryption'],
    link: '/Network',
    cta: 'See how it works',
  },
  {
    title: 'Application & Website Management',
    icon: Code2,
    description: 'Custom builds and ongoing upkeep for sites and apps that need to hold up.',
    items: ['Custom application development', 'Website design & development', 'Performance monitoring'],
    link: '/Webdev',
    cta: 'Start a project',
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Migrate, store, and scale without being tied to physical hardware.',
    items: ['Scalable cloud infrastructure', 'Data storage & backup', 'Seamless integration'],
    link: '/Cloud',
    cta: 'Explore cloud options',
  },
  {
    title: 'IT Consulting',
    icon: Lightbulb,
    description: 'A tech roadmap built around your business, not a generic playbook.',
    items: ['Technology strategy', 'System integration', 'Cost optimization'],
    link: '/ItConsulting',
    cta: 'Build a strategy',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

export default function WhatWeOffer() {
  return (
    <section
      aria-label="What We Offer"
      className="what-we-offer-section box-border px-[6%] sm:px-6 md:px-12 py-20 mb-[5%] text-white bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center mb-4 font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-center text-[#B0B0B0] max-w-2xl mx-auto mb-14 text-base sm:text-lg"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Five services, all visible here. No clicking through a carousel to find the one you need.
        </motion.p>

        {/* Bento-style grid: the first service gets more visual weight, the
            remaining four sit evenly below. All five are visible at once,
            replacing the previous single-slide carousel that hid 4 of 5
            services behind manual arrow clicks. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`group relative rounded-2xl border border-white/10 bg-[#0F1729] p-6 sm:p-7 flex flex-col transition-colors duration-300 hover:border-[#1C6CFE]/60 ${
                  service.featured ? 'lg:col-span-2 lg:row-span-2 lg:p-9' : ''
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-xl bg-[#1C6CFE]/10 text-[#1C6CFE] mb-5 ${
                    service.featured ? 'w-14 h-14' : 'w-12 h-12'
                  }`}
                >
                  <Icon size={service.featured ? 28 : 24} aria-hidden="true" />
                </div>

                <h3
                  className={`font-semibold mb-2 ${service.featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {service.title}
                </h3>

                <p className="text-[#B0B0B0] text-sm sm:text-base mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#F5F5F5]">
                      <span className="text-[#1C6CFE] mt-1" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="mt-auto inline-flex items-center gap-2 text-white font-medium no-underline group-hover:text-[#1C6CFE] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
                >
                  {service.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
