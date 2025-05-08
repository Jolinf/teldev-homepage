import contactpicture from '../assets/contacus-image.png';

const timeZones = [
  'UTC−12:00',
  'UTC−11:00',
  'UTC−10:00',
  'UTC−09:00',
  'UTC−08:00',
  'UTC−07:00',
  'UTC−06:00',
  'UTC−05:00',
  'UTC−04:00',
  'UTC−03:00',
  'UTC−02:00',
  'UTC−01:00',
  'UTC±00:00',
  'UTC+01:00',
  'UTC+02:00',
  'UTC+03:00',
  'UTC+04:00',
  'UTC+05:00',
  'UTC+06:00',
  'UTC+07:00',
  'UTC+08:00',
  'UTC+09:00',
  'UTC+10:00',
  'UTC+11:00',
  'UTC+12:00',
  'UTC+13:00',
  'UTC+14:00',
];

const timeSlots = Array.from({ length: 24 }, (_, hour) => `${hour.toString().padStart(2, '0')}:00`);

const sources = ['Instagram', 'LinkedIn', 'Facebook', 'X', 'TikTok'];

const ContactUsPage = () => {
  return (
    <section className="px-[10%] justify-center bg-[#0A0A0A] text-[#FFFFFF] py-30 sm:px-6 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
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
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
            />

            <select
              className="w-full px-4 py-2 bg-transparent border text-white/60 border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
              defaultValue=""
            >
              <option value="" disabled>
                Select your time zone
              </option>
              {timeZones.map((tz) => (
                <option key={tz} value={tz} className="text-black">
                  {tz}
                </option>
              ))}
            </select>

            <select
              className="w-full px-4 py-2 bg-transparent text-white/60 border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
              defaultValue=""
            >
              <option value="" disabled>
                Select preferred time
              </option>
              {timeSlots.map((time) => (
                <option key={time} value={time} className="text-black">
                  {time}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Session Topic"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
            />

            <select
              className="w-full px-4 py-2 mr-1 bg-transparent text-white/60 border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
              defaultValue=""
            >
              <option value="" disabled>
                How did you hear about us?
              </option>
              {sources.map((source) => (
                <option key={source} value={source} className="text-black">
                  {source}
                </option>
              ))}
            </select>

            <textarea
              rows={4}
              placeholder="Additional notes"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-[10px] outline-none focus:border-[#1E64F0]"
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
              className="px-6 py-4 bg-[#1E64F0] text-white rounded hover:bg-[#0F1729] transition-all text-sm"
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
