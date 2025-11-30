import { describe, it, expect } from 'vitest'
import {
  formatPrice,
  formatDate,
  calculateDosage,
  formatEIN,
  validateEIN,
  debounce,
} from '@/lib/utils'

describe('formatPrice', () => {
  it('should format cents to dollar string', () => {
    expect(formatPrice(2999)).toBe('$29.99')
    expect(formatPrice(100)).toBe('$1.00')
    expect(formatPrice(0)).toBe('$0.00')
  })

  it('should handle large amounts', () => {
    expect(formatPrice(123456)).toBe('$1,234.56')
  })
})

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15')
    const formatted = formatDate(date)
    expect(formatted).toMatch(/Jan(uary)? 15, 2024/)
  })
})

describe('calculateDosage', () => {
  it('should calculate correct CBD dosage for dogs', () => {
    // 50 lb dog = ~22.7 kg
    // 22.7 * 0.35 = ~7.95 mg
    const dosage = calculateDosage(50, 'DOG')
    expect(dosage).toBeCloseTo(7.95, 1)
  })

  it('should calculate correct CBD dosage for cats', () => {
    // 10 lb cat = ~4.5 kg
    // 4.5 * 0.35 = ~1.58 mg
    const dosage = calculateDosage(10, 'CAT')
    expect(dosage).toBeCloseTo(1.58, 1)
  })

  it('should return 0 for invalid weight', () => {
    expect(calculateDosage(0, 'DOG')).toBe(0)
    expect(calculateDosage(-5, 'CAT')).toBe(0)
  })
})

describe('formatEIN', () => {
  it('should format EIN correctly', () => {
    expect(formatEIN('123456789')).toBe('12-3456789')
    expect(formatEIN('12-3456789')).toBe('12-3456789')
  })

  it('should handle partial input', () => {
    expect(formatEIN('12')).toBe('12')
    expect(formatEIN('123')).toBe('12-3')
    expect(formatEIN('12345')).toBe('12-345')
  })

  it('should limit length', () => {
    expect(formatEIN('12345678901234')).toBe('12-3456789')
  })
})

describe('validateEIN', () => {
  it('should validate correct EIN format', () => {
    expect(validateEIN('12-3456789')).toBe(true)
    expect(validateEIN('98-7654321')).toBe(true)
  })

  it('should reject invalid EIN format', () => {
    expect(validateEIN('123456789')).toBe(false)
    expect(validateEIN('12-34567')).toBe(false)
    expect(validateEIN('1-2345678')).toBe(false)
    expect(validateEIN('12-34567890')).toBe(false)
    expect(validateEIN('')).toBe(false)
  })
})

describe('debounce', () => {
  it('should debounce function calls', async () => {
    let count = 0
    const increment = () => count++
    const debouncedIncrement = debounce(increment, 100)

    debouncedIncrement()
    debouncedIncrement()
    debouncedIncrement()

    expect(count).toBe(0)

    await new Promise((resolve) => setTimeout(resolve, 150))

    expect(count).toBe(1)
  })
})
