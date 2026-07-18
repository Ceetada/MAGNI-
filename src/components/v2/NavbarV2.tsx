import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo'

const NAV_LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Services', hash: '#services' },
  { label: 'FAQ', hash: '#faq' },
]

/** Aspect-style top bar for the v2 design: centered links, squared dark CTA.
 *  Anchors scroll within the current page so it works on /v2 and /. */
export default function NavbarV2() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const goToSection = (hash: string) => {
    setOpen(false)
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(12,13,16,0.08)]' : 'shadow-[0_1px_0_rgba(12,13,16,0.04)]'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <Link to="/v2" className="transition-opacity hover:opacity-80" aria-label="Magni Automations home">
          <Logo />
        </Link>

        {/* centered links, Aspect-style */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className="text-[13.5px] text-ink-700/75 transition-colors hover:text-ink-900"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection('#contact')}
            className="hidden rounded-xl bg-ink-900 px-5 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.35),0_6px_16px_-6px_rgba(12,13,16,0.5)] transition-all hover:bg-ink-800 sm:inline-block"
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-900 transition-colors hover:bg-ink-900/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full animate-fade-up rounded-2xl bg-white px-5 py-3 shadow-[0_20px_60px_rgba(12,13,16,0.14)] ring-1 ring-ink-900/10 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className="block w-full border-b border-ink-900/10 py-3 text-left text-[15px] text-ink-700 last:border-b-0 hover:text-ink-900"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goToSection('#contact')}
            className="mb-1 mt-3 w-full rounded-xl bg-ink-900 px-5 py-2.5 text-[14px] font-medium text-white"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  )
}
