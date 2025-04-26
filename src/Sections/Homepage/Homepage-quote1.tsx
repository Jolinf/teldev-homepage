export default function Homepagequote1() {
  console.log('quote component rendered');
  return (
    <section className="py-[5%] px-[10%] bg-[#050505] sm:px-[60px] md:px-[80px] lg:px-[100px]">
      <blockquote
        className="w-full md:w-[60%] text-base sm:text-lg md:text-xl text-[#FFFFFF] italic max-w-2xl mx-auto"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        "Technology is nothing. What's important is that you have faith in people, that they're
        basically good and smart, and if you give them tools, they'll do wonderful things with
        them."
        <br />
        <span className="block mt-[20px] font-semibold text-[#1C6CFE]">- Steve Jobs</span>
      </blockquote>
    </section>
  );
}
