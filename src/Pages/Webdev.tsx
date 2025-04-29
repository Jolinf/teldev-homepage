// src/pages/webdev.tsx
import Navbar from '../components/navbar';
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import WebdevPage from '../Sections/webdevpage';

export default function WebDev() {
  console.log('Webdev component rendered');
  return (
    <main>
      <Navbar />
      <ServicesNavbar />
      <WebdevPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
