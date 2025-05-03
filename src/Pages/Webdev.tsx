// src/pages/webdev.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import WebdevPage from '../Sections/webdevpage';

export default function WebDev() {
  console.log('Webdev component rendered');
  return (
    <main>
      <ServicesNavbar />
      <WebdevPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
