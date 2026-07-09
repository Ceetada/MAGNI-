import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/projects'
import Reveal from '../components/Reveal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="bg-[#fafafa]">
      <Navbar />

      {/* header */}
      <header className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 animate-float rounded-full bg-gold-300/20 blur-[130px]" />
        <div className="grid-fade pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <Link
              to="/#work"
              className="group inline-flex items-center gap-1.5 text-[13px] text-ink-700/60 transition-colors hover:text-ink-900"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to work
            </Link>
          </Reveal>

          <Reveal delay={80} className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25">
              <project.icon className="h-5 w-5" />
            </span>
            <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">
              {project.category}
            </span>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl text-base text-gold-700 sm:text-lg">{project.tagline}</p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-700/65 sm:text-base">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white px-3 py-1.5 text-[12px] text-ink-700/70 shadow-sm ring-1 ring-ink-900/10"
              >
                {tool}
              </span>
            ))}
          </Reveal>

          <Reveal
            delay={380}
            className="mt-10 grid grid-cols-3 divide-x divide-ink-900/10 rounded-2xl bg-white shadow-[0_1px_3px_rgba(12,13,16,0.06)] ring-1 ring-ink-900/5"
          >
            {project.results.map((stat) => (
              <div key={stat.label} className="px-3 py-5 text-center sm:px-6">
                <p className="text-xl font-medium text-ink-900 sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-700/45 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </header>

      {/* workflow */}
      <section className="relative bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">How it works</span>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
              The automated workflow
            </h2>
          </Reveal>

          {project.diagram && (
            <Reveal delay={80} className="mt-10">
              <project.diagram />
              <p className="mt-3 text-center text-[12px] text-ink-700/45">
                The n8n canvas behind this system — every node runs automatically.
              </p>
            </Reveal>
          )}

          <div className="relative mt-14">
            <div
              className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-gold-500/70 via-gold-500/25 to-transparent sm:left-[27px]"
              aria-hidden="true"
            />
            <ol className="space-y-10 sm:space-y-12">
              {project.workflow.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 60} className="relative flex gap-5 sm:gap-6">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm ring-1 ring-gold-500/35 sm:h-14 sm:w-14">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div className="pt-1.5 sm:pt-2.5">
                    <span className="font-mono text-[11px] text-gold-700/80">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-lg font-medium text-ink-900 sm:text-xl">{step.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-700/65 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {project.video && (
            <Reveal delay={80} className="mt-16">
              <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">
                See it in action
              </span>
              <video
                src={project.video}
                controls
                playsInline
                preload="metadata"
                className="mt-4 w-full rounded-2xl shadow-[0_24px_60px_-16px_rgba(12,13,16,0.25)] ring-1 ring-ink-900/10"
              />
            </Reveal>
          )}

          <Reveal
            delay={100}
            className="mt-14 rounded-2xl bg-gold-50 p-5 ring-1 ring-gold-500/20 sm:p-6"
          >
            {project.why ? (
              <>
                <h3 className="flex items-center gap-2.5 text-base font-medium text-ink-900 sm:text-lg">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-600" />
                  Why build it this way?
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700/80 sm:text-[15px]">{project.why}</p>
              </>
            ) : (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <p className="text-[14px] leading-relaxed text-ink-700/80 sm:text-[15px]">
                  This is the exact system architecture we tailor to each client — the tools change, but the
                  philosophy stays the same: capture everything, respond instantly, and remove manual work
                  wherever automation can do it better.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <CTA />

      {/* next project */}
      <div className="bg-[#fafafa] px-5 pb-16 sm:px-8 lg:px-10">
        <Link
          to={`/work/${next.slug}`}
          className="group mx-auto flex max-w-3xl items-center justify-between rounded-2xl bg-white px-6 py-6 shadow-[0_1px_3px_rgba(12,13,16,0.06)] ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-16px_rgba(12,13,16,0.16)] hover:ring-gold-500/35 sm:px-8"
        >
          <div>
            <span className="text-[11px] uppercase tracking-widest text-ink-700/45">Next build</span>
            <p className="mt-1 text-base font-medium text-ink-900 sm:text-lg">{next.title}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <Footer />
    </div>
  )
}
