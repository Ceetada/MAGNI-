import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const LEVEL = 0.16 // master volume when playing (kept gentle)

/** Procedurally-synthesized calm wind + tree rustle for the hero, with a mute
 *  toggle. Off by default (autoplay is blocked anyway); starts on click, and
 *  fades out whenever the hero scrolls out of view. */
export default function HeroAmbience() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const inViewRef = useRef(true)
  const onRef = useRef(false)
  const [on, setOn] = useState(false)

  const fade = (target: number) => {
    const ctx = ctxRef.current
    const m = masterRef.current
    if (!ctx || !m) return
    m.gain.cancelScheduledValues(ctx.currentTime)
    m.gain.setTargetAtTime(target, ctx.currentTime, 0.7)
  }

  const buildGraph = () => {
    if (ctxRef.current) return
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new AC()
    ctxRef.current = ctx

    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)
    masterRef.current = master

    // brown noise (deep, soft) → low-pass = the underlying wind
    const brown = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate)
    const bd = brown.getChannelData(0)
    let last = 0
    for (let i = 0; i < bd.length; i++) {
      const w = Math.random() * 2 - 1
      last = (last + 0.02 * w) / 1.02
      bd[i] = last * 3.2
    }
    const wind = ctx.createBufferSource()
    wind.buffer = brown
    wind.loop = true
    const windLP = ctx.createBiquadFilter()
    windLP.type = 'lowpass'
    windLP.frequency.value = 450
    const windGain = ctx.createGain()
    windGain.gain.value = 0.55
    wind.connect(windLP).connect(windGain).connect(master)
    wind.start()

    // slow gusts swelling the wind volume
    const gust = ctx.createOscillator()
    gust.frequency.value = 0.09
    const gustDepth = ctx.createGain()
    gustDepth.gain.value = 0.3
    gust.connect(gustDepth).connect(windGain.gain)
    gust.start()

    // even slower filter sweep so the wind "moves"
    const sweep = ctx.createOscillator()
    sweep.frequency.value = 0.06
    const sweepDepth = ctx.createGain()
    sweepDepth.gain.value = 230
    sweep.connect(sweepDepth).connect(windLP.frequency)
    sweep.start()

    // white noise → band-pass = leaves rustling, with a gentle shimmer
    const white = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate)
    const wd = white.getChannelData(0)
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1
    const leaves = ctx.createBufferSource()
    leaves.buffer = white
    leaves.loop = true
    const leafBP = ctx.createBiquadFilter()
    leafBP.type = 'bandpass'
    leafBP.frequency.value = 3200
    leafBP.Q.value = 0.6
    const leafGain = ctx.createGain()
    leafGain.gain.value = 0.05
    leaves.connect(leafBP).connect(leafGain).connect(master)
    leaves.start()

    const shimmer = ctx.createOscillator()
    shimmer.frequency.value = 0.45
    const shimmerDepth = ctx.createGain()
    shimmerDepth.gain.value = 0.035
    shimmer.connect(shimmerDepth).connect(leafGain.gain)
    shimmer.start()
  }

  const toggle = async () => {
    if (!onRef.current) {
      buildGraph()
      await ctxRef.current?.resume()
      onRef.current = true
      setOn(true)
      if (inViewRef.current) fade(LEVEL)
    } else {
      onRef.current = false
      setOn(false)
      fade(0)
    }
  }

  // fade with hero visibility
  useEffect(() => {
    const section = btnRef.current?.closest('section')
    if (!section) return
    const io = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = e.isIntersecting && e.intersectionRatio > 0.12
        if (onRef.current) fade(inViewRef.current ? LEVEL : 0)
      },
      { threshold: [0, 0.12, 0.5] },
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  // clean up on unmount
  useEffect(() => () => void ctxRef.current?.close(), [])

  return (
    <button
      ref={btnRef}
      onClick={toggle}
      className="absolute bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-2 text-[12px] font-medium text-ink-800 shadow-sm ring-1 ring-ink-900/10 backdrop-blur-md transition-all hover:bg-white sm:bottom-6 sm:left-8"
      aria-pressed={on}
      aria-label={on ? 'Mute ambient sound' : 'Play ambient sound'}
    >
      {on ? <Volume2 className="h-4 w-4 text-gold-600" /> : <VolumeX className="h-4 w-4 text-ink-700/55" />}
      {on ? 'Sound on' : 'Ambient sound'}
    </button>
  )
}
