// src/pages/Home.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import AboutHero from '../Sections/About/Hero';
import Mission from '../Sections/About/mission';
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
        description="Founded in 2021, TelDev Technologies builds custom IT support and software solutions for individuals, small businesses, and growing enterprises."
        path="/whoweare"
      />
      <Navbar />
      <main ref={mainRef}>
        <AboutHero />
        <Mission />
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
