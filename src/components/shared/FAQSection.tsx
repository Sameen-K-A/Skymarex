"use client"

import { Plus, X } from "lucide-react"
import { faqs } from "@/constants/faqs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQSectionProps {
  badge: string
  heading: string
}

export default function FAQSection({ badge, heading }: FAQSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-foreground">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium bg-muted-foreground/20 text-background rounded-full mb-4">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-background">
            {heading}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="border-none"
            >
              <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden cursor-pointer">
                <div className="flex items-stretch gap-3 w-full">
                  <div className="flex-1 bg-muted-foreground/20 rounded-xl px-6 py-4 text-left flex items-center">
                    <span className="text-base font-medium text-background">{faq.question}</span>
                  </div>
                  <span className="aspect-square h-auto w-15 flex items-center justify-center shrink-0 bg-muted-foreground/20 rounded-full px-4">
                    <Plus className="w-5 h-5 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45 text-background" />
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-2 pr-16">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}