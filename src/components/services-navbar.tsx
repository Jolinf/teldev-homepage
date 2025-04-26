import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/teldev-logo.png';

const ServicesNavbar: React.FC = () => {
  return (
    <header className="bg-[#1C6CFE] text-[#FFFFFF] fixed top-0 left-0 w-full z-50 shadow-md mt-[90px] flex justify-center">
      <nav className="max-w-7xl mx-auto px-[100px] md:px-10 py-[20px] flex items-center justify-between">
        {/* Navigation Links */}
        <ul
          className="flex items-center space-x-[30px] text-sm tracking-wide list-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <li>
            <Link to="/" className="no-underline hover:underline transition text-[#FFFFFF]">
              Helpdesk Support
            </Link>
          </li>
          <li>
            <Link to="/whoweare" className="no-underline hover:underline transition text-[#FFFFFF]">
              Network and infrastructure
            </Link>
          </li>
          <li>
            <Link
              to="/whatweoffer"
              className="no-underline hover:underline transition text-[#FFFFFF]"
            >
              Applications and Website Management
            </Link>
          </li>
          <li>
            <Link to="/blog" className="no-underline hover:underline transition text-[#FFFFFF]">
              Cloud Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="no-underline hover:underline transition text-[#FFFFFF]">
              IT Consulting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ServicesNavbar;
