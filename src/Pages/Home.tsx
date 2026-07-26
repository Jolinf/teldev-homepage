// src/pages/Home.tsx
import Navbar from '../components/navbar';
import SEO from '../components/SEO';
import { useScrollContainer } from '../contexts/ScrollContext';
import Hero from '../Sections/Homepage/Hero';
import Homepagequote1 from '../Sections/Homepage/Homepage-quote1';
import Homepagequote2 from '../Sections/Homepage/Homepage-quote2';
import TeldevBlog from '../Sections/Homepage/TeldevBlog';
import WhatWeOffer from '../Sections/Homepage/whatweoffer';
import WhyTeldev from '../Sections/Homepage/whyteldev';
import Footer from '../components/footer';
// import ContactSection from '../Sections/Homepage/contact';

export default function Home() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="IT Support, Helpdesk & Cloud Services"
        description="TelDev Technologies delivers helpdesk support, network infrastructure, cloud services, custom software and IT consulting for small and growing businesses."
        path="/"
      />
      <Navbar />
      <main ref={mainRef}>
        <div>
          <Hero />
          <Homepagequote1 />
          <WhyTeldev />
          <Homepagequote2 />
          <WhatWeOffer />
          <TeldevBlog />
          {/* <ContactSection /> */}
        </div>

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
