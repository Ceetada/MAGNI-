import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

interface ScrambleTextProps {
  text: string
  /** ms to wait after mount before revealing starts */
  startDelay?: number
  /** ms spent per character (higher = slower) */
  perChar?: number
  className?: string
}

/** Reveals `text` one letter at a time, left to right. Only the single
 *  "active" letter flickers through a couple of random glyphs before it
 *  locks; letters not yet revealed are held invisibly so the layout never
 *  shifts. Falls back to static text under prefers-reduced-motion. */
export default function ScrambleText({ text, startDelay = 400, perChar = 130, className }: ScrambleTextProps) {
  const [revealed, setRevealed] = useState(0)
  const [flicker, setFlicker] = useState('')
  const frame = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(text.length)
      return
    }

    let raf = 0
    let start: number | null = null

    const tick = (ts: number) => {
      if (start === null) start = ts
      const elapsed = ts - start - startDelay

      if (elapsed >= 0) {
        const count = Math.min(Math.floor(elapsed / perChar), text.length)
        setRevealed(count)
        // flicker the active (next) letter through a random glyph now and then
        frame.current++
        if (count < text.length && frame.current % 4 === 0) {
          setFlicker(CHARS[(Math.random() * CHARS.length) | 0])
        }
      }

      if (start === null || ts - start - startDelay < text.length * perChar) {
        raf = requestAnimationFrame(tick)
      } else {
        setRevealed(text.length)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, startDelay, perChar])

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((c, i) => {
        if (i < revealed) return <span key={i}>{c}</span>
        // active letter: flicker unless it's a space/punctuation
        if (i === revealed && c !== ' ' && c !== ',' && c !== '.') {
          return (
            <span key={i} aria-hidden="true">
              {flicker || c}
            </span>
          )
        }
        // not yet revealed: keep the real glyph but invisible to hold width
        return (
          <span key={i} aria-hidden="true" className="opacity-0">
            {c}
          </span>
        )
      })}
    </span>
  )
}
