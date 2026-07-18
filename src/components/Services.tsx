import { ArrowUpRight, Bot, Check, Compass, GraduationCap, Magnet, Sparkles, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

export interface Service {
  title: string
  description: string
  points: string[]
  icon: LucideIcon
  gradient: string
}

export const SERVICES: Service[] = [
  {
    title: 'AI Automation Strategy',
    description:
      'We identify the manual tasks, workflow gaps, and revenue leaks slowing your business down, then create a clear automation roadmap designed to save time, cut costs, and improve performance.',
    points: ['Workflow & bottleneck audit', 'Prioritized automation roadmap', 'ROI and impact mapping'],
    icon: Compass,
    gradient: 'radial-gradient(ellipse at top left, rgba(245,168,28,0.14) 0%, transparent 65%)',
  },
  {
    title: 'AI Chatbots & Customer Support',
    description:
      'We build AI chatbots that answer questions, qualify leads, handle support requests, and assist customers 24/7, reducing response time while lowering the cost of customer service.',
    points: ['Trained on your docs & data', 'Lead qualification built in', '24/7 replies across channels'],
    icon: Bot,
    gradient: 'radial-gradient(ellipse at top right, rgba(253,208,82,0.18) 0%, transparent 65%)',
  },
  {
    title: 'Lead Capture & Follow-Up Systems',
    description:
      'We create automated systems that capture new leads, organize them, and follow up instantly, helping your business convert more prospects without relying on manual outreach.',
    points: ['Multi-channel lead capture', 'Instant automated follow-up', 'CRM sync & smart tagging'],
    icon: Magnet,
    gradient: 'radial-gradient(ellipse at bottom left, rgba(224,138,14,0.14) 0%, transparent 65%)',
  },
  {
    title: 'Workflow & CRM Automation',
    description:
      'We connect your tools, automate repetitive admin work, and streamline your CRM, so your team spends less time managing tasks and more time closing deals.',
    points: ['Tool-to-tool integrations', 'Repetitive admin automated', 'Clean, always-synced data'],
    icon: Workflow,
    gradient: 'radial-gradient(ellipse at bottom right, rgba(245,168,28,0.12) 0%, transparent 65%)',
  },
  {
    title: 'AI Systems Training',
    description:
      'We train teams to understand and use AI automation confidently in daily operations, so staff know how it works, where it creates value, and how to apply it responsibly.',
    points: ['Hands-on team enablement', 'Practical usage playbooks', 'Responsible AI guidance'],
    icon: GraduationCap,
    gradient: 'radial-gradient(ellipse at center, rgba(253,208,82,0.16) 0%, transparent 70%)',
  },
]

export const DEPARTMENTS = ['Sales', 'Customer Success', 'Onboarding', 'Operations']

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute right-1/2 top-10 h-[360px] w-[720px] translate-x-1/2 rounded-full bg-gold-300/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">What we do</span>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
            Automation, end to end
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700/60 sm:text-base">
            From the first audit to a fully running system and a team that knows how to use it, we cover every
            layer of putting AI to work inside your business.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-5 sm:mt-14">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 80}
              className="w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_1px_3px_rgba(12,13,16,0.06)] ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(12,13,16,0.16)] hover:ring-gold-500/30 sm:p-8">
                {/* gradient bloom revealed on hover */}
                <div
                  className="pointer-events-none absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  style={{ background: service.gradient }}
                />

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-700/25">0{i + 1}</span>
                </div>

                <h3 className="relative mt-5 text-lg font-medium text-ink-900 sm:text-xl">{service.title}</h3>
                <p className="relative mt-2.5 text-[14px] leading-relaxed text-ink-700/60">
                  {service.description}
                </p>

                <ul className="relative mt-5 space-y-2 border-t border-ink-900/10 pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-[13px] text-ink-700/70">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* bespoke / custom capability band */}
        <Reveal delay={120}>
          <div className="mt-6 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 p-8 shadow-[0_30px_80px_-30px_rgba(12,13,16,0.5)] sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div className="relative">
              <div className="grid-fade-dark pointer-events-none absolute inset-0 opacity-60" />
              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-3 py-1.5 text-[12px] text-gold-400 ring-1 ring-gold-500/25">
                <Sparkles className="h-3.5 w-3.5" />
                Bespoke builds
              </span>
              <h3 className="relative mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Something specific in mind? We build it.
              </h3>
              <p className="relative mt-3 max-w-xl text-[15px] leading-relaxed text-white/60">
                Beyond our core services, we design bespoke AI automations for whatever comes next, improve the
                workflows you already run, and spot new opportunities to automate across every part of your
                business.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {DEPARTMENTS.map((dept) => (
                  <span
                    key={dept}
                    className="rounded-full bg-white/5 px-3.5 py-2 text-[13px] text-white/80 ring-1 ring-white/10"
                  >
                    {dept}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_32px_rgba(245,168,28,0.45)]"
              >
                Discuss your build
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
