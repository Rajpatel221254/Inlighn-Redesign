'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Arjun Desai',
        role: 'Full Stack Intern',
        quote:
            'Inlighn gave me the confidence to build real apps. The mentorship was the best part – practical, fast-paced, and inspiring.',
        image: '/intern1.avif',
    },
    {
        name: 'Sneha Ramesh',
        role: 'Data Science Intern',
        quote:
            'This was more than an internship. I got hands-on with machine learning and was guided by real-world data scientists.',
        image: '/intern2.avif',
    },
    {
        name: 'Ravi M.',
        role: 'Cybersecurity Intern',
        quote:
            'I always wanted to work in cyber. This internship gave me real SOC scenarios, practical tasks, and daily reviews.',
        image: '/intern3.avif',
    },
    {
        name: 'Max Morris',
        role: 'UI/UX Design Intern',
        quote:
            'The design sprint was intense and exciting. I learned how to turn ideas into real user flows and prototypes while collaborating with developers.',
        image: '/intern4.avif',
    },
    {
        name: 'Karan Batra',
        role: 'Cloud & DevOps Intern',
        quote:
            'From setting up CI/CD pipelines to working with Docker and AWS, this internship gave me real production-level experience.',
        image: '/intern5.avif',
    }

]

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0)

    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
    const next = () => setIndex((index + 1) % testimonials.length)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-[#121212] text-white py-24 px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                    Hear From Our Interns
                </h2>

                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1c1c2a] p-8 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center"
                        >
                            <Image
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <p className="text-gray-300 text-base md:text-lg mb-6 text-center max-w-xl">
                                “{testimonials[index].quote}”
                            </p>
                            <div className="text-primary font-semibold text-lg">
                                {testimonials[index].name}
                            </div>
                            <div className="text-sm text-gray-400">{testimonials[index].role}</div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1f1f2e] hover:bg-primary rounded-full"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1f1f2e] hover:bg-primary rounded-full"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}
