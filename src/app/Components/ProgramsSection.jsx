'use client'

import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Cybersecurity Internship',
    desc: 'Learn ethical hacking, threat analysis, and network security with hands-on simulations.',
    icon: '🛡️'
  },
  {
    title: 'Full Stack Development',
    desc: 'Master frontend and backend tools like React, Node.js, and databases through real-world projects.',
    icon: '💻'
  },
  {
    title: 'Data Science & AI',
    desc: 'Explore data analysis, machine learning models, and AI applications using Python and TensorFlow.',
    icon: '📊'
  },
]

export default function ProgramSection() {
  return (
    <section id='Programs' className="p relative bg-[#0f0f1c] text-white py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Explore Our Programs
        </motion.h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Designed for future innovators. Choose your path and launch your career.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1b1b2f] p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{program.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{program.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gradient-to-r from-primary to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow hover:shadow-lg"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
