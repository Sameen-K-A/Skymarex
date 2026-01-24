"use client"

import { useState } from "react"
import Image from "next/image"
import { services, IService } from "@/constants/services"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const ServiceCard = ({ service }: { service: IService }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="perspective-1000 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="group bg-muted/50 rounded-2xl p-4 pb-5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative aspect-5/3 rounded-xl overflow-hidden bg-muted-foreground/10 mb-6">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg md:text-xl font-medium text-foreground mb-4 px-2 leading-tight tracking-tighter line-clamp-1">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-foreground leading-tight tracking-tight px-2 line-clamp-2">
            {service.description}
          </p>
          <p className="text-xs text-muted-foreground mt-3 px-2 hover:underline">Click to read more</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-muted/50 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg md:text-xl font-medium text-foreground mb-4 leading-tight tracking-tighter">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-foreground leading-relaxed tracking-tight flex-1 overflow-y-auto">
            {service.description}
          </p>
          <p className="text-xs text-muted-foreground mt-4 hover:underline">Click to go back</p>
        </div>
      </div>
    </div>
  )
}

export default function ServicesGridSection() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-background">
      <StaggerContainer className="text-center mb-15" staggerDelay={0.15}>
        <StaggerItem>
          <h1 className="text-4xl md:text-5xl lg:text-[3.65rem] font-medium leading-tight text-foreground mb-4">
            Our services
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="font-medium max-w-md mx-auto leading-tight tracking-tighter">
            We offer a full range of moving solutions designed to make your relocation seamless, stress-free, and efficient.
          </p>
        </StaggerItem>
      </StaggerContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <Reveal key={service.id} delay={0.1}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}