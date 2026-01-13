"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import WaveText from "@/components/ui/WaveText"
import { quoteFormSchema, QuoteFormData } from "@/schema/validations"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_QUOTE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

const cargoTypes = [
  { value: "sea-cargo", label: "Sea Cargo" },
  { value: "air-cargo", label: "Air Cargo" },
  { value: "20ft-container", label: "20ft Container" },
  { value: "40ft-container", label: "40ft Container" },
  { value: "domestic", label: "Domestic" },
  { value: "logistics", label: "Logistics" },
]

interface QuoteDialogProps {
  children: React.ReactNode
}

export default function QuoteDialog({ children }: QuoteDialogProps) {
  const [open, setOpen] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { register, handleSubmit, reset, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      cargoType: "logistics",
    },
  })

  const selectedCargoType = watch("cargoType")

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Verify reCAPTCHA
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA verification")
        return
      }

      // Verify token with backend
      const verifyResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: recaptchaToken }),
      })

      const verifyResult = await verifyResponse.json()
      if (!verifyResult.success) {
        toast.error("reCAPTCHA verification failed", {
          description: "Please try again.",
        })
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
        return
      }

      // Get cargo type label
      const cargoTypeLabel = cargoTypes.find(c => c.value === data.cargoType)?.label || data.cargoType

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_QUOTE_TEMPLATE_ID,
        {
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          source: data.source,
          destination: data.destination,
          cargoType: cargoTypeLabel,
          commodity: data.commodity,
          volume: data.volume,
          comments: data.comments || "No additional comments",
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success("Quote request submitted!", {
        description: "We'll get back to you with a quotation soon.",
      })

      reset()
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
      setOpen(false)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Something went wrong", {
        description: "Please try again later.",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Need A Quotation
          </DialogTitle>
          <DialogDescription className="text-xs">
            Dear Customers, If you wish to recieve a quotation, we kindly ask you to fill in below form. Once the form has been duly filled and submitted, the rates will be quoted to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name<span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-foreground">
                  Phone Number<span className="text-primary">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phoneNumber")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-destructive">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address<span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-foreground">
                  Destination Point<span className="text-primary">*</span>
                </Label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="New York, USA"
                  {...register("destination")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.destination && (
                  <p className="text-sm text-destructive">{errors.destination.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="source" className="text-foreground">
                Source Point<span className="text-primary">*</span>
              </Label>
              <Input
                id="source"
                type="text"
                placeholder="Los Angeles, USA"
                {...register("source")}
                className="bg-muted/50 border border-border h-11"
              />
              {errors.source && (
                <p className="text-sm text-destructive">{errors.source.message}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">
                Cargo Types<span className="text-primary">*</span>
              </Label>
              <RadioGroup
                value={selectedCargoType}
                onValueChange={(value) => setValue("cargoType", value, { shouldValidate: true })}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {cargoTypes.map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={type.value}
                      id={type.value}
                      className="border-muted-foreground text-primary"
                    />
                    <Label
                      htmlFor={type.value}
                      className="text-sm font-normal text-foreground cursor-pointer"
                    >
                      {type.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.cargoType && (
                <p className="text-sm text-destructive">{errors.cargoType.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="commodity" className="text-foreground">
                  Commodity<span className="text-primary">*</span>
                </Label>
                <Input
                  id="commodity"
                  type="text"
                  placeholder="Electronics, Furniture, etc."
                  {...register("commodity")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.commodity && (
                  <p className="text-sm text-destructive">{errors.commodity.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume" className="text-foreground">
                  Potential Volume<span className="text-primary">*</span>
                </Label>
                <Input
                  id="volume"
                  type="text"
                  placeholder="500 kg, 10 CBM, etc."
                  {...register("volume")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.volume && (
                  <p className="text-sm text-destructive">{errors.volume.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments" className="text-foreground">
                Comments
              </Label>
              <Textarea
                id="comments"
                placeholder="Any additional details or requirements..."
                {...register("comments")}
                className="bg-muted/50 border border-border resize-none h-40"
              />
              {errors.comments && (
                <p className="text-sm text-destructive">{errors.comments.message}</p>
              )}
            </div>

            {RECAPTCHA_SITE_KEY && (
              <div className="overflow-hidden w-[302px]" style={{ clipPath: 'inset(0 0.5px 2px 0)' }}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              </div>
            )}
          </div>

          <DialogFooter className="px-6 py-4 border-t shrink-0">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !recaptchaToken}
              className="group w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 disabled:opacity-70"
            >
              <WaveText>{isSubmitting ? "Submitting..." : "Submit"}</WaveText>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}