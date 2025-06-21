'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen px-6 py-28 bg-[#0f0f1c] text-white flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-primary mb-4"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-400 text-center max-w-xl mb-8"
      >
        Reach out for collaborations, questions or just to say hi. We’d love to hear from you.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-[#1a1a2e] w-full max-w-2xl p-8 rounded-xl shadow-lg flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 rounded-md bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 rounded-md bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <textarea
          rows="5"
          placeholder="Your Message"
          className="px-4 py-3 rounded-md bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-primary text-white px-6 py-3 rounded-md font-medium shadow-md"
        >
          Send Message <FiSend className="text-lg" />
        </motion.button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 font-medium text-center"
          >
            ✅ Thank you! Your message has been received.
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}
