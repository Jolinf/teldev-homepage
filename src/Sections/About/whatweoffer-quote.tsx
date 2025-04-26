export default function WhatWeOfferQuote2() {
  console.log('quote component rendered');
  return (
    <section className="py-[5%] px-[10%] bg-[#050505] sm:px-8">
      <h2
        className="w-full sm:w-[60%] sm:text-[1.4em] text-[#FFFFFF] max-w-2xl mx-auto mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Let’s build the right solution together—tailored to you, and ready to grow with your vision.
      </h2>
      <div className="flex justify-center gap-4 sm:gap-6">
        <button
          className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Get started
        </button>
      </div>
    </section>
  );
}
