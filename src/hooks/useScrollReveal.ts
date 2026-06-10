import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container element.
 * Children with the class "reveal" will get the class "visible"
 * when they scroll into view, triggering the CSS fade-up transition.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve after reveal — no need to watch anymore
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const targets = container.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}