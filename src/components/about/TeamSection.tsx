"use client"

import Image from "next/image"
import { FaUserAlt } from "react-icons/fa"
import { TEAM_MEMBERS } from "@/constants/gallery"
import { Reveal } from "@/components/ui/animations"

export default function TeamSection() {
  return (
    <section className="py-8 px-4 sm:px-8 bg-foreground">
      <div className="max-w-[1550px] mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight mb-10 md:mb-14 text-background">
            Our hardworking movers
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TEAM_MEMBERS.map((member, index) => {
            const hasImage = member.img && member.img.trim() !== "";

            return (
              <Reveal key={member.id} delay={0.1 * index}>
                <div className="flex flex-col">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted-foreground/20 mb-4 flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={member.img!}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <FaUserAlt className="w-[40%] h-auto text-muted-foreground/40" />
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-background">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}