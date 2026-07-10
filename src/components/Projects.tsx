import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

/** Base offset (px) where the first card pins, clearing the fixed navbar. */
const STICK_BASE = 104
/** Each subsequent card pins this much lower, leaving a sliver of the one beneath. */
const STICK_STEP = 16

export default function Projects() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const shadeRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let frame = 0
    const clamp = (n: number) => Math.min(1, Math.max(0, n))

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const cards = cardsRef.current
        cards.forEach((card, i) => {
          const next = cards[i + 1]
          const shade = shadeRef.current[i]
          if (!card) return
          if (!next) {
            card.style.transform = ''
            if (shade) shade.style.opacity = '0'
            return
          }
          const stickTop = STICK_BASE + i * STICK_STEP
          const nextTop = next.getBoundingClientRect().top
          // progress from "next card one card-height below" → "next card fully covering"
          const start = stickTop + card.offsetHeight
          const p = clamp((start - nextTop) / (start - stickTop))
          // sink the covered card back and up so it tucks under the incoming one,
          // and darken it as if the next card casts a shadow over it
          card.style.transform = `translateY(${-p * 18}px) scale(${1 - p * 0.09})`
          if (shade) shade.style.opacity = `${p * 0.5}`
        })
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="work" className="relative bg-[#f4f4f5] py-24 sm:py-32">
      {/* glow clipped in its own layer so the section keeps no overflow:hidden
          (an overflow ancestor breaks position:sticky, notably in Safari) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-gold-300/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">Selected Work</span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Systems we&rsquo;ve built
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-700/60 sm:text-right">
            Four AI automation builds, each solving a real business problem. Scroll through, then click any
            project to see the full workflow behind it.
          </p>
        </Reveal>

        {/* sticky deck: each card pins, the next scrolls up and laps over it */}
        <div className="mt-14 sm:mt-16">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="sticky pb-6"
              style={{ top: STICK_BASE + i * STICK_STEP, zIndex: i + 1 }}
            >
              <Link
                ref={(el) => {
                  cardsRef.current[i] = el
                }}
                to={`/work/${project.slug}`}
                className="group relative grid min-h-[320px] grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_-8px_40px_-12px_rgba(12,13,16,0.22),0_20px_60px_-24px_rgba(12,13,16,0.28)] ring-1 ring-ink-900/5 transition-shadow duration-300 will-change-transform hover:shadow-[0_30px_80px_-28px_rgba(12,13,16,0.32)] hover:ring-gold-500/30 md:grid-cols-[1.2fr_1fr]"
                style={{ transformOrigin: 'center top' }}
              >
                {/* shadow cast by the next card as this one tucks underneath */}
                <div
                  ref={(el) => {
                    shadeRef.current[i] = el
                  }}
                  className="pointer-events-none absolute inset-0 z-30 rounded-3xl bg-ink-950"
                  style={{ opacity: 0 }}
                />

                {/* left: content */}
                <div className="flex flex-col p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-ink-700/35">{project.index}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/[0.04] text-ink-700/70 ring-1 ring-ink-900/10 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-ink-950 group-hover:ring-gold-500">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>

                  <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25 transition-transform duration-300 group-hover:scale-110">
                    <project.icon className="h-5 w-5" />
                  </span>

                  <span className="mt-5 text-[11px] font-medium uppercase tracking-wider text-gold-700">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-ink-900 sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-700/60 sm:text-[15px]">
                    {project.summary}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.stack.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-ink-900/[0.04] px-2.5 py-1 text-[11px] text-ink-700/70 ring-1 ring-ink-900/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* right: tinted panel with oversized index + icon */}
                <div className="relative hidden overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 md:block">
                  <div className="grid-fade-dark absolute inset-0 opacity-70" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-gold-500/20 blur-3xl transition-all duration-500 group-hover:bg-gold-500/35" />
                  <span className="absolute right-6 top-4 select-none font-mono text-[120px] font-medium leading-none text-white/[0.06] lg:text-[150px]">
                    {project.index}
                  </span>
                  <span className="absolute bottom-8 left-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-gold-400 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <project.icon className="h-7 w-7" />
                  </span>
                  <span className="absolute bottom-9 left-28 flex items-center gap-1.5 text-[13px] font-medium text-white/80 transition-colors group-hover:text-white">
                    View workflow
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
