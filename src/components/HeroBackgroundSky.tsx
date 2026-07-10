import { useEffect, useState } from 'react'

/** Blue-sky hero backdrop with soft white clouds drifting across at different
 *  depths and speeds. Pure CSS/SVG, so it stays crisp and works in preview. */
export default function HeroBackgroundSky() {
  const motionOK = useMotionOK()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* sky gradient: deep blue up top, fading toward white where the panel sits */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#3f6fe0_0%,#5a86ec_32%,#8fb0f2_58%,#c3d6f8_80%,#eef4fd_100%)]" />
      {/* subtle sun glow, upper area */}
      <div className="absolute left-1/2 top-[-6%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-white/25 blur-[120px]" />

      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            left: 0,
            width: c.w,
            opacity: c.op,
            filter: `blur(${c.blur}px)`,
            transform: motionOK ? undefined : `translateX(${c.static}vw)`,
            animation: motionOK ? `cloud-drift ${c.dur}s linear ${c.delay}s infinite` : undefined,
          }}
        >
          <Cloud />
        </div>
      ))}
    </div>
  )
}

interface CloudSpec {
  top: string
  w: number
  dur: number
  delay: number
  op: number
  blur: number
  static: number
}

const CLOUDS: CloudSpec[] = [
  { top: '9%', w: 280, dur: 68, delay: -8, op: 0.9, blur: 2, static: 8 },
  { top: '19%', w: 180, dur: 96, delay: -44, op: 0.65, blur: 1, static: 66 },
  { top: '15%', w: 360, dur: 54, delay: -26, op: 0.95, blur: 3, static: 40 },
  { top: '33%', w: 150, dur: 112, delay: -70, op: 0.6, blur: 1, static: 82 },
  { top: '43%', w: 320, dur: 82, delay: -16, op: 0.85, blur: 3, static: 20 },
  { top: '55%', w: 230, dur: 104, delay: -60, op: 0.7, blur: 2, static: 54 },
  { top: '66%', w: 300, dur: 74, delay: -34, op: 0.6, blur: 4, static: 88 },
]

function Cloud() {
  return (
    <svg viewBox="0 0 240 96" className="h-auto w-full" aria-hidden="true">
      <g fill="#ffffff">
        <ellipse cx="66" cy="60" rx="46" ry="28" />
        <ellipse cx="120" cy="46" rx="54" ry="35" />
        <ellipse cx="172" cy="60" rx="44" ry="27" />
        <ellipse cx="104" cy="66" rx="60" ry="24" />
        <rect x="46" y="58" width="150" height="30" rx="15" />
      </g>
    </svg>
  )
}

function useMotionOK() {
  const [ok, setOk] = useState(true)
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setOk(!m.matches)
    update()
    m.addEventListener('change', update)
    return () => m.removeEventListener('change', update)
  }, [])
  return ok
}
