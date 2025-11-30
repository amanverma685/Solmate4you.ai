import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the email
    alert('Thank you for your interest! We\'ll be in touch soon.')
    setEmail('')
  }

  return (
    <section id="contact" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-green/30 to-soft-blue/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're looking for partners, investors, and collaborators who share our vision 
            of using technology to improve mental health and reduce loneliness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 rounded-full border-2 border-soft-blue/30 focus:border-soft-blue focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-soft-blue to-soft-green text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Information
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">💼</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Investment Opportunities</h4>
            <p className="text-gray-600 text-sm">
              Join us in scaling our impact and reaching millions of users worldwide.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Partnerships</h4>
            <p className="text-gray-600 text-sm">
              Collaborate with healthcare providers, organizations, and technology partners.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Join the Team</h4>
            <p className="text-gray-600 text-sm">
              We're always looking for talented individuals passionate about mental health tech.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-gray-600"
        >
          <p className="text-sm">
            © 2024 solmate4you.ai. Building the future of mental health support.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

