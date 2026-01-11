"use client"

import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

const MAP_URL = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL!

export default function ContactFormSection() {
  const { resolvedTheme } = useTheme()

  return (
    <section className="py-16 bg-background">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            <StaggerItem>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                  Get in touch with us
                </h1>
                <p className="text-muted-foreground max-w-lg">
                  Our friendly team is here to help. Reach out by phone, email, or through our contact form, we&apos;ll get back to you promptly and make your moving experience smooth from start to finish.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-muted-foreground/20 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email address<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-muted-foreground/20 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-muted-foreground/20 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    rows={4}
                    className="bg-muted-foreground/20 border-none text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size={"lg"}
                  className="group w-full bg-primary font-semibold h-12 text-white"
                >
                  <WaveText>Submit</WaveText>
                </Button>
              </form>
            </StaggerItem>
          </StaggerContainer>

          <Reveal direction="right" delay={0.2}>
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden">
              <iframe
                src={MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: resolvedTheme === "dark" ? "invert(90%) hue-rotate(180deg)" : "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}