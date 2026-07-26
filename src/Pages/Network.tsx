// src/pages/Network.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import NetworkPage from '../Sections/networkpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Network() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Network & Infrastructure"
        description="Advanced threat protection, security audits, and data encryption from TelDev Technologies — the network foundation everything else runs on, monitored and maintained."
        path="/Network"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <NetworkPage />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
