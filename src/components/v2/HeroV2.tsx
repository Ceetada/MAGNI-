import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, LayoutGrid, MessageSquareText, PhoneCall, ReceiptText, Workflow } from 'lucide-react'
import { getProjectBySlug } from '../../data/projects'
import DashboardMockup from './DashboardMockup'

const TABS = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Lead Automation', icon: MessageSquareText, slug: 'real-estate-lead-automation' },
  { label: 'Voice Agents', icon: PhoneCall, slug: 'ai-voice-receptionist' },
  { label: 'Content Engine', icon: Workflow, slug: 'social-media-content-automation' },
  { label: 'Expense Ops', icon: ReceiptText, slug: 'ai-expense-tracker' },
]

/** Vertical measurement ruler along the hero edges — a quiet drafting-table
 *  detail. `side` flips which way the tick marks point. */
function Ruler({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-10 top-28 hidden w-10 flex-col justify-between font-mono text-[9px] text-ink-900/25 xl:flex ${
        side === 'left' ? 'left-5' : 'right-5'
      }`}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className={`flex items-center gap-1.5 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
          <span>{(i + 1) * 8}</span>
          <span className="h-px w-3 bg-ink-900/20" />
        </span>
      ))}
    </div>
  )
}

/** One of the four built systems, shown in place on the dark stage. */
function SystemShowcase({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug)
  if (!project) return null
  const Diagram = project.diagram

  return (
    <div key={slug} className="animate-fade-up">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-widest text-gold-500/90">
            {project.index} · {project.category}
          </span>
          <h3 className="mt-1.5 text-lg font-medium leading-snug text-white sm:text-xl">{project.title}</h3>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-white/50 sm:text-sm">
            {project.tagline}
          </p>
        </div>
        <Link
          to={`/work/${project.slug}`}
          className="group inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-gold-400 transition-colors hover:text-gold-300"
        >
          View case study
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      {Diagram && <Diagram />}
    </div>
  )
}

export default function HeroV2() {
  const [active, setActive] = useState(0)
  const scrollTo = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-white">
      <Ruler side="left" />
      <Ruler side="right" />

      {/* headline block */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-32 text-center sm:pb-20 sm:pt-40">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3.5 text-[12px] text-ink-700/75 shadow-[0_1px_3px_rgba(12,13,16,0.08)] ring-1 ring-ink-900/10">
          <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[10.5px] font-medium text-white">New</span>
          AI Voice Receptionists now available
        </span>

        <h1 className="mt-6 animate-fade-up text-[40px] font-medium leading-[1.06] tracking-tight text-ink-900 [animation-delay:100ms] min-[420px]:text-[46px] sm:text-6xl lg:text-[64px]">
          Your business shouldn&rsquo;t
          <br className="hidden min-[420px]:block" /> run on copy and paste
        </h1>

        <p className="mt-6 max-w-xl animate-fade-up text-[15px] leading-relaxed text-ink-700/60 [animation-delay:200ms] sm:text-base">
          Magni Automations gives you one team to design, build, and run the AI systems
          that capture your leads, answer your calls, and publish your content, on autopilot.
        </p>

        <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:300ms]">
          <button
            onClick={() => scrollTo('#contact')}
            className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.35),0_10px_24px_-8px_rgba(12,13,16,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 active:translate-y-0"
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => scrollTo('#work')}
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-ink-800 shadow-[0_1px_3px_rgba(12,13,16,0.08)] ring-1 ring-ink-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            See Our Work
          </button>
        </div>
      </div>

      {/* dark stage with notched tab tongue — tabs switch the showcase in place */}
      <div id="work" className="relative scroll-mt-24">
        <div
          className="relative mx-2 rounded-t-[28px] bg-ink-950 px-3 pb-8 pt-24 sm:mx-4 sm:rounded-t-[36px] sm:px-8 sm:pb-12 sm:pt-28 lg:px-12"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1.5px), radial-gradient(rgba(245,168,28,0.14) 1px, transparent 1.5px)',
            backgroundSize: '52px 52px, 96px 96px',
            backgroundPosition: '0 0, 26px 37px',
          }}
        >
          {/* soft gold glow behind the window */}
          <div className="pointer-events-none absolute left-1/2 top-10 h-[280px] w-[640px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" />

          <div className="animate-hero-rise relative mx-auto max-w-5xl [animation-delay:400ms]">
            {active === 0 ? (
              <div key="overview" className="animate-fade-up">
                <DashboardMockup />
              </div>
            ) : (
              <SystemShowcase slug={TABS[active].slug!} />
            )}
          </div>
        </div>

        {/* white tongue holding the tab bar, dipping into the stage */}
        <div className="absolute left-1/2 top-0 w-full max-w-[min(94vw,760px)] -translate-x-1/2 sm:w-auto sm:max-w-none">
          <div className="relative mx-auto w-fit max-w-full rounded-b-[24px] bg-white px-2.5 pb-2.5">
            {/* concave fillet corners joining the tongue to the stage top */}
            <span
              aria-hidden="true"
              className="absolute -left-6 top-0 hidden h-6 w-6 sm:block"
              style={{ background: 'radial-gradient(circle at 0% 100%, transparent 23.5px, #ffffff 24px)' }}
            />
            <span
              aria-hidden="true"
              className="absolute -right-6 top-0 hidden h-6 w-6 sm:block"
              style={{ background: 'radial-gradient(circle at 100% 100%, transparent 23.5px, #ffffff 24px)' }}
            />

            <nav
              className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-[#f4f4f5] p-1.5 ring-1 ring-ink-900/5"
              style={{ scrollbarWidth: 'none' }}
              aria-label="Explore Magni systems"
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-[12.5px] transition-colors ${
                    active === i
                      ? 'bg-white font-medium text-ink-900 shadow-sm ring-1 ring-ink-900/5'
                      : 'text-ink-700/60 hover:text-ink-900'
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
