"use client"

import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/ui/animations"
import { ShinyButton } from "../ui/shiny-button"

export default function GetInTouchSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const email = process.env.NEXT_PUBLIC_EMAIL || ""

  return (
    <section className="min-h-dvh xl:h-[min(100dvh,900px)] bg-[radial-gradient(ellipse_at_center,oklch(73.691%_0.15828_235.877/0.2),var(--background)_60%)] dark:bg-[radial-gradient(ellipse_at_center,oklch(73.691%_0.15828_235.877/0.2),var(--background)_90%)] overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4">

        <StaggerContainer className="max-w-2xl mx-auto text-center" staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="text-3xl sm:text-[2.42rem] font-medium tracking-tighter leading-tight mb-6">
              Get in touch with us
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-8">
              Our friendly team is here to help. Reach out by phone, email, or through our contact form,
              we&apos;ll get back to you promptly and make your moving experience smooth from start to finish.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg mb-8">
              <span className="font-medium">{email}</span>
              <span className="mx-4 text-foreground/50">|</span>
              <span className="font-medium">{phoneNumber}</span>
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-start justify-center gap-6">
              {/* Phone Call Button */}
              <div className="flex flex-col items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full border-foreground/30 bg-transparent hover:bg-background/10"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <FaPhoneAlt className="h-5 w-5" />
                  </a>
                </Button>
                <span className="text-sm">Call</span>
              </div>

              {/* WhatsApp Button */}
              <div className="flex flex-col items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full border-foreground/30 bg-transparent hover:bg-background/10"
                  asChild
                >
                  <a
                    href={`https://wa.me/${phoneNumber?.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </Button>
                <span className="text-sm">WhatsApp</span>
              </div>

              {/* Email Button */}
              <div className="flex flex-col items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full border-foreground/30 bg-transparent hover:bg-background/10"
                  asChild
                >
                  <a href={`mailto:${email}`}>
                    <FaEnvelope className="h-5 w-5" />
                  </a>
                </Button>
                <span className="text-sm">Mail</span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8">
              <ShinyButton
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("calendly");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.replaceState(null, "", window.location.pathname);
                  } else {
                    window.location.href = "/contact#calendly";
                  }
                }}
                className="group px-6 py-[0.900rem] text-base w-fit font-semibold"
              >
                Talk to a DG Expert
              </ShinyButton>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}