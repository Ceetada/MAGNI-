import type { ComponentType } from 'react'
import {
  Bot,
  CalendarCheck,
  ClipboardList,
  Database,
  GitBranch,
  ImagePlus,
  MailCheck,
  MessageSquareText,
  Mic,
  PenLine,
  PhoneCall,
  ReceiptText,
  ScanSearch,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import SocialContentDiagram from '../components/diagrams/SocialContentDiagram'
import RealEstateDiagram from '../components/diagrams/RealEstateDiagram'
import ExpenseTrackerDiagram from '../components/diagrams/ExpenseTrackerDiagram'

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
    tagline: 'A multi-agent content engine that researches, writes, designs, and publishes, with a human in control of every post.',
    category: 'Content Automation',
    summary:
      'A multi-agent n8n pipeline that researches topics, writes platform-specific posts, generates matching images, and publishes straight to LinkedIn. Nothing goes live until a human approves it.',
    description:
      'Most people are still manually prompting AI every time they need to create content. This system goes a step further and automates the entire content creation pipeline. Built in n8n, it puts multiple AI agents to work as a team, each one responsible for a specific task, so content gets researched, written, designed, and published consistently instead of depending on a single prompt.',
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
          'Claude transforms the research into a well-structured post written specifically for LinkedIn, not a generic AI blurb.',
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
          'Gemini Flash Image (Nano Banana) creates a custom image that matches the content. No stock photos, no manual design work.',
        icon: ImagePlus,
      },
      {
        title: 'Automatic Publishing',
        description:
          'Once approved, the workflow publishes the completed post with its image directly to LinkedIn, eliminating repetitive manual work.',
        icon: Send,
      },
    ],
    why: 'Instead of relying on one AI model to do everything, the workflow is split into specialized agents that each do one job well. This produces higher-quality content, improves factual accuracy, and makes the system far more reliable. The result is a scalable content engine that dramatically reduces the time required to research, write, design, and publish professional content, while keeping a human in control of the final output.',
    diagram: SocialContentDiagram,
  },
  {
    slug: 'real-estate-lead-automation',
    index: '02',
    title: 'Real Estate Assistant & Lead Automation System',
    tagline: 'A Telegram AI agent that turns property enquiries into booked viewings.',
    category: 'Lead Automation',
    summary:
      'An AI assistant that handles property enquiries on Telegram in text or voice, qualifies every lead into Google Sheets, recommends listings with real photos, and books viewings on the calendar.',
    description:
      'Built for real estate companies that lose leads to slow replies and manual back-and-forth. Prospects simply message the business on Telegram, by text or voice note, and the system takes it from there: it captures their details, understands what they are looking for, recommends properties, and walks them all the way to a booked inspection.',
    icon: MessageSquareText,
    stack: ['n8n', 'Telegram Bot API', 'OpenAI', 'Google Sheets', 'Supabase Vector Store', 'Google Calendar', 'Gmail'],
    results: [
      { label: 'Enquiry types handled', value: 'Text + voice' },
      { label: 'Tools the agent can use', value: '6' },
      { label: 'Duplicate lead records', value: '0' },
    ],
    workflow: [
      {
        title: 'Telegram Intake',
        description:
          'A prospect messages the business on Telegram. The workflow immediately checks whether it received a text message or a voice note and routes it accordingly.',
        icon: MessageSquareText,
      },
      {
        title: 'Voice Transcription',
        description:
          'Voice notes are downloaded and transcribed with OpenAI, so a spoken enquiry flows through the rest of the system exactly like a typed one.',
        icon: Mic,
      },
      {
        title: 'Lead Extraction',
        description:
          'The system pulls out the details that matter: name, email, phone number, preferred location, and what kind of property they are after.',
        icon: ScanSearch,
      },
      {
        title: 'Clean Lead Records',
        description:
          'Every lead is saved and updated in Google Sheets, keyed by Telegram chat ID. Returning prospects are recognized instantly, so there are no duplicate records to clean up later.',
        icon: Database,
      },
      {
        title: 'The Agent Takes Over',
        description:
          'An AI agent answers company questions from a knowledge base, searches live property listings, recommends suitable options, and sends real property photos right in the chat.',
        icon: Bot,
      },
      {
        title: 'Lead State Logic',
        description:
          'The agent knows whether a prospect is just browsing, still sharing details, ready to see listings, or trying to book. It asks the right question at the right time instead of repeating itself or jumping ahead.',
        icon: GitBranch,
      },
      {
        title: 'Viewing Booked',
        description:
          'The agent checks availability on Google Calendar and schedules the inspection directly in the conversation, no phone tag required.',
        icon: CalendarCheck,
      },
      {
        title: 'Two-Email Follow-Up',
        description:
          'Booking confirmed, two emails go out: a confirmation to reassure the prospect, and an internal notification giving the company clear action points for follow-up.',
        icon: MailCheck,
      },
    ],
    why: 'The AI is only one part of the system. The real value comes from combining it with clear workflow logic, clean data handling, proper lead stages, and the right business tools. That combination is what lets a company respond faster, miss fewer leads, keep records cleaner, and move prospects from enquiry to inspection with far less manual work.',
    diagram: RealEstateDiagram,
  },
  {
    slug: 'ai-expense-tracker',
    index: '03',
    title: 'AI Expense Tracking Assistant',
    tagline: 'Snap a receipt in Telegram and it is logged, categorized, and flagged, automatically.',
    category: 'Finance Automation',
    summary:
      'A Telegram assistant that reads receipt photos and expense messages, logs structured data into Google Sheets, alerts a manager on high-value purchases, and answers spending questions on demand.',
    description:
      'It started as a simple idea: what if you could send a receipt photo to a Telegram bot and have everything logged automatically? Built with n8n, Telegram, Gemini, Google Sheets, and Gmail, this assistant reads a receipt or message, extracts the details, files them in one organized sheet, and keeps a manager in the loop, so receipts stop getting lost in chats, inboxes, and paper files.',
    icon: ReceiptText,
    stack: ['n8n', 'Telegram Bot API', 'Google Gemini', 'Google Sheets', 'Gmail'],
    results: [
      { label: 'Fields captured per expense', value: '12' },
      { label: 'Manual data entry', value: '0' },
      { label: 'High-value alerts', value: 'Auto' },
    ],
    workflow: [
      {
        title: 'Telegram Trigger',
        description:
          'The workflow starts the moment a user sends a receipt photo or an expense message to the bot.',
        icon: MessageSquareText,
      },
      {
        title: 'Workflow Settings',
        description:
          'Reusable settings live in one place: the sheet name, default currency, alert threshold, and the manager’s email.',
        icon: Settings,
      },
      {
        title: 'AI Expense Agent',
        description:
          'Gemini reads the receipt or message, understands the intent, extracts the expense details, and decides which tool to use next.',
        icon: Bot,
      },
      {
        title: 'Log Expense to Sheet',
        description:
          'The extracted data is saved into Google Sheets: vendor, total, tax, category, confidence score, review status, and message ID.',
        icon: ScanSearch,
      },
      {
        title: 'Read Recent Expenses',
        description:
          'Ask “How much did I spend today?” and the bot reads the sheet and summarizes the answer instead of making you scroll.',
        icon: Database,
      },
      {
        title: 'Send Manager Alert',
        description:
          'When a purchase lands above the threshold, an email alert goes straight to the manager for approval.',
        icon: MailCheck,
      },
      {
        title: 'Send Telegram Reply',
        description:
          'The bot replies in Telegram with a clear confirmation or a tidy spending summary, so the user always knows it landed.',
        icon: MessageSquareText,
      },
    ],
    why: 'Instead of receipts getting lost in chats, emails, or paper files, everything is stored in one organized sheet that can be searched, reviewed, and summarized later. A team member can buy supplies, fuel, or travel, snap the receipt, and the system logs it and alerts the manager if it is over the approval limit. A manager can even ask “How much did we spend this week?” or “What was the biggest expense?” and get a clear answer back. It makes expense tracking faster, cleaner, and far easier to manage.',
    diagram: ExpenseTrackerDiagram,
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
      'Missed calls were costing this client real revenue every week. We deployed an AI voice receptionist that answers every call on the first ring, sounds natural on the phone, and books qualified appointments straight into the calendar, then sends the team a full transcript and recording automatically.',
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
