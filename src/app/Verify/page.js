'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlobBackground from '../Components/BlobBackground'
import Image from 'next/image'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function VerifyPage() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const { width, height } = useWindowSize()

  const handleVerify = () => {
    if (code.trim().toLowerCase() === 'inlighn123') {
      setResult({ status: 'valid', message: '✅ Certificate Verified Successfully!' })
    } else {
      setResult({ status: 'invalid', message: '❌ Invalid Certificate Code. Please try again.' })
    }
  }

  return (
    <section className="relative min-h-screen bg-[#101014] text-white py-28 px-6 md:px-10 overflow-hidden">
      <BlobBackground color1="bg-green-400" color2="bg-purple-500" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
        >
          Verify Certificate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 mb-8 text-lg"
        >
          Enter your certificate code below to confirm its authenticity.
        </motion.p>

        {/* Input + Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Certificate Code - inlighn123 for demo"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-[#1c1c2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVerify}
            className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-md shadow-md font-medium"
          >
            Verify
          </motion.button>
        </motion.div>

        {/* Result Area */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mt-6 text-lg font-medium ${
                result.status === 'valid' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {result.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certificate Preview Below Form */}
      {result?.status === 'valid' && (
        <div className="relative z-10 max-w-4xl mx-auto mt-12 bg-[#1a1a27] p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Certificate Preview</h2>
          <Image
            src="/certificate.webp"
            alt="Sample Certificate"
            width={1000}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
          <a
            href="certificate.webp"
            download="Inlighn-Certificate.png"
            className="mt-6 inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition"
          >
            Download Certificate
          </a>
        </div>
      )}

      {/* 🎉 Confetti Trigger */}
      {result?.status === 'valid' && (
        <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />
      )}
    </section>
  )
}
