import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TechBadge = ({ name, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      <span className="text-gray-700 font-semibold">{name}</span>
    </motion.div>
  )
}

const TechnologySection = () => {
  const technologies = [
    'Advanced NLP', 'Machine Learning', 'Voice Recognition', 'Sentiment Analysis',
    'Cloud Infrastructure', 'Real-time Processing', 'Data Encryption', 'API Integration',
    'Mobile Development', 'Web Technologies', 'Natural Language Understanding', 'Emotional Intelligence'
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="technology" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-blue/30 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Built with Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging advanced technology to create genuine, empathetic connections and deliver an exceptional experience
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {technologies.map((tech, index) => (
            <TechBadge key={index} name={tech} delay={index * 0.05} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Understanding & Empathy</h3>
            <p className="text-gray-600">
              Advanced technology designed to understand context, emotions, and nuance in conversation. 
              Trained to respond with genuine empathy and care, making every interaction feel natural and meaningful.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">
              End-to-end encryption, secure data storage, and privacy-first architecture 
              ensuring your conversations remain completely confidential.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-600">
              Cloud-based architecture designed to scale seamlessly, handling millions of 
              conversations with low latency and high reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection

