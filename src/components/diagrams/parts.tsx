import type { ReactElement, ReactNode } from 'react'
import { Play, Zap, type LucideIcon } from 'lucide-react'

export type Glyph = (props: { className?: string }) => ReactElement

export interface MainNode {
  label: string
  sub: string
  icon?: LucideIcon
  glyph?: Glyph
  trigger?: boolean
}

export interface ModelSpec {
  glyph: Glyph
  label: string
}

export function NodeCard({ node }: { node: MainNode }) {
  return (
    <div className="relative flex h-[72px] w-[112px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/[0.045] ring-1 ring-white/10">
      {node.trigger && (
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-gold-500">
          <Zap className="h-3 w-3 fill-gold-500" />
        </span>
      )}
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06]">
        {node.glyph ? (
          <node.glyph className="h-4 w-4" />
        ) : node.icon ? (
          <node.icon className="h-4 w-4 text-white/80" />
        ) : null}
      </span>
      <span className="px-1 text-center text-[9.5px] font-medium leading-tight text-white">{node.label}</span>
      <span className="absolute -bottom-4 whitespace-nowrap text-[7.5px] text-white/35">{node.sub}</span>
    </div>
  )
}

export function ModelNode({ glyph: GlyphComp, label }: ModelSpec) {
  return (
    <div className="flex w-[76px] flex-col items-center gap-1.5">
      <span className="mx-auto block h-4 w-px border-l border-dashed border-white/20" />
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-white/10">
        <GlyphComp className="h-4 w-4" />
      </span>
      <span className="text-center text-[7px] leading-snug text-white/50">{label}</span>
    </div>
  )
}

/** A node column: fixed-width card with optional model sub-nodes hanging below,
 *  absolutely positioned so they don't widen the column. */
export function NodeColumn({ node, models }: { node: MainNode; models?: ModelSpec[] }) {
  return (
    <div className="relative shrink-0">
      <NodeCard node={node} />
      {models && (
        <div className="absolute left-1/2 top-[78px] flex -translate-x-1/2 gap-1.5">
          {models.map((m) => (
            <ModelNode key={m.label} {...m} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FlowConnector() {
  return (
    <div className="relative mt-[35px] h-[1.5px] min-w-[24px] flex-1 overflow-hidden bg-white/20">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-gold-400 to-transparent bg-[length:200%_100%]" />
    </div>
  )
}

/** n8n-style editor frame: title bar, dotted canvas, Execute workflow pill. */
export function CanvasFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-950 ring-1 ring-ink-900/20 shadow-[0_24px_70px_-16px_rgba(12,13,16,0.45)]">
      <div className="flex items-center justify-between border-b border-white/5 bg-ink-900 px-4 py-2.5">
        <div className="flex items-center gap-2 text-[10px] text-white/50">
          <span className="text-white/35">Personal /</span>
          <span className="font-medium text-white/85">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[9px] text-white/60">Editor</span>
          <span className="hidden rounded-md px-2.5 py-1 text-[9px] text-white/35 sm:inline">Executions</span>
          <span className="rounded-md bg-gold-500 px-2.5 py-1 text-[9px] font-medium text-ink-950">Publish</span>
        </div>
      </div>

      <div className="relative px-7 pb-6 pt-9">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        {children}
        <div className="relative mt-8 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#ff6d5a] px-3.5 py-1.5 text-[10px] font-medium text-white shadow-[0_6px_20px_rgba(255,109,90,0.35)]">
            <Play className="h-3 w-3 fill-white" />
            Execute workflow
          </span>
        </div>
      </div>
    </div>
  )
}
