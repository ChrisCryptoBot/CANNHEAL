import type { Metadata } from 'next'
import { DosingCalculatorHero } from '@/components/dosing/DosingCalculatorHero'
import { EnhancedDosingCalculator } from '@/components/dosing/EnhancedDosingCalculator'
import { DosingGuidelines } from '@/components/dosing/DosingGuidelines'
import { DosingFAQ } from '@/components/dosing/DosingFAQ'
import { DosingCTA } from '@/components/dosing/DosingCTA'

export const metadata: Metadata = {
  title: 'CBD Dosing Calculator | CANNHEAL - Find the Right Dose',
  description:
    'Calculate the perfect CBD dosage for your pet based on weight, condition, and severity. Science-based recommendations from veterinary experts.',
  openGraph: {
    title: 'CBD Dosing Calculator | CANNHEAL',
    description: 'Find the perfect CBD dose for your pet',
    type: 'website',
  },
}

export default function DosingCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DosingCalculatorHero />
      <EnhancedDosingCalculator />
      <DosingGuidelines />
      <DosingFAQ />
      <DosingCTA />
    </div>
  )
}
