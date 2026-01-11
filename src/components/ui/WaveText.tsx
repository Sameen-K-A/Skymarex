"use client"

import { cn } from "@/lib/utils"

interface WaveTextProps {
  children: string
  className?: string
}

export default function WaveText({ children, className }: WaveTextProps) {
  const letters = children.split("")

  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      {/* Original text - slides up and out on hover */}
      <span className="inline-flex">
        {letters.map((letter, index) => (
          <span
            key={`original-${index}`}
            className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0"
            style={{
              transitionDelay: `${index * 15}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>

      {/* Clone text - slides up from below on hover */}
      <span className="absolute left-0 top-0 inline-flex">
        {letters.map((letter, index) => (
          <span
            key={`clone-${index}`}
            className="inline-block translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
            style={{
              transitionDelay: `${index * 15}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </span>
  )
}
