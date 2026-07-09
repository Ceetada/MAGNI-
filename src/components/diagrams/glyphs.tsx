/** Small brand-mark SVGs used inside workflow diagram nodes. */

export function GmailGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M12 11.3 3.6 5h16.8L12 11.3Z" />
      <path fill="#FBBC04" d="M3 6.2v11.6h3.4V8.8L3 6.2Z" />
      <path fill="#34A853" d="M17.6 8.8v9h3.4V6.2l-3.4 2.6Z" />
      <path fill="#4285F4" d="M6.4 17.8h11.2V8.8L12 13.1 6.4 8.8v9Z" />
    </svg>
  )
}

export function GeminiGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gem-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4E8CF7" />
          <stop offset="55%" stopColor="#9177E8" />
          <stop offset="100%" stopColor="#D66DA6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gem-grad)"
        d="M12 1.5c.6 5.8 4.7 9.9 10.5 10.5-5.8.6-9.9 4.7-10.5 10.5C11.4 16.7 7.3 12.6 1.5 12 7.3 11.4 11.4 7.3 12 1.5Z"
      />
    </svg>
  )
}

export function AnthropicGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#D97757"
        d="M13.8 4.5h-3.9L2.8 19.5h4l1.4-3.2h7.4l1.4 3.2h4L13.8 4.5Zm-4.2 8.6L12 7.6l2.4 5.5H9.6Z"
      />
    </svg>
  )
}

export function LinkedInGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.6 9.6H5V19h2.6V9.6ZM6.3 8.4a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM12 14.1c0-1.1.5-1.8 1.5-1.8s1.4.7 1.4 1.8V19h2.6v-5.5c0-2.5-1.3-3.7-3.1-3.7-1.5 0-2.1.8-2.4 1.4V9.6H9.4V19H12v-4.9Z"
      />
    </svg>
  )
}

export function OpenRouterGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        d="M3 12h5.2c2.2 0 3.4-2.6 5-4.2 1.2-1.2 2.4-1.6 4-1.6M3 12h5.2c2.2 0 3.4 2.6 5 4.2 1.2 1.2 2.4 1.6 4 1.6"
      />
      <path fill="#fff" d="M16.4 3.2 22 6.2l-5.6 3V3.2Zm0 11.6L22 17.8l-5.6 3v-6Z" />
    </svg>
  )
}

export function TelegramGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#26A5E4" />
      <path
        fill="#fff"
        d="M5.2 11.9 17.4 7c.6-.2 1.1.1.9.9l-2.1 9.8c-.2.7-.6.9-1.2.5l-3.2-2.3-1.5 1.5c-.2.2-.3.3-.6.3l.2-3.2 5.8-5.2c.3-.2-.1-.4-.4-.2l-7.2 4.5-3.1-1c-.7-.2-.7-.7.2-.7Z"
      />
    </svg>
  )
}

export function SheetsGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2.5" fill="#188038" />
      <path
        fill="#fff"
        d="M8 10h8v7H8v-7Zm1.5 1.5v1.2h2.2v-1.2H9.5Zm3.8 0v1.2h1.2v-1.2h-1.2Zm-3.8 2.6v1.2h2.2v-1.2H9.5Zm3.8 0v1.2h1.2v-1.2h-1.2Z"
      />
    </svg>
  )
}

export function CalendarGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2.5" fill="#4285F4" />
      <rect x="3" y="4" width="18" height="4.5" fill="#1967D2" />
      <path fill="#fff" d="M7 2.5h2.4v3.6H7V2.5Zm7.6 0H17v3.6h-2.4V2.5Z" />
      <text x="12" y="17.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
        31
      </text>
    </svg>
  )
}

export function SupabaseGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#3ECF8E"
        d="M13.4 1.6c.5-.6 1.5-.3 1.5.5V10h6c.9 0 1.4 1 .8 1.7l-11 10.7c-.6.6-1.6.2-1.6-.6V14H3.3c-.9 0-1.4-1-.8-1.7l10.9-10.7Z"
      />
    </svg>
  )
}

export function OpenAIGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round">
        <path d="M12 4.2a4 4 0 0 1 6.9 2.8v4.5" />
        <path d="M18.6 7.6a4 4 0 0 1 .5 7.4l-3.9 2.3" />
        <path d="M18.4 16.3a4 4 0 0 1-6.4 4.6l-3.9-2.2" />
        <path d="M12 19.8a4 4 0 0 1-6.9-2.8v-4.5" />
        <path d="M5.4 16.4a4 4 0 0 1-.5-7.4l3.9-2.3" />
        <path d="M5.6 7.7a4 4 0 0 1 6.4-4.6l3.9 2.2" />
      </g>
    </svg>
  )
}
