import React, { useState } from 'react';
import ITsupport from '../../assets/homepage illustrations/Homepage-whatweoffer-helpdesk illustration.svg';
import cloud from '../../assets/homepage illustrations/Homepage-whatweoffer-cloudservices illustration.svg';
import security from '../../assets/homepage illustrations/Homepage-whatweoffer-Network&infrastructure illustration.svg';

export default function WhatWeOffer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'IT Support',
      image: ITsupport,
      items: ['24/7 Technical Assistance', 'Network Configuration', 'Software Installation'],
      link: '#learn-more-it-support',
    },
    {
      title: 'Cloud Solutions',
      image: cloud,
      items: ['Scalable Cloud Infrastructure', 'Data Storage & Backup', 'Seamless Integration'],
      link: '#learn-more-cloud-solutions',
    },
    {
      title: 'Cybersecurity',
      image: security,
      items: ['Advanced Threat Protection', 'Security Audits', 'Data Encryption'],
      link: '#learn-more-cybersecurity',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="box-border px-[10%] py-[5%] mb-[5%] sm:px-8 text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-semibold text-center mb-[40px] text-[1.8em]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          What We Offer
        </h2>

        <div className="relative">
          <div className="flex overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full h-auto rounded-lg shadow-lg flex items-top transition-transform duration-300 ${
                  index === currentSlide ? 'translate-x-0' : 'hidden'
                }`}
              >
                <div className="w-1/2 p-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[60%] h-auto rounded-lg object-contain"
                  />
                </div>
                <div className="w-1/2 text-left mt-[3%]">
                  <h2
                    className="text-xl font-medium text-[#1C6CFE] text-[1.5em] text-left pl-[10%] mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.title}
                  </h2>
                  <ul
                    className="list-none list-inside text-[1.5em] font-regular text-left p-[0] pl-[10%]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {slide.items.map((item, i) => (
                      <li className="text-left my-[1.2%]" key={i}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={slide.link}
                    className="text-[#FFFFFF] hover:underline hover:text-[#1C6CFE] text-left no-underline block mt-8 pl-[10%] transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-12 mr-[10%] sm:mr-[200px] gap-[30px]">
          <button
            onClick={prevSlide}
            className="bg-[#313131] border-[0] text-[#FFFFFF] p-3 shadow-lg hover:bg-[#616161] transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#313131] border-[0] text-[#FFFFFF] p-3 shadow-lg hover:bg-[#616161] transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
