import { ArrowRight, Mail } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[140px]" />

      <Reveal className="relative mx-auto max-w-3xl rounded-3xl bg-gradient-to-b from-ink-900 to-ink-850 px-6 py-14 text-center ring-1 ring-white/10 sm:px-14 sm:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-3.5 py-1.5 text-[12px] text-gold-400 ring-1 ring-gold-500/20">
          Let&rsquo;s build something
        </span>
        <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to put your business on <span className="text-gradient-gold">autopilot?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 sm:text-base">
          Book a free consultation and we&rsquo;ll map out exactly where AI automation can save you time and win you
          more revenue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@magniautomations.ai"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(245,168,28,0.45)]"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:hello@magniautomations.ai"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/80 ring-1 ring-white/15 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            hello@magniautomations.ai
          </a>
        </div>
      </Reveal>
    </section>
  )
}
