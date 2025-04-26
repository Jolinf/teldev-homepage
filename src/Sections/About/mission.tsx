import React from 'react';
// import Image from 'next/image'; // Or use <img> if not using Next.js

export default function Mission() {
  return (
    <section className="box-border bg-black text-white px-[10%] pb-[8%] flex items-center">
      <div className="grid grid-cols-2 gap-[10%] items-center w-full">
        {/* Illustration */}

        {/* Text Content */}
        <div className="ml-auto text-left md:text-left self-end">
          <h2
            className=" text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Vision
          </h2>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            To be a trusted leader in technology support and innovation, empowering individuals and
            businesses through accessible, customer-focused IT solutions that drive growth,
            efficiency, and digital confidenceOur mission is to simplify technology for individuals
            and businesses by offering
          </p>
        </div>

        <div className="ml-auto text-left md:text-left self-end">
          <h2
            className="text-left text-[#FFFFFF] text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Mission
          </h2>
          <p
            className="text-left text-[1em] text-[#FFFFFF] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our mission is to simplify technology for everyone by delivering reliable, personalized
            IT support and solutions. We are dedicated to providing expert guidance, responsive
            service, and innovative tools that help our clients navigate and thrive in a rapidly
            evolving digital world.
          </p>
        </div>
      </div>
    </section>
  );
}
