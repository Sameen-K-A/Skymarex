import HeroSection from "@/components/about/HeroSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Skymarex",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroSection />
    </div>
  )
}