// src/pages/webdev.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import WebdevPage from '../Sections/webdevpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function WebDev() {
  const { mainRef } = useScrollContainer();
  console.log('Webdev component rendered');
  return (
    <main ref={mainRef}>
      <ServicesNavbar />
      <WebdevPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
