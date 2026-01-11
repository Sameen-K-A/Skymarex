import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"
import PerksSection from "@/components/home/PerksSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CertificatesSection from "@/components/home/CertificatesSection"
import FAQSection from "@/components/shared/FAQSection"

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
      <PerksSection />
      <TestimonialsSection />
      <CertificatesSection />
      <FAQSection
        badge="Need help?"
        heading="Frequently asked questions"
      />
    </div>
  )
}