'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BlobBackground from './BlobBackground'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  return (
    <section className="relative bg-dark text-white py-24 px-6 md:px-10 overflow-hidden min-h-screen flex items-center">
      {/* Floating Background Blobs */}
      <BlobBackground color1="bg-pink-500" color2="bg-yellow-400" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Step Into <span className="text-primary">Future Tech</span> <br />
            With Inlighn Internships
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Get real-world experience with expert-led programs in Cybersecurity, Full Stack Development, and Data Science — built for future tech leaders.
          </p>
          <div className="text-2xl md:text-3xl font-medium text-white mb-6">
            <TypeAnimation
              sequence={['Build.', 1000, 'Learn.', 1000, 'Grow.', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div>
            <Link href="/Programs">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(76,73,237,0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-600 px-6 py-3 rounded-full text-white font-semibold text-lg shadow-md transition-all"
              >
                Explore Programs
              </motion.button>
            </Link>
      </div>
        </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src="/Online learning-amico.png"
          alt="Internship Hero"
          width={500}
          height={500}
          className="w-full max-w-sm md:max-w-md object-contain"
        />
      </motion.div>
    </div>

      {/* Scroll Down Indicator */ }
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8 }}
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
  >
    <a href="#Programs" className="flex flex-col items-center text-sm text-gray-400 hover:text-primary transition">
      ↓
      <span className="animate-bounce mt-1 text-xs">Scroll Down</span>
    </a>
  </motion.div>
    </section >
  )
}
