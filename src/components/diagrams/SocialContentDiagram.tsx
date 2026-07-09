import type { ReactElement } from 'react'
import {
  Braces,
  Bot,
  ClipboardList,
  Play,
  Search,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import ScaledMockup from '../ScaledMockup'

/* Brand glyphs for the model/service sub-nodes */

function GmailGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M12 11.3 3.6 5h16.8L12 11.3Z" />
      <path fill="#FBBC04" d="M3 6.2v11.6h3.4V8.8L3 6.2Z" />
      <path fill="#34A853" d="M17.6 8.8v9h3.4V6.2l-3.4 2.6Z" />
      <path fill="#4285F4" d="M6.4 17.8h11.2V8.8L12 13.1 6.4 8.8v9Z" />
    </svg>
  )
}

function GeminiGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gem-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4E8CF7" />
          <stop offset="55%" stopColor="#9177E8" />
          <stop offset="100%" stopColor="#D66DA6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gem-grad)"
        d="M12 1.5c.6 5.8 4.7 9.9 10.5 10.5-5.8.6-9.9 4.7-10.5 10.5C11.4 16.7 7.3 12.6 1.5 12 7.3 11.4 11.4 7.3 12 1.5Z"
      />
    </svg>
  )
}

function AnthropicGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#D97757"
        d="M13.8 4.5h-3.9L2.8 19.5h4l1.4-3.2h7.4l1.4 3.2h4L13.8 4.5Zm-4.2 8.6L12 7.6l2.4 5.5H9.6Z"
      />
    </svg>
  )
}

function LinkedInGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.6 9.6H5V19h2.6V9.6ZM6.3 8.4a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM12 14.1c0-1.1.5-1.8 1.5-1.8s1.4.7 1.4 1.8V19h2.6v-5.5c0-2.5-1.3-3.7-3.1-3.7-1.5 0-2.1.8-2.4 1.4V9.6H9.4V19H12v-4.9Z"
      />
    </svg>
  )
}

function OpenRouterGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        d="M3 12h5.2c2.2 0 3.4-2.6 5-4.2 1.2-1.2 2.4-1.6 4-1.6M3 12h5.2c2.2 0 3.4 2.6 5 4.2 1.2 1.2 2.4 1.6 4 1.6"
      />
      <path fill="#fff" d="M16.4 3.2 22 6.2l-5.6 3V3.2Zm0 11.6L22 17.8l-5.6 3v-6Z" />
    </svg>
  )
}

/* Canvas building blocks */

interface MainNode {
  label: string
  sub: string
  icon?: LucideIcon
  glyph?: (props: { className?: string }) => ReactElement
  trigger?: boolean
}

interface ModelSpec {
  glyph: (props: { className?: string }) => ReactElement
  label: string
}

function NodeCard({ node }: { node: MainNode }) {
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

function ModelNode({ glyph: Glyph, label }: ModelSpec) {
  return (
    <div className="flex w-[76px] flex-col items-center gap-1.5">
      <span className="mx-auto block h-4 w-px border-l border-dashed border-white/20" />
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-white/10">
        <Glyph className="h-4 w-4" />
      </span>
      <span className="text-center text-[7px] leading-snug text-white/50">{label}</span>
    </div>
  )
}

/** A node column: fixed-width card with optional model sub-nodes hanging below,
 *  absolutely positioned so they don't widen the column. */
function NodeColumn({ node, models }: { node: MainNode; models?: ModelSpec[] }) {
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

function FlowConnector() {
  return (
    <div className="relative mt-[35px] h-[1.5px] min-w-[24px] flex-1 overflow-hidden bg-white/20">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-gold-400 to-transparent bg-[length:200%_100%]" />
    </div>
  )
}

const ROW1: MainNode[] = [
  { label: 'On form submission', sub: 'Trigger', icon: ClipboardList, trigger: true },
  { label: 'Get topics', sub: 'AI Agent', icon: Bot },
  { label: 'parse json', sub: 'manual', icon: Braces },
  { label: 'await approval', sub: 'sendAndWait: message', glyph: GmailGlyph },
  { label: 'Content Research agent', sub: 'AI Agent', icon: Search },
]

const ROW2: MainNode[] = [
  { label: 'Write post', sub: 'AI Agent', icon: Bot },
  { label: 'Send a message', sub: 'sendAndWait: message', glyph: GmailGlyph },
  { label: 'Generate an image', sub: 'generate: image', icon: Sparkles },
  { label: 'Create a post', sub: 'create: post', glyph: LinkedInGlyph },
]

/** Stylized recreation of the real n8n canvas behind the social content system. */
export default function SocialContentDiagram() {
  return (
    <ScaledMockup designWidth={860}>
      <div className="overflow-hidden rounded-2xl bg-ink-950 ring-1 ring-ink-900/20 shadow-[0_24px_70px_-16px_rgba(12,13,16,0.45)]">
        {/* n8n-style editor top bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-ink-900 px-4 py-2.5">
          <div className="flex items-center gap-2 text-[10px] text-white/50">
            <span className="text-white/35">Personal /</span>
            <span className="font-medium text-white/85">Social Media Content Automation System</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[9px] text-white/60">Editor</span>
            <span className="hidden rounded-md px-2.5 py-1 text-[9px] text-white/35 sm:inline">Executions</span>
            <span className="rounded-md bg-gold-500 px-2.5 py-1 text-[9px] font-medium text-ink-950">Publish</span>
          </div>
        </div>

        {/* canvas */}
        <div className="relative px-7 pb-6 pt-9">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />

          {/* row 1: card row + reserved space below for the hanging model nodes */}
          <div className="relative flex pb-[104px]">
            {ROW1.map((node, i) => (
              <div key={node.label} className="contents">
                <NodeColumn
                  node={node}
                  models={
                    node.label === 'Get topics'
                      ? [
                          { glyph: GeminiGlyph, label: 'Google Gemini Chat Model' },
                          { glyph: AnthropicGlyph, label: 'Message a model in Anthropic' },
                        ]
                      : node.label === 'Content Research agent'
                        ? [
                            { glyph: OpenRouterGlyph, label: 'OpenRouter Chat Model' },
                            { glyph: AnthropicGlyph, label: 'Message a model in Anthropic' },
                          ]
                        : undefined
                  }
                />
                {i < ROW1.length - 1 && <FlowConnector />}
              </div>
            ))}
          </div>

          {/* wrap-around elbow from Content Research agent down to Write post.
              viewBox matches the 804px content width so coordinates map 1:1. */}
          <svg
            className="pointer-events-none relative -mt-6 mb-1 block h-[48px] w-full"
            viewBox="0 0 804 48"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 748 0 L 748 10 Q 748 22 736 22 L 68 22 Q 56 22 56 34 L 56 48"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.5"
            />
            <path
              d="M 748 0 L 748 10 Q 748 22 736 22 L 68 22 Q 56 22 56 34 L 56 48"
              stroke="rgba(245,168,28,0.75)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              className="animate-dash-flow"
            />
          </svg>

          {/* row 2 */}
          <div className="relative flex pb-[104px]">
            {ROW2.map((node, i) => (
              <div key={node.label} className="contents">
                <NodeColumn
                  node={node}
                  models={
                    node.label === 'Write post'
                      ? [{ glyph: GeminiGlyph, label: 'Google Gemini Chat Model1' }]
                      : undefined
                  }
                />
                {i < ROW2.length - 1 && <FlowConnector />}
              </div>
            ))}
          </div>

          {/* execute bar */}
          <div className="relative mt-8 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#ff6d5a] px-3.5 py-1.5 text-[10px] font-medium text-white shadow-[0_6px_20px_rgba(255,109,90,0.35)]">
              <Play className="h-3 w-3 fill-white" />
              Execute workflow
            </span>
          </div>
        </div>
      </div>
    </ScaledMockup>
  )
}
