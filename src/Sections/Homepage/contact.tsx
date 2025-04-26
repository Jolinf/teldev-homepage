import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-black text-[#FFFFFF] px-[10%] py-[5%] flex justify-center font-inter">
      <div className="max-w-xl w-full text-center">
        {/* Heading */}
        <h2
          className="text-3xl text-[2em] md:text-4xl font-semibold text-[#1E64F0] m-[0] mb-[5%]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Don't leave without saying Hi!
        </h2>
        {/* <p
          className="text-base text-[1.3em] md:text-lg leading-relaxed my-[40px] m-[0]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Ready to Take Your Business to the Next Level?
          <br />
          Or do you need free consultation?
          <br />
          Don’t leave without saying hello.
        </p> */}

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="box-border w-full p-[20px] mb-[20px] bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] "
          />
          <input
            type="email"
            placeholder="Email"
            className="box-border w-full p-[20px] mb-[20px] bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0]"
          />
          <textarea
            rows={6}
            placeholder="Say Hi!"
            className="box-border w-full p-[20px] mb-[20px]  bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0]"
          ></textarea>
          <button
            type="submit"
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
            style={{ fontFamily: 'inter, sans-serif' }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
