// src/pages/Helpdesk.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import HelpdeskPage from '../Sections/helpdeskpage';

export default function Helpdesk() {
  console.log('Helpdesk component rendered');
  return (
    <main>
      <ServicesNavbar />
      <HelpdeskPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
