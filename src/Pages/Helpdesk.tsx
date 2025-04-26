// src/pages/Home.tsx
import Navbar from '../components/navbar';
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import HelpdeskPage from '../Sections/helpdeskpage';

export default function Home() {
  console.log('Home component rendered');
  return (
    <main>
      <Navbar />
      <ServicesNavbar />
      <HelpdeskPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
