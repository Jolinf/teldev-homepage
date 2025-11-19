import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
