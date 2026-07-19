import { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from 'lottie-web'
import Logo from './Logo'

/** True once the draw-in has started during this page load. Route changes
 *  remount the navbar without replaying; a refresh starts a new page load
 *  and plays again. */
let playedThisLoad = false

/** Navbar logo that draws itself in (Lottie) on page load, then renders the
 *  static lockup on later mounts. Falls back to the static logo when the
 *  animation cannot load or motion is reduced. */
export default function LogoAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const [staticLogo, setStaticLogo] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches || playedThisLoad
  })

  useEffect(() => {
    if (staticLogo) return
    let anim: AnimationItem | undefined
    let cancelled = false

    import('lottie-web/build/player/lottie_light')
      .then((mod) => {
        if (cancelled || !ref.current) return
        playedThisLoad = true
        anim = mod.default.loadAnimation({
          container: ref.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: '/animations/magni-logo/lottie.json',
        })
        anim.addEventListener('data_failed', () => setStaticLogo(true))
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
