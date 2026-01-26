"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * LazyVideo - A video component that only loads and plays when visible in viewport.
 * This dramatically reduces memory usage and prevents scroll lag caused by
 * multiple background videos playing simultaneously.
 */
export function LazyVideo({ src, poster, className, style }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Start loading when 20% of the element is visible, with 200px margin
  const isInView = useInView(ref, {
    amount: 0.1,
    margin: "200px",
    once: false // Allow re-triggering when scrolling back
  })

  // Load video when first comes into view
  useEffect(() => {
    if (isInView && !shouldLoad) {
      setShouldLoad(true)
    }
  }, [isInView, shouldLoad])

  // Pause/play based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, that's okay
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <div ref={ref} className={className} style={style}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // Placeholder while video is not loaded
        poster ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        ) : (
          <div className="w-full h-full bg-black" />
        )
      )}
    </div>
  )
}
