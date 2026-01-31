"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"
import { ABOUT_GALLERY_IMAGES } from "@/constants/gallery"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const ImageCard = ({ img, index }: { img: string; index: number }) => {
  const isOdd = index % 2 === 1

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted-foreground/20 h-80 md:h-105",
        isOdd ? "aspect-square" : "aspect-4/5"
      )}
    >
      <Image
        src={img}
        alt={`Gallery image ${index}`}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover"
        placeholder="blur"
        quality={100}
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+"
        priority={index <= 4}
        loading={index <= 4 ? "eager" : "lazy"}
      />
    </figure>
  )
}

function ImageMarquee() {
  return (
    <Marquee className="[--duration:30s] h-full [&>div]:h-full [&>div]:items-stretch">
      {ABOUT_GALLERY_IMAGES.map((item, index) => (
        <ImageCard key={item.id} img={item.img} index={index + 1} />
      ))}
    </Marquee>
  )
}

export default function HeroSection() {
  return (
    <section className="max-w-[1550px] mx-auto min-h-[min(100dvh,900px)] flex flex-col pt-20 pb-10 mt-10">
      <StaggerContainer className="text-left px-4 sm:px-8 mb-10" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-foreground text-background rounded-full tracking-wider mb-6">
            Who We Are
          </span>
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-3xl sm:text-4xl md:text-[2.9rem] font-medium max-w-md md:max-w-2xl leading-tight mb-6">
            Where emotion meets efficiency in every move
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm sm:text-base mb-4 opacity-80 leading-relaxed max-w-6xl">
            At SKYMAREX, we are driven by expertise, compliance, and a strong commitment to safety. Our managing partners are IATA & DGR Dangerous Goods Certified Professional Trainers, bringing decades of experience and ensuring professionals remain in line with the latest regulations and safety standards throughout our organization.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm sm:text-base mb-4 opacity-80 leading-relaxed max-w-6xl">
            100% of our staff are Dangerous Goods qualified, combining operational excellence with training expertise to make SKYMAREX not just a logistics provider, but a trusted partner for safe and compliant Dangerous Goods solutions.
          </p>
        </StaggerItem>
      </StaggerContainer>

      <Reveal className="flex-1 w-full flex items-center">
        <div className="w-full h-full">
          <ImageMarquee />
        </div>
      </Reveal>
    </section >
  )
}