import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <motion.div
        animate={isInView ? { 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-6xl mb-6 text-center"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </motion.div>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      icon: '💬',
      title: 'A Listening Companion',
      description: 'Your companion is always there to listen—24/7, without judgment. Have meaningful conversations that feel natural and genuine, reducing loneliness through authentic connection and emotional support.',
    },
    {
      icon: '🎙️',
      title: 'Voice Conversations',
      description: 'Speak naturally, just like talking to a friend. Your companion responds with warmth and understanding, making every conversation feel personal and real, not robotic or scripted.',
    },
    {
      icon: '🎤',
      title: 'Grows With You',
      description: 'With your permission, your companion learns your communication style and preferences over time, becoming more attuned to you. It\'s like a friendship that deepens with every conversation.',
    },
    {
      icon: '🌍',
      title: 'Speaks Your Language',
      description: 'Available in multiple languages, your companion understands you in your native tongue. Breaking down barriers to ensure everyone can find comfort and connection, regardless of where they\'re from.',
    },
    {
      icon: '💚',
      title: 'Supports Your Well-Being',
      description: 'Thoughtful recommendations and gentle support designed to uplift your mood and help you through difficult times. Your companion cares about your mental health and wants to see you thrive.',
    },
    {
      icon: '🔒',
      title: 'Your Safe Space',
      description: 'Complete privacy and security. Your conversations are yours alone—encrypted, confidential, and safe. Share your deepest thoughts knowing you\'re in a judgment-free, secure environment.',
    },
  ]

  return (
    <section id="features" className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-pastel-green/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Features That Make a Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature is designed with your emotional well-being in mind
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

