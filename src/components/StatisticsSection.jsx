import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const StatCard = ({ number, label, suffix = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="text-center"
    >
      <motion.div
        animate={isInView ? { 
          scale: [1, 1.1, 1],
        } : {}}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-soft-blue to-soft-green bg-clip-text text-transparent mb-2"
      >
        {number}{suffix}
      </motion.div>
      <p className="text-lg text-gray-600 font-medium">{label}</p>
    </motion.div>
  )
}

const StatisticsSection = () => {
  const stats = [
    { number: '10K+', label: 'Active Users', suffix: '+' },
    { number: '500K+', label: 'Conversations', suffix: '+' },
    { number: '95%', label: 'User Satisfaction', suffix: '%' },
    { number: '24/7', label: 'Availability', suffix: '' },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="statistics" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-green/30 to-pastel-blue/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real users who trust solmate4you.ai
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Growing Fast</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our user base is expanding rapidly as more people discover the value of 
                having a compassionate companion. We're seeing strong engagement metrics 
                and positive feedback across all platforms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Users report significant improvements in their mental well-being, with 
                measurable reductions in feelings of loneliness and increased sense of 
                connection and support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatisticsSection

