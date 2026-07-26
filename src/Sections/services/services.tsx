import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headset, Network, Code2, Cloud, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Helpdesk Support',
    icon: Headset,
    description:
      "Your first stop for swift and reliable IT help. From device issues to email setup, we offer step-by-step guidance to keep your business running smoothly — we're here to troubleshoot, resolve, and support every step of the way.",
    link: '/Helpdesk',
    cta: 'Get support',
  },
  {
    title: 'Network & Infrastructure',
    icon: Network,
    description:
      'Strong infrastructure is the backbone of a modern business. We design, monitor, and secure your network for maximum uptime and performance, from initial setup through ongoing maintenance.',
    link: '/Network',
    cta: 'See how it works',
  },
  {
    title: 'Application and Website Development',
    icon: Code2,
    description:
      "We build and manage applications and websites tailored to your goals — development, optimization, and everything in between — so your online presence stays fast, functional, and secure.",
    link: '/Webdev',
    cta: 'Start a project',
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    description:
      'Scalable cloud solutions for businesses of any size, including migration, ongoing management, and optimization — built around your budget, not a one-size-fits-all plan.',
    link: '/Cloud',
    cta: 'Explore cloud options',
  },
  {
    title: 'IT Consulting',
    icon: Lightbulb,
    description:
      "Make smarter tech decisions with expert advice that aligns your business goals with the right technology — integration, strategy, or cost-saving, guided toward results that matter.",
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

export default function Services() {
  return (
    <section className="box-border bg-black text-white px-4 sm:px-8 md:px-12 py-12 sm:py-20">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-14"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="group rounded-2xl bg-[#0F1729] border border-white/10 p-7 sm:p-8 flex flex-col hover:border-[#1C6CFE]/60 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#1C6CFE]/10 text-[#1C6CFE] mb-5">
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[#D1D5DB] leading-relaxed mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="mt-auto inline-flex items-center gap-2 text-white font-medium no-underline group-hover:text-[#1C6CFE] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                {service.cta}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
