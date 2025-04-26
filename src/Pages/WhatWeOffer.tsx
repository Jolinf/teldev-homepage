// src/pages/Home.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServicesHero from '../Sections/services/hero';
import Services from '../Sections/services/service';
import CTA from '../Sections/services/CTA';

export default function Home() {
  console.log('Home component rendered');
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
