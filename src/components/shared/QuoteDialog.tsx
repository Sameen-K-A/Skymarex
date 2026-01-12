"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import WaveText from "@/components/ui/WaveText"

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

        <form className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name<span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-foreground">
                  Phone Number<span className="text-primary">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address<span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-foreground">
                  Destination Point<span className="text-primary">*</span>
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="New York, USA"
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="source" className="text-foreground">
                Source Point<span className="text-primary">*</span>
              </Label>
              <Input
                id="source"
                name="source"
                type="text"
                placeholder="Los Angeles, USA"
                required
                className="bg-muted/50 border border-border h-11"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">
                Cargo Types<span className="text-primary">*</span>
              </Label>
              <RadioGroup defaultValue="logistics" className="flex flex-wrap gap-x-6 gap-y-3">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="commodity" className="text-foreground">
                  Commodity<span className="text-primary">*</span>
                </Label>
                <Input
                  id="commodity"
                  name="commodity"
                  type="text"
                  placeholder="Electronics, Furniture, etc."
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume" className="text-foreground">
                  Potential Volume<span className="text-primary">*</span>
                </Label>
                <Input
                  id="volume"
                  name="volume"
                  type="text"
                  placeholder="500 kg, 10 CBM, etc."
                  required
                  className="bg-muted/50 border border-border h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments" className="text-foreground">
                Comments
              </Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Any additional details or requirements..."
                className="bg-muted/50 border border-border resize-none h-40"
              />
            </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t shrink-0">
            <Button
              type="submit"
              size="lg"
              className="group w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12"
            >
              <WaveText>Submit</WaveText>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}