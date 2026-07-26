// src/pages/WhatWeOffer.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import ServicesHero from '../Sections/services/hero';
import Services from '../Sections/services/services';
import CTA from '../Sections/services/CTA';
import useScrollToTopOnMount from '../Hooks/useScrollToTopOnMount';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function WhatWeOffer() {
  useScrollToTopOnMount();
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Our Services"
        description="Helpdesk support, network and infrastructure, application and website management, cloud services, and IT consulting from TelDev Technologies."
        path="/whatweoffer"
      />
      <Navbar />
      <main ref={mainRef}>
        <ServicesHero />
        <Services />
        <CTA />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
