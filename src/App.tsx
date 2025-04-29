// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import WhoWeAre from './Pages/WhoWeAre';
import WhatWeOffer from './Pages/WhatWeOffer';
import Helpdesk from './Pages/Helpdesk';
import Network from './Pages/Network';
import Webdev from './Pages/webdev';
import Cloud from './Pages/cloud';
import ItConsulting from './Pages/ItConsulting';
// import About from './Pages/About';
// import Services from './Pages/services';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
      <Route path="/whatweoffer" element={<WhatWeOffer />} />
      <Route path="/Helpdesk" element={<Helpdesk />} />
      <Route path="/Network" element={<Network />} />
      <Route path="/Webdev" element={<Webdev />} />
      <Route path="/Cloud" element={<Cloud />} />
      <Route path="/ItConsulting" element={<ItConsulting />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} /> */}
    </Routes>
  );
}

export default App;
