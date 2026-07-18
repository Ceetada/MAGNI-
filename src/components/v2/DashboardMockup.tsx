import {
  Activity,
  Bot,
  GitBranch,
  Home,
  Plug,
  Search,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import ScaledMockup from '../ScaledMockup'
import { FlowConnector, NodeColumn, type MainNode, type ModelSpec } from '../diagrams/parts'
import { CalendarGlyph, GeminiGlyph, GmailGlyph, SheetsGlyph } from '../diagrams/glyphs'

const SIDE_NAV = [
  { icon: Home, label: 'Dashboard' },
  { icon: Workflow, label: 'Automations', active: true },
  { icon: Activity, label: 'Runs' },
  { icon: Plug, label: 'Integrations' },
  { icon: Users, label: 'Team' },
]

const LIVE_AUTOMATIONS = [
  { name: 'Lead Qualifier', meta: '128 runs today', active: true },
  { name: 'Voice Receptionist', meta: '47 calls answered' },
  { name: 'Content Engine', meta: '12 posts published' },
  { name: 'Expense Tracker', meta: '63 receipts logged' },
]

const STATS = [
  { label: 'Runs today', value: '128', delta: '+12%' },
  { label: 'Leads captured', value: '41', delta: '+8%' },
  { label: 'Hours saved this week', value: '26.5', delta: '+3.2' },
]

const FLOW: { node: MainNode; models?: ModelSpec[] }[] = [
  { node: { label: 'New Lead', sub: 'webhook', icon: Zap, trigger: true } },
  {
    node: { label: 'AI Qualify', sub: 'score + enrich', icon: Bot },
    models: [
      { glyph: GeminiGlyph, label: 'Gemini 2.5' },
      { glyph: SheetsGlyph, label: 'CRM Sheet' },
      { glyph: GmailGlyph, label: 'Gmail' },
    ],
  },
  { node: { label: 'Hot / Cold', sub: 'route', icon: GitBranch } },
  { node: { label: 'Book Call', sub: 'calendar', glyph: CalendarGlyph } },
]

/** The "product shot" for the v2 hero stage: a fictional Magni Ops client
 *  workspace rendered as a dark app window, with a live animated workflow. */
export default function DashboardMockup() {
  return (
    <ScaledMockup designWidth={1020}>
      <div className="overflow-hidden rounded-2xl bg-ink-900 ring-1 ring-white/10 shadow-[0_50px_120px_-24px_rgba(0,0,0,0.8)]">
        {/* window chrome */}
        <div className="flex items-center gap-3 border-b border-white/5 bg-ink-950/80 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="inline-block rounded-md bg-white/[0.05] px-8 py-1 text-[10px] text-white/45">
              Magni Ops — Client Workspace
            </span>
          </div>
          <span className="w-12" />
        </div>

        {/* toolbar */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-2.5">
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <span>Acme Realty</span>
            <span className="text-white/20">/</span>
            <span className="font-medium text-white/80">Automations</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/35">
            <Search className="h-3 w-3" />
            Search workflows…
          </div>
        </div>

        <div className="flex">
          {/* sidebar */}
          <aside className="w-[218px] shrink-0 border-r border-white/5 bg-ink-950/50 p-4">
            <nav className="space-y-0.5">
              {SIDE_NAV.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11.5px] ${
                    item.active
                      ? 'bg-white/[0.07] font-medium text-white'
                      : 'text-white/45'
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              ))}
            </nav>

            <p className="mt-6 px-2.5 text-[9px] font-medium uppercase tracking-widest text-white/30">
              Live automations
            </p>
            <div className="mt-2 space-y-0.5">
              {LIVE_AUTOMATIONS.map((flow) => (
                <div
                  key={flow.name}
                  className={`rounded-lg px-2.5 py-2 ${flow.active ? 'bg-gold-500/10 ring-1 ring-gold-500/20' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className={`text-[11.5px] ${flow.active ? 'font-medium text-white' : 'text-white/60'}`}>
                      {flow.name}
                    </span>
                  </div>
                  <p className="mt-0.5 pl-3.5 text-[9.5px] text-white/30">{flow.meta}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* main panel */}
          <main className="flex-1 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h3 className="text-[15px] font-medium text-white">Lead Qualifier</h3>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9.5px] font-medium text-emerald-300 ring-1 ring-emerald-400/25">
                  Active
                </span>
              </div>
              <span className="text-[10px] text-white/35">Last run 2 min ago</span>
            </div>

            {/* stat tiles */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-white/5">
                  <p className="text-[9.5px] text-white/40">{stat.label}</p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xl font-medium text-white">{stat.value}</span>
                    <span className="text-[9.5px] text-emerald-300">{stat.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* workflow canvas */}
            <div className="relative mt-4 overflow-hidden rounded-xl ring-1 ring-white/5">
              <div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="relative flex justify-center px-6 pb-[140px] pt-8">
                {FLOW.map((col, i) => (
                  <div key={col.node.label} className="contents">
                    <NodeColumn node={col.node} models={col.models} />
                    {i < FLOW.length - 1 && <FlowConnector />}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </ScaledMockup>
  )
}
