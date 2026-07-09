interface LogoProps {
  className?: string
  markOnly?: boolean
}

/** Gold ribbon "M" mark, plus wordmark. Uses currentColor so it can be recolored via text color utilities. */
export default function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <path
          d="M22 76 L22 26 L50 54 L78 26 L78 76"
          fill="none"
          stroke="currentColor"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!markOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-white sm:text-base">
          Magni <span className="font-normal text-white/60">Automations</span>
        </span>
      )}
    </span>
  )
}
