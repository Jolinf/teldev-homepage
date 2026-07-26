// src/pages/Helpdesk.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import HelpdeskPage from '../Sections/helpdeskpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Helpdesk() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Helpdesk Support"
        description="Fast, human IT helpdesk support from TelDev Technologies — 24/7 technical assistance, network configuration, and software installation, not a ticket queue."
        path="/Helpdesk"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <HelpdeskPage />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
