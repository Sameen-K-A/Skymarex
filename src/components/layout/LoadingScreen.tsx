"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { GradientLogo } from "@/components/ui/GradientLogo"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* World Map Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.09 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/svgs/world.svg"
              alt=""
              width={0}
              height={0}
              className="h-auto min-w-[95vw] md:min-w-[60vw] dark:invert"
              priority
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.4 } }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative z-10"
          >
            <GradientLogo className="w-[200px] h-[60px] md:w-[270px] md:h-[80px]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}