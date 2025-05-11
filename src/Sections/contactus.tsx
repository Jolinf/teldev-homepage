import { motion } from 'framer-motion';
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

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: '#FFFFFF',
    color: '#0F1729',
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const ContactUsPage = () => {
  return (
    <section className="px-[10%] py-20 box-border mt-10 bg-[#0A0A0A] text-white font-inter">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-20 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Schedule Your Free Consultation Today!
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
        {/* Image */}

        <img
          src={contactpicture}
          alt="AI Consultation"
          className="w-full max-w-sm md:max-w-md scale-x-[-1]"
        />

        {/* Form */}
        <motion.form
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            { type: 'text', placeholder: 'Name' },
            { type: 'email', placeholder: 'Email' },
            { type: 'text', placeholder: 'Session Topic' },
          ].map(({ type, placeholder }, idx) => (
            <motion.input
              key={idx}
              type={type}
              placeholder={placeholder}
              className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all"
              whileFocus="focus"
              variants={inputVariants}
            />
          ))}

          <motion.select
            defaultValue=""
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all"
            variants={inputVariants}
            whileFocus="focus"
          >
            <option value="" disabled>
              Select your time zone
            </option>
            {timeZones.map((tz) => (
              <option key={tz} value={tz} className="text-black">
                {tz}
              </option>
            ))}
          </motion.select>

          <motion.select
            defaultValue=""
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all"
            variants={inputVariants}
            whileFocus="focus"
          >
            <option value="" disabled>
              Select preferred time
            </option>
            {timeSlots.map((time) => (
              <option key={time} value={time} className="text-black">
                {time}
              </option>
            ))}
          </motion.select>

          <motion.select
            defaultValue=""
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all"
            variants={inputVariants}
            whileFocus="focus"
          >
            <option value="" disabled>
              How did you hear about us?
            </option>
            {sources.map((source) => (
              <option key={source} value={source} className="text-black">
                {source}
              </option>
            ))}
          </motion.select>

          <motion.textarea
            rows={4}
            placeholder="Additional notes"
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all resize-none"
            whileFocus="focus"
            variants={inputVariants}
          />

          <motion.div className="flex items-start gap-2" variants={inputVariants}>
            <input type="checkbox" className="mt-1 border border-gray-600 accent-blue-600" />
            <label className="text-sm text-gray-300">
              By checking this box you agree to our{' '}
              <a
                href="https://drive.google.com/file/d/1WgnbAN0rfbcewvMtAXZelDz0y4F9Ahh-/view?usp=sharing"
                className="underline text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & conditions
              </a>{' '}
              and{' '}
              <a
                href="https://drive.google.com/file/d/1trONfW-oyeROXwOrZ4rvTmXCc5nw4kq-/view?usp=sharing"
                className="underline text-white"
              >
                Privacy policy
              </a>
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="px-6 py-3 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] text-sm sm:text-base w-full sm:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUsPage;
