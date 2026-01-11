import type { Metadata } from "next"
import ServicesGridSection from "@/components/services/ServicesGridSection"
import FAQSection from "@/components/shared/FAQSection"
import CTASection from "@/components/services/CTASection"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our services at Skymarex",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto overflow-hidden pt-15">
      <ServicesGridSection />
      <FAQSection
        badge="Need help?"
        heading="Frequently asked questions"
      />
      <CTASection />
    </div>
  )
}