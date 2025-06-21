'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import TestimonialCarousel from '../Components/Testimonial'
import BlobBackground from '../Components/BlobBackground'

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Cybersecurity Internship',
      desc: 'Get trained on ethical hacking, threat detection, and real-world SOC simulations.',
      points: [
        'Hands-on labs & simulations',
        'Certified curriculum (CEH-like)',
        'Daily security briefings',
      ],
      image: '/cyber.avif',
    },
    {
      title: 'Full Stack Development',
      desc: 'Master frontend & backend development with real-world projects and team collaboration.',
      points: [
        'React, Node.js, Express, MongoDB',
        'Responsive UI design and routing',
        'REST APIs and deployment pipelines',
      ],
      image: '/full-stack.avif',
    },
    {
      title: 'Data Science & AI',
      desc: 'Dive into data, analytics, and machine learning using Python and cloud tools.',
      points: [
        'Pandas, NumPy, Matplotlib, Scikit-Learn',
        'ML models, tuning and evaluation',
        'AI projects with real datasets',
      ],
      image: '/data-science.avif',
    },
  ]

  return (
    <main className="relative bg-[#0e0e13] text-white overflow-hidden z-10 pt-18 ">
      {/* Background Glow Blobs */}
     <BlobBackground color1='bg-red-500' color2='bg-indigo-600'/>

      {programs.map((program, index) => (
        <section
          key={index}
          className={`relative py-20 px-6 md:px-10 z-10`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {program.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6">{program.desc}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                {program.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition-all"
              >
                Apply Now
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={500}
                className="rounded-xl shadow-xl mx-auto"
              />
            </motion.div>
          </div>
        </section>
      ))}
      <TestimonialCarousel/>
    </main>
  )
}