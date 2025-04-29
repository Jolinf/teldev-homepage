// src/pages/Network.tsx
import Navbar from '../components/navbar';
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import ItConsultingPage from '../Sections/ItConsultingpage';

export default function ItConsulting() {
  console.log('ItConsulting component rendered');
  return (
    <main>
      <Navbar />
      <ServicesNavbar />
      <ItConsultingPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
