"use client"

import { useEffect, useRef, useState } from "react"

export default function useReveal({ threshold = 0.08 } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    // A fast jump down the page can skip the observer, so anything already
    // scrolled to (or past) is revealed on the next scroll event as well.
    const reveal = () => {
      setIsVisible(true)
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
    const onScroll = () => {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.92) reveal()
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) reveal() },
      { threshold }
    )

    observer.observe(node)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [threshold])

  return [ref, isVisible]
}
