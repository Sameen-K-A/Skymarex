import type { Metadata } from "next"
import ServicesGridSection from "@/components/services/ServicesGridSection"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our services at Skymarex",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto overflow-hidden pt-15">
      <ServicesGridSection />
    </div>
  )
}