"use client"

import Link from "next/link"
import Image from "next/image"
import { NumberTicker } from "@/components/ui/number-ticker"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const stats = [
  { value: 150, label: "Shipment Completed" },
  { value: 59, label: "Happy Customers" },
  { value: 15, label: "Industry experience" },
  { value: 100, label: "Delivered in Time" },
]

export default function AboutSection() {
  return (
    <section className="py-12 px-4 max-w-[1550px] mx-auto">
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
            <h2 className="text-3xl sm:text-4xl md:text-[2.9rem] font-medium tracking-tight leading-[1.2] mb-4 text-background">
              Logistics Without<br />the Headaches
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted/90 text-base sm:text-lg font-medium mb-4">
              <strong>SKYMAREX</strong> is a specialized logistics company focused on the safe and compliant handling of
              Dangerous Goods. <strong>Backed by a team with 15+ years of industry experience </strong>and expertise
              across air and sea freight, multimodal transport, and secure warehousing, we deliver
              seamless, reliable, and precision-driven logistics solutions tailored to our clients&apos; needs.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted/90 text-base sm:text-lg font-medium mb-4">
              Driven by a customer-first approach and practical innovation, SKYMAREX partners with
              businesses to streamline supply chains, eliminate operational headaches, and deliver lasting
              peace of mind. We don&apos;t just move cargo&mdash;we manage responsibility, safety, and trust at
              every step.
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
          <StaggerItem className="flex justify-center">
            <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/10 text-background rounded-full mb-12 text-center">
              <span className="text-center">
                <strong>SKYMAREX</strong> — Your trusted partner in safe, compliant, and seamless global logistics.
              </span>
            </span>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="flex items-center gap-4">
                <div className="w-24 h-22 bg-muted-foreground/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/icons/package.png"
                    alt="Package icon"
                    width={48}
                    height={48}
                    className="invert dark:invert-0"
                  />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl text-background font-semibold tracking-tighter" style={{ transform: 'scaleY(0.852)' }}>
                    <NumberTicker value={stat.value} className="tracking-tighter" />
                    <span>{stat.value === 100 ? "%" : "+"}</span>
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