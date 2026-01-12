"use client"

import Link from "next/link"
import { Package } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const stats = [
  { value: 576, label: "Project Completed", icon: Package },
  { value: 687, label: "Happy Customers", icon: Package },
  { value: 890, label: "Delivered in Time", icon: Package },
]

export default function AboutSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer staggerDelay={0.12}>
          <StaggerItem>
            <div className="flex flex-col items-start gap-1 mb-3">
              <div className="relative">
                <span className="block w-8 h-0.5 bg-primary rounded-full" />
                <span className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-1 bg-primary rounded-full" />
              </div>
              <span className="text-muted font-medium opacity-60">About Us</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.45rem] font-medium tracking-tight leading-[1.2] mb-4 text-background">
              Logistics Without<br />the Headaches
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted/90 text-sm sm:text-lg font-medium mb-4">
              At <strong>Time Global Shipping</strong>, we are more than just a logistics provider; we are a strategic partner dedicated to empowering businesses in an increasingly complex global market. With over <strong>35 years of industry-leading experience</strong>, we specialize in crafting tailored logistics solutions that combine precision, reliability, and innovation.
            </p>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors mb-12"
            >
              <WaveText>Learn more</WaveText>
            </Link>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="flex items-center gap-4">
                <div className="w-24 h-22 bg-muted-foreground/20 flex items-center justify-center shrink-0">
                  <stat.icon className="w-12 h-12 text-background" strokeWidth={0.8} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl text-background font-semibold tracking-tighter" style={{ transform: 'scaleY(0.852)' }}>
                    <NumberTicker value={stat.value} className="tracking-tighter" />
                    <span>+</span>
                  </div>
                  <p className="text-muted font-medium opacity-60 text-sm">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}