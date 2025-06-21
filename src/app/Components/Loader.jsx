'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0f0f1c] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="flex flex-col items-center"
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <Image
                src="/Logo.png"
                width={96}
                height={96}
                alt="Logo"
                className="relative z-10 rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-6 text-lg text-white tracking-widest font-semibold"
            >
              <TypeAnimation
                sequence={[
                  'Preparing your Inlighn experience...',
                  1200,
                  'Launching UI magic...',
                  1200,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
