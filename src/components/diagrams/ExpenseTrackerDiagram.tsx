import type { ReactElement } from 'react'
import { Bot, SquarePen, Zap } from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { CanvasFrame, type Glyph } from './parts'
import { GeminiGlyph, GmailGlyph, SheetsGlyph, TelegramGlyph } from './glyphs'

/* Static, spatially faithful recreation of the Expense Tracker n8n canvas:
   Telegram Trigger → Workflow Settings → Expense Agent, with the agent's
   Chat Model, Memory and four tools fanned out beneath it. Coordinates are in
   a 1904x760 design space lifted from the original screenshot. */

interface SquareNode {
  x: number
  y: number
  label: string
  sub?: string
  icon?: LucideIconLike
  iconClass?: string
  glyph?: Glyph
  wide?: boolean
  trigger?: boolean
}
type LucideIconLike = typeof Bot

const NODES: SquareNode[] = [
  { x: 404, y: 150, label: 'Telegram Trigger', sub: 'Updates: message', glyph: TelegramGlyph, trigger: true },
  { x: 628, y: 150, label: 'Workflow Settings', sub: 'manual', icon: SquarePen, iconClass: 'text-[#b197fc]' },
  { x: 1172, y: 150, label: 'Expense Agent', sub: 'Chat Model · Memory · Tool', icon: Bot, wide: true },
]

interface CircleNode {
  x: number
  y: number
  label: string
  sub?: string
  glyph: Glyph
}

const CIRCLES: CircleNode[] = [
  { x: 780, y: 382, label: 'Google Gemini Chat Model', glyph: GeminiGlyph },
  { x: 940, y: 382, label: 'Conversational Memory', glyph: MemoryGlyph },
  { x: 1100, y: 382, label: 'Log Expense to Sheet', sub: 'append: sheet', glyph: SheetsGlyph },
  { x: 1228, y: 382, label: 'Read Recent Expenses', sub: 'read: sheet', glyph: SheetsGlyph },
  { x: 1373, y: 382, label: 'Send Telegram Reply', sub: 'sendMessage: message', glyph: TelegramGlyph },
  { x: 1564, y: 382, label: 'Send Manager Alert', sub: 'send: message', glyph: GmailGlyph },
]

function MemoryGlyph({ className = 'h-4 w-4' }: { className?: string }): ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="#fff" strokeWidth="1.7">
        <rect x="4" y="5" width="16" height="4" rx="1.4" />
        <rect x="4" y="10" width="16" height="4" rx="1.4" />
        <rect x="4" y="15" width="16" height="4" rx="1.4" />
      </g>
    </svg>
  )
}

/* connections in the same 1904x760 design space */
const SOLID_PATHS = [
  'M 452 150 L 580 150',
  'M 676 150 L 1096 150',
]

const DASHED_PATHS = [
  // Chat Model handle → Gemini
  'M 1110 202 C 1000 262, 850 312, 786 344',
  // Memory handle → Conversational Memory
  'M 1150 202 C 1090 262, 980 314, 944 344',
  // Tool handle → the four tools
  'M 1188 202 C 1170 262, 1120 314, 1102 344',
  'M 1196 202 C 1210 260, 1224 312, 1230 344',
  'M 1204 202 C 1280 258, 1350 312, 1375 344',
  'M 1212 202 C 1360 254, 1500 310, 1562 344',
]

function NodeSquare({ node }: { node: SquareNode }) {
  const w = node.wide ? 150 : 60
  return (
    <div className="absolute" style={{ left: node.x - w / 2, top: node.y - 30 }}>
      <div
        className="relative flex h-[60px] items-center justify-center gap-2.5 rounded-xl bg-[#3b3c3e] ring-1 ring-white/10"
        style={{ width: w }}
      >
        {node.trigger && (
          <Zap className="absolute -left-5 top-1/2 h-4 w-4 -translate-y-1/2 fill-gold-500 text-gold-500" />
        )}
        {node.glyph ? (
          <node.glyph className="h-5 w-5" />
        ) : node.icon ? (
          <node.icon className={`h-5 w-5 ${node.iconClass ?? 'text-white/85'}`} />
        ) : null}
        {node.wide && <span className="text-[12px] font-medium text-white">{node.label}</span>}
      </div>
      <div className="absolute left-1/2 top-[66px] w-[150px] -translate-x-1/2 text-center leading-tight">
        {!node.wide && <span className="block text-[11px] font-medium text-white">{node.label}</span>}
        {node.sub && <span className="block text-[9px] text-white/40">{node.sub}</span>}
      </div>
    </div>
  )
}

function NodeCircle({ node }: { node: CircleNode }) {
  return (
    <div className="absolute" style={{ left: node.x - 30, top: node.y - 30 }}>
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#3b3c3e] ring-1 ring-white/10">
        <node.glyph className="h-5 w-5" />
      </div>
      <div className="absolute left-1/2 top-[66px] w-[120px] -translate-x-1/2 text-center leading-tight">
        <span className="block text-[10px] font-medium text-white">{node.label}</span>
        {node.sub && <span className="block text-[9px] text-white/40">{node.sub}</span>}
      </div>
    </div>
  )
}

export default function ExpenseTrackerDiagram() {
  return (
    <ScaledMockup designWidth={1960}>
      <CanvasFrame title="Expense Tracker">
        <div className="relative h-[500px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1904 500"
            fill="none"
            aria-hidden="true"
          >
            {SOLID_PATHS.map((d) => (
              <path key={d} d={d} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            ))}
            {DASHED_PATHS.map((d) => (
              <path key={d} d={d} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 5" />
            ))}
          </svg>

          {/* handle labels under the agent */}
          <span className="absolute left-[1068px] top-[230px] text-[9px] text-white/40">Chat Model*</span>
          <span className="absolute left-[1170px] top-[230px] text-[9px] text-white/40">Memory</span>
          <span className="absolute left-[1228px] top-[230px] text-[9px] text-white/40">Tool</span>
          <span className="absolute left-[758px] top-[316px] text-[9px] text-white/40">Model</span>
          <span className="absolute left-[912px] top-[316px] text-[9px] text-white/40">Memory</span>

          {NODES.map((node) => (
            <NodeSquare key={node.label} node={node} />
          ))}
          {CIRCLES.map((node) => (
            <NodeCircle key={node.label} node={node} />
          ))}
        </div>
      </CanvasFrame>
    </ScaledMockup>
  )
}
