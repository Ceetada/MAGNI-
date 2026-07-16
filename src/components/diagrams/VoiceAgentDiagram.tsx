import type { ReactElement } from 'react'
import { AudioLines, BookOpen, Headset, PhoneCall, PhoneOutgoing } from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { CanvasFrame, FlowConnector, ModelNode, NodeColumn, type MainNode } from './parts'
import { CalendarGlyph, GeminiGlyph } from './glyphs'

/* white-tinted lucide wrappers so they read on the dark canvas */
const CallGlyph = ({ className = 'h-4 w-4' }: { className?: string }): ReactElement => (
  <PhoneCall className={`${className} text-[#62d0a2]`} />
)
const OutGlyph = ({ className = 'h-4 w-4' }: { className?: string }): ReactElement => (
  <PhoneOutgoing className={`${className} text-[#62d0a2]`} />
)
const VoiceGlyph = ({ className = 'h-4 w-4' }: { className?: string }): ReactElement => (
  <AudioLines className={`${className} text-white/80`} />
)
const KbGlyph = ({ className = 'h-4 w-4' }: { className?: string }): ReactElement => (
  <BookOpen className={`${className} text-white/80`} />
)

const ROW: MainNode[] = [
  { label: 'Incoming Call', sub: 'inbound', glyph: CallGlyph, trigger: true },
  { label: 'Esther · Voice Agent', sub: 'Voice · Brain · Tools', icon: Headset },
  { label: 'Speak to Caller', sub: 'live reply', glyph: OutGlyph },
]

const TOOLS = [
  { glyph: VoiceGlyph, label: 'ElevenLabs Voice' },
  { glyph: GeminiGlyph, label: 'Gemini 2.5 Flash' },
  { glyph: KbGlyph, label: 'Knowledge Base' },
  { glyph: CalendarGlyph, label: 'check_availability', sub: 'read: calendar' },
  { glyph: CalendarGlyph, label: 'book_appointment', sub: 'create: event' },
]

/** Architecture diagram for the voice receptionist: a call flows into Esther,
 *  the ElevenLabs + Gemini voice agent, which uses a knowledge base and two
 *  Google-Calendar tools to check availability and book the appointment. */
export default function VoiceAgentDiagram() {
  return (
    <ScaledMockup designWidth={860}>
      <CanvasFrame title="Voice Receptionist · Esther">
        <div className="relative flex justify-center pb-[150px]">
          {ROW.map((node, i) => (
            <div key={node.label} className="contents">
              <NodeColumn node={node} />
              {i < ROW.length - 1 && <FlowConnector />}
            </div>
          ))}

          {/* Esther's voice, brain and tools fan out below the agent */}
          <div className="absolute left-1/2 top-[92px] flex -translate-x-1/2 gap-2">
            {TOOLS.map((tool) => (
              <ModelNode key={tool.label} {...tool} />
            ))}
          </div>
        </div>
      </CanvasFrame>
    </ScaledMockup>
  )
}
