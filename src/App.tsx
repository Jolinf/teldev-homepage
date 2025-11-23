// src/App.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load routes to reduce initial bundle size
const Home = lazy(() => import('./Pages/Home'));
const WhoWeAre = lazy(() => import('./Pages/WhoWeAre'));
const WhatWeOffer = lazy(() => import('./Pages/WhatWeOffer'));
const Helpdesk = lazy(() => import('./Pages/Helpdesk'));
const Network = lazy(() => import('./Pages/Network'));
const Webdev = lazy(() => import('./Pages/Webdev'));
const Cloud = lazy(() => import('./Pages/Cloud'));
const ItConsulting = lazy(() => import('./Pages/ItConsulting'));
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage'));
const BlogPage = lazy(() => import('./Pages/BlogPage'));
const BlogOpen = lazy(() => import('./Sections/Blog/open'));
const NewPost = lazy(() => import('./Pages/NewPost'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/Helpdesk" element={<Helpdesk />} />
        <Route path="/Network" element={<Network />} />
        <Route path="/Webdev" element={<Webdev />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/ItConsulting" element={<ItConsulting />} />
        <Route path="/ContactUsPage" element={<ContactUsPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogOpen />} />
        <Route path="/admin/blog/new" element={<NewPost />} />
      </Routes>
    </Suspense>
  );
}

export default App;
