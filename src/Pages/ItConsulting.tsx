// src/pages/Network.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import ItConsultingPage from '../Sections/ItConsultingpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function ItConsulting() {
  const { mainRef } = useScrollContainer();
  return (
    <main ref={mainRef}>
      <ServicesNavbar />
      <ItConsultingPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
