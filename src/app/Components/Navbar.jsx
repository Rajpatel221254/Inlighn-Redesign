'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Programs', href: '/Programs' },
  { name: 'Verify', href: '/Verify' },
  { name: 'Contact', href: '/Contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id='nav'
      className={`overflow-hidden w-[98%] fixed top-0 z-50 transition-all bg-[#0f0f1c]/70 backdrop-blur-md shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Logo.png" width={32} height={32} alt="Logo" />
          <span className="text-xl font-bold text-white">Inlighn</span>
        </Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-ms font-medium">
          {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition duration-200"
              >
                {link.name}
              </Link>
          ))}
          <Link href="/Programs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -2, 0],
                boxShadow: [
                  '0 0 0px rgba(0,0,0,0)',
                  '0 0 12px rgba(76,73,237,0.4)',
                  '0 0 0px rgba(0,0,0,0)',
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-gradient-to-r from-purple-600 to-primary text-white px-5 py-2 rounded-full text-sm font-medium shadow-md"
            >
              Join Now
            </motion.button>
          </Link>


        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 bg-[#0f0f1c]/80 backdrop-blur"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-gray-300 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/Programs" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-primary text-white px-4 py-2 rounded-full text-center font-medium shadow"
              >
                Join Now
              </motion.button>
            </Link>


          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
