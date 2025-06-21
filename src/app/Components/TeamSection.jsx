'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: "Ananya Patel",
    role: "Co-Founder & CEO",
    image: "/team1.png",
  },
  {
    name: "Ravi Verma",
    role: "Lead Mentor",
    image: "/team2.avif",
  },
  {
    name: "Ishaan Mehta",
    role: "Tech Coordinator",
    image: "/team3.avif",
  },
]

export default function TeamSection() {
  return (
    <section className="relative bg-[#121212] text-white py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-[#1c1c2a] p-6 rounded-xl shadow hover:scale-105 transition transform"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={300}
                height={300}
                className="w-full h-56 md:h-64 object-cover object-top rounded-lg"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-400">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
