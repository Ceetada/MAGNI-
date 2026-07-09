import { Bot, Braces, Database, Split, SquarePen } from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { CanvasFrame, FlowConnector, ModelNode, NodeCard, NodeColumn, type MainNode } from './parts'
import {
  CalendarGlyph,
  GmailGlyph,
  OpenAIGlyph,
  SheetsGlyph,
  SupabaseGlyph,
  TelegramGlyph,
} from './glyphs'

/* Faithful recreation of the real n8n canvas: If branches true → Edit Fields and
   false → the voice trio, both merging into the lead chain, which wraps twice
   before reaching the AI Agent row with its fanned-out tool nodes. */

const ROW1: MainNode[] = [
  { label: 'Telegram Trigger', sub: 'Updates: message', glyph: TelegramGlyph, trigger: true },
  { label: 'If', sub: '', icon: Split },
  { label: 'Edit Fields', sub: 'manual', icon: SquarePen },
  { label: 'Get Existing Lead', sub: 'read: sheet', glyph: SheetsGlyph },
  { label: 'Prepare Agent Input', sub: 'manual', icon: SquarePen },
]

const VOICE_ROW: MainNode[] = [
  { label: 'download audio', sub: 'get: file', glyph: TelegramGlyph },
  { label: 'Transcribe a recording', sub: 'Transcribe Recording', glyph: OpenAIGlyph },
  { label: 'Set Voice Text', sub: 'manual', icon: SquarePen },
]

const ROW2: MainNode[] = [
  { label: 'Extract Lead Details', sub: 'Response Text', glyph: OpenAIGlyph },
  { label: 'Parse Lead JSON', sub: 'manual', icon: Braces },
  { label: 'Save Lead', sub: 'appendOrUpdate: sheet', glyph: SheetsGlyph },
  { label: 'Get Updated Lead', sub: 'read: sheet', glyph: SheetsGlyph },
  { label: 'Prepare Updated Agent Input', sub: 'manual', icon: SquarePen },
]

const MemoryGlyph = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <Database className={`${className} text-white/70`} />
)

const AGENT_TOOLS = [
  { glyph: OpenAIGlyph, label: 'OpenAI Chat Model' },
  { glyph: MemoryGlyph, label: 'Simple Memory' },
  { glyph: SheetsGlyph, label: 'property_listing', sub: 'read: sheet' },
  { glyph: CalendarGlyph, label: 'check_availability', sub: 'getAll: event' },
  { glyph: CalendarGlyph, label: 'schedule_viewing', sub: 'create: event' },
  { glyph: SupabaseGlyph, label: 'knowledge_base', sub: 'Embedding' },
  { glyph: GmailGlyph, label: 'send_email', sub: 'send: message' },
  { glyph: TelegramGlyph, label: 'send_image', sub: 'sendMediaGroup: mess…' },
]

function SmallConnector() {
  return (
    <div className="relative mt-[35px] h-[1.5px] w-[61px] shrink-0 overflow-hidden bg-white/20">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-gold-400 to-transparent bg-[length:200%_100%]" />
    </div>
  )
}

function WrapElbow() {
  const d = 'M 748 0 L 748 4 Q 748 16 736 16 L 68 16 Q 56 16 56 28 L 56 40'
  return (
    <svg
      className="pointer-events-none relative mb-1 block h-[40px] w-full"
      viewBox="0 0 804 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
      <path
        d={d}
        stroke="rgba(245,168,28,0.75)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />
    </svg>
  )
}

export default function RealEstateDiagram() {
  return (
    <ScaledMockup designWidth={860}>
      <CanvasFrame title="Real Estate Assistant & Lead Automation System">
        {/* row 1 with the If branch: true → Edit Fields, false → voice trio below */}
        <div className="relative pb-4">
          <div className="flex">
            {ROW1.map((node, i) => (
              <div key={node.label} className="contents">
                <NodeColumn node={node} />
                {i < ROW1.length - 1 && <FlowConnector />}
              </div>
            ))}
          </div>

          {/* branch labels on the If outputs */}
          <span className="absolute left-[300px] top-[22px] text-[7.5px] text-white/40">true</span>
          <span className="absolute left-[240px] top-[82px] text-[7.5px] text-white/40">false</span>

          {/* false branch: drop from If, run the voice trio, merge up into Get Existing Lead */}
          <span className="absolute left-[228px] top-[74px] h-[38px] border-l-[1.5px] border-dashed border-gold-500/70" />
          <span className="absolute left-[574px] top-[74px] h-[38px] border-l-[1.5px] border-dashed border-gold-500/70" />

          <div className="ml-[173px] mt-10 flex w-fit">
            {VOICE_ROW.map((node, i) => (
              <div key={node.label} className="contents">
                <NodeCard node={node} />
                {i < VOICE_ROW.length - 1 && <SmallConnector />}
              </div>
            ))}
          </div>

          {/* drop from Prepare Agent Input toward row 2 */}
          <span className="absolute left-[747px] top-[88px] h-[112px] border-l-[1.5px] border-dashed border-gold-500/70" />
        </div>

        <WrapElbow />

        {/* row 2: the lead chain */}
        <div className="relative flex pb-8">
          {ROW2.map((node, i) => (
            <div key={node.label} className="contents">
              <NodeColumn node={node} />
              {i < ROW2.length - 1 && <FlowConnector />}
            </div>
          ))}
          {/* drop from Prepare Updated Agent Input toward the agent row */}
          <span className="absolute left-[747px] top-[88px] h-[24px] border-l-[1.5px] border-dashed border-gold-500/70" />
        </div>

        <WrapElbow />

        {/* row 3: AI Agent → Send a text message, tools fanned out below */}
        <div className="relative flex pb-[180px]">
          <NodeColumn node={{ label: 'AI Agent', sub: 'Chat Model · Memory · Tool', icon: Bot }} />
          <FlowConnector />
          <NodeColumn
            node={{ label: 'Send a text message', sub: 'sendMessage: message', glyph: TelegramGlyph }}
          />
          <div className="flex-[2]" />

          <div className="absolute left-[20px] top-[88px] flex gap-1.5">
            {AGENT_TOOLS.map((tool) => (
              <ModelNode key={tool.label} {...tool} />
            ))}
          </div>

          {/* Embeddings OpenAI hangs below knowledge_base (6th tool circle) */}
          <div className="absolute left-[430px] top-[152px]">
            <ModelNode glyph={OpenAIGlyph} label="Embeddings OpenAI" />
          </div>
        </div>
      </CanvasFrame>
    </ScaledMockup>
  )
}
