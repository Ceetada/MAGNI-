import Reveal from './Reveal'
import Logo from './Logo'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[360px] w-[360px] rounded-full bg-gold-300/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
        <Reveal>
          <div className="flex items-start gap-3 lg:sticky lg:top-28">
            <span className="text-gold-500">
              <Logo markOnly />
            </span>
            <h2 className="text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">About Us</h2>
          </div>
        </Reveal>

        <div className="space-y-6 text-[15px] leading-relaxed text-ink-700/70 sm:text-base lg:text-lg">
          <Reveal delay={80}>
            <p>
              At <span className="font-medium text-ink-900">Magni Automations</span>, we believe AI should do more
              than look impressive. It should save time, reduce costs, and create measurable growth.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              We partner with businesses to understand the tasks slowing their teams down, the systems creating
              unnecessary friction, and the opportunities being missed through manual processes. Then we design
              intelligent automation solutions that help companies operate faster, serve customers better, and
              convert more opportunities into revenue.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              From sales and customer support to lead management and internal workflows, our AI automation systems
              are built to remove bottlenecks, improve efficiency, and give your business the freedom to scale
              without adding more complexity.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
