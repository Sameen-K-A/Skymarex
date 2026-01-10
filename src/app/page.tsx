import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Skymarex homepage",
}

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh)]">
      <p className="text-2xl font-medium text-muted-foreground">Home Page</p>
    </div>
  )
}