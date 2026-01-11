"use client"

import { useRef } from "react"
import { motion, useInView, type Variant } from "framer-motion"
import { useLoading } from "@/components/providers/LoadingContext"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
}

const getDirectionVariants = (direction: string, distance: number) => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }
  return directions[direction] || { y: distance }
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  const { isLoading } = useLoading()

  const directionOffset = getDirectionVariants(direction, distance)

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset,
    } as Variant,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    } as Variant,
  }

  // Wait for loading screen to finish before animating
  const shouldAnimate = isInView && !isLoading

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  const { isLoading } = useLoading()

  // Wait for loading screen to finish before animating
  const shouldAnimate = isInView && !isLoading

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
}: StaggerItemProps) {
  const directionOffset = getDirectionVariants(direction, distance)

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  const { isLoading } = useLoading()

  // Wait for loading screen to finish before animating
  const shouldAnimate = isInView && !isLoading

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}