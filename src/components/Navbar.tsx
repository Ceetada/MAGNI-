import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Services', hash: '#services' },
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-fade-down transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-lg ring-1 ring-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
        <Link to="/" className="text-gold-500 transition-opacity hover:opacity-80" aria-label="Magni Automations home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className="text-[13px] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection('#contact')}
            className="hidden rounded-full bg-gold-500 px-5 py-2 text-[13px] font-medium text-ink-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(245,168,28,0.4)] sm:inline-block"
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full animate-fade-up rounded-2xl bg-ink-900/95 px-5 py-3 ring-1 ring-white/10 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className="block w-full border-b border-white/10 py-3 text-left text-[15px] text-white/80 last:border-b-0 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goToSection('#contact')}
            className="mt-3 mb-1 w-full rounded-full bg-gold-500 px-5 py-2.5 text-[14px] font-medium text-ink-950"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  )
}
