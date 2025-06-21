'use client'
import React from 'react'
import Link from "next/link"
import FadeUpWrapper from "./FadeUpWrapper"
import { motion } from 'framer-motion'


const CTASection = () => {
  return (
    <>
      <section className="relative bg-dark py-20 px-6 md:px-10 text-center flex justify-center items-center gap-[15px] flex-col ">
        <div className="absolute top-[-80px] left-[50%] transform -translate-x-1/2 w-[250px] h-[250px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
        <FadeUpWrapper>
          <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-gray-300 mb-5 max-w-xl mx-auto">
            Join our internship programs and get real-world experience guided by industry experts.
          </p>
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
        </FadeUpWrapper>
      </section>
    </>
  )
}

export default CTASection
