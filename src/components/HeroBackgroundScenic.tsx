import { useEffect, useState } from 'react'

/** Prototype "golden-hour landscape" hero backdrop, drawn entirely in SVG so it
 *  stays on-brand (gold palette), needs no external image, and renders in the
 *  locked-down artifact preview. Flowing wave lines scroll across the sky on an
 *  endless loop to keep the scene alive. */
export default function HeroBackgroundScenic() {
  const motionOK = useMotionOK()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cbd8e2" />
            <stop offset="42%" stopColor="#e8dfcf" />
            <stop offset="72%" stopColor="#f7e4bb" />
            <stop offset="100%" stopColor="#f6d79a" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff3d4" />
            <stop offset="35%" stopColor="#fbe1a0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f6d79a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fardim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b7c6d2" />
            <stop offset="100%" stopColor="#cdd3cf" />
          </linearGradient>
        </defs>

        {/* sky + sun glow (low, sitting behind where the mockup rises) */}
        <rect width="1440" height="900" fill="url(#sky)" />
        <circle cx="720" cy="660" r="300" fill="url(#sun)">
          {motionOK && (
            <animate attributeName="r" values="300;318;300" dur="7s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="720" cy="660" r="60" fill="#fff6e0" opacity="0.7" />

        {/* flowing wave "currents" scrolling across the sky */}
        <Wave y={232} amp={24} dur={16} dir="left" color="#e08a0e" opacity={0.16} width={2} animate={motionOK} />
        <Wave y={298} amp={34} dur={23} dir="right" color="#f5a81c" opacity={0.13} width={2} animate={motionOK} />
        <Wave y={372} amp={20} dur={13} dir="left" color="#c9791a" opacity={0.12} width={1.6} animate={motionOK} />
        <Wave y={432} amp={16} dur={27} dir="right" color="#e08a0e" opacity={0.1} width={1.6} animate={motionOK} />

        {/* soft clouds, kept high and to the edges so they clear the headline */}
        <g fill="#ffffff" opacity="0.5">
          {motionOK && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 34 0; 0 0"
              dur="42s"
              repeatCount="indefinite"
            />
          )}
          <ellipse cx="230" cy="150" rx="150" ry="28" />
          <ellipse cx="330" cy="176" rx="105" ry="22" />
          <ellipse cx="1180" cy="130" rx="165" ry="30" />
          <ellipse cx="1270" cy="158" rx="115" ry="22" />
        </g>

        {/* far mountain range */}
        <path
          fill="url(#fardim)"
          opacity="0.85"
          d="M0 560 L150 495 L280 548 L410 470 L560 545 L720 480 L860 540 L1010 468 L1160 535 L1310 486 L1440 540 L1440 900 L0 900 Z"
        />

        {/* atmospheric haze along the horizon for depth */}
        <rect x="0" y="512" width="1440" height="80" fill="#f6ead0" opacity="0.55" />

        {/* mid hills */}
        <path
          fill="#e6c98d"
          d="M0 648 C 220 600 420 664 640 636 C 860 608 1060 664 1440 624 L1440 900 L0 900 Z"
        />

        {/* far, lighter pines nestled on the mid hills */}
        <g fill="#8a7440" opacity="0.85">
          <PineGroup x={215} baseY={648} scale={0.7} />
          <PineGroup x={262} baseY={654} scale={0.55} />
          <PineGroup x={1215} baseY={646} scale={0.62} />
          <PineGroup x={1168} baseY={652} scale={0.5} />
        </g>

        {/* near hills */}
        <path
          fill="#d3a94c"
          d="M0 742 C 280 700 540 762 800 732 C 1060 704 1260 760 1440 726 L1440 900 L0 900 Z"
        />

        {/* foreground ridge */}
        <path
          fill="#7c6733"
          d="M0 826 C 320 800 720 840 1010 818 C 1210 804 1350 828 1440 818 L1440 900 L0 900 Z"
        />

        {/* near pine clusters framing the lower corners */}
        <g fill="#54471f">
          <PineGroup x={55} baseY={766} scale={0.95} />
          <PineGroup x={128} baseY={782} scale={1.35} />
          <PineGroup x={205} baseY={772} scale={0.85} />
          <PineGroup x={1392} baseY={766} scale={1.05} />
          <PineGroup x={1315} baseY={784} scale={1.3} />
          <PineGroup x={1245} baseY={772} scale={0.8} />
        </g>

        {/* distant birds */}
        <g stroke="#6a5a34" strokeWidth="2.5" fill="none" opacity="0.5" strokeLinecap="round">
          {motionOK && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -26 -10; 0 0"
              dur="30s"
              repeatCount="indefinite"
            />
          )}
          <path d="M980 330 q 10 -9 20 0 q 10 -9 20 0" />
          <path d="M1030 355 q 8 -7 16 0 q 8 -7 16 0" />
          <path d="M1000 375 q 7 -6 14 0 q 7 -6 14 0" />
        </g>
      </svg>

      {/* readability lift behind the navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      {/* soft light wash behind the headline so dark AND gold text stay legible */}
      <div className="absolute left-1/2 top-[8%] h-[560px] w-[1000px] -translate-x-1/2 rounded-[50%] bg-white/45 blur-[110px]" />
    </div>
  )
}

/** A wide sine-ish stroke that scrolls horizontally forever via SMIL translate
 *  (translate is in SVG user units, so the loop stays seamless at any scale). */
function Wave({
  y,
  amp,
  dur,
  dir,
  color,
  opacity,
  width,
  animate,
}: {
  y: number
  amp: number
  dur: number
  dir: 'left' | 'right'
  color: string
  opacity: number
  width: number
  animate: boolean
}) {
  // 12 half-waves of 240px = 2880px total (6 full periods). Translating 1440px
  // (3 periods) lands on identical phase, so the scroll is seamless.
  let d = `M0 ${y}`
  for (let i = 0; i < 12; i++) {
    d += ` q 120 ${i % 2 === 0 ? -amp : amp} 240 0`
  }
  const from = dir === 'left' ? '0 0' : '-1440 0'
  const to = dir === 'left' ? '-1440 0' : '0 0'

  return (
    <path d={d} fill="none" stroke={color} strokeWidth={width} strokeOpacity={opacity} strokeLinecap="round">
      {animate && (
        <animateTransform
          attributeName="transform"
          type="translate"
          from={from}
          to={to}
          dur={`${dur}s`}
          repeatCount="indefinite"
        />
      )}
    </path>
  )
}

function PineGroup({ x, baseY, scale = 1 }: { x: number; baseY: number; scale?: number }) {
  const h = 120 * scale
  const w = 46 * scale
  return (
    <path
      d={`M ${x} ${baseY}
          L ${x - w * 0.5} ${baseY}
          L ${x} ${baseY - h * 0.42}
          L ${x - w * 0.4} ${baseY - h * 0.4}
          L ${x} ${baseY - h * 0.72}
          L ${x - w * 0.3} ${baseY - h * 0.7}
          L ${x} ${baseY - h}
          L ${x + w * 0.3} ${baseY - h * 0.7}
          L ${x} ${baseY - h * 0.72}
          L ${x + w * 0.4} ${baseY - h * 0.4}
          L ${x} ${baseY - h * 0.42}
          L ${x + w * 0.5} ${baseY}
          Z`}
    />
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
