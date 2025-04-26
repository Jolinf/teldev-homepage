export default function CTA() {
  console.log('quote component rendered');
  return (
    <section className="py-[5%] px-[10%] bg-[#050505] sm:px-8">
      <h2 className="w-full text-[#FFFFFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
        Don't stop now—Schedule a call let's talk about the
        <span className="text-[#1C6CFE]"> Future</span>
      </h2>
      <div className="flex justify-center gap-4 sm:gap-6">
        <button
          className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
