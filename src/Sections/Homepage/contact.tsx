import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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

  return (
    <section className="bg-black text-[#FFFFFF] px-[10%] py-20 flex justify-center font-inter">
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl text-[2em] md:text-4xl font-semibold text-[#1E64F0] m-[0] mb-[5%]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Don't leave without saying Hi!
        </motion.h2>

        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-[20px] mb-[20px] bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-[20px] mb-[20px] bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Say Hi!"
              className="w-full p-[20px] mb-[20px] bg-[#0a0a0a] border border-[#1E64F0]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300 resize-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              type="submit"
              className="px-6 py-3 bg-[#0F1729] border-[0] text-[#FFFFFF] font-medium rounded-[10px] text-sm sm:text-base w-full sm:w-auto"
              style={{ fontFamily: 'inter, sans-serif' }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
