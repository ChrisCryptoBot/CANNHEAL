import type { Metadata } from 'next'
import { ResearchHero } from '@/components/research/ResearchHero'
import { ResearchCategories } from '@/components/research/ResearchCategories'
import { ResearchGrid } from '@/components/research/ResearchGrid'
import { ResearchCTA } from '@/components/research/ResearchCTA'

export const metadata: Metadata = {
  title: 'Research Library | CANNHEAL - CBD Science & Studies',
  description:
    'Explore peer-reviewed research and scientific studies on CBD for pets. Evidence-based information from veterinary journals and clinical trials.',
  openGraph: {
    title: 'Research Library | CANNHEAL',
    description: 'Scientific research on CBD for pets',
    type: 'website',
  },
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResearchHero />
      <ResearchCategories />
      <ResearchGrid />
      <ResearchCTA />
    </div>
  )
}
