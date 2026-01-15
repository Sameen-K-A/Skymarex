"use client"

import Link from "next/link"
import { Scale, Handshake, Gavel, ArrowRight } from "lucide-react"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const features = [
  {
    icon: Scale,
    number: "01",
    title: "360° Coverage",
    description: "Our end-to-end approach covers every angle of the logistics process, from planning and compliance to delivery, ensuring seamless coordination and peace of mind.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Experience & Expertise",
    description: "Backed by a team with 15+ years of industry experience, we bring unmatched expertise to every shipment, delivering safe, reliable, and efficient logistics solutions.",
  },
  {
    icon: Gavel,
    number: "03",
    title: "Personalized Service",
    description: "We understand that every shipment is unique. That’s why we offer tailored solutions to meet your specific needs, ensuring your cargo is handled with the highest care.",
  },
  {
    icon: ArrowRight,
    number: "04",
    title: "Commitment to Innovation",
    description: "Constantly evolving, we push the boundaries of logistics excellence through innovative solutions, cutting-edge tracking, and forward-thinking strategies.",
  },
]

export default function WhatMakesUsDifferentSection() {
  return (
    <section className="py-13 px-4 sm:px-8 bg-foreground">
      <StaggerContainer className="text-center mb-12 max-w-4xl mx-auto" staggerDelay={0.15}>
        <StaggerItem>
          <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium leading-tight text-background">
            What Makes Us Different
          </h2>
        </StaggerItem>
      </StaggerContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-5">
        {features.map((feature, index) => (
          <Reveal key={index} delay={0.1 * index}>
            <div className="bg-muted-foreground/15 rounded-2xl rounded-tr-none overflow-hidden flex flex-col min-h-84 relative">
              {/* Main content area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-auto">
                  <feature.icon className="w-10 h-10 text-background" strokeWidth={1.5} />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-background">{feature.title}</h3>
                  <p className="text-sm text-muted/80 font-medium leading-tight">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Inverted radius corner with number */}
              <div className="absolute top-0 right-0">
                <div className="relative">
                  {/* Number badge */}
                  <div className="bg-foreground/50 text-background font-mono text-base px-2 py-2 aspect-square h-12 w-12 rounded-bl-2xl flex justify-center items-center">
                    {feature.number}
                  </div>
                  {/* Inverted radius - left side */}
                  <div
                    className="absolute -left-4 top-0 w-4 h-4 bg-transparent -rotate-90"
                    style={{
                      background: 'radial-gradient(circle at 0 0, transparent 16px, color-mix(in srgb, var(--foreground) 50%, transparent) 16px)'
                    }}
                  />
                  {/* Inverted radius - bottom side */}
                  <div
                    className="absolute right-0 -bottom-4 w-4 h-4 bg-transparent rotate-90 scale-y-[-1]"
                    style={{
                      background: 'radial-gradient(circle at 100% 0, transparent 16px, color-mix(in srgb, var(--foreground) 50%, transparent) 16px)'
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <Link
          href="/services"
          className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-background rounded-lg hover:bg-background/90 transition-colors"
        >
          <WaveText>Explore Our Services</WaveText>
        </Link>
      </Reveal>
    </section>
  )
}