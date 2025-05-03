// src/pages/Network.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import NetworkPage from '../Sections/networkpage';

export default function Network() {
  console.log('Network component rendered');
  return (
    <main>
      <ServicesNavbar />
      <NetworkPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
