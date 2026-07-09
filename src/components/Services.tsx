import { Bot, Compass, GraduationCap, Magnet, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

interface Service {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
}

const SERVICES: Service[] = [
  {
    title: 'AI Automation Strategy',
    description:
      'We identify the manual tasks, workflow gaps, and revenue leaks slowing your business down, then create a clear automation roadmap designed to save time, cut costs, and improve performance.',
    icon: Compass,
    gradient: 'radial-gradient(ellipse at top left, rgba(245,168,28,0.14) 0%, transparent 65%)',
  },
  {
    title: 'AI Chatbots & Customer Support',
    description:
      'We build AI chatbots that answer questions, qualify leads, handle support requests, and assist customers 24/7, reducing response time while lowering the cost of customer service.',
    icon: Bot,
    gradient: 'radial-gradient(ellipse at top right, rgba(253,208,82,0.18) 0%, transparent 65%)',
  },
  {
    title: 'Lead Capture & Follow-Up Systems',
    description:
      'We create automated systems that capture new leads, organize them, and follow up instantly, helping your business convert more prospects without relying on manual outreach.',
    icon: Magnet,
    gradient: 'radial-gradient(ellipse at bottom left, rgba(224,138,14,0.14) 0%, transparent 65%)',
  },
  {
    title: 'Workflow & CRM Automation',
    description:
      'We connect your tools, automate repetitive admin work, and streamline your CRM, so your team spends less time managing tasks and more time closing deals.',
    icon: Workflow,
    gradient: 'radial-gradient(ellipse at bottom right, rgba(245,168,28,0.12) 0%, transparent 65%)',
  },
  {
    title: 'AI Systems Training',
    description:
      'We train teams to understand and use AI automation confidently in daily operations. Staff learn how automation works, where it creates value, and how to apply it responsibly to save time, improve productivity, and support business growth.',
    icon: GraduationCap,
    gradient: 'radial-gradient(ellipse at center, rgba(253,208,82,0.16) 0%, transparent 70%)',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">What we do</span>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">Services</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 80}
              className={i === SERVICES.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-[0_1px_3px_rgba(12,13,16,0.06)] ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(12,13,16,0.16)] hover:ring-gold-500/30 sm:p-8">
                {/* gradient bloom revealed on hover */}
                <div
                  className="pointer-events-none absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  style={{ background: service.gradient }}
                />
                <span className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="relative text-lg font-medium text-ink-900 sm:text-xl">{service.title}</h3>
                <p className="relative mt-2.5 text-[14px] leading-relaxed text-ink-700/65 sm:text-[15px]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
