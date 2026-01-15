"use client"

import { Coins, Clock, Lightbulb } from "lucide-react"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"
import Link from "next/link"
import WaveText from "../ui/WaveText"

const features = [
  {
    icon: Coins,
    title: "Improved Financial",
    subtitle: "Clarity",
  },
  {
    icon: Clock,
    title: "On-Time,",
    subtitle: "Every Time",
  },
  {
    icon: Lightbulb,
    title: "Full-Service",
    subtitle: "Solutions",
  },
]

export default function WhoWeAreSection() {
  return (
    <section className="py-16 md:py-24 md:pt-30 px-4 sm:px-8 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">

        <StaggerContainer staggerDelay={0.12}>
          <StaggerItem>
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-background text-foreground rounded-full tracking-wider mb-6 md:mb-8">
              Your Trusted Partner
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium text-background leading-tight mb-8">
              We’re more than movers—we’re your partners in making logistics simple, secure, and
              worry-free from start to finish.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted/80 text-sm font-medium sm:text-lg max-w-2xl mx-auto mb-12 tracking-tighter">
              We go beyond shipping, providing expertise and support to ensure every delivery is smooth,
              compliant, and stress-free.
            </p>
          </StaggerItem>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
            {features.map((feature, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <div className="flex flex-col items-center gap-3">
                  <feature.icon strokeWidth={1} className="w-8 h-8 sm:w-10 sm:h-10 text-background" />
                  <div className="text-center">
                    <p className="text-muted/80 text-sm font-medium tracking-tighter">{feature.title}</p>
                    <p className="text-muted/80 text-sm font-medium tracking-tighter">{feature.subtitle}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <StaggerItem>
            <p className="text-muted/80 text-sm font-medium sm:text-lg max-w-2xl mx-auto mt-12 tracking-tighter">
              Deliver with Confidence
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted/80 text-sm font-medium sm:text-lg max-w-2xl mx-auto tracking-tighter">
              Explore our full range of tailored logistics and compliance services.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-6 py-3 mt-6 text-base font-medium bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors"
            >
              <WaveText>Explore Services</WaveText>
            </Link>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  )
}