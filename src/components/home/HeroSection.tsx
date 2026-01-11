import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { ShinyButton } from "@/components/ui/shiny-button"
import WaveText from "@/components/ui/WaveText"
import { HOME_GALLERY_IMAGES } from "@/constants/gallery"

interface ImageCardProps {
  img: string
  index: number
  variant?: "vertical" | "horizontal"
}

const ImageCard = ({ img, index, variant = "horizontal" }: ImageCardProps) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted shrink-0",
        variant === "vertical"
          ? "aspect-4/5 min-h-96"
          : "aspect-4/5 min-h-64 md:min-h-80"
      )}
    >
      <Image
        src={img}
        alt={`Gallery image ${index}`}
        fill
        sizes={variant === "vertical" ? "200px" : "250px"}
        className="object-cover"
        priority={variant === "vertical" || index <= 4}
        loading={variant === "vertical" || index <= 4 ? "eager" : "lazy"}
      />
    </figure>
  )
}

interface ImageMarqueeProps {
  vertical?: boolean
}

function ImageMarquee({ vertical = false }: ImageMarqueeProps) {
  const firstHalf = HOME_GALLERY_IMAGES.slice(0, Math.ceil(HOME_GALLERY_IMAGES.length / 2))
  const secondHalf = HOME_GALLERY_IMAGES.slice(Math.ceil(HOME_GALLERY_IMAGES.length / 2))

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        vertical
          ? "h-full w-full flex-row items-center justify-end mr-2"
          : "flex-col"
      )}
    >
      <Marquee vertical={vertical} className="[--duration:40s]">
        {firstHalf.map((item, index) => (
          <ImageCard
            key={item.id}
            img={item.img}
            index={index + 1}
            variant={vertical ? "vertical" : "horizontal"}
          />
        ))}
      </Marquee>
      <Marquee reverse vertical={vertical} className="[--duration:40s]">
        {secondHalf.map((item, index) => (
          <ImageCard
            key={item.id}
            img={item.img}
            index={index + 1}
            variant={vertical ? "vertical" : "horizontal"}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-dvh xl:h-[min(100dvh,900px)] bg-[radial-gradient(ellipse_at_center,oklch(73.691%_0.15828_235.877/0.2),var(--background)_60%)] dark:bg-[radial-gradient(ellipse_at_center,oklch(73.691%_0.15828_235.877/0.2),var(--background)_90%)] overflow-hidden">

      <div className="container mx-auto h-full pt-32 pb-16 xl:py-0">
        <div className="flex flex-col xl:flex-row h-full gap-8 xl:gap-12">

          <div className="flex flex-col justify-center xl:w-3/5 px-4 sm:px-8 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6">
              You Plan the Shipment. <br />We Engineer the Compliance.
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg">
              Experience a hassle-free, seamless relocation with efficient, professional moving services tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-left gap-4">
              <ShinyButton className="group px-6 py-3 w-fit">
                Talk to a DG Expert
              </ShinyButton>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-2 px-5 py-3 text-sm font-medium text-background bg-foreground rounded-lg border border-background hover:bg-foreground/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <WaveText>Contact us</WaveText>
              </Link>
            </div>
          </div>

          {/* Horizontal Marquee - Below XL */}
          <div className="flex xl:hidden flex-col flex-1">
            <ImageMarquee />
          </div>

          {/* Vertical Marquee - XL+ */}
          <div className="hidden xl:flex xl:w-3/5 h-full">
            <ImageMarquee vertical />
          </div>
        </div>
      </div>
    </section>
  )
}