"use client"

import Image from "next/image"
import { StaggerContainer, Reveal } from "@/components/ui/animations"

export default function MissionVisionSection() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-foreground">
      <div className="max-w-[1550px] mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <StaggerContainer className="space-y-10" staggerDelay={0.15}>
              <div className="space-y-4">
                <Reveal delay={0.2}>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background">
                    Our Vision
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-background tracking-tight leading-relaxed">
                    We aim to provide consistent, high quality, specialized services to our clients while creating and bringing forward inspiration and innovation, products and services of supreme quality and value, improving the lives of our surrounding and its consumers.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-4">
                <Reveal delay={0.2}>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background">
                    Our Mission
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-background tracking-tight leading-relaxed">
                    Our Mission is to provide an efficient raw material supply service through a better understanding of the business dynamics, being market oriented, consider our clients and suppliers as partners and offer to our clients quality and innovative materials.
                  </p>
                </Reveal>
              </div>
            </StaggerContainer>

            <Reveal delay={0.2} className="w-full">
              <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-muted-foreground/20">
                <Image
                  src="/images/about/mission-vision.jpg"
                  alt="Our team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section >
  )
}