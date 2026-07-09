import type { ComponentType } from 'react'
import {
  ClipboardList,
  ImagePlus,
  MailCheck,
  MessageSquareText,
  PenLine,
  Search,
  Send,
  ShieldCheck,
  Workflow,
  PhoneCall,
  Database,
  type LucideIcon,
} from 'lucide-react'
import SocialContentDiagram from '../components/diagrams/SocialContentDiagram'

export interface WorkflowStep {
  title: string
  description: string
  icon: LucideIcon
}

export interface Project {
  slug: string
  index: string
  title: string
  tagline: string
  category: string
  summary: string
  description: string
  icon: LucideIcon
  stack: string[]
  results: { label: string; value: string }[]
  workflow: WorkflowStep[]
  /** Optional "Why build it this way?" explainer shown after the workflow. */
  why?: string
  /** Optional demo video (mp4 path under /public or a hosted URL). */
  video?: string
  /** Optional canvas-style diagram component rendered above the workflow steps. */
  diagram?: ComponentType
}

/**
 * Placeholder content for the 4 featured builds. Swap the copy, stack, results,
 * and workflow steps for each real project once details are provided —
 * slugs drive the routing in App.tsx so keep them stable or update links.
 */
export const projects: Project[] = [
  {
    slug: 'social-media-content-automation',
    index: '01',
    title: 'AI-Powered Social Media Content Automation System',
    tagline: 'A multi-agent content engine that researches, writes, designs, and publishes — with a human in control.',
    category: 'Content Automation',
    summary:
      'A multi-agent n8n pipeline that researches topics, writes platform-specific posts, generates matching images, and publishes to LinkedIn — pausing for human approval before anything goes live.',
    description:
      'Most people are still manually prompting AI every time they need to create content. This system goes a step further and automates the entire content creation pipeline. Built in n8n, it uses multiple AI agents working together — each responsible for a specific task rather than relying on a single prompt — to research, write, design, and publish professional content consistently.',
    icon: Workflow,
    stack: ['n8n', 'Google Gemini', 'Claude', 'Nano Banana', 'Gmail', 'LinkedIn'],
    results: [
      { label: 'Specialized AI agents', value: '4' },
      { label: 'Posts human-approved', value: '100%' },
      { label: 'Manual publishing steps', value: '0' },
    ],
    workflow: [
      {
        title: 'Topic Generation',
        description:
          'A form submission kicks off the workflow. An AI agent proposes a set of content topics around the chosen theme, ready for review.',
        icon: ClipboardList,
      },
      {
        title: 'Topic Approval',
        description:
          'The workflow pauses and emails the proposed topics via Gmail. Nothing moves forward until a human picks the winner.',
        icon: MailCheck,
      },
      {
        title: 'AI Research Agent',
        description:
          'Google Gemini researches the approved topic and gathers relevant, up-to-date information to ground the post in facts.',
        icon: Search,
      },
      {
        title: 'AI Writing Agent',
        description:
          'Claude transforms the research into a well-structured, platform-specific post written for LinkedIn — not a generic AI blurb.',
        icon: PenLine,
      },
      {
        title: 'Post Approval',
        description:
          'Before anything is published, the finished draft is sent for sign-off via Gmail, ensuring full control over every post.',
        icon: ShieldCheck,
      },
      {
        title: 'AI Image Generation',
        description:
          'Gemini Flash Image (Nano Banana) creates a custom image that matches the content — no stock photos, no manual design work.',
        icon: ImagePlus,
      },
      {
        title: 'Automatic Publishing',
        description:
          'Once approved, the workflow publishes the completed post with its image directly to LinkedIn, eliminating repetitive manual work.',
        icon: Send,
      },
    ],
    why: 'Instead of relying on one AI model to do everything, the workflow is split into specialized agents — each doing one job well. This produces higher-quality content, improves factual accuracy, and makes the system far more reliable. The result is a scalable content engine that dramatically reduces the time required to research, write, design, and publish professional content, while keeping a human in control of the final output.',
    diagram: SocialContentDiagram,
  },
  {
    slug: 'ai-support-chatbot',
    index: '02',
    title: '24/7 AI Customer Support Chatbot',
    tagline: 'Support that never sleeps, never repeats itself, never misses a ticket.',
    category: 'Customer Support',
    summary:
      'A trained AI chatbot embedded on-site and in DMs that resolves common support questions instantly and escalates the rest with full context.',
    description:
      'Trained on the client’s help docs, order data, and policies, this assistant answers the questions that used to eat up a support team’s day — order status, returns, product questions — and hands off anything complex to a human with the full conversation already summarized.',
    icon: MessageSquareText,
    stack: ['OpenAI', 'React', 'Supabase', 'Make', 'Slack API'],
    results: [
      { label: 'Tickets auto-resolved', value: '68%' },
      { label: 'Avg. reply time', value: '2 sec' },
      { label: 'CSAT score', value: '4.8 / 5' },
    ],
    workflow: [
      {
        title: 'Train',
        description:
          'The assistant is fed the brand’s docs, FAQs, and product catalog so answers stay accurate and on-brand.',
        icon: Database,
      },
      {
        title: 'Converse',
        description:
          'Customers get instant, natural answers on the website or in DMs, any time of day, in the brand’s tone.',
        icon: MessageSquareText,
      },
      {
        title: 'Resolve or Escalate',
        description:
          'Routine questions are closed on the spot; anything nuanced is flagged and handed to a teammate with a summary attached.',
        icon: Workflow,
      },
      {
        title: 'Notify',
        description:
          'Escalations land directly in Slack with the full thread, so the team never starts a reply from scratch.',
        icon: PhoneCall,
      },
      {
        title: 'Learn',
        description:
          'Unanswered questions are logged and reviewed weekly to keep expanding what the assistant can handle on its own.',
        icon: Database,
      },
    ],
  },
  {
    slug: 'crm-workflow-automation',
    index: '03',
    title: 'CRM & Workflow Automation Suite',
    tagline: 'Every tool talking to every other tool, automatically.',
    category: 'Workflow Automation',
    summary:
      'A connected system that eliminates duplicate data entry by syncing the CRM, invoicing, project management, and reporting tools in real time.',
    description:
      'This client ran five different tools that never talked to each other, forcing the team to manually copy data between them all day. We built a central automation layer that keeps every system in sync — new deals create projects, signed contracts trigger invoices, and completed jobs update reporting dashboards without anyone lifting a finger.',
    icon: Database,
    stack: ['HubSpot', 'Make', 'Airtable', 'QuickBooks', 'Slack API'],
    results: [
      { label: 'Manual data entry cut', value: '90%' },
      { label: 'Admin hours saved / mo', value: '60 hrs' },
      { label: 'Reporting accuracy', value: '99.9%' },
    ],
    workflow: [
      {
        title: 'Trigger',
        description:
          'A deal closes in the CRM, kicking off the automation with the client’s full record attached.',
        icon: Workflow,
      },
      {
        title: 'Create',
        description:
          'A project is auto-generated in the project management tool with tasks, deadlines, and the right team assigned.',
        icon: Database,
      },
      {
        title: 'Invoice',
        description:
          'Contract terms are read automatically and an invoice is generated and sent without any manual entry.',
        icon: MessageSquareText,
      },
      {
        title: 'Sync Everywhere',
        description:
          'Every connected tool updates in parallel, so the CRM, finance, and delivery teams are always looking at the same data.',
        icon: Database,
      },
      {
        title: 'Report',
        description:
          'A live dashboard rolls all of it up automatically, replacing the weekly manual reporting spreadsheet.',
        icon: Workflow,
      },
    ],
  },
  {
    slug: 'ai-voice-receptionist',
    index: '04',
    title: 'AI Voice Receptionist & Appointment Setter',
    tagline: 'Every call answered. Every appointment booked. Zero missed calls.',
    category: 'Voice Automation',
    summary:
      'An AI voice agent that answers inbound calls, handles common questions, and books appointments directly into the calendar in real time.',
    description:
      'Missed calls were costing this client real revenue every week. We deployed an AI voice receptionist that answers every call on the first ring, sounds natural on the phone, and books qualified appointments straight into the calendar — with a full transcript and recording sent to the team automatically.',
    icon: PhoneCall,
    stack: ['Vapi', 'OpenAI', 'Cal.com', 'Twilio', 'Make'],
    results: [
      { label: 'Missed calls', value: '0%' },
      { label: 'Appointments booked', value: '+35%' },
      { label: 'Avg. call handled in', value: '90 sec' },
    ],
    workflow: [
      {
        title: 'Answer',
        description:
          'Every inbound call is picked up instantly by a natural-sounding AI voice agent trained on the business’s services.',
        icon: PhoneCall,
      },
      {
        title: 'Understand',
        description:
          'The agent asks the right questions to identify what the caller needs and checks real-time calendar availability.',
        icon: MessageSquareText,
      },
      {
        title: 'Book',
        description:
          'A confirmed appointment is scheduled directly on the calendar during the call, no back-and-forth required.',
        icon: Workflow,
      },
      {
        title: 'Confirm',
        description:
          'The caller receives an instant SMS confirmation, with a reminder sequence scheduled ahead of the appointment.',
        icon: Database,
      },
      {
        title: 'Log',
        description:
          'A transcript and recording are saved and synced to the CRM so the team always has full context before the visit.',
        icon: Database,
      },
    ],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
