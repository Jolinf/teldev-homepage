// src/pages/webdev.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import WebdevPage from '../Sections/webdevpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function WebDev() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Application & Website Management"
        description="Custom application development, website design, and ongoing performance monitoring from TelDev Technologies — custom builds and upkeep for sites and apps that need to hold up."
        path="/Webdev"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <WebdevPage />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
