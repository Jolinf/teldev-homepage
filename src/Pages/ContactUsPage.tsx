// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactUs from '../Sections/contactus';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function ContactUsPage() {
  const { mainRef } = useScrollContainer();
  return (
    <main ref={mainRef}>
      <Navbar />
      <ContactUs />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
