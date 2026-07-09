import { Bell, ChevronRight, Copy, Database, Monitor, RotateCw, Share, Sparkles, Zap } from 'lucide-react'

const NODES = [
  { label: 'New Lead', sub: 'Trigger', icon: Zap },
  { label: 'AI Agent', sub: 'Qualifies & replies', icon: Sparkles },
  { label: 'CRM', sub: 'Auto-updated', icon: Database },
  { label: 'Notify', sub: 'Team alerted', icon: Bell },
]

function Connector() {
  return (
    <div className="relative mx-1 h-px w-6 shrink-0 overflow-hidden bg-white/10 sm:mx-2 sm:w-14">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-gold-400 to-transparent bg-[length:200%_100%]" />
    </div>
  )
}

export default function WorkflowMockup() {
  return (
    <div className="overflow-hidden rounded-t-2xl bg-ink-900 text-left shadow-[0_-20px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-ink-800 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-fit items-center gap-1.5 rounded-md bg-ink-950 px-6 py-1 text-[10px] text-white/50">
          <Monitor className="h-3 w-3 text-white/30" />
          app.magniautomations.ai/workflow
        </div>
        <div className="hidden items-center gap-3 text-white/30 sm:flex">
          <RotateCw className="h-3.5 w-3.5" />
          <Share className="h-3.5 w-3.5" />
          <Copy className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* canvas */}
      <div className="relative bg-ink-950 px-5 py-8 sm:px-10 sm:py-12">
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="relative mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">Lead Follow-Up Automation</p>
            <p className="text-[11px] text-white/40">Running · triggers on new lead</p>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-[#28c840]/10 px-2.5 py-1 text-[10px] text-[#28c840] ring-1 ring-[#28c840]/20 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] animate-pulse-glow" />
            Live
          </span>
        </div>

        <div className="relative flex items-center justify-center overflow-x-auto scrollbar-none py-2">
          {NODES.map((node, i) => (
            <div key={node.label} className="flex items-center">
              <div className="flex w-[86px] shrink-0 flex-col items-center gap-2 rounded-xl bg-white/[0.03] px-2 py-3 ring-1 ring-white/10 sm:w-[120px] sm:px-3 sm:py-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 sm:h-9 sm:w-9">
                  <node.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-center text-[10px] font-medium leading-tight text-white sm:text-[11px]">
                  {node.label}
                </span>
                <span className="text-center text-[8px] leading-tight text-white/40 sm:text-[9px]">{node.sub}</span>
              </div>
              {i < NODES.length - 1 && <Connector />}
            </div>
          ))}
        </div>

        <div className="relative mt-6 grid grid-cols-3 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5">
          {[
            { label: 'LEADS CAPTURED', value: '1,204' },
            { label: 'AVG RESPONSE', value: '48 sec' },
            { label: 'HOURS SAVED', value: '312' },
          ].map((stat) => (
            <div key={stat.label} className="px-3 py-3 text-center sm:px-4">
              <p className="text-base font-medium text-white sm:text-lg">{stat.value}</p>
              <p className="mt-0.5 flex items-center justify-center gap-0.5 text-[7px] tracking-wider text-white/35 sm:text-[8px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-4 flex items-center justify-center gap-1 text-[10px] text-white/30">
          View full automation <ChevronRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  )
}
