import { z } from "zod"

// ==================== Contact Form ====================
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Please enter a valid phone number"),
  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
  recaptchaToken: z
    .string()
    .min(1, "Please complete the reCAPTCHA verification"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// ==================== Quote Form ====================
export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Please enter a valid phone number"),
  email: z
    .email("Please enter a valid email address"),
  destination: z
    .string()
    .min(2, "Destination must be at least 2 characters")
    .max(100, "Destination must be less than 100 characters"),
  source: z
    .string()
    .min(2, "Source must be at least 2 characters")
    .max(100, "Source must be less than 100 characters"),
  cargoType: z
    .string()
    .min(1, "Please select a cargo type"),
  commodity: z
    .string()
    .min(2, "Commodity must be at least 2 characters")
    .max(100, "Commodity must be less than 100 characters"),
  volume: z
    .string()
    .min(1, "Potential volume is required")
    .max(50, "Volume must be less than 50 characters"),
  comments: z
    .string()
    .max(2000, "Comments must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
  recaptchaToken: z
    .string()
    .min(1, "Please complete the reCAPTCHA verification"),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>