// src/pages/cloud.tsx
import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import CloudPage from '../Sections/cloudpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function Cloud() {
  const { mainRef } = useScrollContainer();
  console.log('Cloud component rendered');
  return (
    <main ref={mainRef}>
      <ServicesNavbar />
      <CloudPage />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
