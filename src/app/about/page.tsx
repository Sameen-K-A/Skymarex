import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Skymarex",
}

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh)]">
      <p className="text-2xl font-medium text-muted-foreground">About Page</p>
    </div>
  )
}