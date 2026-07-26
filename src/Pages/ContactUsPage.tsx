// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import ContactUs from '../Sections/contactus';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function ContactUsPage() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Contact Us"
        description="Book a free consultation with TelDev Technologies. Reach our team for helpdesk, network, cloud, web, or IT consulting support."
        path="/ContactUsPage"
      />
      <Navbar />
      <main ref={mainRef}>
        <ContactUs />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
