import { ArrowRight, Zap } from 'lucide-react'
import HeroAICard from './HeroAICard'
import { GeminiGlyph, GmailGlyph, SheetsGlyph, TelegramGlyph } from './diagrams/glyphs'

const AVATARS = [
  'from-gold-400 to-orange-400',
  'from-sky-400 to-indigo-400',
  'from-emerald-400 to-teal-400',
  'from-rose-400 to-orange-400',
]

const TOOLS = [GmailGlyph, GeminiGlyph, TelegramGlyph, SheetsGlyph]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6]">
      {/* soft warm backdrop */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-sky-200/40 blur-[130px]" />

      {/* clear the floating pill navbar */}
      <div className="h-24 shrink-0 sm:h-28" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-24">
        {/* left: copy + CTA */}
        <div className="max-w-xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white px-2 py-1.5 shadow-sm ring-1 ring-ink-900/10">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <span key={a} className={`h-6 w-6 rounded-full bg-gradient-to-br ${a} ring-2 ring-white`} />
              ))}
            </div>
            <span className="pr-1.5 text-[12px] font-medium text-ink-700/75">Built for growing businesses</span>
          </div>

          <h1 className="animate-fade-up mt-6 text-[40px] font-semibold leading-[1.02] tracking-tight text-ink-900 [animation-delay:80ms] sm:text-[54px] lg:text-[60px]">
            We build AI systems that <span className="text-gold-600">save time</span>, capture leads, and scale
            businesses.
          </h1>

          <p className="animate-fade-up mt-5 max-w-md text-sm text-ink-700/60 [animation-delay:180ms] sm:text-base">
            Magni Automations designs and builds custom AI systems that remove bottlenecks, convert more leads,
            and give your team hours back every week.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lg active:translate-y-0"
            >
              Book Free Consultation
              <Zap className="h-4 w-4 fill-gold-400 text-gold-400" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 transition-colors hover:text-gold-700"
            >
              See our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="animate-fade-up mt-8 flex items-center gap-3 [animation-delay:360ms]">
            <span className="text-[12px] font-medium uppercase tracking-wider text-ink-700/40">Built with</span>
            <div className="flex items-center gap-3 opacity-70">
              {TOOLS.map((G, i) => (
                <G key={i} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>

        {/* right: AI card */}
        <div className="animate-fade-up [animation-delay:220ms] lg:pl-6">
          <HeroAICard />
        </div>
      </div>
    </section>
  )
}
