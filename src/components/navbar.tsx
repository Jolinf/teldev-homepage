import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/teldev-logo.png';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#0A0A0A]/90 text-[#FFFFFF] fixed w-full shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-[100px] md:px-10 py-[20px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/src/assets/teldev logo.svg" alt="Teldev Logo" className="h-8 w-8" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className="flex items-center space-x-[30px] text-sm tracking-wide list-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <li>
            <Link to="/" className="no-underline text-[#1C6CFE] border-b border-[#1C6CFE]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/whoweare"
              className="no-underline hover:text-[#1C6CFE] transition text-[#FFFFFF]"
            >
              Who we are
            </Link>
          </li>
          <li>
            <Link
              to="/whatweoffer"
              className="no-underline hover:text-[#1C6CFE] transition text-[#FFFFFF]"
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="no-underline hover:text-[#1C6CFE] transition text-[#FFFFFF]"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-4 sm:gap-6">
          <button
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
