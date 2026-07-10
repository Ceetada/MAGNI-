import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Services', hash: '#services' },
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

  // over the blue sky hero (home page, not yet scrolled) → use light nav text
  const overHero = location.pathname === '/' && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-fade-down transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-[0_1px_0_rgba(12,13,16,0.06)] backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
        <Link to="/" className="transition-opacity hover:opacity-80" aria-label="Magni Automations home">
          <Logo light={overHero} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className={`group relative text-[13px] transition-colors ${
                overHero ? 'text-white/80 hover:text-white' : 'text-ink-700/70 hover:text-ink-900'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection('#contact')}
            className={`hidden rounded-full px-5 py-2 text-[13px] font-medium transition-all hover:shadow-lg sm:inline-block ${
              overHero
                ? 'bg-white text-ink-900 hover:bg-white/90'
                : 'bg-ink-900 text-white hover:bg-ink-800'
            }`}
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden ${
              overHero ? 'text-white hover:bg-white/15' : 'text-ink-900 hover:bg-ink-900/5'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full animate-fade-up rounded-2xl bg-white/95 px-5 py-3 shadow-[0_20px_60px_rgba(12,13,16,0.12)] ring-1 ring-ink-900/10 backdrop-blur-xl md:hidden">
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
            className="mb-1 mt-3 w-full rounded-full bg-ink-900 px-5 py-2.5 text-[14px] font-medium text-white"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  )
}
