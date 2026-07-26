// src/pages/Network.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import NetworkPage from '../Sections/networkpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Network() {
  const { mainRef } = useScrollContainer();
  return (
    <main ref={mainRef}>
      <ServicesNavbar />
      <NetworkPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
