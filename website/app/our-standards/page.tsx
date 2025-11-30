import type { Metadata } from 'next'
import { StandardsHero } from '@/components/standards/StandardsHero'
import { QualityPillars } from '@/components/standards/QualityPillars'
import { TestingStandards } from '@/components/standards/TestingStandards'
import { ComplianceCertifications } from '@/components/standards/ComplianceCertifications'
import { ManufacturingProcess } from '@/components/standards/ManufacturingProcess'
import { SourcingStandards } from '@/components/standards/SourcingStandards'
import { QualityGuarantee } from '@/components/standards/QualityGuarantee'

export const metadata: Metadata = {
  title: 'Our Standards | CANNHEAL - Quality, Safety, Transparency',
  description:
    'Learn about CANNHEAL\'s rigorous quality standards: CO2 extraction, third-party lab testing, USDA organic hemp, Texas DSHS compliance, and our commitment to pet safety.',
  openGraph: {
    title: 'Our Standards | CANNHEAL',
    description: 'Quality, safety, and transparency in every product',
    type: 'website',
  },
}

export default function OurStandardsPage() {
  return (
    <div className="min-h-screen">
      <StandardsHero />
      <QualityPillars />
      <TestingStandards />
      <ComplianceCertifications />
      <ManufacturingProcess />
      <SourcingStandards />
      <QualityGuarantee />
    </div>
  )
}
