import { motion } from 'framer-motion';
import expertiseImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-expertise image.jpg';
import innovationImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-innovation image.jpg';
import securityImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-security image.jpg';
import scalabilityImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-Scalability image.jpg';
import supportImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-ongoing support image.jpg';
import performanceImg from '../../assets/Homepage-images/homepage-whyuwhyteldev-performance image.jpg';
import customerImg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-custome centric image.jpg';
import adaptabilityimg from '../../assets/Homepage-images/Homepage-whyuwhyteldev-Adaptability image.png';

const cards = [
  {
    title: 'Expertise',
    imgFront: expertiseImg,
    description:
      'At TELDEV Technologies, we blend hands-on IT support with smart, scalable solutions. From troubleshooting to automation, we’re here to help you stay ahead and make technology work for you.',
    bgColor: '#044154',
  },
  {
    title: 'Innovation',
    imgFront: innovationImg,
    description:
      'We push boundaries by blending AI, automation, and creativity—delivering forward-thinking solutions designed for the future of tech.',
    bgColor: '#0A1529',
  },
  {
    title: 'Security',
    imgFront: securityImg,
    description:
      'Your safety is our priority. We implement advanced encryption, secure frameworks, and proactive monitoring to keep your data protected around the clock.',
    bgColor: '#434C5E',
  },
  {
    title: 'Scalability',
    imgFront: scalabilityImg,
    description:
      'As your business grows, so should your tech. Our flexible solutions are built to scale with you—efficiently and seamlessly.',
    bgColor: '#8596AB',
  },
  {
    title: 'Ongoing Support',
    imgFront: supportImg,
    description:
      'Our job doesn’t end after deployment. We offer continuous, hands-on support to ensure your tech stays efficient, updated, and reliable.',
    bgColor: '#617281',
  },
  {
    title: 'Performance',
    imgFront: performanceImg,
    description:
      'Speed and reliability are at our core. We engineer high-performance systems that keep your operations running without interruption.',
    bgColor: '#51453B',
  },
  {
    title: 'Customer-Centric Approach',
    imgFront: customerImg,
    description:
      'Your goals guide our solutions. We take time to understand your needs, ensuring every service is tailored to deliver real value.',
    bgColor: '#202E3B',
  },
  {
    title: 'Adaptability',
    imgFront: adaptabilityimg,
    description:
      'Adaptability is our strength—we evolve with technology and client needs, ensuring our solutions stay relevant, responsive, and resilient in a rapidly changing digital world.',
    bgColor: '#8A5320',
  },
];

export default function WhyTeldev() {
  return (
    <section className="mb-[5%] px-[10%] justify-center bg-[#0A0A0A] text-white py-20 sm:px-6 md:px-8">
      <motion.h2
        className="text-center text-[1.8em] sm:text-[2em] md:text-4xl lg:text-5xl font-semibold mb-[40px]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why <span className="text-[#1C6CFE]">us</span>? Why{' '}
        <span className="text-[#1C6CFE]">Teldev</span>?
      </motion.h2>

      <motion.div
        className="grid gap-6 grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-[350px] perspective focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1C6CFE] focus-visible:ring-opacity-75 rounded-[1em]"
            tabIndex={0}
            aria-label={`${card.title} card. Press enter to flip.`}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180 focus-within:rotate-y-180 rounded-[1em] shadow-lg hover:shadow-xl hover:scale-105"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full backface-hidden rounded-[1em] overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={card.imgFront}
                  alt={`${card.title} image`}
                  className="w-full h-full object-cover rounded-[1em]"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-white text-2xl font-bold drop-shadow-md">{card.title}</h3>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full backface-hidden rotate-y-180 text-white text-left rounded-[1em] p-6 flex flex-col justify-start items-start shadow-lg"
                style={{ backgroundColor: card.bgColor }}
                aria-hidden="true"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-base leading-relaxed">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
