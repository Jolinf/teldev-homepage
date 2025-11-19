import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import { SpeedInsights } from "@vercel/speed-insights/react"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ScrollProvider>
        <SpeedInsights />
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
