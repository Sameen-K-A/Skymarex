import Link from "next/link"
import { Package } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import WaveText from "../ui/WaveText"

const stats = [
  { value: 576, label: "Project Completed", icon: Package },
  { value: 687, label: "Happy Customers", icon: Package },
  { value: 890, label: "Delivered in Time", icon: Package },
]

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-foreground">
      <div className="flex flex-col items-start gap-1 mb-6">
        <div className="relative">
          <span className="block w-10 h-1 bg-primary rounded-full" />
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
        <span className="text-lg text-muted-foreground">About Us</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-background leading-tight mb-6">
        Logistics Without<br />the Headaches
      </h2>

      <p className="text-muted text-sm sm:text-xl mb-8">
        At <strong className="text-background">Time Global Shipping</strong>, we are more than just a logistics provider; we are a strategic partner dedicated to empowering businesses in an increasingly complex global market. With over <strong className="text-background">35 years of industry-leading experience</strong>, we specialize in crafting tailored logistics solutions that combine precision, reliability, and innovation.
      </p>

      <Link
        href="/about"
        className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors mb-12"
      >
        <WaveText>Learn more</WaveText>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-20 h-20 bg-muted-foreground/20 flex items-center justify-center shrink-0">
              <stat.icon className="w-10 h-10 text-background" strokeWidth={1} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl text-background font-bold">
                <NumberTicker value={stat.value} />
                <span>+</span>
              </div>
              <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}