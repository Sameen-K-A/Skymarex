"use client"

import { Plus } from "lucide-react"
import { faqs } from "@/constants/faqs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations"

interface FAQSectionProps {
  badge: string
  heading: string
}

export default function FAQSection({ badge, heading }: FAQSectionProps) {
  return (
    <section className="py-12 pb-24 px-4 sm:px-8 lg:px-16 bg-foreground">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer className="text-center mb-15" staggerDelay={0.15}>
          <StaggerItem>
            <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/20 text-background rounded-full mb-4">
              {badge}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl md:text-4xl lg:text-[2.40rem] font-medium leading-tight text-background">
              {heading}
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.id} delay={0.1 * index}>
              <AccordionItem
                value={`faq-${faq.id}`}
                className="border-none"
              >
                <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 bg-muted-foreground/10 rounded-xl px-6 py-4 text-left flex items-center">
                      <span className="md:text-xl font-medium text-background">{faq.question}</span>
                    </div>
                    <span className="aspect-square h-13 w-13 md:h-15 md:w-15 flex items-center justify-center shrink-0 bg-muted-foreground/10 rounded-full px-4">
                      <Plus className="w-5 h-5 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45 text-background" />
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted pt-2 pb-2 px-6 md:text-[1.05rem] leading-tight max-w-3xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  )
}