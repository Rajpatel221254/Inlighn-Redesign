'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TeamSection from '../Components/TeamSection'
import TimelineSection from '../Components/TimelineSection'
import BlobBackground from '../Components/BlobBackground'

export default function AboutPage() {
  return (
    <section className="relative bg-dark text-white px-6 md:px-10 py-24 min-h-screen overflow-hidden">
      {/* 🌟 Glowing Background Blobs */}
     <BlobBackground color1="bg-teal-500" color2="bg-cyan-400" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Inlighn Tech</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We’re redefining internships by combining real-world projects, industry mentors, and future-ready skills into a powerful learning experience.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To bridge the gap between education and employment by empowering students with hands-on experience, real mentorship, and tech confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/About-photo1.png" // replace with your image
              alt="Our Mission"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 text-center"
        >
          {[
            { label: 'Interns Trained', value: '5,000+' },
            { label: 'Programs Offered', value: '12+' },
            { label: 'Global Reach', value: '15+ Countries' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1b1b2f] p-6 rounded-xl shadow hover:scale-105 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <TeamSection/>
      <TimelineSection/>
    </section>
  )
}
