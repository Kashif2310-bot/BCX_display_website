import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Understanding from './components/Understanding'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import Impact from './components/Impact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for anchor links
    const handleClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="relative noise-overlay">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <Understanding />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Solution />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Impact />
        <Footer />
      </div>
    </div>
  )
}

export default App
