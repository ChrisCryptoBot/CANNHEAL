import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in cents to dollars
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

// Format date to readable string
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Calculate CBD dosage based on pet weight
export function calculateDosage(
  petWeightLbs: number,
  cbdMgPerServing: number,
  servingsPerUnit: number
): {
  recommendedDailyMg: number
  recommendedServings: number
  daysSupply: number
} {
  // Convert lbs to kg
  const petWeightKg = petWeightLbs * 0.453592

  // Recommended: 0.2-0.5 mg CBD/kg (using 0.35 as middle ground)
  const recommendedDailyMg = Math.round(petWeightKg * 0.35)

  // Calculate servings needed
  const recommendedServings = Math.ceil(recommendedDailyMg / cbdMgPerServing)

  // Calculate days supply
  const daysSupply = Math.floor(servingsPerUnit / recommendedServings)

  return {
    recommendedDailyMg,
    recommendedServings,
    daysSupply,
  }
}

// Generate batch-specific QR code URL
export function generateBatchQRUrl(batchNumber: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return `${baseUrl}/lab-results/${batchNumber}`
}

// Validate EIN format (XX-XXXXXXX)
export function validateEIN(ein: string): boolean {
  const einRegex = /^\d{2}-\d{7}$/
  return einRegex.test(ein)
}

// Format EIN for display
export function formatEIN(ein: string): string {
  const cleaned = ein.replace(/\D/g, '')
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`
  }
  return ein
}

// Calculate wholesale margin
export function calculateMargin(retailPrice: number, wholesalePrice: number): number {
  return Math.round(((retailPrice - wholesalePrice) / retailPrice) * 100)
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}
