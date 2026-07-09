import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()

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
      <Services />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}
