import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Renders `children` at a fixed design width, then scales the whole block down to fit
 *  its container via CSS transform — keeps the mockup crisp instead of reflowing at small sizes. */
export default function ScaledMockup({
  children,
  designWidth = 760,
}: {
  children: ReactNode
  designWidth?: number
}) {
  const outerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const update = () => {
      const width = outer.offsetWidth
      setScale(width / designWidth)
      setInnerHeight(inner.offsetHeight)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(outer)
    ro.observe(inner)
    return () => ro.disconnect()
  }, [designWidth])

  return (
    <div ref={outerRef} style={{ height: innerHeight * scale || undefined }}>
      <div
        ref={innerRef}
        style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  )
}
