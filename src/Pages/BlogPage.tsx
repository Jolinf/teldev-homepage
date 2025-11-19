// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blog from '../Sections/Blog/blog';
import Hero from '../Sections/Blog/Hero';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function BlogPage() {
  const { mainRef } = useScrollContainer();
  console.log('Cloud component rendered');
  return (
    <main ref={mainRef}>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
