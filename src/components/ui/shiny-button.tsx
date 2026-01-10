"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps
  extends
  Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
  MotionProps {
  children: React.ReactNode
  className?: string
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative cursor-pointer text-sm rounded-lg px-4 py-2 backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow bg-linear-to-r from-primary to-primary/90",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative block size-full text-sm tracking-wide text-white"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 0%),transparent calc(var(--x) + 0%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
    </motion.button>
  )
})

ShinyButton.displayName = "ShinyButton"