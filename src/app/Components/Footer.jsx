'use client'

import { motion } from 'framer-motion'
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[#121212] text-gray-300 pt-16 pb-8 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Glowing Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10 relative z-10">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Inlighn</h2>
          <p className="text-sm text-gray-400">
            Building the future with immersive internships and global mentorships.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/About' },
              { name: 'Programs', href: '/Programs' },
              { name: 'Verify', href: '/Verify' },
              { name: 'Contact', href: '/Contact' },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-primary transition duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Connect</h3>
          <div className="flex space-x-4 text-xl">
            {[FaGlobe, FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: "#4C49ED" }}
                className="transition-all text-gray-400"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs mt-6 text-gray-500 z-10 relative">
        © {new Date().getFullYear()} Inlighn Tech. All rights reserved.
      </div>
    </motion.footer>
  )
}
