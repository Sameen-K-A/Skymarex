"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import WaveText from "@/components/ui/WaveText"
import { StaggerContainer, StaggerItem } from "@/components/ui/animations"
import QuoteDialog from "@/components/shared/QuoteDialog"

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-30 px-4 sm:px-8 bg-background">
      <div className="absolute inset-0 bg-background" />

      <StaggerContainer className="relative z-10 max-w-lg md:max-w-2xl mx-auto text-center" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-foreground text-background rounded-full tracking-wider mb-6">
            Start your journey
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium text-foreground leading-tight mb-8 md:mb-10">
            Let&apos;s make your next move effortless and worry-free.
          </h2>
        </StaggerItem>

        <StaggerItem>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
            >
              <WaveText>Book your move now</WaveText>
            </Link>

            <QuoteDialog>
              <button className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all cursor-pointer">
                <span className="border-b-2 border-foreground pb-0.5">
                  <WaveText>Get a free quote</WaveText>
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </QuoteDialog>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  )
}