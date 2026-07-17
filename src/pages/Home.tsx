import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import useSeo from '../hooks/useSeo'

export default function Home() {
  const location = useLocation()

  useSeo({
    title: 'Magni Automations — AI Automation Agency for Lead Capture & Growth',
    description:
      'Magni Automations is an AI automation agency that designs and builds custom AI systems, n8n workflows, and voice agents to capture leads, support customers, and scale businesses on autopilot.',
    path: '/',
  })

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // wait a tick so layout has settled before scrolling
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
      }
    }
  }, [location.hash])

  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
