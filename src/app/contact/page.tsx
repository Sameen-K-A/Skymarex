import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Skymarex",
}

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh)]">
      <p className="text-2xl font-medium text-muted-foreground">Contact Page</p>
    </div>
  )
}