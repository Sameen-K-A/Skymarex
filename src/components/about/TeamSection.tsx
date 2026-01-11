"use client"

import Image from "next/image"
import { TEAM_MEMBERS } from "@/constants/gallery"
import { Reveal } from "@/components/ui/animations"

export default function TeamSection() {
  return (
    <section className="py-16  px-4 sm:px-8 bg-foreground">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10 md:mb-14 text-background">
          Our hardworking movers
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <Reveal key={member.id} delay={0.1 * index}>
            <div className="flex flex-col">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted-foreground/20 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg font-medium text-background">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}