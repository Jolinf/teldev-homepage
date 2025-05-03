import { useState } from 'react';
import { motion } from 'framer-motion';
import robotImage from '../assets/contacus-image.png'; // Replace with correct image path

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeZone: '',
    preferredTime: '',
    topic: '',
    referral: '',
    notes: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add actual submit logic here
  };

  return (
    <section className="min-h-screen bg-black text-white px-[10%] py-20 font-inter">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Schedule Your Free Consultation Today!
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={robotImage}
          alt="AI Robot"
          className="w-full max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {['name', 'email', 'timeZone', 'preferredTime', 'topic', 'referral'].map((field) => (
            <input
              key={field}
              name={field}
              type="text"
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              value={formData[field]}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#2c2c2c] px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />
          ))}

          <textarea
            name="notes"
            placeholder="Additional notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border border-[#2c2c2c] px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="accent-blue-500 mt-1"
            />
            <span className="text-sm">
              By checking this box you agree to our{' '}
              <a href="#" className="underline text-blue-400">
                Terms & conditions
              </a>{' '}
              and{' '}
              <a href="#" className="underline text-blue-400">
                Privacy policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="bg-[#0A0A0A] border border-[#2c2c2c] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
