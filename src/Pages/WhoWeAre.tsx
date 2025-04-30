// src/pages/Home.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AboutHero from '../Sections/About/Hero';
import Mission from '../Sections/About/mission';
import CoreValues from '../Sections/About/corevalues';
import Leaders from '../Sections/About/leaders';
import OurStory from '../Sections/About/ourstory';
import HowWeHelp from '../Sections/About/help';
import WhatWeOfferQuote2 from '../Sections/About/whatweoffer-quote';

export default function WhoWeAre() {
  console.log('Home component rendered');
  return (
    <main>
      <Navbar />
      <AboutHero />
      <Mission />
      <CoreValues />
      <Leaders />
      <OurStory />
      <HowWeHelp />
      <WhatWeOfferQuote2 />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
