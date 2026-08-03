import { useEffect, useRef, useState, type RefObject } from 'react'
import leftBase from '../assets/eyes/left-base.png'
import leftIris from '../assets/eyes/left-iris.png'
import leftMask from '../assets/eyes/left-mask.png'
import rightBase from '../assets/eyes/right-base.png'
import rightIris from '../assets/eyes/right-iris.png'
import rightMask from '../assets/eyes/right-mask.png'

/**
 * The gaze is built from three sprites per eye, cut from HeroMain at its natural
 * 1536x1024 so they upscale exactly like the photo they sit on:
 *   base — the eye with the iris painted out, so the socket reads as empty sclera
 *   iris — a feathered disc that translates
 *   mask — the almond eye opening, which clips both so the iris can slide under
 *          the lids instead of running past them
 * All rects below are in natural-image pixels; `scale` maps them to the page.
 */
type Eye = {
  base: string
  iris: string
  mask: string
  patch: { x: number; y: number; w: number; h: number }
  /** Aperture centre. The iris rests here, so the gorilla looks straight ahead. */
  centre: { x: number; y: number }
  irisSize: number
  /** Furthest the iris travels. The right eye is foreshortened, so it swings less. */
  travel: { x: number; y: number }
}

const EYES: Eye[] = [
  {
    base: leftBase,
    iris: leftIris,
    mask: leftMask,
    patch: { x: 680, y: 591, w: 68, h: 32 },
    centre: { x: 714, y: 607 },
    irisSize: 26,
    travel: { x: 13, y: 4 },
  },
  {
    base: rightBase,
    iris: rightIris,
    mask: rightMask,
    patch: { x: 844, y: 594, w: 60, h: 30 },
    centre: { x: 874, y: 609 },
    irisSize: 28,
    travel: { x: 10, y: 3.5 },
  },
]

/**
 * How far "behind the screen" the eyes sit, as a share of viewport height.
 * Deflection is travel * sin(angle to the cursor), so a smaller depth means the
 * gaze reaches the edges of the eye sooner. At 0.45 the cursor is tracked to
 * ~90% of full travel by the time it reaches a screen corner.
 */
const DEPTH = 0.45
/** Share of the remaining distance covered per frame — enough lag to feel alive. */
const EASE = 0.2

type Geometry = { scale: number; offsetX: number; offsetY: number }

/** Replicates `object-cover` + `object-center` for a natural-size image in a box. */
function coverGeometry(boxW: number, boxH: number, natW: number, natH: number): Geometry {
  const scale = Math.max(boxW / natW, boxH / natH)
  return {
    scale,
    offsetX: (boxW - natW * scale) / 2,
    offsetY: (boxH - natH * scale) / 2,
  }
}

export function HeroEyes({
  imageRef,
  active,
}: {
  imageRef: RefObject<HTMLImageElement | null>
  active: boolean
}) {
  const hostRef = useRef<HTMLDivElement>(null)
  const irisRefs = useRef<Array<HTMLImageElement | null>>([])
  const [geometry, setGeometry] = useState<Geometry | null>(null)

  useEffect(() => {
    const host = hostRef.current
    const image = imageRef.current
    if (!host) return

    const measure = () => {
      const natW = imageRef.current?.naturalWidth ?? 0
      const natH = imageRef.current?.naturalHeight ?? 0
      if (!natW || !natH || !host.clientWidth || !host.clientHeight) return
      setGeometry(coverGeometry(host.clientWidth, host.clientHeight, natW, natH))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(host)
    image?.addEventListener('load', measure)

    return () => {
      observer.disconnect()
      image?.removeEventListener('load', measure)
    }
  }, [imageRef])

  useEffect(() => {
    const host = hostRef.current
    if (!host || !geometry || !active) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = EYES.map(() => ({ x: 0, y: 0 }))
    const current = EYES.map(() => ({ x: 0, y: 0 }))
    let frame = 0

    const render = () => {
      let moving = false
      current.forEach((point, index) => {
        point.x += (targets[index].x - point.x) * EASE
        point.y += (targets[index].y - point.y) * EASE
        if (
          Math.abs(targets[index].x - point.x) > 0.03 ||
          Math.abs(targets[index].y - point.y) > 0.03
        ) {
          moving = true
        }
        const iris = irisRefs.current[index]
        if (iris) {
          iris.style.transform = `translate3d(${point.x.toFixed(2)}px, ${point.y.toFixed(2)}px, 0)`
        }
      })
      frame = moving ? requestAnimationFrame(render) : 0
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const box = host.getBoundingClientRect()
      const depth = window.innerHeight * DEPTH

      EYES.forEach((eye, index) => {
        const eyeX = box.left + geometry.offsetX + eye.centre.x * geometry.scale
        const eyeY = box.top + geometry.offsetY + eye.centre.y * geometry.scale
        const dx = event.clientX - eyeX
        const dy = event.clientY - eyeY
        // Point the eyeball at the cursor: offset = travel * sin(angle), which is
        // dx / hypot(distance, depth) once the unit vector is folded in.
        const reach = Math.hypot(Math.hypot(dx, dy), depth)
        targets[index].x = (dx / reach) * eye.travel.x * geometry.scale
        targets[index].y = (dy / reach) * eye.travel.y * geometry.scale
      })

      if (!frame) frame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [geometry, active])

  return (
    <div ref={hostRef} className="pointer-events-none absolute inset-0" aria-hidden>
      {geometry &&
        EYES.map((eye, index) => {
          const s = geometry.scale
          return (
            <div
              key={eye.base}
              className="absolute"
              style={{
                left: geometry.offsetX + eye.patch.x * s,
                top: geometry.offsetY + eye.patch.y * s,
                width: eye.patch.w * s,
                height: eye.patch.h * s,
                maskImage: `url(${eye.mask})`,
                WebkitMaskImage: `url(${eye.mask})`,
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <img src={eye.base} alt="" className="absolute inset-0 h-full w-full" />
              <img
                ref={(node) => {
                  irisRefs.current[index] = node
                }}
                src={eye.iris}
                alt=""
                className="absolute will-change-transform"
                style={{
                  left: (eye.centre.x - eye.irisSize / 2 - eye.patch.x) * s,
                  top: (eye.centre.y - eye.irisSize / 2 - eye.patch.y) * s,
                  width: eye.irisSize * s,
                  height: eye.irisSize * s,
                }}
              />
            </div>
          )
        })}
    </div>
  )
}
