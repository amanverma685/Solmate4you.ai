import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TeamMember = ({ name, role, image, icon, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-soft-blue to-soft-green flex items-center justify-center shadow-lg overflow-hidden"
      >
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl">{icon}</span>
        )}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  )
}

const DeveloperSection = () => {
  const teamMembers = [
    { name: 'Aman Verma', role: 'Backend Developer', image: null, icon: '⚙️' },
    { name: 'Prateek Verma', role: 'Frontend Developer', image: null, icon: '🎨' },
    { name: 'Akash Verma', role: 'Companion Technology Engineer', image: null, icon: '🧠' },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="team" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-blue/30 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate group of developers, designers, and innovators dedicated to 
            creating technology that makes a positive impact on mental health.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              icon={member.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Building the Future of Mental Health Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We're currently in the MVP stage, working tirelessly to bring solmate4you.ai 
              to life. Our team combines expertise in creating meaningful connections, 
              user experience design, and mental health advocacy to build a companion 
              that truly makes a difference in people's lives.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Interested in learning more or partnering with us? We'd love to hear from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperSection

