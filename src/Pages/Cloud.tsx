// src/pages/cloud.tsx
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import CloudPage from '../Sections/cloudpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Cloud() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Cloud Services"
        description="Scalable cloud infrastructure, data storage and backup, and seamless integration from TelDev Technologies — migrate, store, and scale without being tied to physical hardware."
        path="/Cloud"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <CloudPage />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
