"use client"

import React from "react"

interface GradientLogoProps {
  width: number
  height: number
  className?: string
  logoSrc?: string
}

export function GradientLogo({
  width,
  height,
  className = "",
  logoSrc = "/svgs/logoMain.svg"
}: GradientLogoProps) {

  const maskStyles = {
    WebkitMaskImage: `url(${logoSrc})`,
    maskImage: `url(${logoSrc})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  } as React.CSSProperties

  return (
    <>

      {/* Light mode */}
      <div
        className={`dark:hidden ${className}`}
        style={{
          width,
          height,
          background: "linear-gradient(180deg, rgba(120, 120, 120, 1) 10%, rgba(0, 0, 0, 1) 100%)",
          ...maskStyles,
        }}
      />

      {/* Dark mode */}
      <div
        className={`hidden dark:block ${className}`}
        style={{
          width,
          height,
          background: "linear-gradient(180deg,rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 50%, rgba(201, 201, 201, 1) 60%)",
          ...maskStyles,
        }}
      />
    </>
  )
}