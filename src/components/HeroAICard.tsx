import { ArrowUp, Mic, Paperclip, Sparkles } from 'lucide-react'
import { GeminiGlyph, GmailGlyph, SheetsGlyph, TelegramGlyph } from './diagrams/glyphs'
import type { ComponentType } from 'react'

interface FloatIcon {
  glyph: ComponentType<{ className?: string }>
  x: number // % across
  y: number // in a 0..60 vertical space
  delay: number
}

const ICONS: FloatIcon[] = [
  { glyph: GmailGlyph, x: 13, y: 24, delay: 0 },
  { glyph: GeminiGlyph, x: 37, y: 9, delay: 0.8 },
  { glyph: TelegramGlyph, x: 63, y: 11, delay: 1.6 },
  { glyph: SheetsGlyph, x: 86, y: 23, delay: 2.4 },
]

// dashed connectors from each icon down to the chat input (0..100 x, 0..60 y)
const WIRES = [
  'M13 24 C 22 42, 42 52, 50 60',
  'M37 9 C 42 34, 48 50, 50 60',
  'M63 11 C 60 34, 53 50, 50 60',
  'M86 23 C 74 42, 56 52, 50 60',
]

/** Glassy gradient AI card for the hero: floating tool icons wired into a chat
 *  input, with soft blobs and gentle motion. */
export default function HeroAICard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-gold-100 via-orange-100 to-sky-100 p-4 shadow-[0_30px_80px_-30px_rgba(12,13,16,0.35)] ring-1 ring-black/5 sm:p-5">
      {/* soft colored blobs */}
      <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-gold-300/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-32 w-32 rounded-full bg-orange-300/40 blur-3xl" />

      {/* icon cloud wired to the input */}
      <div className="relative h-36 sm:h-44">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          {WIRES.map((d) => (
            <path
              key={d}
              d={d}
              stroke="rgba(12,13,16,0.28)"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              vectorEffect="non-scaling-stroke"
              className="animate-dash-flow"
            />
          ))}
        </svg>

        {ICONS.map((ic, i) => (
          <div
            key={i}
            className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_-6px_rgba(12,13,16,0.25)] ring-1 ring-black/5 sm:h-12 sm:w-12"
            style={{ left: `${ic.x}%`, top: `${(ic.y / 60) * 100}%`, animationDelay: `${ic.delay}s` }}
          >
            <ic.glyph className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        ))}
      </div>

      {/* chat input card */}
      <div className="relative rounded-2xl bg-white/85 p-3.5 shadow-[0_10px_30px_-12px_rgba(12,13,16,0.25)] ring-1 ring-black/5 backdrop-blur sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-ink-700/55 sm:text-sm">How can we automate your business?</p>
          <Sparkles className="h-4 w-4 shrink-0 text-gold-500" />
        </div>
        <div className="mt-3.5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg bg-ink-900/[0.04] px-2 py-1 text-[11px] text-ink-700/70 ring-1 ring-ink-900/5">
            <Paperclip className="h-3 w-3" />
            Attach
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg bg-ink-900/[0.04] px-2 py-1 text-[11px] text-ink-700/70 ring-1 ring-ink-900/5">
            <Sparkles className="h-3 w-3 text-gold-500" />
            Workflow
          </span>
          <div className="flex-1" />
          <Mic className="h-4 w-4 text-ink-700/45" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-sm transition-transform hover:scale-105">
            <ArrowUp className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* learn more tab */}
      <a
        href="#work"
        className="absolute bottom-3 right-3 hidden items-center gap-1 rounded-xl bg-white/90 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-ink-800 shadow-md ring-1 ring-black/5 backdrop-blur transition-colors hover:text-gold-700 sm:inline-flex"
      >
        LEARN MORE
      </a>
    </div>
  )
}
