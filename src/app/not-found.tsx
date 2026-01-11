import Link from "next/link"
import { Button } from "@/components/ui/button"
import WaveText from "@/components/ui/WaveText"

export default function NotFound() {
  return (
    <div className="h-dvh container mx-auto flex flex-col items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="text-muted-foreground">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="bg-primary text-white font-semibold group">
              <WaveText>Back to Home</WaveText>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}