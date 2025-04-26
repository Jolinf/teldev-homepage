// src/sections/Hero.tsx
import heroImage from '../../assets/Homepage-images/Homepage-herosection image.jpg';

export default function Hero() {
  return (
    <section className="box-border px-[10%] relative min-h-screen w-full flex items-center justify-center text-center m-0 p-[0] px-[10%] sm:px-6 md:px-8 lg:px-[100px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 h-full w-full bg-[#000000] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[90rem] sm:px-6 md:px-8">
        <h1
          className="text-[#FFFFFF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-semibold mb-4 sm:mb-5 md:mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Bringing Technology to <span className="text-[#1C6CFE]">You</span>
        </h1>

        <p
          className="text-[#FFFFFF] w-full sm:w-[70%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Delivering innovative software solutions, IT consulting, and cybersecurity to help your
          business thrive in a digital world.
        </p>

        <div className="flex justify-center gap-4 sm:gap-6">
          <button
            className="px-8 sm:px-36 py-4 sm:py-20 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#0F1729] text-sm sm:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get started
          </button>

          {/* <button
            className="h-[48px] w-[120px] px-9 py-5 border-[3px] border-[#FFFFFF] bg-transparent text-[#1C6CFE] font-medium rounded-[10px] transition duration-300 hover:text-[#FFFFFF] hover:border-[#0F1729]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Learn more
          </button> */}
        </div>
      </div>
    </section>
  );
}
