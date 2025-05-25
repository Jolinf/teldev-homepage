import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
    backgroundColor: '#1E64F0',
    color: '#FFFFFF',
    transition: { duration: 0.3 },
    boxShadow: '0 0 8px rgba(30, 100, 240, 0.6)',
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const ContactUsPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    emailjs
      .sendForm('service_i49mbu6', 'template_z0ptc85', formRef.current, 'ABjR7dcIG-jyKBjex')
      .then(() => {
        alert('✅ Message sent successfully!');
        formRef.current?.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error('❌ EmailJS error:', error);
        alert('Something went wrong. Please try again.');
        setSending(false);
      });
  };

  return (
    <section
      className="px-[10%] py-20 box-border mt-10 bg-[#0A0A0A] text-white font-inter text-center"
      aria-label="Contact Us Section"
    >
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-20 text-center leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        tabIndex={-1}
      >
        Schedule Your Free Consultation Today!
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
        <img
          src={contactpicture}
          alt="Person consulting with AI technology illustration"
          className="w-full max-w-sm md:max-w-md scale-x-[-1] rounded-lg shadow-lg"
          loading="lazy"
        />

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          noValidate
        >
          <fieldset className="space-y-5 border-0 p-0 m-0">
            <motion.div variants={inputVariants}>
              <label htmlFor="user_name" className="block mb-1 font-semibold text-white/90">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="user_email" className="block mb-1 font-semibold text-white/90">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="topic" className="block mb-1 font-semibold text-white/90">
                Session Topic
              </label>
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="Topic to discuss"
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="timezone" className="block mb-1 font-semibold text-white/90">
                Select your time zone <span className="text-red-500">*</span>
              </label>
              <select
                id="timezone"
                name="timezone"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/80 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
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
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="preferred_time" className="block mb-1 font-semibold text-white/90">
                Select preferred time <span className="text-red-500">*</span>
              </label>
              <select
                id="preferred_time"
                name="preferred_time"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/80 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
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
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="referral_source" className="block mb-1 font-semibold text-white/90">
                How did you hear about us? <span className="text-red-500">*</span>
              </label>
              <select
                id="referral_source"
                name="referral_source"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white/80 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {sources.map((source) => (
                  <option key={source} value={source} className="text-black">
                    {source}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="notes" className="block mb-1 font-semibold text-white/90">
                Additional notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Additional notes"
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/60 rounded-[10px] outline-none focus:ring-2 focus:ring-[#1E64F0] resize-none"
              />
            </motion.div>

            <motion.div className="flex items-start gap-2" variants={inputVariants}>
              <input
                id="terms_agreed"
                name="terms_agreed"
                type="checkbox"
                className="mt-1 border border-gray-600 accent-blue-600 focus:ring-blue-500 focus:ring-2"
                required
              />
              <label htmlFor="terms_agreed" className="text-sm text-gray-300 select-none">
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy policy
                </a>
              </label>
            </motion.div>
          </fieldset>

          <motion.button
            type="submit"
            disabled={sending}
            className="px-6 py-3 my-5 bg-[#1E64F0] border-0 text-white font-semibold rounded-[10px] text-base w-full sm:w-auto transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-400"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Submit consultation request"
          >
            {sending ? 'Sending...' : 'Submit'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUsPage;
