import { Bot, Compass, GraduationCap, Magnet, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    title: 'AI Automation Strategy',
    description:
      'We identify the manual tasks, workflow gaps, and revenue leaks slowing your business down, then create a clear automation roadmap designed to save time, cut costs, and improve performance.',
    icon: Compass,
  },
  {
    title: 'AI Chatbots & Customer Support',
    description:
      'We build AI chatbots that answer questions, qualify leads, handle support requests, and assist customers 24/7, reducing response time while lowering the cost of customer service.',
    icon: Bot,
  },
  {
    title: 'Lead Capture & Follow-Up Systems',
    description:
      'We create automated systems that capture new leads, organize them, and follow up instantly, helping your business convert more prospects without relying on manual outreach.',
    icon: Magnet,
  },
  {
    title: 'Workflow & CRM Automation',
    description:
      'We connect your tools, automate repetitive admin work, and streamline your CRM, so your team spends less time managing tasks and more time closing deals.',
    icon: Workflow,
  },
  {
    title: 'AI Systems Training',
    description:
      'We train teams to understand and use AI automation confidently in daily operations. Staff learn how automation works, where it creates value, and how to apply it responsibly to save time, improve productivity, and support business growth.',
    icon: GraduationCap,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Services</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 sm:mt-16">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 2) * 80}
              className={i === SERVICES.length - 1 ? 'md:col-span-2 md:max-w-xl' : ''}
            >
              <div className="group">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500/15">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium text-gold-400 sm:text-xl">{service.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
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
