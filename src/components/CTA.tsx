import { ArrowRight, Mail } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-ink-950 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      {/* faint star speckles to match the other dark sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.5px), radial-gradient(rgba(245,168,28,0.1) 1px, transparent 1.5px)',
          backgroundSize: '56px 56px, 104px 104px',
          backgroundPosition: '0 0, 28px 41px',
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl [perspective:1400px]">
        <div className="group/deck relative origin-bottom">
          {/* deck layers tucked behind, fanning out on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 origin-bottom rounded-3xl bg-ink-800 ring-1 ring-gold-500/15 transition-transform duration-500 ease-out group-hover/deck:-translate-x-6 group-hover/deck:translate-y-2 group-hover/deck:-rotate-6"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 origin-bottom rounded-3xl bg-ink-800 ring-1 ring-gold-500/10 transition-transform duration-500 ease-out group-hover/deck:translate-x-6 group-hover/deck:translate-y-2 group-hover/deck:rotate-6"
          />

          {/* front card */}
          <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-b from-ink-900 to-ink-950 px-6 py-14 text-center ring-1 ring-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover/deck:animate-[deck-wiggle_0.6s_ease-in-out] group-hover/deck:shadow-[0_50px_120px_-20px_rgba(0,0,0,0.9)] sm:px-14 sm:py-20">
            {/* inner glow + grid */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[100px]" />
            <div className="grid-fade-dark pointer-events-none absolute inset-0 opacity-70" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-3.5 py-1.5 text-[12px] text-gold-400 ring-1 ring-gold-500/25">
                Let us build something
              </span>
              <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to put your business on <span className="text-gradient-gold">autopilot?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 sm:text-base">
                Book a free consultation and we will map out exactly where AI automation can save you time
                and win you more revenue.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:support@magniautomation.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_32px_rgba(245,168,28,0.45)] active:translate-y-0"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:support@magniautomation.com"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  support@magniautomation.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
