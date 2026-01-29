"use client"

import { useRef } from "react"
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import WaveText from "../ui/WaveText"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"
import { contactFormSchema, ContactFormData } from "@/schema/validations"

const MAP_URL = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL!
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export default function ContactFormSection() {
  const { resolvedTheme } = useTheme()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      recaptchaToken: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Verify token with backend
      const verifyResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: data.recaptchaToken }),
      })

      const verifyResult = await verifyResponse.json()
      if (!verifyResult.success) {
        toast.error("reCAPTCHA verification failed", {
          description: "Please try again.",
        })
        recaptchaRef.current?.reset()
        setValue("recaptchaToken", "", { shouldValidate: true })
        return
      }

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || "No message provided",
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      })

      reset()
      recaptchaRef.current?.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Something went wrong", {
        description: "Please try again later.",
      })
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="px-4 sm:px-8 max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            <StaggerItem className="mb-15">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-foreground mb-4">
                  Contact With Us
                </h1>
                <p className="text-muted-foreground font-medium max-w-sm leading-tight tracking-tighter">
                  Tell us about your idea, Questions, or challenge. We'd love to hear from you.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:px-10">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className="bg-muted dark:bg-muted-foreground/40 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email address<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className="bg-muted dark:bg-muted-foreground/40 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone number<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className="bg-muted dark:bg-muted-foreground/40 border-none text-foreground placeholder:text-muted-foreground h-12"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here"
                    rows={4}
                    {...register("message")}
                    className="bg-muted dark:bg-muted-foreground/40 border-none text-foreground placeholder:text-muted-foreground resize-none h-30"
                  />
                </div>

                {RECAPTCHA_SITE_KEY && (
                  <div className="space-y-2">
                    <div className="w-[302px]">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setValue("recaptchaToken", token || "", { shouldValidate: true })}
                        onExpired={() => setValue("recaptchaToken", "", { shouldValidate: true })}
                        theme={"light"}
                      />
                    </div>
                    {errors.recaptchaToken && (
                      <p className="text-sm text-destructive">{errors.recaptchaToken.message}</p>
                    )}
                  </div>
                )}

                <Button
                  type="submit"
                  size={"lg"}
                  disabled={isSubmitting}
                  className="group w-full bg-primary font-semibold h-12 text-white disabled:opacity-70"
                >
                  <WaveText>{isSubmitting ? "Sending..." : "Submit"}</WaveText>
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