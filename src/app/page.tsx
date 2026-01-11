import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Skymarex homepage",
}

export default function HomePage() {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroSection />
      <AboutSection />
    </div>
  )
}