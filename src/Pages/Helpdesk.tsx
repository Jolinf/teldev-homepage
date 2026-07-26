// src/pages/Helpdesk.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import HelpdeskPage from '../Sections/helpdeskpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Helpdesk() {
  const { mainRef } = useScrollContainer();
  return (
    <main ref={mainRef}>
      <ServicesNavbar />
      <HelpdeskPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
