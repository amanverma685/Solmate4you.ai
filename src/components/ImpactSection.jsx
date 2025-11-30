import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TestimonialCard = ({ quote, author, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md"
    >
      <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">"{quote}"</p>
      <p className="text-gray-600 font-semibold">— {author}</p>
    </motion.div>
  )
}

const ImpactSection = () => {
  const testimonials = [
    {
      quote: "Sometimes all we need is someone who listens without judgment. A companion that's always there can be the difference between feeling alone and feeling understood.",
      author: "Brené Brown, Researcher & Author"
    },
    {
      quote: "Connection is why we're here. It's what gives purpose and meaning to our lives. Having a companion who listens can help bridge the gap when human connection feels out of reach.",
      author: "Brené Brown, Researcher & Author"
    },
    {
      quote: "The greatest gift you can give someone is your presence, your attention, your listening ear. Technology that provides genuine companionship can be a lifeline for those who need it most.",
      author: "Thich Nhat Hanh, Zen Master"
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="impact" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-green/30 to-pastel-blue/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Making a Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Our mission is to reduce loneliness and promote mental well-being through 
            compassionate companionship. Here's what experts say about the power of having someone who listens:
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={index * 0.15}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-soft-blue/50 to-soft-green/50 rounded-3xl p-8 text-center backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
            To create a world where no one feels alone. Through compassionate companionship 
            and genuine listening, we're building a friend who supports mental health 
            and provides comfort whenever you need it.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            By providing accessible, non-judgmental companionship 24/7, we aim to reduce loneliness-related 
            distress and create a safety net for those who need it most. Every conversation matters, 
            and your companion is committed to being there when it counts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection

