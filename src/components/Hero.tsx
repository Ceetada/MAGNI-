import { ArrowRight, Sparkles } from 'lucide-react'
import HeroBackgroundScenic from './HeroBackgroundScenic'
import HeroFlow from './HeroFlow'
import ScrambleText from './ScrambleText'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#fafafa]">
      {/* Prototype backdrop. Restore <HeroBackground /> (from ./HeroBackground) to revert. */}
      <HeroBackgroundScenic />

      {/* spacer for fixed navbar */}
      <div className="h-[64px] shrink-0 sm:h-[76px]" />

      <div className="flex flex-1 shrink-0 flex-col items-center justify-center px-5 text-center">
        <span className="animate-fade-up inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12px] text-ink-700/80 shadow-sm ring-1 ring-ink-900/10">
          <Sparkles className="h-3.5 w-3.5 text-gold-500" />
          AI Automation Agency
        </span>

        <h1 className="mt-5 max-w-4xl text-[38px] font-medium leading-[1.08] tracking-tight text-ink-900 min-[400px]:text-[44px] sm:text-6xl lg:text-7xl">
          <span className="block animate-fade-up">We Build AI Systems That</span>
          <ScrambleText
            text="Save Time, Capture Leads,"
            startDelay={350}
            duration={1200}
            className="block animate-fade-up text-gold-700 [animation-delay:120ms]"
          />
          <span className="block animate-fade-up [animation-delay:240ms]">and Scale Businesses.</span>
        </h1>

        <p className="animate-fade-up mt-5 max-w-lg text-sm text-ink-700/60 [animation-delay:360ms] sm:text-base lg:text-lg">
          Magni Automations designs and builds custom AI systems that remove bottlenecks,
          convert more leads, and give your team hours back every week.
        </p>

        <div className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3 [animation-delay:480ms]">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_32px_rgba(245,168,28,0.45)] active:translate-y-0"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-700 shadow-sm ring-1 ring-ink-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink-900 hover:shadow-md active:translate-y-0"
          >
            See Our Work
          </a>
        </div>
      </div>

      <div className="h-10 shrink-0 sm:h-14 lg:h-20" />

      {/* Live animated automation flow. Restore <WorkflowMockup /> (from
          ./WorkflowMockup, wrapped in <ScaledMockup>) to revert to the dark panel. */}
      <div className="animate-hero-rise relative z-0 mx-auto -mb-2 w-[94%] max-w-4xl shrink-0 [animation-delay:600ms] sm:w-[88%] lg:w-[80%]">
        <HeroFlow />
      </div>
    </section>
  )
}
