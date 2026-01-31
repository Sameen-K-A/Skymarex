"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/constants/testimonials";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const hasImage = testimonial.image && testimonial.image.trim() !== ""

  return (
    <div
      className="perspective-1000 cursor-pointer w-72 sm:w-90 shrink-0 h-102"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - Image & Name */}
        <div
          className="group absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {hasImage && (
            <Image
              src={testimonial.image!}
              alt={testimonial.name}
              fill
              sizes="(max-width: 640px) 288px, 360px"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
            />
          )}
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent transition-all duration-300" />

          {/* Name at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-medium text-base sm:text-lg">{testimonial.name}</p>
            <p className="text-white/70 text-xs mt-1 group-hover:underline">Tap to read</p>
          </div>
        </div>

        {/* Back Side - Quote */}
        <div
          className="absolute inset-0 bg-muted-foreground/15 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-background text-sm sm:text-base leading-relaxed flex-1 overflow-y-auto">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="border-t border-dashed border-background/20 pt-4 mt-4">
            <p className="text-background font-medium text-sm sm:text-base">{testimonial.name}</p>
            <p className="text-background/60 text-xs mt-1 hover:underline">Tap to go back</p>
          </div>
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
      const scrollAmount = 320 // Card width + gap
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
    <section className="py-12 px-4 sm:px-8 overflow-hidden max-w-[1550px] mx-auto ">
      {/* Header with arrows (desktop only) */}
      <div className="relative mb-6 md:mb-12">
        <StaggerContainer className="text-center mb-12" staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] text-background font-medium leading-tight mb-4">
              Industries We Serve
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted/90 text-sm sm:text-base max-w-4xl mx-auto leading-tight">
              Whatever your industry, we are your trusted global freight forwarder.
              Our dedicated teams leverage industry-specific logistics expertise, Dangerous Goods (DG) handling knowledge, regulatory compliance, and international shipping standards to move your cargo safely and efficiently—regardless of complexity, destination, or mode of transport.
            </p>
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
          className="flex gap-4 overflow-x-scroll pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 py-2"
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