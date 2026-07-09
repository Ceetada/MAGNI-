import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-widest text-gold-500">Selected Work</span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Systems we&rsquo;ve built
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/50 sm:text-right">
            A look at four AI automation builds — click any project to see the full workflow behind it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <Link
                to={`/work/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-900 p-7 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-gold-500/40 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-500/0 blur-3xl transition-colors duration-500 group-hover:bg-gold-500/10" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-white/30">{project.index}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>

                <span className="relative mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20">
                  <project.icon className="h-5 w-5" />
                </span>

                <span className="relative mt-5 text-[11px] font-medium uppercase tracking-wider text-gold-500/80">
                  {project.category}
                </span>
                <h3 className="relative mt-2 text-xl font-medium text-white sm:text-2xl">{project.title}</h3>
                <p className="relative mt-3 text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
                  {project.summary}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.stack.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/50 ring-1 ring-white/10"
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
