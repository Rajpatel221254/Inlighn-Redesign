'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'What is Inlighn and what does it offer?',
    answer:
      'Inlighn is a learning platform that provides internships, mentorship, and real-world projects in tech fields like Web Development, Data Science, and more.'
  },
  {
    question: 'Are the internships certified?',
    answer:
      'Yes, every internship includes a verified certificate and completion letter you can showcase on your resume or LinkedIn.'
  },
  {
    question: 'Is any prior experience required?',
    answer:
      'No prior experience is required. Our programs are designed for beginners with guidance from industry experts.'
  },
  {
    question: 'How do I apply for an internship?',
    answer:
      'You can apply through our Programs section. Click "Apply Now" on your desired field and fill out the form.'
  }
]

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-[#0f0f1c] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
