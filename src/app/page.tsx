import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Skymarex homepage",
}

export default function HomePage() {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  )
}