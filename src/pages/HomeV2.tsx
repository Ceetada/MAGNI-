import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavbarV2 from '../components/v2/NavbarV2'
import HeroV2 from '../components/v2/HeroV2'
import About from '../components/About'
import ServicesV2 from '../components/v2/ServicesV2'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import useSeo from '../hooks/useSeo'

/** The homepage (Aspect-inspired redesign). The original design is archived
 *  at /classic. */
export default function HomeV2() {
  const location = useLocation()

  useSeo({
    title: 'Magni Automations — AI Systems That Save Time and Grow Your Business',
    description:
      'Magni Automations is an AI automation agency that designs and builds custom AI systems that remove bottlenecks, convert more leads, and give your team hours back every week.',
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
    <div className="bg-white">
      <NavbarV2 />
      <HeroV2 />
      <About />
      <ServicesV2 />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
