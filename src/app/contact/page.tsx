import type { Metadata } from "next"
import ContactFormSection from "@/components/contact/ContactFormSection"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Skymarex",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto overflow-hidden pt-20">
      <ContactFormSection />
    </div>
  )
}