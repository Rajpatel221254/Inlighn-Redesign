'use client'
import React from 'react'
import FadeUpWrapper from "./FadeUpWrapper"


const OfferSection = () => {
  return (
    <>
       <section className="relative bg-[#13131a] py-20 px-6 md:px-10 text-center">
         <div className="absolute top-[-80px] left-[-100px] w-[200px] h-[200px] bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[150px] h-[150px] bg-primary rounded-full blur-2xl opacity-20 animate-pulse z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10 text-left">
          {[
            {
              title: "Real-World Projects",
              desc: "Work on tasks inspired by real industry challenges.",
              icon: "🛠️"
            },
            {
              title: "Expert Mentors",
              desc: "Guidance from professionals across industries.",
              icon: "👨‍🏫"
            },
            {
              title: "Certifications",
              desc: "Earn credible certificates for your growth.",
              icon: "📜"
            },
          ].map((item, i) => (
            <FadeUpWrapper key={i} delay={i * 0.2}>
            <div
              key={i}
              className="bg-[#1b1b2f] p-6 rounded-xl hover:shadow-xl transition-all duration-300 h-[170px]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default OfferSection
