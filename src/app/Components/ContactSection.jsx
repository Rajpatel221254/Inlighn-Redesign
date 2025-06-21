'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="bg-dark py-20 px-6 md:px-10 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let’s Talk!
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Want to partner, ask a question, or join our internship programs?
          </p>
          <p className="text-gray-400 text-sm">
            Reach out using this form, and we’ll get back to you shortly.
          </p>
        </motion.div>

        {/* Right Form Side */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1b1b2f] p-6 rounded-xl shadow-xl space-y-5"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
