"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaUserAlt } from "react-icons/fa"
import { TEAM_MEMBERS } from "@/constants/gallery"
import { Reveal } from "@/components/ui/animations"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const threshold = 50 // Minimum scroll distance before enabling buttons
      setCanScrollLeft(scrollLeft > threshold)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - threshold)
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollPosition()
      container.addEventListener("scroll", checkScrollPosition)
      window.addEventListener("resize", checkScrollPosition)
      return () => {
        container.removeEventListener("scroll", checkScrollPosition)
        window.removeEventListener("resize", checkScrollPosition)
      }
    }
  }, [checkScrollPosition])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const scrollAmount = 280 // Card width + gap
      const threshold = 50

      if (direction === "left") {
        // Snap to start if close to beginning
        if (scrollLeft < scrollAmount + threshold) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        }
      } else {
        // Snap to end if close to end
        const maxScroll = scrollWidth - clientWidth
        if (scrollLeft > maxScroll - scrollAmount - threshold) {
          scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" })
        } else {
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
      }
    }
  }

  return (
    <section className="py-8 px-4 sm:px-8 bg-foreground pb-15 overflow-hidden">
      <div className="max-w-[1550px] mx-auto">
        {/* Header with arrows */}
        <div className="relative mb-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background">
              Our hardworking movers
            </h2>
          </Reveal>

          {/* Arrow controls - desktop: top right */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 gap-2">
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-7 h-7 text-background" />
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-7 h-7 text-background" />
            </Button>
          </div>
        </div>

        {/* Scrollable container */}
        <Reveal>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-scroll pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 py-2"
          >
            {TEAM_MEMBERS.map((member) => {
              const hasImage = member.img && member.img.trim() !== "";

              return (
                <div key={member.id} className="flex flex-col shrink-0 w-72 sm:w-80 md:w-96">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted-foreground/20 mb-4 flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={member.img!}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                        className="object-cover"
                      />
                    ) : (
                      <FaUserAlt className="w-[40%] h-auto text-muted-foreground/40" />
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-background">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Arrow controls - mobile: centered below cards */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7 text-background" />
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7 text-background" />
          </Button>
        </div>
      </div>
    </section>
  )
}