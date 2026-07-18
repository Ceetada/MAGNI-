import { Clock, Gauge, TrendingUp, Workflow } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { value: '24/7', label: 'Systems running' },
  { value: '100%', label: 'Custom built' },
]

const PRINCIPLES = [
  {
    icon: Gauge,
    title: 'Operate faster',
    text: 'We remove the manual steps and friction that quietly slow your team down every day.',
  },
  {
    icon: Workflow,
    title: 'Connect everything',
    text: 'Your tools finally talk to each other, so data moves on its own instead of by copy-paste.',
  },
  {
    icon: TrendingUp,
    title: 'Convert more',
    text: 'Faster responses and cleaner follow-up turn more of your opportunities into revenue.',
  },
  {
    icon: Clock,
    title: 'Scale calmly',
    text: 'Grow output without growing headcount or adding more complexity to your operation.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* left: heading + stats, pinned on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">About Us</span>
              <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-ink-900 sm:text-4xl">
                We build AI that plugs into the way your business already works.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 divide-x divide-ink-900/10 overflow-hidden rounded-2xl bg-[#f7f7f8] ring-1 ring-ink-900/5">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-3 py-5 text-center sm:px-4">
                    <p className="text-2xl font-medium text-ink-900 sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-700/45 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right: lead statement + supporting copy + principles */}
          <div>
            <Reveal delay={80}>
              <p className="text-xl font-medium leading-snug text-ink-900 sm:text-2xl">
                At Magni Automations, we believe AI should do more than look impressive. It should{' '}
                <span className="text-gradient-gold">save time, reduce costs, and create measurable growth.</span>
              </p>
            </Reveal>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-700/65 sm:text-base">
              <Reveal delay={140}>
                <p>
                  We partner with businesses to understand the tasks slowing their teams down, the systems
                  creating unnecessary friction, and the opportunities being missed through manual processes.
                  Then we design intelligent automation that helps companies operate faster, serve customers
                  better, and convert more opportunities into revenue.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  From sales and customer support to lead management and internal workflows, our systems are
                  built to remove bottlenecks, improve efficiency, and give your business the freedom to scale
                  without adding more complexity.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PRINCIPLES.map((principle, i) => (
                <Reveal key={principle.title} delay={120 + i * 80}>
                  <div className="group flex h-full gap-4 rounded-2xl bg-[#f7f7f8] p-5 ring-1 ring-ink-900/5 transition-all duration-300 hover:bg-white hover:shadow-[0_16px_40px_-20px_rgba(12,13,16,0.2)] hover:ring-gold-500/25">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/20 transition-transform duration-300 group-hover:scale-110">
                      <principle.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium text-ink-900">{principle.title}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-700/60">{principle.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
