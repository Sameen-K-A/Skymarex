"use client"

import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
}

export function LazyVideo({ src, poster, className, style }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isInView = useInView(ref, {
    amount: 0.1,
    margin: "200px",
    once: false
  })

  // Track if video has ever been in view (for loading)
  const hasBeenInView = useRef(false)
  if (isInView && !hasBeenInView.current) {
    hasBeenInView.current = true
  }
  const shouldLoad = hasBeenInView.current

  // Pause/play based on visibility
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => { })
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