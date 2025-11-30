import React from 'react'
import { motion } from 'framer-motion'

const WelcomeSection = () => {
  return (
    <section id="welcome" className="flex items-center justify-center px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            A Friend Who Always Listens
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8"
          >
            solmate4you.ai is your harmless companion—a gentle friend who listens whenever you need someone to talk to, 
            without judgment, without expectations, just pure understanding.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            In moments of loneliness, when you need someone to hear you, your companion is there. 
            Available in your language, understanding your feelings, and offering the comfort of genuine connection. 
            Not a bot, not an agent—just a friend who cares.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-soft-blue/50 to-soft-green/50 flex items-center justify-center backdrop-blur-sm shadow-lg">
            <span className="text-8xl">💙</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WelcomeSection

