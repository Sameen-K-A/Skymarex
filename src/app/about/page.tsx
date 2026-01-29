import HeroSection from "@/components/about/HeroSection"
import YourTrustedPartnerSection from "@/components/about/YourTrustedPartnerSection"
import MissionVisionSection from "@/components/about/MissionVisionSection"
import TeamSection from "@/components/about/TeamSection"
import WhatMakesUsDifferentSection from "@/components/about/WhatMakesUsDifferentSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Skymarex",
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <YourTrustedPartnerSection />
      <MissionVisionSection />
      <WhatMakesUsDifferentSection />
      <TeamSection />
    </div>
  )
}