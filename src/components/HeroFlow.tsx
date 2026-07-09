import { GitBranch, Send, Timer, Webhook } from 'lucide-react'
import type { ComponentType } from 'react'
import ScaledMockup from './ScaledMockup'

function Slack({ className = '', strokeWidth }: { className?: string; strokeWidth?: number }) {
  void strokeWidth
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5Z" />
      <path d="M9 6a2 2 0 1 1 2-2v2H9Zm0 1a2 2 0 0 1 0 4H4a2 2 0 1 1 0-4h5Z" />
      <path d="M18 9a2 2 0 1 1 2 2h-2V9Zm-1 0a2 2 0 0 1-4 0V4a2 2 0 1 1 4 0v5Z" />
      <path d="M15 18a2 2 0 1 1-2 2v-2h2Zm0-1a2 2 0 0 1 0-4h5a2 2 0 1 1 0 4h-5Z" />
    </svg>
  )
}

interface FlowNode {
  x: number
  y: number
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  tint: string
  ring: string
}

const NODES: FlowNode[] = [
  { x: 95, y: 168, icon: Webhook, label: 'Webhook', tint: 'text-emerald-500', ring: 'ring-emerald-500/20' },
  { x: 300, y: 168, icon: GitBranch, label: 'If / Else', tint: 'text-gold-600', ring: 'ring-gold-500/25' },
  { x: 520, y: 168, icon: Timer, label: 'Wait', tint: 'text-ink-700', ring: 'ring-ink-900/10' },
  { x: 760, y: 84, icon: Send, label: 'Send Email', tint: 'text-sky-500', ring: 'ring-sky-500/20' },
  { x: 760, y: 252, icon: Slack, label: 'Slack', tint: 'text-[#611f69]', ring: 'ring-[#611f69]/20' },
]

// shared path strings: used for both the drawn wire and the traveling pulse
const P = {
  hook: 'M123 168 L272 168',
  yes: 'M328 158 C 392 148, 432 166, 492 164',
  no: 'M328 178 C 392 190, 432 172, 492 172',
  email: 'M548 166 C 622 138, 668 88, 732 84',
  slack: 'M548 174 C 622 210, 668 248, 732 252',
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

/** Light, animated automation-flow panel that replaces the dark hero mockup:
 *  Webhook → If/Else (Yes/No) → Wait → Send Email / Slack, with data pulses
 *  traveling along the wires. */
export default function HeroFlow() {
  return (
    <ScaledMockup designWidth={900}>
      <div className="relative rounded-3xl bg-white/70 p-5 shadow-[0_-24px_90px_-20px_rgba(12,13,16,0.22)] ring-1 ring-ink-900/[0.06] backdrop-blur-md">
        {/* header */}
        <div className="mb-1 flex items-center justify-between px-1">
          <div>
            <p className="text-[13px] font-medium text-ink-900">Lead Follow-Up Automation</p>
            <p className="text-[10px] text-ink-700/45">Running · triggers on new lead</p>
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
            <Wire d={P.hook} color="#8a8f98" />
            <Wire d={P.yes} color="#22c55e" />
            <Wire d={P.no} color="#ef4444" />
            <Wire d={P.email} color="#8a8f98" />
            <Wire d={P.slack} color="#8a8f98" />

            <Pulse path={P.hook} color="#f5a81c" dur={2.2} />
            <Pulse path={P.yes} color="#22c55e" dur={2} begin={0.4} />
            <Pulse path={P.no} color="#ef4444" dur={2.4} begin={1.1} />
            <Pulse path={P.email} color="#f5a81c" dur={2.1} begin={0.8} />
            <Pulse path={P.slack} color="#f5a81c" dur={2.3} begin={1.4} />

            {/* branch labels */}
            <g className="font-medium">
              <rect x="382" y="128" width="34" height="16" rx="8" fill="#22c55e" fillOpacity="0.12" />
              <text x="399" y="140" textAnchor="middle" fontSize="10" fill="#16a34a">Yes</text>
              <rect x="384" y="196" width="30" height="16" rx="8" fill="#ef4444" fillOpacity="0.12" />
              <text x="399" y="208" textAnchor="middle" fontSize="10" fill="#dc2626">No</text>
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
