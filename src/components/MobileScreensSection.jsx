import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const VoiceChatScreen = ({ delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)
  const [isListening, setIsListening] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0
      } : { opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        } : {
          scale: 1,
          rotate: 0
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -z-10 w-72 h-72 -top-10 -left-4 bg-gradient-to-br from-soft-blue/20 to-soft-green/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={isHovered ? {
          y: -10,
          rotateX: 5,
        } : {
          y: 0,
          rotateX: 0
        }}
        transition={{ duration: 0.3 }}
        className="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] flex flex-col">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-4 py-2 flex justify-between items-center text-white text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 border border-white rounded-sm"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-3 py-2.5 text-white relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <div className="flex items-center gap-2 relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border-2 border-white/30 flex-shrink-0"
              >
                <span className="text-lg">💙</span>
              </motion.div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm truncate">solmate4you.ai</h3>
                <motion.p
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-xs opacity-90 truncate"
                >
                  {isListening ? 'Listening...' : 'Always here'}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Voice/Text Toggle */}
          <div className="px-3 py-2.5 bg-gray-50 border-b border-gray-200">
            <div className="flex gap-2 bg-white rounded-full p-1">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-2 rounded-full bg-gradient-to-r from-soft-blue to-soft-green text-white text-sm font-semibold shadow-sm"
              >
                🎤 Voice
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-2 rounded-full text-gray-600 text-sm font-semibold"
              >
                💬 Text
              </motion.button>
            </div>
          </div>

          {/* Voice Waveform Area */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
            <div className="text-center">
              <motion.div
                animate={isListening ? {
                  scale: [1, 1.2, 1],
                } : {
                  scale: 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: isListening ? Infinity : 0
                }}
                className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-soft-blue to-soft-green flex items-center justify-center shadow-lg"
              >
                <span className="text-5xl">🎤</span>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {isListening ? 'Listening...' : 'Tap to speak'}
              </h4>
              <p className="text-sm text-gray-500">
                Your companion is ready to listen
              </p>
              
              {/* Waveform visualization */}
              <div className="flex items-center justify-center gap-1 mt-6 h-12">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={isListening ? {
                      height: [4, Math.random() * 32 + 8, 4],
                    } : {
                      height: 4
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isListening ? Infinity : 0,
                      delay: i * 0.05
                    }}
                    className="w-1 bg-gradient-to-t from-soft-blue to-soft-green rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsListening(!isListening)}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-soft-blue to-soft-green text-white font-semibold shadow-lg"
              >
                {isListening ? '⏸ Stop' : '▶ Start Voice Chat'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
        className="text-center mt-4 font-semibold text-gray-700"
      >
        Voice Companion
      </motion.h4>
    </motion.div>
  )
}

const SessionsScreen = ({ delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  const sessions = [
    { icon: '🧘', title: 'Therapy Sessions', subtitle: 'Guided therapy & counseling', color: 'from-soft-blue to-soft-green' },
    { icon: '🎵', title: 'Soulful Songs', subtitle: 'Calming melodies for your soul', color: 'from-soft-green to-soft-blue' },
    { icon: '🎶', title: 'Melodies', subtitle: 'Peaceful instrumental music', color: 'from-soft-blue to-soft-green' },
    { icon: '🌙', title: 'Sleep Therapy', subtitle: 'Restful sounds for better sleep', color: 'from-soft-green to-soft-blue' },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0
      } : { opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        } : {
          scale: 1,
          rotate: 0
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -z-10 w-72 h-72 -top-10 -left-4 bg-gradient-to-br from-soft-blue/20 to-soft-green/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={isHovered ? {
          y: -10,
          rotateX: 5,
        } : {
          y: 0,
          rotateX: 0
        }}
        transition={{ duration: 0.3 }}
        className="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] flex flex-col">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-4 py-2 flex justify-between items-center text-white text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 border border-white rounded-sm"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-4 py-3 text-white">
            <h3 className="font-semibold text-lg">Sessions</h3>
            <p className="text-xs opacity-90">Choose your wellness journey</p>
          </div>

          {/* Sessions List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
            {sessions.map((session, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: delay + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-4 shadow-md border border-soft-blue/20 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3
                    }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${session.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{session.icon}</span>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{session.title}</h4>
                    <p className="text-xs text-gray-500">{session.subtitle}</p>
                  </div>
                  <span className="text-gray-400">›</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
        className="text-center mt-4 font-semibold text-gray-700"
      >
        Sessions Library
      </motion.h4>
    </motion.div>
  )
}

const ProfileScreen = ({ delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0
      } : { opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        } : {
          scale: 1,
          rotate: 0
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -z-10 w-72 h-72 -top-10 -left-4 bg-gradient-to-br from-soft-blue/20 to-soft-green/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={isHovered ? {
          y: -10,
          rotateX: 5,
        } : {
          y: 0,
          rotateX: 0
        }}
        transition={{ duration: 0.3 }}
        className="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] flex flex-col">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-4 py-2 flex justify-between items-center text-white text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 border border-white rounded-sm"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-soft-blue to-soft-green px-4 py-6 text-white relative overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-gradient-to-br from-soft-green/20 to-soft-blue/20 bg-[length:200%_200%]"
            />
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center"
              >
                <span className="text-4xl">👤</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-1">Your Profile</h3>
              <p className="text-xs opacity-90">Member since 2024</p>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="px-4 py-4 bg-gray-50">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center bg-white rounded-xl p-2.5 shadow-sm">
                <div className="text-xl font-bold text-soft-blue">127</div>
                <div className="text-[10px] text-gray-500 mt-1 leading-tight">Conversations</div>
              </div>
              <div className="text-center bg-white rounded-xl p-2.5 shadow-sm">
                <div className="text-xl font-bold text-soft-green">42</div>
                <div className="text-[10px] text-gray-500 mt-1 leading-tight">Sessions</div>
              </div>
              <div className="text-center bg-white rounded-xl p-2.5 shadow-sm">
                <div className="text-xl font-bold text-soft-blue">15</div>
                <div className="text-[10px] text-gray-500 mt-1 leading-tight">Days Active</div>
              </div>
            </div>
          </div>

          {/* Profile Options */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
            {[
              { icon: '⚙️', title: 'Settings', subtitle: 'Preferences & privacy' },
              { icon: '📊', title: 'Mood Tracking', subtitle: 'View your progress' },
              { icon: '🎯', title: 'Goals', subtitle: 'Your wellness goals' },
              { icon: '🔒', title: 'Privacy', subtitle: 'Data & security' },
              { icon: '💬', title: 'Support', subtitle: 'Help & feedback' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: delay + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-soft-blue/20 to-soft-green/20 flex items-center justify-center">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
                <span className="text-gray-400">›</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
        className="text-center mt-4 font-semibold text-gray-700"
      >
        Your Profile
      </motion.h4>
    </motion.div>
  )
}

const MobileScreensSection = () => {
  const screens = [
    { type: 'voice', component: VoiceChatScreen },
    { type: 'sessions', component: SessionsScreen },
    { type: 'profile', component: ProfileScreen },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="preview" ref={sectionRef} className="flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-pastel-green/30 to-pastel-blue/30 relative overflow-hidden">
      {/* Animated 3D background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-soft-blue/10 to-soft-green/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          rotate: [360, 180, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-soft-green/10 to-soft-blue/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-soft-blue via-soft-green to-soft-blue bg-[length:200%_auto]"
          >
            See Your Companion in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real conversations with a friend who listens, understands, and supports you whenever you need it
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screens.map((screen, index) => {
            const Component = screen.component
            return (
              <Component key={index} delay={index * 0.2} />
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-3xl mx-auto relative overflow-hidden"
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-gradient-to-br from-soft-blue/5 via-soft-green/5 to-soft-blue/5 bg-[length:200%_200%] -z-10"
            />
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
              Your Companion, Your Way
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              Whether you prefer voice conversations, exploring therapy sessions and soulful music, or managing your wellness journey through your profile, your companion adapts to support you in the way that feels most natural.
            </p>
            
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 text-4xl opacity-20"
            >
              💬
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-4 left-4 text-3xl opacity-20"
            >
              💙
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MobileScreensSection
