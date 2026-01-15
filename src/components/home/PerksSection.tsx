"use client"

import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const perks = [
  {
    number: "1",
    title: "24/7 Customer Support",
    description: "Our team is ready to assist you anytime, day or night.",
  },
  {
    number: "2",
    title: "Competitive Pricing",
    description: "Affordable, transparent rates with no hidden fees.",
  },
  {
    number: "3",
    title: "On-Time Delivery",
    description: "Every shipment is tracked and delivered on schedule.",
  },
  {
    number: "4",
    title: "Global Network",
    description: "Ship anywhere—our network spans over 200 countries, with seamless air, sea, and multimodal transport.",
  },
  {
    number: "5",
    title: "Compliance & Safety",
    description: "We ensure all shipments meet regulatory standards—including Dangerous Goods handling—so you can ship with peace of mind.",
  },
]

export default function PerksSection() {
  return (
    <section className="py-16 md:py-30 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer className="text-center mb-12" staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium leading-tight mb-4">
              Perks of Shipping With Us
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-foreground/80 text-sm sm:text-base max-w-lg mx-auto leading-tight">
              When you ship with SKYMAREX, everything just works. No delays, no stress—just reliable
              logistics you can count on every time.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {perks.map((perk, index) => (
            <Reveal key={index} delay={0.1 * index} className="w-full lg:w-[calc(50%-1rem)] last:lg:w-full">
              <div className="bg-foreground rounded-lg overflow-hidden flex h-full">
                <div className="w-12 bg-primary flex items-center justify-center shrink-0">
                  <span className="text-2xl font-semibold">{perk.number}</span>
                </div>
                <div className="p-3 space-y-2">
                  <h3 className="text-base md:text-lg font-medium text-background">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium tracking-tighter">
                    {perk.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}