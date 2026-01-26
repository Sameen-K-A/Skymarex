"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaUserAlt } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/constants/testimonials";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const hasImage = testimonial.image && testimonial.image.trim() !== ""

  return (
    <div className="group relative w-72 sm:w-90 shrink-0 h-102 rounded-2xl overflow-hidden cursor-default">
      {/* Default State - White card */}
      <div className="absolute inset-0 bg-muted-foreground/20 p-8 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-background text-base md:text-lg font-medium leading-relaxed flex-1">
          {testimonial.quote}
        </p>

        <div className="border-t border-muted-foreground/50 border-dashed pt-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-muted-foreground/20 overflow-hidden relative flex items-center justify-center">
              {hasImage ? (
                <Image
                  src={testimonial.image!}
                  alt={testimonial.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
                />
              ) : (
                <FaUserAlt className="w-7 h-7 text-muted-foreground/60" />
              )}
            </div>
            <div>
              <p className="font-medium text-background">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover State - Full image or gradient only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {hasImage ? (
          <Image
            src={testimonial.image!}
            alt={testimonial.name}
            fill
            sizes="(max-width: 640px) 288px, 360px"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
          />
        ) : (
          <div className="w-full h-full bg-muted-foreground/30 flex items-center justify-center">
            <FaUserAlt className="w-[70%] h-auto text-muted-foreground/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white text-base md:text-lg font-medium leading-tight mb-4">
            {testimonial.quote}
          </p>
          <div className="border-t border-white border-dashed pt-4 mt-4" />
          <p className="text-white font-medium">{testimonial.name}</p>
          <p className="text-white/70 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
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
      const scrollAmount = 320 // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-12 px-4 sm:px-8 overflow-hidden">
      {/* Header with arrows (desktop only) */}
      <div className="relative mb-6 md:mb-12">
        <StaggerContainer className="text-center" staggerDelay={0.15}>
          <StaggerItem>
            <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/10 text-background rounded-full mb-4">
              Trusted by customers
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium leading-tight text-background">
              Trusted by families and <br className="hidden sm:block" />
              businesses alike
            </h2>
          </StaggerItem>
        </StaggerContainer>

        {/* Arrow controls - desktop: top right */}
        <div className="hidden lg:flex absolute right-0 top-1/2 gap-2">
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7 text-background font" />
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7 text-background font" />
          </Button>
        </div>
      </div>

      {/* Scrollable container */}
      <Reveal>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-scroll pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
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
          <ChevronLeft className="w-7 h-7 text-background font-bold" />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="bg-muted-foreground/10 hover:bg-muted-foreground/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-7 h-7 text-background font-bold" />
        </Button>
      </div>
    </section>
  )
}