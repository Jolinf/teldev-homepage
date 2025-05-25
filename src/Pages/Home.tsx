// src/pages/Home.tsx
import Navbar from '../components/navbar';
import Hero from '../Sections/Homepage/Hero';
import Homepagequote1 from '../Sections/Homepage/Homepage-quote1';
import Homepagequote2 from '../Sections/Homepage/Homepage-quote2';
import TeldevBlog from '../Sections/Homepage/TeldevBlog';
import WhatWeOffer from '../Sections/Homepage/whatweoffer';
import WhyTeldev from '../Sections/Homepage/whyteldev';
import Footer from '../components/footer';
import ContactSection from '../Sections/Homepage/contact';

export default function Home() {
  console.log('Home component rendered');
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <Homepagequote1 />
        <WhyTeldev />
        <Homepagequote2 />
        <WhatWeOffer />
        <TeldevBlog />
        {/* <ContactSection /> */}
      </div>
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
