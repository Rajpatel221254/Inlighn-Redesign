'use client'

import { motion } from 'framer-motion'

const steps = [
  { year: "2021", desc: "Founded by industry mentors to fill the internship gap." },
  { year: "2022", desc: "Launched 3 core programs & trained 1,000+ students." },
  { year: "2023", desc: "Global reach across 10+ countries & new mentors onboarded." },
  { year: "2024", desc: "Partnered with universities and added AI/Data Science track." },
]

export default function TimelineSection() {
  return (
    <section className="relative bg-dark text-white py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Our Journey
        </motion.h2>

        <div className="relative border-l border-gray-700 pl-6 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute left-[-11px] top-1 w-5 h-5 rounded-full bg-primary border-2 border-white"></div>
              <h3 className="text-xl font-bold ml-[15px]">{step.year}</h3>
              <p className="text-gray-400 ml-[15px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
