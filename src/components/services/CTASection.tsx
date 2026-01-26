"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"
import WaveText from "@/components/ui/WaveText"
import { StaggerContainer, StaggerItem } from "@/components/ui/animations"
import { LazyVideo } from "@/components/ui/LazyVideo"

const QuoteDialog = dynamic(() => import("@/components/shared/QuoteDialog"), {
  ssr: false,
})

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-30 px-4 sm:px-8 overflow-hidden">

      <LazyVideo
        src="/videos/services/CTA_background.mp4"
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="absolute inset-0 bg-black/70 z-0" />

      <StaggerContainer className="relative z-10 max-w-lg md:max-w-2xl mx-auto text-center" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-white text-black rounded-full tracking-wider mb-6">
            Start your journey
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium text-white leading-tight mb-8 md:mb-10">
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
              <button className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-all cursor-pointer">
                <span className="border-b-2 border-white pb-0.5">
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