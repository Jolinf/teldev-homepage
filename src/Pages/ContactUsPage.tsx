// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactUs from '../Sections/contactus';

export default function ContactUsPage() {
  console.log('Cloud component rendered');
  return (
    <main>
      <Navbar />
      <ContactUs />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
