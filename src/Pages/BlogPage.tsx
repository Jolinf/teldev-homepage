// src/pages/cloud.tsx
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blog from '../Sections/Blog/blog';
import Hero from '../Sections/Blog/Hero';

export default function BlogPage() {
  console.log('Cloud component rendered');
  return (
    <main>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />

      {/* other sections will go here */}
    </main>
  );
}
