import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"
import PerksSection from "@/components/home/PerksSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
// import CertificatesSection from "@/components/home/CertificatesSection"
// import FAQSection from "@/components/shared/FAQSection"

export const metadata: Metadata = {
  title: "Skymarex",
  description: "Welcome to Skymarex homepage",
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="bg-foreground">
        <AboutSection />
        <ServicesSection />
      </div>
      <PerksSection />
      <div className="bg-foreground">
        {/* 
          <CertificatesSection />
         */}
        <TestimonialsSection />
        {/* 
          <FAQSection
            badge="Need help?"
            heading="Frequently asked questions"
          /> 
        */}
      </div>
    </div>
  )
}