import { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from 'lottie-web'
import Logo from './Logo'

const PLAYED_KEY = 'magni-logo-played'

/** Navbar logo that draws itself in (Lottie) on the first page view of a
 *  session, then renders the static lockup everywhere else. Falls back to the
 *  static logo when the animation cannot load or motion is reduced. */
export default function LogoAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const [staticLogo, setStaticLogo] = useState(() => {
    if (typeof window === 'undefined') return true
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      sessionStorage.getItem(PLAYED_KEY) === '1'
    )
  })

  useEffect(() => {
    if (staticLogo) return
    let anim: AnimationItem | undefined
    let cancelled = false

    import('lottie-web/build/player/lottie_light')
      .then((mod) => {
        if (cancelled || !ref.current) return
        anim = mod.default.loadAnimation({
          container: ref.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: '/animations/magni-logo/lottie.json',
        })
        anim.addEventListener('data_failed', () => setStaticLogo(true))
        anim.addEventListener('complete', () => {
          sessionStorage.setItem(PLAYED_KEY, '1')
        })
      })
      .catch(() => setStaticLogo(true))

    return () => {
      cancelled = true
      anim?.destroy()
    }
  }, [staticLogo])

  if (staticLogo) return <Logo />

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Magni Automations"
      className="h-6 w-[106px] sm:h-7 sm:w-[123px]"
    />
  )
}
