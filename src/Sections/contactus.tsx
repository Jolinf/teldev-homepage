import React from 'react';
import contactpicture from '../assets/contacus-image.png';

const ContactUsPage = () => {
  return (
    <section className="px-[10%] justify-center bg-[#0A0A0A] text-[#FFFFFF] py-30 sm:px-6 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-right">
        Schedule Your Free Consultation Today!
      </h1>
      <div className="min-h-screen text-white grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={contactpicture}
            alt="AI Consultation"
            className="w-full max-w-sm md:max-w-md scale-x-[-1]"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <input
              type="text"
              placeholder="Time zone"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <input
              type="text"
              placeholder="Preferred time"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <input
              type="text"
              placeholder="Session Topic"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <input
              type="text"
              placeholder="How did you hear about us"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            />
            <textarea
              rows={4}
              placeholder="Additional notes"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded outline-none focus:border-white"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 border border-gray-600 accent-blue-600" />
              <label className="text-sm text-gray-300">
                By checking this box you agree to our{' '}
                <a href="#" className="underline text-white">
                  Terms & conditions
                </a>{' '}
                and{' '}
                <a href="#" className="underline text-white">
                  Privacy policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300 transition-all text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
