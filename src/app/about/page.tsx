import HeroSection from "@/components/about/HeroSection"
import WhoWeAreSection from "@/components/about/WhoWeAreSection"
import StatsSection from "@/components/about/StatsSection"
import TeamSection from "@/components/about/TeamSection"
import CTASection from "@/components/about/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Skymarex",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <TeamSection />
      <CTASection />
    </div>
  )
}