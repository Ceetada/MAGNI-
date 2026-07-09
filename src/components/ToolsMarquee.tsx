import { tools, type Tool } from '../data/tools'

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div
      className="group relative flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/[0.03] ring-1 ring-white/10 transition-all hover:ring-white/25 sm:h-24 sm:w-40"
      title={tool.name}
    >
      {/* brand-color bloom revealed on hover */}
      <div
        className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at center, ${tool.hex}33 0%, transparent 70%)` }}
      />
      <svg
        viewBox="0 0 24 24"
        className="relative h-8 w-8 fill-white/50 transition-all duration-300 group-hover:fill-white sm:h-9 sm:w-9"
        role="img"
        aria-label={tool.name}
      >
        <path d={tool.path} />
      </svg>
    </div>
  )
}

/** Infinite horizontal scroller of the tools we build with. Pure CSS animation
 *  (translateX 0 → -50% over a duplicated list), pauses on hover, edges masked. */
export default function ToolsMarquee() {
  return (
    <section className="relative bg-ink-950 pb-4 pt-14 sm:pt-16" aria-label="Tools we work with">
      <div
        className="group/marquee overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee gap-4 pr-4 [animation-duration:32s] group-hover/marquee:[animation-play-state:paused] sm:gap-5 sm:pr-5">
          {[...tools, ...tools].map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
