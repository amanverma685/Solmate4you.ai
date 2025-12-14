import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const RoadmapItem = ({ phase, title, description, status, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const statusColors = {
    completed: 'bg-green-500',
    current: 'bg-blue-500',
    upcoming: 'bg-gray-300'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-8 pb-8 border-l-2 border-soft-blue/30 last:border-0"
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-soft-blue flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
      </div>
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg ml-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-semibold text-soft-blue bg-soft-blue/20 px-3 py-1 rounded-full">
            {phase}
          </span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            status === 'completed' ? 'bg-green-100 text-green-700' :
            status === 'current' ? 'bg-blue-100 text-blue-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status === 'completed' ? '✓ Completed' : status === 'current' ? '→ In Progress' : '○ Upcoming'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const RoadmapSection = () => {
  const roadmap = [
    {
      phase: 'Current',
      title: 'MVP Development',
      description: 'Building core companion chat functionality, basic voice interaction, and preparing for initial user testing with beta users. This is where we are now—creating the foundation of a friend who listens.',
      status: 'current'
    },
    {
      phase: 'Q2 2025',
      title: 'Beta Launch & Testing',
      description: 'Launch beta version, gather user feedback, refine companion interactions, and expand to iOS and Android platforms.',
      status: 'upcoming'
    },
    {
      phase: 'Q3 2025',
      title: 'Enhanced Features & Sessions',
      description: 'Add interactive sessions with music and games, mood tracking, personalized recommendations, and multi-language support.',
      status: 'upcoming'
    },
    {
      phase: 'Q4 2025',
      title: 'Public Launch & Community',
      description: 'Public launch, community platform, moderation tools, and user connection features to help people find support together.',
      status: 'upcoming'
    },
    {
      phase: '2026',
      title: 'Enterprise & Global Expansion',
      description: 'B2B partnerships with healthcare providers, enterprise features, API access, and international market expansion.',
      status: 'upcoming'
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="roadmap" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-white to-pastel-green/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clear path forward for growth and innovation
          </p>
        </motion.div>
        
        <div className="relative">
          {roadmap.map((item, index) => (
            <RoadmapItem
              key={index}
              phase={item.phase}
              title={item.title}
              description={item.description}
              status={item.status}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection

