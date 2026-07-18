import NavbarV2 from '../components/v2/NavbarV2'
import HeroV2 from '../components/v2/HeroV2'
import About from '../components/About'
import ServicesV2 from '../components/v2/ServicesV2'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

/** Redesign preview (Aspect-inspired hero) living at /v2 while the original
 *  home stays live at /. Promote by swapping the routes in App.tsx. */
export default function HomeV2() {
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
