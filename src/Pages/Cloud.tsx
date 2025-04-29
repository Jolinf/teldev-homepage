// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import CloudPage from '../Sections/cloudpage';

export default function Cloud() {
  console.log('Cloud component rendered');
  return (
    <main>
      <Navbar />
      <ServicesNavbar />
      <CloudPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
