"use client"

import Link from "next/link"
import Image from "next/image"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const features = [
  {
    iconSrc: "/svgs/Integrity-Responsibility.svg",
    number: "01",
    title: "Integrity & Responsibility",
    description: "We uphold the highest standards of professionalism, safety, and transparency in every shipment.",
  },
  {
    iconSrc: "/svgs/Client-Centeredsvg.svg",
    number: "02",
    title: "Client-Focused Solutions",
    description: "Each logistics plan is tailored to your unique business needs, ensuring smooth and reliable operations.",
  },
  {
    iconSrc: "/svgs/Legal-Solutionsvg.svg",
    number: "03",
    title: "Compliance & Customs Expertise",
    description: "From regulatory compliance to customs brokering, we provide end-to-end solutions for safe and efficient delivery",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-13 px-4 sm:px-8">
      <StaggerContainer className="text-center mb-12 md:mb-16 max-w-4xl mx-auto" staggerDelay={0.15}>
        <StaggerItem>
          <span className="text-sm font-medium text-background mb-5 block tracking-tight">
            Driven by purpose
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium leading-tight text-background">
            We're not just about moving cargo—we're about trust, safety, and seamless compliance.
          </h2>
        </StaggerItem>
      </StaggerContainer>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
        {features.map((feature, index) => (
          <Reveal key={index} delay={0.1 * index}>
            <div className="bg-muted-foreground/15 hover:scale-101 transition-all duration-300 rounded-2xl rounded-tr-none overflow-hidden flex flex-col min-h-84 relative">
              {/* Main content area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-auto">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 invert dark:invert-0"
                  />
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