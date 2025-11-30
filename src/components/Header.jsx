import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'welcome', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'preview', label: 'Preview' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'technology', label: 'Technology' },
    { id: 'impact', label: 'Impact' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-soft-blue/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('welcome')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-soft-blue to-soft-green flex items-center justify-center">
              <span className="text-2xl">💙</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">solmate4you.ai</h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-700 hover:text-soft-blue font-medium rounded-lg hover:bg-soft-blue/10 transition-all duration-300 text-sm"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => scrollToSection('welcome')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-soft-blue to-soft-green text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Building an MVP
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-soft-blue/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-soft-blue/10 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('welcome')}
              className="w-full mt-2 px-4 py-2.5 bg-gradient-to-r from-soft-blue to-soft-green text-white rounded-full font-semibold shadow-lg"
            >
              Building an MVP
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header

