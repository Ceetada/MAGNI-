import { useEffect, useRef } from 'react'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'
import { DEPARTMENTS, SERVICES } from '../Services'

/** Base offset (px) where the first card pins, clearing the fixed navbar. */
const STICK_BASE = 104
/** Each subsequent card pins this much lower, leaving a sliver of the one beneath. */
const STICK_STEP = 14

/** v2 services: a black section where each service is a wide white card that
 *  pins and lets the next one lap over it — same deck mechanic as the
 *  original work section, retuned for the dark background. */
export default function ServicesV2() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
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
          const start = stickTop + card.offsetHeight
          const p = clamp((start - nextTop) / (start - stickTop))
          // tuck the covered card back and shade it as the next laps over
          card.style.transform = `translateY(${-p * 16}px) scale(${1 - p * 0.07})`
          if (shade) shade.style.opacity = `${p * 0.55}`
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
    <section id="services" className="relative bg-ink-950 py-24 sm:py-32">
      {/* glow + speckles clipped in their own layer so the section itself keeps
          no overflow:hidden (an overflow ancestor breaks position:sticky) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.5px), radial-gradient(rgba(245,168,28,0.1) 1px, transparent 1.5px)',
            backgroundSize: '56px 56px, 104px 104px',
            backgroundPosition: '0 0, 28px 41px',
          }}
        />
        <div className="absolute left-1/2 top-0 h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-500/90">
            What we do
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Automation, end to end
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/50 sm:text-base">
            From the first audit to a fully running system and a team that knows how to use it, we cover
            every layer of putting AI to work inside your business.
          </p>
        </Reveal>

        {/* sticky deck of service cards */}
        <div className="mt-14 sm:mt-16">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="sticky pb-5"
              style={{ top: STICK_BASE + i * STICK_STEP, zIndex: i + 1 }}
            >
              <div
                ref={(el) => {
                  cardsRef.current[i] = el
                }}
                className="group relative grid min-h-[260px] grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_-10px_50px_-16px_rgba(0,0,0,0.65),0_30px_70px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 will-change-transform md:grid-cols-[1.15fr_1fr]"
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

                {/* left: the service */}
                <div className="relative flex flex-col p-7 sm:p-9 lg:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: service.gradient }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-ink-700/30">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 max-w-md text-[14px] leading-relaxed text-ink-700/60 sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* right: what you get */}
                <div className="flex flex-col justify-center border-t border-ink-900/[0.06] bg-[#fafafa] p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-700/40">
                    What you get
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-[13.5px] text-ink-700/80">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bespoke / custom capability band */}
        <Reveal delay={120}>
          <div className="mt-8 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-white/[0.03] p-8 ring-1 ring-white/10 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-3 py-1.5 text-[12px] text-gold-400 ring-1 ring-gold-500/25">
                <Sparkles className="h-3.5 w-3.5" />
                Bespoke builds
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Something specific in mind? We build it.
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/55">
                Beyond our core services, we design bespoke AI automations for whatever comes next, improve
                the workflows you already run, and spot new opportunities to automate across every part of
                your business.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {DEPARTMENTS.map((dept) => (
                  <span
                    key={dept}
                    className="rounded-full bg-white/5 px-3.5 py-2 text-[13px] text-white/80 ring-1 ring-white/10"
                  >
                    {dept}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_32px_rgba(245,168,28,0.45)]"
              >
                Discuss your build
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
