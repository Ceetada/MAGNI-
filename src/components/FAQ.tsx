import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Answers here mirror the FAQPage JSON-LD in index.html so the visible copy and
 * the structured data answer engines read stay in sync. Keep them aligned.
 */
const FAQS = [
  {
    q: 'What is Magni Automations?',
    a: 'Magni Automations is an AI automation agency that designs and builds custom AI systems for businesses. We build AI agents, automation workflows, and voice agents that capture leads, support customers, handle repetitive work, and help businesses scale without adding headcount.',
  },
  {
    q: 'What does an AI automation agency do?',
    a: 'An AI automation agency identifies repetitive, time-consuming tasks in a business and builds AI-powered systems to handle them automatically. That includes qualifying and following up with leads, answering customer questions, creating and publishing content, processing documents and receipts, and connecting the tools a business already uses so work flows without manual effort.',
  },
  {
    q: 'What business processes can you automate?',
    a: 'We automate work across sales, marketing, customer support, onboarding, finance, and operations. Common builds include AI lead capture and qualification, AI voice receptionists that book appointments, content creation pipelines, expense and receipt tracking, and custom workflows tailored to a company’s specific tools and data.',
  },
  {
    q: 'Which tools and platforms do you build with?',
    a: 'We are platform-agnostic and use whatever fits the job best, including automation platforms like n8n, Make.com, and Zapier, as well as custom code when a build calls for it. We connect leading AI models such as OpenAI, Google Gemini, and Claude, plus voice platforms like ElevenLabs. Systems integrate with the tools businesses already rely on, including Google Sheets, Google Calendar, Gmail, Telegram, LinkedIn, CRMs, and vector databases.',
  },
  {
    q: 'How much does AI automation cost?',
    a: 'Cost depends on the scope and complexity of the system being built. Every engagement starts with a free consultation where we map out where AI automation can save time and win revenue, then scope a build to fit your goals and budget. Reach out to get a tailored estimate.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free consultation and we will review your current workflows, identify the highest-impact automation opportunities, and map out a custom AI system before any build begins.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-[12px] font-medium uppercase tracking-widest text-gold-700">FAQ</span>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-ink-700/60 sm:text-base">
            What businesses ask us most about AI automation and how we build.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl bg-[#f7f7f8] ring-1 ring-ink-900/5 transition-colors hover:ring-gold-500/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <h3 className="text-[15px] font-medium text-ink-900 sm:text-base">{item.q}</h3>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[14px] leading-relaxed text-ink-700/70 sm:px-6 sm:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
