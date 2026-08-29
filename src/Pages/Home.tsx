// src/pages/Home.tsx
import Navbar from '../components/navbar';
import SEO from '../components/SEO';
import { useScrollContainer } from '../contexts/ScrollContext';
import Hero from '../Sections/Homepage/Hero';
import Homepagequote1 from '../Sections/Homepage/Homepage-quote1';
import Homepagequote2 from '../Sections/Homepage/Homepage-quote2';
// Blog section is temporarily removed from the homepage; the component remains in the codebase.
// import TeldevBlog from '../Sections/Homepage/TeldevBlog';
import WhatWeOffer from '../Sections/Homepage/whatweoffer';
import HomepageCTA from '../Sections/Homepage/cta';
import WhyTeldev from '../Sections/Homepage/whyteldev';
import Footer from '../components/footer';
// import ContactSection from '../Sections/Homepage/contact';

export default function Home() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="IT Support, Cloud, AI & Automation"
        description="TelDev Technologies delivers helpdesk support, network infrastructure, cloud services, custom software, IT consulting and business automation for small and growing businesses in Nigeria."
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
          <HomepageCTA />
          {/* <TeldevBlog /> */}
          {/* <ContactSection /> */}
        </div>

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
