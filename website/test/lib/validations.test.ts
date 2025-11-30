import { describe, it, expect } from 'vitest'
import {
  wholesaleApplicationSchema,
  contactFormSchema,
  vetSampleRequestSchema,
} from '@/lib/validations'

describe('wholesaleApplicationSchema', () => {
  it('should validate correct wholesale application', () => {
    const validData = {
      businessName: 'Acme Pet Store',
      taxId: '12-3456789',
      businessType: 'retailer',
      contactName: 'John Doe',
      email: 'john@acmepet.com',
      phone: '555-123-4567',
    }

    const result = wholesaleApplicationSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid EIN format', () => {
    const invalidData = {
      businessName: 'Acme Pet Store',
      taxId: '123456789', // Missing dash
      businessType: 'retailer',
      contactName: 'John Doe',
      email: 'john@acmepet.com',
      phone: '555-123-4567',
    }

    const result = wholesaleApplicationSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should reject invalid email', () => {
    const invalidData = {
      businessName: 'Acme Pet Store',
      taxId: '12-3456789',
      businessType: 'retailer',
      contactName: 'John Doe',
      email: 'not-an-email',
      phone: '555-123-4567',
    }

    const result = wholesaleApplicationSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should require minimum business name length', () => {
    const invalidData = {
      businessName: 'A', // Too short
      taxId: '12-3456789',
      businessType: 'retailer',
      contactName: 'John Doe',
      email: 'john@acmepet.com',
      phone: '555-123-4567',
    }

    const result = wholesaleApplicationSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})

describe('contactFormSchema', () => {
  it('should validate correct contact form', () => {
    const validData = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      subject: 'Product Question',
      message: 'I have a question about your CBD oil for cats.',
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should require all fields', () => {
    const invalidData = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      // Missing subject and message
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should require minimum message length', () => {
    const invalidData = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      subject: 'Test',
      message: 'Hi', // Too short
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})

describe('vetSampleRequestSchema', () => {
  it('should validate correct vet sample request', () => {
    const validData = {
      name: 'Dr. Sarah Smith',
      email: 'dr.smith@vetclinic.com',
      clinicName: 'Happy Pets Veterinary Clinic',
      licenseNumber: 'TX-VET-12345',
      licenseState: 'TX',
      phone: '555-987-6543',
      shippingAddress: '123 Main St, Austin, TX 78701',
    }

    const result = vetSampleRequestSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should require all fields', () => {
    const invalidData = {
      name: 'Dr. Sarah Smith',
      email: 'dr.smith@vetclinic.com',
      // Missing other required fields
    }

    const result = vetSampleRequestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should validate license state as 2-letter code', () => {
    const invalidData = {
      name: 'Dr. Sarah Smith',
      email: 'dr.smith@vetclinic.com',
      clinicName: 'Happy Pets Veterinary Clinic',
      licenseNumber: 'TX-VET-12345',
      licenseState: 'Texas', // Should be 'TX'
      phone: '555-987-6543',
      shippingAddress: '123 Main St, Austin, TX 78701',
    }

    const result = vetSampleRequestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
