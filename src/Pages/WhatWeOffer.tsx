// src/pages/WhatWeOffer.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServicesHero from '../Sections/services/hero';
import Services from '../Sections/services/services';
import CTA from '../Sections/services/CTA';

export default function WhatWeOffer() {
  console.log('WhatWeOffer component rendered');
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <Services />
      <CTA />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
