import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#1E64F0] text-[#FFFFFF]">
      {/* Main footer content with padding */}
      <div className="px-[10%] py-[8%]">
        <div className="flex justify-between flex-wrap gap-10">
          {/* Stay Connected */}
          <div className="text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
            <h3
              className="text-[1.5em] font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Stay connected
            </h3>
            <div className="flex gap-4 text-xl mb-4">
              <a
                href="#"
                className="text-[1.3em] text-[#000000] hover:text-gray-300 no-underline pr-[20px]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-[1.3em] text-[#000000] hover:text-gray-300 no-underline pr-[20px]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-[1.3em] text-[#000000] hover:text-gray-300 no-underline pr-[20px]"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-[1.3em] text-[#000000] hover:text-gray-300 no-underline pr-[20px]"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="space-y-0">
              <p className="m-[0] text-[1.2em]">contact@teldev.org</p>
              <p className="m-[0] text-[1.2em]">+234 903 756 2951</p>
              <p className="m-[0] text-[1.2em]">+234 708 403 6561</p>
            </div>
          </div>

          {/* Company */}
          <div className="text-left">
            <h3
              className="text-[1.5em] font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Company
            </h3>
            <ul
              className="space-y-2 text-sm list-none text-left justify-left pl-[0]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Home
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Who we are
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  What we do
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3
              className="text-[1.5em] text-xl font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Services
            </h3>
            <ul
              className="space-y-2 text-sm list-none pl-[0]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Helpdesk Support
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Network & Infrastructure
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Application & website management
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  Cloud Services
                </a>
              </li>
              <li className="pb-[10px]">
                <a href="#" className="text-[1.2em] text-[#FFFFFF] no-underline hover:underline">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom row - no padding */}
      <div className="border-t border-[#FFFFFF]/70">
        <div className="flex flex-wrap justify-between items-center py-6 px-[10%]">
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#FFFFFF] mr-[10px] hover:text-gray-200 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-[#FFFFFF] mr-[10px] hover:text-gray-200 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-[#FFFFFF] mr-[10px] hover:text-gray-200 transition-colors">
              Sitemap
            </a>
          </div>
          <p className="text-[1em]" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Teldev. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
