"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { certificates, ICertificate } from "@/constants/certificates"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const CertificateCard = ({ certificate }: { certificate: ICertificate }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-72 md:w-96 shrink-0 bg-muted-foreground/10 rounded-3xl p-5 pb-6 cursor-pointer">
          <div className="relative aspect-5/3 rounded-2xl overflow-hidden bg-muted-foreground/20 mb-5">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-medium mb-2 text-background">{certificate.title}</h3>
          <p className="text-background leading-tight text-sm md:text-base">
            {certificate.description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="p-2 bg-foreground border-none rounded-2xl sm:max-w-2xl h-fit gap-0" showCloseButton={false}>
        <VisuallyHidden>
          <DialogTitle>{certificate.title}</DialogTitle>
          <DialogDescription>Certificate image preview</DialogDescription>
        </VisuallyHidden>

        <div className="relative">
          <DialogClose className="absolute cursor-pointer top-1 right-1 z-50 w-10 h-10 rounded-full bg-white hover:bg-white/90 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-0 flex items-center justify-center transition-colors shadow-lg">
            <X className="w-5 h-5 text-black" />
          </DialogClose>

          <Image
            src={certificate.image}
            alt={certificate.title}
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain rounded-xl w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function CertificatesSection() {
  return (
    <section className="py-12 overflow-hidden">
      <StaggerContainer className="text-center mb-6 md:mb-12 px-4 sm:px-8" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/10 text-background rounded-full mb-6">
            Compliance You Can Count On
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-[1.2rem] md:text-3xl lg:text-[2.40rem] font-medium leading-tight text-background max-w-3xl mx-auto">
            Certified and trained, our team ensures safe, compliant, and reliable shipments every time.
          </h2>
        </StaggerItem>
      </StaggerContainer>

      <Reveal>
        <Marquee className="[--duration:40s]">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  )
}