// src/sections/WhyTeldev.tsx
import React from 'react';

// Sample image imports — replace these with your actual image paths
import expertiseImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-expertise image.jpg';
import innovationImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-innovation image.jpg';
import securityImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-security image.jpg';
import scalabilityImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-Scalability image.jpg';
import supportImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-ongoing support image.jpg';
import performanceImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-performance image.jpg';
import customerImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-custome centric image.jpg';

const cards = [
  { title: 'Expertise', img: expertiseImg },
  { title: 'Innovation', img: innovationImg },
  { title: 'Security', img: securityImg },
  { title: 'Scalability', img: scalabilityImg },
  { title: 'Ongoing Support', img: supportImg },
  { title: 'Performance', img: performanceImg },
  { title: 'Customer-Centric Approach', img: customerImg },
  { title: 'Adaptability', img: supportImg },
];

export default function WhyTeldev() {
  return (
    <section className="mb-[5%] px-[10%] justify-center bg-[#0A0A0A] text-[#FFFFFF] py-[5%] sm:px-6 md:px-8">
      <h2
        className="text-center text-[1.8em] sm:text-[2em] text-3xl md:text-4xl lg:text-5xl font-semibold mb-[40px]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Why <span className="text-[#1C6CFE]">us</span>? Why{' '}
        <span className="text-[#1C6CFE]">Teldev</span>?
      </h2>

      <div className="grid gap-6 grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[1em] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 h-[90%] sm:h-[350px] md:h-[] p-4 "
          >
            <div className="relative w-full h-full hover:shadow">
              <div className="relative w-full h-full hover:text-underline">
                <img
                  src={card.img}
                  alt={card.title}
                  className={`w-full h-full object-cover rounded-[1em] ${
                    card.title === 'Scalability' ? 'transform -scale-x-100' : ''
                  }`}
                />
                <div
                  className="absolute inset-0 bg-[#000000] opacity-20 rounded-[1em]"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
            <div
              className="absolute bottom-6 left-6"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                zIndex: 2,
                margin: 0,
                padding: 0,
              }}
            >
              <h3
                className="text-white text-[1.3em] sm:text-[1.9em] font-bold text-left"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  display: 'block',
                }}
              >
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
