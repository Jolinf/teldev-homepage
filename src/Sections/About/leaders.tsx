import React from 'react';
// import Image from 'next/image'; // Or use <img> if not using Next.js
import leader1 from '../../assets/whoweare-images/leader-placeholder.png'; // Replace with actual image path

export default function Leaders() {
  return (
    <section className="box-border bg-black text-white px-[10%] py-[8%] min-h-screen flex flex-col items-center gap-16">
      <h2 className="text-[#FFFFFF]" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Meet Our Leaders
      </h2>
      <div className="CEO box-border border-[2px] rounded-[10px] border-[#0F1729] grid grid-cols-2 gap-[10%] items-center w-full">
        <div className="flex justify-center md:justify-start">
          <img
            src={leader1}
            alt="Customer-centric solutions illustration"
            className="w-full h-full max-w-md rounded-[10px]"
          />
        </div>

        {/* Text Content */}
        <div className="ml-auto text-left md:text-left self-end pr-[2%] pb-[50%]">
          <h1
            className="text-[3em] text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions.
          </h1>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            - Joshua Ulinfun CEO/CO-Founder
          </p>
        </div>
      </div>
      {/* CTO */}
      <div className="CTO mt-[2%] border-[2px] rounded-[10px] border-[#0F1729] grid grid-cols-2 gap-[10%] items-center w-full">
        <div className="ml-auto text-left md:text-left self-end pl-[5%] pb-[50%]">
          <h1
            className="text-[3em] text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions.
          </h1>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            - Joshua Ulinfun
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            src={leader1}
            alt="Customer-centric solutions illustration"
            className="w-full max-w-md rounded-[10px]"
          />
        </div>
      </div>
      {/* COO */}
      <div className="CTO mt-[2%] border-[2px] rounded-[10px] border-[#0F1729] grid grid-cols-2 gap-[10%] items-center w-full">
        <div className="flex justify-center md:justify-start">
          <img
            src={leader1}
            alt="Customer-centric solutions illustration"
            className="w-full max-w-md rounded-[10px]"
          />
        </div>
        <div className="ml-auto text-left md:text-left self-end pl-[5%] pb-[50%]">
          <h1
            className="text-[3em] text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions.
          </h1>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            - Kayode Ojedele COO/CO-Founder
          </p>
        </div>
      </div>
    </section>
  );
}
