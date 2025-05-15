import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitStatus('error');
      return;
    }
    setSubmitStatus('idle');
    // TODO: Replace with real submission logic
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const inputVariants = {
    focus: {
      scale: 1.03,
      boxShadow: '0 0 8px rgba(47, 128, 237, 0.7)',
      transition: { duration: 0.25 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.07,
      backgroundColor: '#FFFFFF',
      color: '#0F1729',
      transition: { duration: 0.3 },
      boxShadow: '0 4px 12px rgba(47, 128, 237, 0.6)',
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section
      className="bg-black text-white px-[10%] py-20 flex justify-center font-inter"
      aria-label="Contact form section"
    >
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-[2em] md:text-4xl font-semibold text-[#1E64F0] mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Don't leave without saying Hi!
        </motion.h2>

        <motion.form
          className="space-y-6 text-left"
          onSubmit={handleSubmit}
          noValidate
          aria-live="polite"
          aria-atomic="true"
          role="form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              className={`w-full p-5 bg-[#0a0a0a] border rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300 text-white placeholder-white/60 ${
                errors.name ? 'border-red-500' : 'border-[#1E64F0]/20'
              }`}
              whileFocus="focus"
              variants={inputVariants}
            />
            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="mt-1 text-sm text-red-500 font-semibold select-none"
              >
                {errors.name}
              </p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              className={`w-full p-5 bg-[#0a0a0a] border rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300 text-white placeholder-white/60 ${
                errors.email ? 'border-red-500' : 'border-[#1E64F0]/20'
              }`}
              whileFocus="focus"
              variants={inputVariants}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1 text-sm text-red-500 font-semibold select-none"
              >
                {errors.email}
              </p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Say Hi!"
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              className={`w-full p-5 bg-[#0a0a0a] border rounded-[10px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E64F0] transition-all duration-300 text-white placeholder-white/60 resize-none ${
                errors.message ? 'border-red-500' : 'border-[#1E64F0]/20'
              }`}
              whileFocus="focus"
              variants={inputVariants}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-1 text-sm text-red-500 font-semibold select-none"
              >
                {errors.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              type="submit"
              className="px-6 py-3 bg-[#0F1729] border-0 text-white font-semibold rounded-[10px] text-base w-full sm:w-auto cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Send message"
            >
              Send Message
            </motion.button>
            {submitStatus === 'success' && (
              <p role="alert" className="mt-3 text-green-500 font-semibold select-none">
                Thanks for reaching out! We'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p role="alert" className="mt-3 text-red-500 font-semibold select-none">
                Please fix the errors above before submitting.
              </p>
            )}
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
