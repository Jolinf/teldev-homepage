// src/pages/Network.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import ItConsultingPage from '../Sections/ItConsultingpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function ItConsulting() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="IT Consulting"
        description="Technology strategy, system integration, and cost optimization from TelDev Technologies — a tech roadmap built around your business, not a generic playbook."
        path="/ItConsulting"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <ItConsultingPage />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
