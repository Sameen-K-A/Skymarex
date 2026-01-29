import type { Metadata } from "next"
import ContactFormSection from "@/components/contact/ContactFormSection"
import GetInTouchSection from "@/components/contact/GetInTouchSection"
import CalendlySection from "@/components/contact/CalendlySection"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Skymarex",
}

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <GetInTouchSection />
      <CalendlySection />
      <ContactFormSection />
    </div>
  )
}