"use client"

import { InlineWidget } from "react-calendly"
import { useEffect } from "react"
import { Reveal } from "@/components/ui/animations"

export default function CalendlySection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY || ""

  useEffect(() => {
    if (window.location.hash === "#calendly") {
      const element = document.getElementById("calendly")
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
          window.history.replaceState(null, "", window.location.pathname)
        }, 100)
      }
    }
  }, [])

  return (
    <section id="calendly" className="pt-16 px-4 sm:px-8 bg-foreground">
      <div className="max-w-[1550px] mx-auto">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background mb-4">
              Talk with a DG Expert
            </h2>
            <p className="text-background/80 text-sm md:text-base max-w-xl mx-auto">
              Schedule a consultation with our IATA/DGR Dangerous Goods Certified professionals to ensure safe and compliant transport for your cargo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full py-10 md:py-0 h-[550px] md:h-[600px] xl:h-[700px]">
            <InlineWidget
              url={calendlyUrl}
              styles={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}