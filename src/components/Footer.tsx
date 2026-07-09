import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/" className="text-gold-500 transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <p className="text-[13px] text-white/35">
          &copy; {new Date().getFullYear()} Magni Automations. All rights reserved.
        </p>
        <a href="mailto:hello@magniautomations.ai" className="text-[13px] text-white/50 hover:text-white">
          hello@magniautomations.ai
        </a>
      </div>
    </footer>
  )
}
