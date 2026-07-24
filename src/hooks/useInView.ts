import { useEffect, useState, type RefCallback } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

function isInViewport(node: HTMLElement, inset = 0.08) {
  const rect = node.getBoundingClientRect()
  const viewH = window.innerHeight || document.documentElement.clientHeight
  const viewW = window.innerWidth || document.documentElement.clientWidth
  return (
    rect.bottom > viewH * inset &&
    rect.top < viewH * (1 - inset) &&
    rect.right > 0 &&
    rect.left < viewW
  )
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
): [RefCallback<T>, boolean] {
  const { threshold = 0, rootMargin = '0px 0px -10% 0px', once = true } = options
  const [node, setNode] = useState<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!node) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      isInViewport(node)
    ) {
      setInView(true)
      return
    }

    let cancelled = false

    const reveal = () => {
      if (cancelled) return
      setInView(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        reveal()
        if (once) observer.disconnect()
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    const safety = window.setTimeout(() => {
      if (isInViewport(node, 0)) reveal()
    }, 800)

    return () => {
      cancelled = true
      window.clearTimeout(safety)
      observer.disconnect()
    }
  }, [node, threshold, rootMargin, once])

  return [setNode, inView]
}
