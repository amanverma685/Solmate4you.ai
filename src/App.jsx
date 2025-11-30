import React from 'react'
import Header from './components/Header'
import WelcomeSection from './components/WelcomeSection'
import FeaturesSection from './components/FeaturesSection'
import MobileScreensSection from './components/MobileScreensSection'
import StatisticsSection from './components/StatisticsSection'
import TechnologySection from './components/TechnologySection'
import ImpactSection from './components/ImpactSection'
import RoadmapSection from './components/RoadmapSection'
import DeveloperSection from './components/DeveloperSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div>
        <WelcomeSection />
        <FeaturesSection />
        <MobileScreensSection />
        <StatisticsSection />
        <TechnologySection />
        <ImpactSection />
        <RoadmapSection />
        <DeveloperSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default App

