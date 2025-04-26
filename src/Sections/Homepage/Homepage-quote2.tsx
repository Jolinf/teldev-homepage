export default function Homepagequote2() {
  console.log('quote component rendered');
  return (
    <section className="py-[5%] px-[10%] bg-[#050505] sm:px-8">
      <blockquote
        className="w-full sm:w-[60%] text-[1.2em] sm:text-[1.4em] text-[#FFFFFF] italic max-w-2xl mx-auto mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        At Teldev, we don't just offer solutions — we build partnerships to help your business
        thrive.
      </blockquote>
      <div className="flex justify-center gap-4 sm:gap-6">
        <button
          className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Discover more
        </button>
      </div>
    </section>
  );
}
