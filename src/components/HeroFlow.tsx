import { CalendarCheck, Database, Mail, Sparkles, Split, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import ScaledMockup from './ScaledMockup'

interface FlowNode {
  x: number
  y: number
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  tint: string
  ring: string
}

// An original lead-qualification pipeline: New Lead → AI Qualify → Score,
// which branches Hot / Cold and merges back into Update CRM.
const NODES: FlowNode[] = [
  { x: 85, y: 168, icon: Zap, label: 'New Lead', tint: 'text-gold-600', ring: 'ring-gold-500/25' },
  { x: 255, y: 168, icon: Sparkles, label: 'AI Qualify', tint: 'text-violet-500', ring: 'ring-violet-500/20' },
  { x: 420, y: 168, icon: Split, label: 'Score', tint: 'text-ink-700', ring: 'ring-ink-900/10' },
  { x: 620, y: 92, icon: CalendarCheck, label: 'Book Call', tint: 'text-emerald-500', ring: 'ring-emerald-500/20' },
  { x: 620, y: 244, icon: Mail, label: 'Nurture', tint: 'text-sky-500', ring: 'ring-sky-500/20' },
  { x: 800, y: 168, icon: Database, label: 'Update CRM', tint: 'text-gold-600', ring: 'ring-gold-500/25' },
]

// shared path strings: used for both the drawn wire and the traveling pulse
const P = {
  a: 'M112 168 L228 168',
  b: 'M282 168 L393 168',
  hot: 'M447 158 C 510 140, 545 98, 593 94',
  cold: 'M447 178 C 510 200, 545 240, 593 242',
  hotMerge: 'M647 94 C 710 98, 745 150, 773 160',
  coldMerge: 'M647 242 C 710 238, 745 186, 773 176',
}

function Wire({ d, color, dash = '6 8' }: { d: string; color: string; dash?: string }) {
  return (
    <>
      <path d={d} fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="2" />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={dash}
        strokeLinecap="round"
        className="animate-dash-flow"
      />
    </>
  )
}

function Pulse({ path, color, dur, begin = 0 }: { path: string; color: string; dur: number; begin?: number }) {
  return (
    <g>
      <circle r="7" fill={color} opacity="0.18">
        <animateMotion path={path} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
      </circle>
      <circle r="3.2" fill={color}>
        <animateMotion path={path} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
      </circle>
    </g>
  )
}

/** Light, animated automation-flow panel on the hero. Original lead-scoring
 *  pipeline with data pulses traveling along the wires. */
export default function HeroFlow() {
  return (
    <ScaledMockup designWidth={900}>
      <div className="relative rounded-3xl bg-white/70 p-5 shadow-[0_-24px_90px_-20px_rgba(12,13,16,0.22)] ring-1 ring-ink-900/[0.06] backdrop-blur-md">
        {/* header */}
        <div className="mb-1 flex items-center justify-between px-1">
          <div>
            <p className="text-[13px] font-medium text-ink-900">Lead Qualification Autopilot</p>
            <p className="text-[10px] text-ink-700/45">Running · scoring new leads</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600 ring-1 ring-emerald-500/20">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        {/* flow canvas */}
        <div className="relative h-[300px] w-full">
          {/* faint grid */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(12,13,16,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,13,16,0.04) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />

          {/* wires + pulses */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 300" fill="none" aria-hidden="true">
            <Wire d={P.a} color="#8a8f98" />
            <Wire d={P.b} color="#8a8f98" />
            <Wire d={P.hot} color="#f97316" />
            <Wire d={P.cold} color="#0ea5e9" />
            <Wire d={P.hotMerge} color="#8a8f98" />
            <Wire d={P.coldMerge} color="#8a8f98" />

            <Pulse path={P.a} color="#f5a81c" dur={2} />
            <Pulse path={P.b} color="#f5a81c" dur={2.1} begin={0.5} />
            <Pulse path={P.hot} color="#f97316" dur={2} begin={0.9} />
            <Pulse path={P.cold} color="#0ea5e9" dur={2.3} begin={1.3} />
            <Pulse path={P.hotMerge} color="#f5a81c" dur={2.1} begin={1.7} />
            <Pulse path={P.coldMerge} color="#f5a81c" dur={2.4} begin={2} />

            {/* branch labels */}
            <g className="font-medium">
              <rect x="486" y="112" width="34" height="16" rx="8" fill="#f97316" fillOpacity="0.12" />
              <text x="503" y="124" textAnchor="middle" fontSize="10" fill="#ea580c">Hot</text>
              <rect x="484" y="206" width="40" height="16" rx="8" fill="#0ea5e9" fillOpacity="0.12" />
              <text x="504" y="218" textAnchor="middle" fontSize="10" fill="#0284c7">Cold</text>
            </g>
          </svg>

          {/* nodes */}
          {NODES.map((node) => (
            <div
              key={node.label}
              className="absolute flex flex-col items-center"
              style={{ left: node.x - 30, top: node.y - 30, width: 60 }}
            >
              <span
                className={`relative flex h-[54px] w-[54px] items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_-8px_rgba(12,13,16,0.25)] ring-1 ${node.ring} ${node.tint}`}
              >
                <node.icon className="h-6 w-6" strokeWidth={1.9} />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="#fff" strokeWidth="4">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
              <span className="mt-2 whitespace-nowrap text-[11px] font-medium text-ink-800">{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ScaledMockup>
  )
}
