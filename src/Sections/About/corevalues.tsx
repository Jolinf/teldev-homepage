import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const coreValues = [
  {
    title: 'Expertise',
    content: `At TELDEV Technologies, expertise is at the heart of everything we do. It reflects our dedication to mastering the tools, technologies, and trends that shape today’s digital landscape. Our team brings years of hands-on experience, technical certifications, and a problem-solving mindset to every challenge. We don’t just offer support—we offer smart, strategic solutions that are informed, reliable, and forward-thinking. By consistently honing our skills and sharing our knowledge, we empower our clients with the confidence to navigate technology with ease.`,
  },
  {
    title: 'Innovation',
    content:
      'At TELDEV Technologies, expertise is at the heart of everything we do. It reflects our dedication to mastering the tools, technologies, and trends that shape today’s digital landscape. Our team brings years of hands-on experience, technical certifications, and a problem-solving mindset to every challenge. We don’t just offer support—we offer smart, strategic solutions that are informed, reliable, and forward-thinking. By consistently honing our skills and sharing our knowledge, we empower our clients with the confidence to navigate technology with ease.',
  },
  {
    title: 'Security',
    content:
      'At TELDEV Technologies, expertise is at the heart of everything we do. It reflects our dedication to mastering the tools, technologies, and trends that shape today’s digital landscape. Our team brings years of hands-on experience, technical certifications, and a problem-solving mindset to every challenge. We don’t just offer support—we offer smart, strategic solutions that are informed, reliable, and forward-thinking. By consistently honing our skills and sharing our knowledge, we empower our clients with the confidence to navigate technology with ease.',
  },
  {
    title: 'Scalability',
    content:
      'At TELDEV Technologies, expertise is at the heart of everything we do. It reflects our dedication to mastering the tools, technologies, and trends that shape today’s digital landscape. Our team brings years of hands-on experience, technical certifications, and a problem-solving mindset to every challenge. We don’t just offer support—we offer smart, strategic solutions that are informed, reliable, and forward-thinking. By consistently honing our skills and sharing our knowledge, we empower our clients with the confidence to navigate technology with ease.',
  },
  {
    title: 'Ongoing support',
    content: 'Content for Ongoing support...',
  },
  {
    title: 'Performance',
    content: 'Content for Performance...',
  },
  {
    title: 'Customer-centric Approach',
    content: 'Content for Customer-centric Approach...',
  },
  {
    title: 'Adaptability',
    content: 'Content for Adaptability...',
  },
];

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 0 is open by default

  const toggleValue = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0A0A0A] text-white px-[10%] py-20 font-inter">
      <h2
        className="text-[#FFFFFF] text-3xl font-bold mb-8"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Core values
      </h2>
      <div className="divide-y divide-[#1673FF] border-t border-b border-[#1673FF]">
        {coreValues.map((value, index) => (
          <div key={index}>
            <button
              onClick={() => toggleValue(index)}
              className="border-[0] bg-[#0A0A0A] w-full flex items-center justify-between py-5"
            >
              <h3
                className="text-[#FFFFFF] text-xl font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {value.title}
              </h3>
              {openIndex === index ? (
                <Minus size={20} className="text-[#FFFFFF]" />
              ) : (
                <Plus size={20} className="text-[#FFFFFF]" />
              )}
            </button>

            {openIndex === index && (
              <p
                className="text-base text-[1.3em] text-left text-[#FFFFFF] pb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {value.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
