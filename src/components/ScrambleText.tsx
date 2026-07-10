import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>'

interface ScrambleTextProps {
  text: string
  /** ms to wait after mount before decoding starts */
  startDelay?: number
  /** total decode duration in ms */
  duration?: number
  className?: string
}

/** Renders `text` as a "decoder" reveal: characters cycle through random
 *  glyphs and lock into place left-to-right, then hold the final text.
 *  Keeps spaces/punctuation fixed so words assemble in place. */
export default function ScrambleText({ text, startDelay = 300, duration = 1200, className }: ScrambleTextProps) {
  const [output, setOutput] = useState(() => scramble(text, 0))
  const frameRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutput(text)
      return
    }

    let raf = 0
    let start: number | null = null

    const tick = (ts: number) => {
      if (start === null) start = ts
      const elapsed = ts - start - startDelay

      if (elapsed < 0) {
        // brief fully-scrambled hold before decoding
        frameRef.current++
        if (frameRef.current % 2 === 0) setOutput(scramble(text, 0))
        raf = requestAnimationFrame(tick)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      setOutput(scramble(text, progress))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setOutput(text)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, startDelay, duration])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  )
}

/** Locks the first `progress` fraction of characters; scrambles the rest.
 *  Spaces and commas are always kept so word boundaries stay stable. */
function scramble(text: string, progress: number): string {
  const locked = Math.floor(progress * text.length)
  let out = ''
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (c === ' ' || c === ',' || c === '.') {
      out += c
    } else if (i < locked) {
      out += c
    } else {
      out += CHARS[(Math.random() * CHARS.length) | 0]
    }
  }
  return out
}
