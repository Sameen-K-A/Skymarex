"use client"

import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { ShinyButton } from "@/components/ui/shiny-button"
import WaveText from "@/components/ui/WaveText"
import { HOME_GALLERY_IMAGES } from "@/constants/gallery"
import { StaggerContainer, StaggerItem } from "@/components/ui/animations"

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
          ? "aspect-4/5 min-h-105"
          : "aspect-4/5 min-h-50 md:min-h-80"
      )}
    >
      <Image
        src={img}
        alt={`Gallery image ${index}`}
        fill
        sizes={variant === "vertical" ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, 500px"}
        quality={100}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
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

          <StaggerContainer className="flex flex-col justify-center xl:w-3/5 px-4 sm:px-8 md:px-12" staggerDelay={0.15}>
            <StaggerItem>
              <h1 className="text-3xl sm:text-[2.42rem] font-medium tracking-tighter leading-tight mb-3">
                You Plan the Shipment. <br />We Engineer the Compliance.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-sm font-medium sm:text-base mb-6 max-w-lg opacity-90 tracking-tighter">
                Experience hassle-free logistics with expertly managed compliance, efficient coordination,
                and seamless logistics solutions with Dangerous Goods handling, tailored to your shipment.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-left gap-4">
                <Link href="/contact#calendly">
                  <ShinyButton className="group px-6 py-[0.900rem] text-base w-fit font-semibold">
                    Talk to a DG Expert
                  </ShinyButton>
                </Link>

                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-1 px-6 py-2.5 text-sm font-semibold text-background bg-foreground rounded-lg border border-background hover:bg-foreground/90 transition-colors"
                >
                  <FaWhatsapp size={28} />
                  <WaveText>Contact us</WaveText>
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>

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