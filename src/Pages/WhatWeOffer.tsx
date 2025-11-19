// src/pages/WhatWeOffer.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServicesHero from '../Sections/services/hero';
import Services from '../Sections/services/services';
import CTA from '../Sections/services/CTA';
import useScrollToTopOnMount from '../Hooks/useScrollToTopOnMount';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function WhatWeOffer() {
  useScrollToTopOnMount();
  const { mainRef } = useScrollContainer();
  console.log('WhatWeOffer component rendered');
  return (
    <main ref={mainRef}>
      <Navbar />
      <ServicesHero />
      <Services />
      <CTA />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
