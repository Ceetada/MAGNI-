import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Check,
  ImagePlus,
  Mic,
  PhoneCall,
  ReceiptText,
} from 'lucide-react'
import { getProjectBySlug } from '../../data/projects'
import { CalendarGlyph, GmailGlyph, LinkedInGlyph, SheetsGlyph, TelegramGlyph } from '../diagrams/glyphs'

const wave = [4, 9, 6, 12, 5, 10, 7, 12, 6, 9, 4]

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10.5px] font-medium text-ink-700/75 shadow-sm ring-1 ring-ink-900/5">
      {children}
    </span>
  )
}

/** Multi-agent content pipeline → a LinkedIn draft moving through approval. */
function ContentVignette() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-[#f7f7f8] p-4 ring-1 ring-ink-900/5 sm:p-5">
      <div className="flex flex-wrap gap-1.5">
        {['Research', 'Write', 'Design', 'Approve'].map((step) => (
          <span
            key={step}
            className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[9.5px] font-medium text-ink-700/70 ring-1 ring-ink-900/5"
          >
            <Check className="h-2.5 w-2.5 text-emerald-500" />
            {step}
          </span>
        ))}
      </div>

      <div className="rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-ink-900/5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-[11px] font-bold text-ink-950">
            M
          </span>
          <div>
            <p className="text-[10.5px] font-semibold text-ink-900">Magni Automations</p>
            <p className="text-[9px] text-ink-700/40">Draft · ready to publish</p>
          </div>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-ink-900/[0.07]" />
          <div className="h-1.5 w-4/5 rounded bg-ink-900/[0.07]" />
          <div className="h-1.5 w-3/5 rounded bg-ink-900/[0.07]" />
        </div>
        <div className="mt-3 flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500">
          <ImagePlus className="h-5 w-5 text-white/90" />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Chip>
          <GmailGlyph className="h-3 w-3" /> Human approved
        </Chip>
        <Chip>
          <LinkedInGlyph className="h-3 w-3" /> Published to LinkedIn
        </Chip>
      </div>
    </div>
  )
}

/** Telegram assistant → enquiry to booked viewing, in-chat. */
function RealEstateVignette() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-[#f7f7f8] p-4 ring-1 ring-ink-900/5 sm:p-5">
      <div className="flex items-center gap-1.5 text-[10px] text-ink-700/45">
        <TelegramGlyph className="h-3.5 w-3.5" />
        Telegram · Acme Realty Assistant
      </div>

      {/* prospect voice note */}
      <div className="mr-10 rounded-2xl rounded-tl-md bg-white p-3 shadow-sm ring-1 ring-ink-900/5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900/5">
            <Mic className="h-3 w-3 text-ink-700/60" />
          </span>
          <span className="flex items-end gap-[3px]">
            {wave.map((h, i) => (
              <span key={i} className="w-[2.5px] rounded-full bg-ink-900/30" style={{ height: h }} />
            ))}
          </span>
          <span className="text-[9px] text-ink-700/40">0:11</span>
        </div>
        <p className="mt-2 text-[10.5px] leading-relaxed text-ink-700/70">
          &ldquo;Looking for a 2-bed apartment downtown, around $250k&hellip;&rdquo;
        </p>
      </div>

      {/* agent reply with matches */}
      <div className="ml-10 rounded-2xl rounded-tr-md bg-gold-100 p-3 ring-1 ring-gold-500/20">
        <p className="text-[10.5px] leading-relaxed text-ink-800">
          I found 3 listings that match. Want to book a viewing this weekend?
        </p>
        <div className="mt-2 flex gap-1.5">
          <span className="h-9 w-12 rounded-md bg-gradient-to-br from-ink-500 to-ink-800" />
          <span className="h-9 w-12 rounded-md bg-gradient-to-br from-gold-400 to-gold-700" />
          <span className="h-9 w-12 rounded-md bg-gradient-to-br from-ink-600 to-ink-900" />
        </div>
      </div>

      <Chip>
        <CalendarGlyph className="h-3 w-3" /> Viewing booked · Sat 2:00 PM
        <Check className="h-3 w-3 text-emerald-500" />
      </Chip>
    </div>
  )
}

/** Voice receptionist → live call with waveform and in-call booking. */
function VoiceVignette() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-[#f7f7f8] p-4 ring-1 ring-ink-900/5 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-ink-700/45">
          <PhoneCall className="h-3 w-3" />
          Incoming call · Front desk
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-600 ring-1 ring-emerald-500/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      {/* animated waveform */}
      <div className="flex h-10 items-center justify-center gap-1 rounded-xl bg-ink-950 px-4">
        {[6, 14, 9, 18, 12, 22, 10, 16, 20, 8, 15, 11, 18, 7, 13].map((h, i) => (
          <span
            key={i}
            className="w-[3px] animate-pulse rounded-full bg-gold-400"
            style={{ height: h, animationDelay: `${i * 110}ms` }}
          />
        ))}
      </div>

      <div className="mr-8 rounded-2xl rounded-tl-md bg-white p-2.5 shadow-sm ring-1 ring-ink-900/5">
        <p className="text-[10.5px] text-ink-700/70">&ldquo;Can I see the doctor on Tuesday morning?&rdquo;</p>
      </div>
      <div className="ml-8 rounded-2xl rounded-tr-md bg-ink-900 p-2.5">
        <p className="text-[10.5px] text-white/85">
          &ldquo;Tuesday 10:30 AM is open — shall I book you in?&rdquo;
        </p>
      </div>

      <Chip>
        <CalendarGlyph className="h-3 w-3" /> Appointment booked in-call
        <Check className="h-3 w-3 text-emerald-500" />
      </Chip>
    </div>
  )
}

/** Expense assistant → receipt photo becomes a clean sheet row. */
function ExpenseVignette() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-[#f7f7f8] p-4 ring-1 ring-ink-900/5 sm:p-5">
      <div className="flex items-center gap-1.5 text-[10px] text-ink-700/45">
        <ReceiptText className="h-3 w-3" />
        Receipt sent on Telegram
      </div>

      <div className="flex items-center gap-3">
        {/* the receipt */}
        <div className="w-24 shrink-0 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-dashed ring-ink-900/15">
          <div className="space-y-1">
            <div className="h-1 w-full rounded bg-ink-900/10" />
            <div className="h-1 w-4/5 rounded bg-ink-900/10" />
            <div className="h-1 w-full rounded bg-ink-900/10" />
            <div className="h-1 w-3/5 rounded bg-ink-900/10" />
          </div>
          <div className="mt-2 border-t border-dashed border-ink-900/15 pt-1.5 text-center">
            <p className="text-[8px] text-ink-700/40">TOTAL</p>
            <p className="text-[11px] font-semibold text-ink-900">$84.20</p>
          </div>
        </div>

        <span className="text-ink-700/30">→</span>

        {/* the sheet row */}
        <div className="flex-1 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-ink-900/5">
          <div className="flex items-center gap-1.5 text-[9px] text-ink-700/40">
            <SheetsGlyph className="h-3 w-3" /> Expenses 2026
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 text-[9px]">
            <span className="rounded bg-ink-900/[0.04] px-1.5 py-1 text-ink-800">Fuel Station</span>
            <span className="rounded bg-ink-900/[0.04] px-1.5 py-1 text-ink-800">$84.20</span>
            <span className="rounded bg-emerald-500/10 px-1.5 py-1 font-medium text-emerald-600">Logged ✓</span>
          </div>
          <div className="mt-1 grid grid-cols-3 gap-1 text-[9px] opacity-50">
            <span className="rounded bg-ink-900/[0.04] px-1.5 py-1 text-ink-800">Category: Fuel</span>
            <span className="rounded bg-ink-900/[0.04] px-1.5 py-1 text-ink-800">Tax: $6.10</span>
            <span className="rounded bg-ink-900/[0.04] px-1.5 py-1 text-ink-800">Conf: 98%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Chip>12 fields captured</Chip>
        <Chip>
          <GmailGlyph className="h-3 w-3" /> Manager alerted over limit
        </Chip>
      </div>
    </div>
  )
}

const VIGNETTES: Record<string, () => React.ReactElement> = {
  'social-media-content-automation': ContentVignette,
  'real-estate-lead-automation': RealEstateVignette,
  'ai-voice-receptionist': VoiceVignette,
  'ai-expense-tracker': ExpenseVignette,
}

/** White showcase card for one built system, shown on the v2 dark stage.
 *  Left: the classic project card content. Right: a bespoke mini-mock of
 *  what the system actually does. `displayIndex` follows the tab order so
 *  the numbering reads 01–04 left to right. */
export default function SystemCard({ slug, displayIndex }: { slug: string; displayIndex?: string }) {
  const project = getProjectBySlug(slug)
  if (!project) return null
  const Vignette = VIGNETTES[slug]

  return (
    <div key={slug} className="animate-fade-up">
      <div className="rounded-3xl bg-white p-6 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)] sm:p-8 lg:p-10">
        {/* index + open */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-[12px] text-ink-700/35">{displayIndex ?? project.index}</span>
          <Link
            to={`/work/${project.slug}`}
            aria-label={`Open ${project.title} case study`}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f5] ring-1 ring-ink-900/5 transition-all duration-300 hover:bg-gold-500 hover:ring-gold-500"
          >
            <ArrowUpRight className="h-4 w-4 text-ink-700/60 transition-colors group-hover:text-ink-950" />
          </Link>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* left: card content */}
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25">
              <project.icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-widest text-gold-700">
              {project.category}
            </p>
            <h3 className="mt-2.5 text-2xl font-medium leading-snug tracking-tight text-ink-900 sm:text-[27px]">
              {project.title}
            </h3>
            <p className="mt-3.5 text-[14px] leading-relaxed text-ink-700/60 sm:text-[15px]">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-[#f4f4f5] px-3 py-1.5 text-[11px] text-ink-700/70 ring-1 ring-ink-900/5"
                >
                  {tool}
                </span>
              ))}
            </div>
            <Link
              to={`/work/${project.slug}`}
              className="group mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-900 transition-colors hover:text-gold-700"
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* right: bespoke vignette */}
          {Vignette && <Vignette />}
        </div>
      </div>
    </div>
  )
}
