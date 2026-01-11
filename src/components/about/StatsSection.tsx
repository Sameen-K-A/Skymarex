"use client"

import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const stats = [
  {
    value: "1,500+",
    label: "Improved financial clarity",
  },
  {
    value: "10+ Years",
    label: "Industry experience",
  },
  {
    value: "98%",
    label: "Customer satisfaction rate",
  },
  {
    value: "50+",
    label: "Cities covered nationwide",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 bg-foreground">
      <div className="flex flex-col xl:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

        <StaggerContainer className="w-full xl:max-w-sm" staggerDelay={0.15}>
          <StaggerItem>
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-background text-foreground rounded-full tracking-wider mb-4">
              Trusted by Thousands
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-background">
              Our numbers speak for themselves
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 w-full xl:max-w-3xl">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="bg-muted-foreground/20 rounded-2xl p-6 sm:p-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2 text-background">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-background">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}