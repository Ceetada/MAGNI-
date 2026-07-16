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

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex animate-fade-down justify-center px-4 pt-4 sm:pt-5">
      <div className="relative w-full max-w-3xl">
        <div
          className={`flex items-center justify-between gap-2 rounded-full bg-ink-900/95 py-2 pl-3 pr-2 shadow-[0_10px_40px_-12px_rgba(12,13,16,0.5)] ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 ${
            scrolled ? 'shadow-[0_12px_44px_-10px_rgba(12,13,16,0.6)]' : ''
          }`}
        >
          <Link to="/" className="pl-1 transition-opacity hover:opacity-80" aria-label="Magni Automations home">
            <Logo light />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => goToSection(link.hash)}
                className="text-[13px] text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goToSection('#contact')}
              className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink-900 transition-colors hover:bg-white/90"
            >
              Book a call
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 animate-fade-up rounded-3xl bg-ink-900/95 p-3 shadow-[0_20px_60px_rgba(12,13,16,0.5)] ring-1 ring-white/10 backdrop-blur-md md:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => goToSection(link.hash)}
                className="block w-full border-b border-white/10 py-3 text-left text-[15px] text-white/80 last:border-b-0 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
