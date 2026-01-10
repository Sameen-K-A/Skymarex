import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our services at Skymarex",
}

export default function ServicesPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh)]">
      <p className="text-2xl font-medium text-muted-foreground">
        Services Page
      </p>
    </div>
  )
}