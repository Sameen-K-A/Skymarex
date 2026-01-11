"use client"

import Image from "next/image"
import { testimonials } from "@/constants/testimonials";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group relative w-72 sm:w-80 shrink-0 h-96 rounded-2xl overflow-hidden cursor-pointer">
      {/* Default State - White card */}
      <div className="absolute inset-0 bg-muted-foreground/20 p-8 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-background text-lg font-medium leading-relaxed flex-1">
          {testimonial.quote}
        </p>

        <div className="border-t border-muted-foreground/50 border-dashed pt-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-muted-foreground/20 overflow-hidden relative">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-background">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover State - Full image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white text-lg font-medium leading-tight mb-4">
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
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 bg-foreground overflow-hidden">
      <StaggerContainer className="text-center mb-12" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/20 text-background rounded-full mb-4">
            Trusted by customers
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-background">
            Trusted by families and<br className="hidden sm:block" />
            businesses alike
          </h2>
        </StaggerItem>
      </StaggerContainer>

      {/* Scrollable container */}
      <Reveal>
        <div className="flex gap-4 overflow-x-scroll pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}