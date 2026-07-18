import { ArrowUpRight } from 'lucide-react'
import { getProjectBySlug } from '../../data/projects'

export interface SystemEntry {
  label: string
  slug: string
}

/** The Overview tab: a quiet editorial index of the systems we have built.
 *  Each row switches the stage to that system's showcase card. */
export default function OverviewPanel({
  systems,
  onSelect,
}: {
  systems: SystemEntry[]
  /** Receives the tab index (1-based, matching the tab bar) to activate. */
  onSelect: (tabIndex: number) => void
}) {
  return (
    <div className="rounded-3xl bg-white/[0.03] p-7 ring-1 ring-white/10 sm:p-10 lg:p-14">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* left: the writeup */}
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-500/90">
            Our Work
          </span>
          <h2 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-white sm:text-[32px]">
            Systems we
            <br className="hidden lg:block" /> have built
          </h2>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
            Every system here is a real build, running for a real business. From the first
            enquiry to the booked appointment, each one removes manual work end to end.
          </p>
          <p className="mt-6 text-[12.5px] text-white/35">Select a system to see it in action.</p>
        </div>

        {/* right: the index */}
        <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07] self-center">
          {systems.map((system, i) => {
            const project = getProjectBySlug(system.slug)
            if (!project) return null
            return (
              <li key={system.slug}>
                <button
                  onClick={() => onSelect(i + 1)}
                  className="group flex w-full items-baseline gap-4 py-5 text-left transition-colors sm:gap-6"
                >
                  <span className="font-mono text-[11px] text-gold-500/70 transition-colors group-hover:text-gold-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[15px] font-medium text-white transition-colors group-hover:text-gold-300 sm:text-base">
                      {system.label}
                    </span>
                    <span className="mt-1 block max-w-md text-[12.5px] leading-relaxed text-white/40">
                      {project.tagline}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 self-center text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
