// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import Blog from '../Sections/Blog/blog';
import Hero from '../Sections/Blog/Hero';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function BlogPage() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="Blog"
        description="IT tips, technology guides, and updates from the TelDev Technologies team."
        path="/BlogPage"
      />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Blog />

        {/* other sections will go here */}
      </main>
      <Footer />
    </>
  );
}
