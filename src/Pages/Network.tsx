// src/pages/Network.tsx
import Navbar from '../components/navbar';
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import NetworkPage from '../Sections/networkpage';

export default function Network() {
  console.log('Network component rendered');
  return (
    <main>
      <Navbar />
      <ServicesNavbar />
      <NetworkPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
