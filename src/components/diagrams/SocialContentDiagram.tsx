import { Braces, Bot, ClipboardList, Search, Sparkles } from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { CanvasFrame, FlowConnector, NodeColumn, type MainNode } from './parts'
import { AnthropicGlyph, GeminiGlyph, GmailGlyph, LinkedInGlyph, OpenRouterGlyph } from './glyphs'

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
      <CanvasFrame title="Social Media Content Automation System">
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
      </CanvasFrame>
    </ScaledMockup>
  )
}
