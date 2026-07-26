import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollToTopOnMount from '../Hooks/useScrollToTopOnMount';

export interface ServiceSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface ServicePageLayoutProps {
  breadcrumbLabel: string;
  title: string;
  intro: string[];
  sections: ServiceSection[];
  closing: {
    title: string;
    paragraphs: string[];
  };
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

/**
 * Shared layout for all five service pages (Helpdesk, Network, Webdev, Cloud,
 * IT Consulting). Previously each page was a separate, hand-edited file with
 * its own copy of the breadcrumb/TOC/section markup — which is how the
 * mt-35 spacing bug (an invalid Tailwind class, left in all five files
 * despite comments claiming it had been fixed) and several copy-paste
 * content errors (e.g. Webdev's "CMS Support" section previously contained
 * Network's "Why this matters" copy) went unnoticed. Consolidating to one
 * template fixes both classes of bug at once and keeps future edits from
 * drifting the same way.
 */
export default function ServicePageLayout({
  breadcrumbLabel,
  title,
  intro,
  sections,
  closing,
}: ServicePageLayoutProps) {
  useScrollToTopOnMount();

  return (
    <section
      className="box-border text-left bg-black text-white px-4 sm:px-8 md:px-12 pb-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label={`${title} Section`}
    >
      <div id="main-content" className="max-w-5xl mx-auto mt-28">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm sm:text-base text-[#B0B0B0]">
          <ol className="list-reset flex space-x-2">
            <li className="flex items-center gap-2">
              <Link
                to="/whatweoffer"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
              >
                What we offer
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li aria-current="page" className="text-[#1C6CFE] font-semibold">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-8 text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>

        {/* Contents / table of contents, generated from the sections list
            so it can never drift out of sync with the actual headings. */}
        <section aria-labelledby="contents-heading" className="mb-12">
          <h2
            id="contents-heading"
            className="text-2xl sm:text-3xl font-semibold mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contents
          </h2>
          <ul className="text-left space-y-2">
            {sections.map(({ title: sectionTitle }) => (
              <li key={sectionTitle}>
                <a
                  href={`#${slugify(sectionTitle)}`}
                  className="no-underline text-[#1C6CFE] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
                >
                  {sectionTitle}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Intro */}
        <section aria-label="Introduction" className="mb-12 space-y-4">
          {intro.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-[#FAFAFA] leading-relaxed max-w-prose"
            >
              {para}
            </p>
          ))}
        </section>

        {/* Body sections */}
        {sections.map(({ title: sectionTitle, paragraphs, list }) => {
          const id = slugify(sectionTitle);
          return (
            <motion.section
              key={id}
              id={id}
              aria-labelledby={`${id}-heading`}
              className="mb-12 scroll-mt-28"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h2
                id={`${id}-heading`}
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {sectionTitle}
              </h2>
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-[#F5F5F5] leading-relaxed mb-5 max-w-prose last:mb-0"
                >
                  {para}
                </p>
              ))}
              {list && (
                <ul className="list-disc list-inside ml-4 space-y-1 max-w-prose mt-2">
                  {list.map((item, idx) => (
                    <li key={idx} className="text-[#F5F5F5]">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          );
        })}

        {/* Closing callout */}
        <motion.section
          aria-labelledby="closing-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            id="closing-heading"
            className="text-2xl sm:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {closing.title}
          </h2>
          {closing.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-[#F5F5F5] leading-relaxed mb-5 max-w-prose last:mb-0"
            >
              {para}
            </p>
          ))}
          <div className="mt-6">
            <Link
              to="/ContactUsPage"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C6CFE] text-white font-medium rounded-[10px] no-underline hover:bg-white hover:text-[#0F1729] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] focus:ring-offset-2 focus:ring-offset-black"
            >
              Talk to us →
            </Link>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
