// src/pages/Home.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import AboutHero from '../Sections/About/Hero';
import Mission from '../Sections/About/mission';
import Ambition from '../Sections/About/ambition';
import CoreValues from '../Sections/About/corevalues';
import Leaders from '../Sections/About/leaders';
import OurStory from '../Sections/About/ourstory';
import HowWeHelp from '../Sections/About/help';
import WhatWeOfferQuote2 from '../Sections/About/whatweoffer-quote';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function WhoWeAre() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="About TelDev Technologies"
        description="TelDev Technologies makes technology, AI and automation accessible, practical and impactful for individuals, businesses and communities — starting in Nigeria. Our mission, vision, strategic pillars and leadership."
        path="/whoweare"
      />
      <Navbar />
      <main ref={mainRef}>
        <AboutHero />
        <Mission />
        <Ambition />
        <CoreValues />
        <Leaders />
        <OurStory />
        <HowWeHelp />
        <WhatWeOfferQuote2 />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
