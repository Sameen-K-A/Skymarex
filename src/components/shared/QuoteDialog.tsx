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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import WaveText from "@/components/ui/WaveText"
import { quoteFormSchema, QuoteFormData } from "@/schema/validations"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_QUOTE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

const cargoTypes = [
  { value: "air-freight", label: "Air Freight" },
  { value: "sea-freight-fcl", label: "FCL (Full Container Load)", parent: "Sea Freight" },
  { value: "sea-freight-lcl", label: "LCL (Less than Container Load)", parent: "Sea Freight" },
  { value: "land-transport", label: "Land Transport (GCC / UAE)" }
]

interface QuoteDialogProps {
  children: React.ReactNode
}

export default function QuoteDialog({ children }: QuoteDialogProps) {
  const [open, setOpen] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const seaFreightTriggerRef = useRef<HTMLButtonElement>(null)

  const { register, handleSubmit, reset, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      cargoType: "air-freight",
      recaptchaToken: "",
    },
  })

  const selectedCargoType = watch("cargoType")
  const prevCargoTypeRef = useRef(selectedCargoType)
  const isFCL = selectedCargoType === "sea-freight-fcl"
  const wasFCL = prevCargoTypeRef.current === "sea-freight-fcl"

  // Reset volume only when switching between FCL and other cargo types
  if (wasFCL !== isFCL) {
    prevCargoTypeRef.current = selectedCargoType
    queueMicrotask(() => {
      setValue("volume", "", { shouldValidate: false })
    })
  }

  const onSubmit = async (data: QuoteFormData) => {
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

      // Get cargo type label
      const cargoTypeData = cargoTypes.find(c => c.value === data.cargoType)
      const cargoTypeLabel = cargoTypeData?.parent
        ? `${cargoTypeData.parent} (${cargoTypeData.label.split(' ')[0]})`
        : cargoTypeData?.label || data.cargoType

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_QUOTE_TEMPLATE_ID,
        {
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          companyName: data.companyName || "Not provided",
          source: data.source,
          destination: data.destination,
          cargoType: cargoTypeLabel,
          commodity: data.commodity,
          volume: data.volume,
          dimensions: data.dimensions || "Not provided",
          comments: data.comments || "No additional comments",
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success("Quote request submitted!", {
        description: "We'll get back to you with a quotation soon.",
      })

      reset()
      recaptchaRef.current?.reset()
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
      <DialogTrigger asChild className="border-none">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Need A Quotation
          </DialogTitle>
          <DialogDescription className="text-xs">
            Dear Customers, If you wish to recieve a quotation, we kindly ask you to fill in below form. Once the form has been fully filled and submitted, the rates will be quoted to you.
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
                  placeholder="Your full name"
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
                  placeholder="+971 5X XXX XXXX"
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
                  placeholder="yourname@email.com"
                  {...register("email")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your company name"
                  {...register("companyName")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive">{errors.companyName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="source" className="text-foreground">
                  Source Point<span className="text-primary">*</span>
                </Label>
                <Input
                  id="source"
                  type="text"
                  {...register("source")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.source && (
                  <p className="text-sm text-destructive">{errors.source.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-foreground">
                  Destination Point<span className="text-primary">*</span>
                </Label>
                <Input
                  id="destination"
                  type="text"
                  {...register("destination")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.destination && (
                  <p className="text-sm text-destructive">{errors.destination.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">
                Cargo Types<span className="text-primary">*</span>
              </Label>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Air Freight - Radio */}
                <div
                  className="flex items-center gap-2 cursor-pointer transition-colors"
                  onClick={() => setValue("cargoType", "air-freight", { shouldValidate: true })}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedCargoType === "air-freight" ? "border-primary" : "border-muted-foreground"}`}>
                    {selectedCargoType === "air-freight" && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="text-sm font-normal text-foreground">Air Freight</span>
                </div>

                {/* Sea Freight - Select with Radio */}
                <div
                  className="flex items-center gap-2 cursor-pointer transition-colors"
                  onClick={() => seaFreightTriggerRef.current?.click()}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedCargoType?.startsWith("sea-freight") ? "border-primary" : "border-muted-foreground"}`}>
                    {selectedCargoType?.startsWith("sea-freight") && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <Select
                    key={selectedCargoType?.startsWith("sea-freight") ? "sea" : "other"}
                    value={selectedCargoType?.startsWith("sea-freight") ? selectedCargoType : undefined}
                    onValueChange={(value) => setValue("cargoType", value, { shouldValidate: true })}
                  >
                    <SelectTrigger
                      ref={seaFreightTriggerRef}
                      className="w-auto border-0 bg-background p-0 h-auto focus-visible:ring-0 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                      showChevron={false}
                    >
                      <SelectValue placeholder="Sea Freight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sea-freight-fcl">Sea Freight - FCL</SelectItem>
                      <SelectItem value="sea-freight-lcl">Sea Freight - LCL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Land Transport - Radio */}
                <div
                  className="flex items-center gap-2 cursor-pointer transition-colors"
                  onClick={() => setValue("cargoType", "land-transport", { shouldValidate: true })}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedCargoType === "land-transport" ? "border-primary" : "border-muted-foreground"}`}>
                    {selectedCargoType === "land-transport" && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="text-sm font-normal text-foreground">Land Transport</span>
                </div>
              </div>
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
                  placeholder="Electronics, Flammable Materials, Machinery, etc."
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
                {selectedCargoType === "sea-freight-fcl" ? (
                  <Select
                    value={watch("volume")}
                    onValueChange={(value) => setValue("volume", value, { shouldValidate: true })}
                  >
                    <SelectTrigger className="w-full data-placeholder:text-muted-foreground border-border cursor-pointer bg-muted/50 dark:bg-muted/40 shadow-xs transition-[color,box-shadow]">
                      <SelectValue placeholder="Select container size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20ft">20ft Container</SelectItem>
                      <SelectItem value="40ft">40ft Container</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id="volume"
                    type="text"
                    placeholder="500 kg / 10 CBM / 1 x 20ft container"
                    {...register("volume")}
                    className="bg-muted/50 border border-border h-11"
                  />
                )}
                {errors.volume && (
                  <p className="text-sm text-destructive">{errors.volume.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dimensions" className="text-foreground">
                  Dimensions
                </Label>
                <Input
                  id="dimensions"
                  type="text"
                  placeholder="Length x Width x Height (cm)"
                  {...register("dimensions")}
                  className="bg-muted/50 border border-border h-11"
                />
                {errors.dimensions && (
                  <p className="text-sm text-destructive">{errors.dimensions.message}</p>
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
              <div className="space-y-2 flex flex-col items-center justify-center text-center">
                <div className="w-[302px]">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setValue("recaptchaToken", token || "", { shouldValidate: true })}
                    onExpired={() => setValue("recaptchaToken", "", { shouldValidate: true })}
                  />
                </div>
                {errors.recaptchaToken && (
                  <p className="text-sm text-destructive">{errors.recaptchaToken.message}</p>
                )}
              </div>
            )}
          </div>

          <DialogFooter className="px-6 py-4 border-t shrink-0">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
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