import React from 'react';
// import Image from 'next/image'; // Or use <img> if not using Next.js
import heroIllustration from '../../assets/whoweare illustrations/Whoweare-herosection-img.svg'; // Replace with actual image path

export default function AboutHero() {
  return (
    <section className="box-border bg-black text-white px-[10%] py-[8%] min-h-screen flex items-center">
      <div className="grid grid-cols-2 gap-[10%] items-center w-full">
        {/* Illustration */}
        <div className="flex justify-center md:justify-start">
          <img
            src={heroIllustration}
            alt="Customer-centric solutions illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="ml-auto text-left md:text-left self-end">
          <h1
            className="text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Customer-centric
            <br />
            solutions
          </h1>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our mission is to simplify technology for individuals and businesses by offering
            tailored support services that address real-world needs. From troubleshooting to
            consulting, TELDEV is dedicated to making technology work for you—effectively,
            affordably, and with a personal touch.
          </p>
        </div>
      </div>
    </section>
  );
}
