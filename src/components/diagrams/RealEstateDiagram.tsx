import type { ReactElement } from 'react'
import { Bot, Braces, Split, SquarePen, Zap, type LucideIcon } from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { CanvasFrame, type Glyph } from './parts'
import {
  CalendarGlyph,
  GmailGlyph,
  OpenAIGlyph,
  SheetsGlyph,
  SupabaseGlyph,
  TelegramGlyph,
} from './glyphs'

/* Static, spatially faithful recreation of the n8n canvas screenshot for the
   real estate build. Node positions are design-space coordinates (1904x790)
   lifted from the original image; ScaledMockup scales the whole canvas down. */

interface SquareNode {
  x: number
  y: number
  label: string
  sub?: string
  icon?: LucideIcon
  iconClass?: string
  glyph?: Glyph
  wide?: boolean
  trigger?: boolean
}

const NODES: SquareNode[] = [
  { x: 368, y: 122, label: 'Telegram Trigger', sub: 'Updates: message', glyph: TelegramGlyph, trigger: true },
  { x: 492, y: 120, label: 'If', icon: Split, iconClass: 'text-[#62d0a2]' },
  { x: 863, y: 68, label: 'Edit Fields', sub: 'manual', icon: SquarePen, iconClass: 'text-[#b197fc]' },
  { x: 616, y: 175, label: 'download audio', sub: 'get: file', glyph: TelegramGlyph },
  { x: 740, y: 175, label: 'Transcribe a recording', sub: 'Transcribe Recording', glyph: OpenAIGlyph },
  { x: 863, y: 175, label: 'Set Voice Text', sub: 'manual', icon: SquarePen, iconClass: 'text-[#b197fc]' },
  { x: 987, y: 122, label: 'Get Existing Lead', sub: 'read: sheet', glyph: SheetsGlyph },
  { x: 1111, y: 122, label: 'Prepare Agent Input', sub: 'manual', icon: SquarePen, iconClass: 'text-[#b197fc]' },
  { x: 1270, y: 120, label: 'Extract Lead Details', sub: 'Response Text', glyph: OpenAIGlyph, wide: true },
  { x: 1429, y: 122, label: 'Parse Lead JSON', icon: Braces, iconClass: 'text-[#e7c14b]' },
  { x: 1553, y: 122, label: 'Save Lead', sub: 'appendOrUpdate: sheet', glyph: SheetsGlyph },
  { x: 1677, y: 122, label: 'Get Updated Lead', sub: 'read: sheet', glyph: SheetsGlyph },
  { x: 1801, y: 122, label: 'Prepare Updated Agent Input', sub: 'manual', icon: SquarePen, iconClass: 'text-[#b197fc]' },
  { x: 395, y: 429, label: 'AI Agent', sub: 'Chat Model · Memory · Tool', icon: Bot, wide: true },
  { x: 899, y: 429, label: 'Send a text message', sub: 'sendMessage: message', glyph: TelegramGlyph },
]

interface CircleNode {
  x: number
  y: number
  label: string
  sub?: string
  glyph: Glyph
}

const CIRCLES: CircleNode[] = [
  { x: 99, y: 540, label: 'OpenAI Chat Model', glyph: OpenAIGlyph },
  { x: 187, y: 595, label: 'Simple Memory', glyph: SupabaseMemory },
  { x: 276, y: 628, label: 'property_listing', sub: 'read: sheet', glyph: SheetsGlyph },
  { x: 381, y: 640, label: 'check_availability', sub: 'getAll: event', glyph: CalendarGlyph },
  { x: 497, y: 630, label: 'schedule_viewing', sub: 'create: event', glyph: CalendarGlyph },
  { x: 638, y: 628, label: 'knowledge_base', sub: 'Embedding', glyph: SupabaseGlyph },
  { x: 797, y: 630, label: 'send_email', sub: 'send: message', glyph: GmailGlyph },
  { x: 912, y: 630, label: 'send_image', sub: 'sendMediaGroup: mess…', glyph: TelegramGlyph },
  { x: 630, y: 735, label: 'Embeddings OpenAI', glyph: OpenAIGlyph },
]

function SupabaseMemory({ className = 'h-4 w-4' }: { className?: string }): ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="#fff" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </g>
    </svg>
  )
}

/* solid main-flow connections */
const SOLID_PATHS = [
  'M 396 122 L 464 120',
  'M 520 112 C 570 96, 700 68, 833 68',
  'M 520 128 C 552 142, 560 175, 586 175',
  'M 646 175 L 710 175',
  'M 770 175 L 833 175',
  'M 893 68 C 932 68, 942 110, 957 118',
  'M 893 175 C 932 175, 942 135, 957 127',
  'M 1017 122 L 1081 122',
  'M 1141 122 L 1208 120',
  'M 1332 120 L 1399 122',
  'M 1459 122 L 1523 122',
  'M 1583 122 L 1647 122',
  'M 1707 122 L 1771 122',
  // long return line from Prepare Updated Agent Input down and around to AI Agent
  'M 1801 152 L 1801 203 Q 1801 215 1789 215 L 322 215 Q 310 215 310 227 L 310 417 Q 310 429 318 429 L 333 429',
  'M 457 429 L 869 429',
]

/* dashed fan from the AI Agent handles to its model/memory/tools */
const DASHED_PATHS = [
  'M 358 457 C 290 500, 160 512, 103 514',
  'M 372 457 C 330 520, 240 552, 191 567',
  'M 392 457 C 368 540, 308 582, 279 600',
  'M 405 457 C 400 540, 388 592, 382 612',
  'M 418 457 C 448 540, 478 582, 494 602',
  'M 430 457 C 520 540, 598 590, 630 604',
  'M 440 457 C 600 535, 740 588, 788 604',
  'M 448 457 C 660 528, 858 584, 902 604',
  // knowledge_base -> Embeddings OpenAI
  'M 637 656 C 635 685, 632 698, 631 705',
]

function NodeSquare({ node }: { node: SquareNode }) {
  const w = node.wide ? 120 : 56
  return (
    <div className="absolute" style={{ left: node.x - w / 2, top: node.y - 28 }}>
      <div
        className="relative flex h-14 items-center justify-center gap-2 rounded-lg bg-[#3b3c3e] ring-1 ring-white/10"
        style={{ width: w }}
      >
        {node.trigger && (
          <Zap className="absolute -left-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 fill-gold-500 text-gold-500" />
        )}
        {node.glyph ? (
          <node.glyph className="h-5 w-5" />
        ) : node.icon ? (
          <node.icon className={`h-5 w-5 ${node.iconClass ?? 'text-white/85'}`} />
        ) : null}
        {node.wide && (
          <span className="max-w-[76px] text-[10px] font-medium leading-tight text-white">{node.label}</span>
        )}
      </div>
      <div
        className="absolute left-1/2 top-[60px] w-[130px] -translate-x-1/2 text-center leading-tight"
        aria-hidden="true"
      >
        {!node.wide && <span className="block text-[11px] font-medium text-white">{node.label}</span>}
        {node.sub && <span className="block text-[9px] text-white/40">{node.sub}</span>}
      </div>
    </div>
  )
}

function NodeCircle({ node }: { node: CircleNode }) {
  return (
    <div className="absolute" style={{ left: node.x - 28, top: node.y - 28 }}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3b3c3e] ring-1 ring-white/10">
        <node.glyph className="h-5 w-5" />
      </div>
      <div className="absolute left-1/2 top-[60px] w-[120px] -translate-x-1/2 text-center leading-tight">
        <span className="block text-[10px] text-white/85">{node.label}</span>
        {node.sub && <span className="block text-[9px] text-white/40">{node.sub}</span>}
      </div>
    </div>
  )
}

export default function RealEstateDiagram() {
  return (
    <ScaledMockup designWidth={1960}>
      <CanvasFrame title="Real Estate Assistant & Lead Automation System">
        <div className="relative h-[790px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1904 790"
            fill="none"
            aria-hidden="true"
          >
            {SOLID_PATHS.map((d) => (
              <path key={d} d={d} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            ))}
            {DASHED_PATHS.map((d) => (
              <path key={d} d={d} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 5" />
            ))}
            {/* arrowhead on the long return line */}
            <path d="M 1093 209 L 1081 215 L 1093 221" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          </svg>

          {/* branch + handle labels */}
          <span className="absolute left-[530px] top-[98px] text-[9px] text-white/40">true</span>
          <span className="absolute left-[530px] top-[132px] text-[9px] text-white/40">false</span>
          <span className="absolute left-[86px] top-[496px] text-[9px] text-white/40">Model</span>
          <span className="absolute left-[168px] top-[550px] text-[9px] text-white/40">Memory</span>
          <span className="absolute left-[625px] top-[584px] text-[9px] text-white/40">Tool</span>
          <span className="absolute left-[604px] top-[692px] text-[9px] text-white/40">Embeddings</span>

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
