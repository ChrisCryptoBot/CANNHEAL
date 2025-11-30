import { notFound } from 'next/navigation'
import { QRCodeGenerator } from '@/components/coa/QRCodeGenerator'
import { formatDate } from '@/lib/utils'
import { CheckCircle, XCircle, FileText, ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

// Sample COA data - in production, this would come from the database
const sampleCOAs = [
  {
    id: '1',
    batchNumber: 'BATCH-001-2025',
    productName: 'CBD Oil for Dogs - 500mg',
    testDate: '2025-01-15',
    cbdContent: 500,
    thcContent: 0,
    heavyMetals: true,
    pesticides: true,
    microbials: true,
    pdfUrl: '/coa/BATCH-001-2025.pdf',
    labName: 'ProVerde Laboratories',
    labLocation: 'Milford, MA',
    servingSize: '1mL',
    servingsPerUnit: 30,
    tests: {
      cannabinoids: {
        cbd: { value: 16.67, unit: 'mg/mL' },
        thc: { value: 0.0, unit: 'mg/mL' },
        cbda: { value: 0.0, unit: 'mg/mL' },
        cbg: { value: 0.5, unit: 'mg/mL' },
      },
      heavyMetals: {
        arsenic: { value: 'ND', limit: '0.2 ppm', passed: true },
        cadmium: { value: 'ND', limit: '0.2 ppm', passed: true },
        lead: { value: 'ND', limit: '0.5 ppm', passed: true },
        mercury: { value: 'ND', limit: '0.1 ppm', passed: true },
      },
      pesticides: {
        tested: 67,
        detected: 0,
        passed: true,
      },
      microbials: {
        totalYeastMold: { value: '<100', limit: '10000 CFU/g', passed: true },
        ecoli: { value: 'ND', limit: 'Not Detected', passed: true },
        salmonella: { value: 'ND', limit: 'Not Detected', passed: true },
      },
    },
  },
  {
    id: '2',
    batchNumber: 'BATCH-002-2025',
    productName: 'CBD Oil for Dogs - 1000mg',
    testDate: '2025-01-15',
    cbdContent: 1000,
    thcContent: 0,
    heavyMetals: true,
    pesticides: true,
    microbials: true,
    pdfUrl: '/coa/BATCH-002-2025.pdf',
    labName: 'ProVerde Laboratories',
    labLocation: 'Milford, MA',
    servingSize: '1mL',
    servingsPerUnit: 30,
    tests: {
      cannabinoids: {
        cbd: { value: 33.33, unit: 'mg/mL' },
        thc: { value: 0.0, unit: 'mg/mL' },
        cbda: { value: 0.0, unit: 'mg/mL' },
        cbg: { value: 0.8, unit: 'mg/mL' },
      },
      heavyMetals: {
        arsenic: { value: 'ND', limit: '0.2 ppm', passed: true },
        cadmium: { value: 'ND', limit: '0.2 ppm', passed: true },
        lead: { value: 'ND', limit: '0.5 ppm', passed: true },
        mercury: { value: 'ND', limit: '0.1 ppm', passed: true },
      },
      pesticides: {
        tested: 67,
        detected: 0,
        passed: true,
      },
      microbials: {
        totalYeastMold: { value: '<100', limit: '10000 CFU/g', passed: true },
        ecoli: { value: 'ND', limit: 'Not Detected', passed: true },
        salmonella: { value: 'ND', limit: 'Not Detected', passed: true },
      },
    },
  },
]

interface PageProps {
  params: {
    batchNumber: string
  }
}

async function getCOA(batchNumber: string) {
  // In production, this would be a database query
  // For now, simulate with sample data
  const coa = sampleCOAs.find(
    (c) => c.batchNumber.toLowerCase() === batchNumber.toLowerCase()
  )

  return coa || null
}

export async function generateMetadata({ params }: PageProps) {
  const coa = await getCOA(params.batchNumber)

  if (!coa) {
    return {
      title: 'COA Not Found',
    }
  }

  return {
    title: `COA - ${coa.productName} (${coa.batchNumber})`,
    description: `Certificate of Analysis for ${coa.productName}, batch ${coa.batchNumber}. Third-party lab tested for potency and purity.`,
  }
}

export default async function BatchCOAPage({ params }: PageProps) {
  const coa = await getCOA(params.batchNumber)

  if (!coa) {
    notFound()
  }

  const isPassed = coa.thcContent === 0 && coa.heavyMetals && coa.pesticides && coa.microbials

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Link */}
        <Link
          href="/lab-results"
          className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Lab Results
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                {coa.productName}
              </h1>
              <p className="text-text-secondary">
                Batch Number: <span className="font-mono font-bold">{coa.batchNumber}</span>
              </p>
              <p className="text-text-secondary">
                Test Date: {formatDate(coa.testDate)}
              </p>
              <p className="text-text-secondary">
                Laboratory: {coa.labName}, {coa.labLocation}
              </p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isPassed ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
              {isPassed ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold text-lg">PASSED</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6" />
                  <span className="font-bold text-lg">REVIEW</span>
                </>
              )}
            </div>
          </div>

          <Button
            variant="primary"
            onClick={() => window.open(coa.pdfUrl, '_blank')}
            className="w-full md:w-auto"
          >
            <FileText className="w-4 h-4 mr-2" />
            Download Full PDF Report
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Test Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cannabinoids */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Cannabinoid Profile
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">CBD</p>
                  <p className="text-2xl font-bold text-primary">
                    {coa.tests.cannabinoids.cbd.value} {coa.tests.cannabinoids.cbd.unit}
                  </p>
                </div>
                <div className="p-4 bg-success/5 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">THC</p>
                  <p className="text-2xl font-bold text-success">
                    {coa.tests.cannabinoids.thc.value} {coa.tests.cannabinoids.thc.unit}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">CBDa</p>
                  <p className="text-lg font-bold text-text-primary">
                    {coa.tests.cannabinoids.cbda.value} {coa.tests.cannabinoids.cbda.unit}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">CBG</p>
                  <p className="text-lg font-bold text-text-primary">
                    {coa.tests.cannabinoids.cbg.value} {coa.tests.cannabinoids.cbg.unit}
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                Serving Size: {coa.servingSize} | Servings Per Unit: {coa.servingsPerUnit}
              </p>
            </div>

            {/* Heavy Metals */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Heavy Metals Screening
              </h2>
              <div className="space-y-3">
                {Object.entries(coa.tests.heavyMetals).map(([metal, result]) => (
                  <div key={metal} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-text-primary capitalize">{metal}</p>
                      <p className="text-sm text-text-secondary">Limit: {result.limit}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold">{result.value}</span>
                      {result.passed && <CheckCircle className="w-5 h-5 text-success" />}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary mt-4">
                ND = Not Detected (below detection limits)
              </p>
            </div>

            {/* Pesticides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Pesticide Screening
              </h2>
              <div className="flex items-center justify-between p-4 bg-success/5 rounded-lg">
                <div>
                  <p className="font-medium text-text-primary">
                    {coa.tests.pesticides.tested} Pesticides Tested
                  </p>
                  <p className="text-sm text-text-secondary">0 Detected</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </div>

            {/* Microbials */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Microbial Screening
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">Total Yeast & Mold</p>
                    <p className="text-sm text-text-secondary">
                      Limit: {coa.tests.microbials.totalYeastMold.limit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold">
                      {coa.tests.microbials.totalYeastMold.value}
                    </span>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">E. Coli</p>
                    <p className="text-sm text-text-secondary">
                      Limit: {coa.tests.microbials.ecoli.limit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold">
                      {coa.tests.microbials.ecoli.value}
                    </span>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">Salmonella</p>
                    <p className="text-sm text-text-secondary">
                      Limit: {coa.tests.microbials.salmonella.limit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold">
                      {coa.tests.microbials.salmonella.value}
                    </span>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-text-primary mb-4 text-center">
                Batch QR Code
              </h2>
              <QRCodeGenerator batchNumber={coa.batchNumber} size={280} />
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-text-primary font-medium mb-2">
                  For Retailers & Distributors:
                </p>
                <p className="text-xs text-text-secondary">
                  Download this QR code to print on product labels, giving your customers
                  instant access to lab results and building trust in your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
