interface LogoProps {
  className?: string
  markOnly?: boolean
  /** Render the wordmark in white (for use over dark/colored backdrops). */
  light?: boolean
}

/** Magni logo. Renders the real brand mark asset from /public. */
export default function Logo({ className = '', markOnly = false, light = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="Magni Automations"
        className="h-6 w-auto shrink-0 sm:h-7"
        width={1020}
        height={690}
      />
      {!markOnly && (
        <span
          className={`text-[15px] font-semibold tracking-tight sm:text-base ${
            light ? 'text-white' : 'text-ink-900'
          }`}
        >
          Magni <span className={`font-normal ${light ? 'text-white/70' : 'text-ink-900/55'}`}>Automations</span>
        </span>
      )}
    </span>
  )
}
