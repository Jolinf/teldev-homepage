export default function ServicesHero() {
  console.log('quote component rendered');
  return (
    <section className="box-border py-[8%] px-[10%] bg-[#0A0A0A] sm:px-8">
      <h2
        className="w-full sm:w-[60%] sm:text-[1.4em] text-[#FFFFFF] max-w-2xl mx-auto mb-8 p-[0] m-[0]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Technology that works for you
      </h2>
      <div className="flex justify-center gap-4 sm:gap-6">
        <p className="text-[#FFFFFF] text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          At TELDEV Technologies, we offer more than just technical support—we deliver customized
          solutions designed to make technology work for you. Whether you’re running a small
          business, managing a growing team, or flying solo, our services are built to meet your
          needs, your pace, and your goals. From everyday IT support to long-term strategy and
          systems that scale, we partner with you to simplify the complex, secure what matters, and
          set you up for long-term success. Here’s how we help you make technology your advantage.
        </p>
      </div>
    </section>
  );
}
