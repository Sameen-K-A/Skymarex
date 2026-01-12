"use client"

import Link from "next/link"
import { Scale, Handshake, Gavel } from "lucide-react"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const features = [
  {
    icon: Scale,
    number: "01",
    title: "Integrity & Ethics",
    description: "We uphold the highest standards of honesty, confidentiality, & professionalism in every matter",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Client-Centered",
    description: "Our approach is tailored to each client's unique legal needs, ensuring strategic and representation",
  },
  {
    icon: Gavel,
    number: "03",
    title: "Legal Solution",
    description: "We combine legal expertise with modern strategies to provide solutions that meet today's challenges",
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
          <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background">
            We're not just about trucks and timelines,
            we're about trust and responsibility.
          </h2>
        </StaggerItem>
      </StaggerContainer>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
        {features.map((feature, index) => (
          <Reveal key={index} delay={0.1 * index}>
            <div
              className="bg-muted-foreground/10 rounded-2xl p-6 md:p-8 flex flex-col min-h-84"
            >
              <div className="flex items-start justify-between mb-auto">
                <feature.icon className="w-10 h-10 text-background" strokeWidth={1.5} />
                <span className="text-sm text-background">{feature.number}</span>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-3 text-background">{feature.title}</h3>
                <p className="text-sm text-muted/80 font-medium leading-tight">
                  {feature.description}
                </p>
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
          <WaveText>All Services</WaveText>
        </Link>
      </Reveal>
    </section>
  )
}