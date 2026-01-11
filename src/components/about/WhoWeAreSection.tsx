"use client"

import { Coins, Clock, Lightbulb } from "lucide-react"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const features = [
  {
    icon: Coins,
    title: "Improved Financial",
    subtitle: "Clarity",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    subtitle: "Promise",
  },
  {
    icon: Lightbulb,
    title: "Full-Service",
    subtitle: "Solutions",
  },
]

export default function WhoWeAreSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">

        <StaggerContainer staggerDelay={0.12}>
          <StaggerItem>
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-background text-foreground rounded-full tracking-wider mb-6 md:mb-8">
              Who We Are
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-2xl md:text-4xl font-medium text-background leading-tight mb-6">
              We&apos;re more than movers we&apos;re your partners in making
              relocation simple, secure, and worry-free from start to finish.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-background text-sm font-light sm:text-base max-w-2xl mx-auto mb-12 md:mb-16">
              We go beyond moving providing support and expertise to make your
              relocation smooth, secure, and stress-free from start to finish.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="flex flex-col items-center gap-3">
                <feature.icon strokeWidth={1} className="w-8 h-8 sm:w-10 sm:h-10 text-background" />
                <div className="text-center">
                  <p className="text-sm font-light text-background">{feature.title}</p>
                  <p className="text-sm font-light text-background">{feature.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}