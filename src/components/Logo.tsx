interface LogoProps {
  className?: string
  markOnly?: boolean
}

/** Magni double-chevron "M" mark. Uses currentColor so it recolors via text utilities. */
export default function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 1015 690"
        className="h-6 w-auto shrink-0 sm:h-7"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M0 0 L180 0 L508 360 L835 0 L1015 0 L908 690 L720 690 L508 360 L295 690 L107 690 Z" />
        <path d="M240 360 L508 540 L776 360 L508 630 Z" />
      </svg>
      {!markOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-white sm:text-base">
          Magni <span className="font-normal text-white/60">Automations</span>
        </span>
      )}
    </span>
  )
}
