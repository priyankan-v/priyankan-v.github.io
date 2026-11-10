import { createElement, useEffect, useRef, useState } from 'react'

// Keep native page scrolling; reveal each section once as it enters the viewport.
export default function Reveal({
  as = 'div',
  direction = 'left',
  className = '',
  children,
  ...props
}) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -24px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    {
      ...props,
      ref: elementRef,
      className: `reveal ${className}`,
      'data-reveal': visible ? 'visible' : 'pending',
      'data-direction': direction,
      onFocusCapture: () => setVisible(true),
    },
    children,
  )
}
