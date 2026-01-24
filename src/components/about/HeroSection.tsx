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
    <section className="container mx-auto min-h-[min(100dvh,900px)] flex flex-col pt-20 pb-10 mt-10">
      <StaggerContainer className="text-left px-4 sm:px-8 mb-10" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-foreground text-background rounded-full tracking-wider mb-6">
            Who We Are
          </span>
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-4xl md:text-5xl font-medium max-w-md md:max-w-2xl leading-tight mb-6">
            Where emotion meets efficiency in every move
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm sm:text-base mb-4 opacity-80 leading-loose max-w-6xl">
            At SKYMAREX, we are driven by expertise, compliance, and a strong commitment to safety.
            Our management partners are IATA Dangerous Goods Certified Professional Trainers,
            bringing decades of world-class experience to the organization.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm sm:text-base mb-4 opacity-80 leading-loose max-w-6xl">
            This unique knowledge empowers us to go beyond standard logistics operations, training
            and guiding professionals in line with latest international regulations and safety standards.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm sm:text-base mb-4 opacity-80 leading-loose max-w-6xl">
            100% of our staff are Dangerous Goods qualified, combining operational excellence with
            training expertise to make SKYMAREX not just a logistics provider, but a trusted partner for
            safe and compliant Dangerous Goods solutions.
          </p>
        </StaggerItem>
      </StaggerContainer>

      <Reveal className="flex-1 w-full flex items-center">
        <div className="w-full h-full">
          <ImageMarquee />
        </div>
      </Reveal>
    </section>
  )
}