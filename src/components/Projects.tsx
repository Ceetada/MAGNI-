import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#f4f4f5] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-gold-300/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">Selected Work</span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Systems we&rsquo;ve built
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-700/60 sm:text-right">
            Four AI automation builds, each solving a real business problem. Click any project to see the
            full workflow behind it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <Link
                to={`/work/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-[0_1px_3px_rgba(12,13,16,0.06)] ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-18px_rgba(12,13,16,0.18)] hover:ring-gold-500/35 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold-400/0 blur-3xl transition-colors duration-500 group-hover:bg-gold-400/20" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-ink-700/35">{project.index}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/[0.04] text-ink-700/70 ring-1 ring-ink-900/10 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-ink-950 group-hover:ring-gold-500">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>

                <span className="relative mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25 transition-transform duration-300 group-hover:scale-110">
                  <project.icon className="h-5 w-5" />
                </span>

                <span className="relative mt-5 text-[11px] font-medium uppercase tracking-wider text-gold-700">
                  {project.category}
                </span>
                <h3 className="relative mt-2 text-xl font-medium text-ink-900 sm:text-2xl">{project.title}</h3>
                <p className="relative mt-3 text-[14px] leading-relaxed text-ink-700/60 sm:text-[15px]">
                  {project.summary}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2 border-t border-ink-900/10 pt-5">
                  {project.stack.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-ink-900/[0.04] px-2.5 py-1 text-[11px] text-ink-700/70 ring-1 ring-ink-900/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
