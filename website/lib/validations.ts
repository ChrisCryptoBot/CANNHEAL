import { z } from 'zod'

// Wholesale Application Schema
export const wholesaleApplicationSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  taxId: z
    .string()
    .regex(/^\d{2}-\d{7}$/, 'EIN must be in format XX-XXXXXXX')
    .or(z.string().regex(/^\d{9}$/, 'EIN must be 9 digits')),
  businessType: z.enum(['retailer', 'vet', 'distributor']),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
})

export type WholesaleApplicationInput = z.infer<typeof wholesaleApplicationSchema>

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

// Vet Sample Request Schema
export const vetSampleRequestSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  clinicName: z.string().min(2, 'Clinic name is required'),
  licenseNumber: z.string().min(5, 'License number is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  productsInterested: z.string().min(10, 'Please describe your interest'),
})

export type VetSampleRequestInput = z.infer<typeof vetSampleRequestSchema>

// Product Filter Schema
export const productFilterSchema = z.object({
  category: z.enum(['OIL', 'CHEW', 'TOPICAL', 'SPRAY', 'ALL']).optional(),
  petType: z.enum(['DOG', 'CAT', 'ALL']).optional(),
  sort: z.enum(['price-asc', 'price-desc', 'newest', 'bestselling']).optional(),
  search: z.string().optional(),
})

export type ProductFilterInput = z.infer<typeof productFilterSchema>

// COA Search Schema
export const coaSearchSchema = z.object({
  batchNumber: z.string().min(1, 'Batch number is required'),
})

export type COASearchInput = z.infer<typeof coaSearchSchema>

// Checkout Schema
export const checkoutSchema = z.object({
  // Shipping Address
  shippingAddress: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    address1: z.string().min(5, 'Address is required'),
    address2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().length(2, 'State must be 2 characters'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
    phone: z.string().min(10, 'Phone number is required'),
  }),
  // Billing Address (same as shipping or different)
  billingAddress: z
    .object({
      firstName: z.string().min(1, 'First name is required'),
      lastName: z.string().min(1, 'Last name is required'),
      address1: z.string().min(5, 'Address is required'),
      address2: z.string().optional(),
      city: z.string().min(2, 'City is required'),
      state: z.string().length(2, 'State must be 2 characters'),
      zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
    })
    .optional(),
  sameAsShipping: z.boolean().default(true),
  paymentMethod: z.enum(['aeropay', 'paymentcloud']),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
})

export type CheckoutInput = z.infer<typeof checkoutSchema>

// Add to Cart Schema
export const addToCartSchema = z.object({
  productId: z.string().cuid(),
  variantId: z.string().cuid().optional(),
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
})

export type AddToCartInput = z.infer<typeof addToCartSchema>
