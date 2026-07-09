interface LogoProps {
  className?: string
  markOnly?: boolean
}

/** Magni "M" mark, in the exact brand yellow. */
export default function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 1015 690"
        className="h-6 w-auto shrink-0 sm:h-7"
        aria-hidden="true"
        fill="#FFC107"
      >
        <path d="M0 0 L300 0 L508 378 L715 0 L1015 0 L998 685 L705 685 L508 378 L310 685 L17 685 Z" />
        <path d="M305 425 L508 520 L711 425 L508 600 Z" />
      </svg>
      {!markOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-ink-900 sm:text-base">
          Magni <span className="font-normal text-ink-900/55">Automations</span>
        </span>
      )}
    </span>
  )
}
