"use client"

import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { certificates, ICertificate } from "@/constants/certificates"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const CertificateCard = ({ certificate }: { certificate: ICertificate }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-72 md:w-96 shrink-0 bg-muted-foreground/10 rounded-3xl p-4 pb-6 cursor-pointer">
          <div className="relative aspect-5/3 rounded-2xl overflow-hidden bg-muted-foreground/20 mb-5">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-background">{certificate.title}</h3>
          <p className="text-background leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="p-2 bg-background border-none">
        <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function CertificatesSection() {
  return (
    <section className="py-16 bg-foreground overflow-hidden">
      <StaggerContainer className="text-center mb-12 px-4 sm:px-8" staggerDelay={0.15}>
        <StaggerItem>
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/20 text-background rounded-full mb-4">
            Certificates
          </span>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-xl mx-auto text-background">
            Trusted by families and businesses alike
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