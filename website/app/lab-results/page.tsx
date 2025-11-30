'use client'

import { useState } from 'react'
import { COASearch } from '@/components/coa/COASearch'
import { COACard } from '@/components/coa/COACard'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Shield, Award, FileCheck, AlertCircle } from 'lucide-react'

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
    qrCodeUrl: '/qr/BATCH-001-2025.png',
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
    qrCodeUrl: '/qr/BATCH-002-2025.png',
  },
  {
    id: '3',
    batchNumber: 'BATCH-003-2025',
    productName: 'CBD Oil for Cats - 250mg',
    testDate: '2025-01-20',
    cbdContent: 250,
    thcContent: 0,
    heavyMetals: true,
    pesticides: true,
    microbials: true,
    pdfUrl: '/coa/BATCH-003-2025.pdf',
    qrCodeUrl: '/qr/BATCH-003-2025.png',
  },
  {
    id: '4',
    batchNumber: 'BATCH-004-2025',
    productName: 'CBD Chews for Dogs - 300mg',
    testDate: '2025-01-22',
    cbdContent: 300,
    thcContent: 0,
    heavyMetals: true,
    pesticides: true,
    microbials: true,
    pdfUrl: '/coa/BATCH-004-2025.pdf',
    qrCodeUrl: '/qr/BATCH-004-2025.png',
  },
]

export default function LabResultsPage() {
  const [searchResults, setSearchResults] = useState<typeof sampleCOAs | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (batchNumber: string) => {
    setIsLoading(true)
    setHasSearched(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Filter results
    const results = sampleCOAs.filter((coa) =>
      coa.batchNumber.toLowerCase().includes(batchNumber.toLowerCase())
    )

    setSearchResults(results)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Lab Results & Certificates of Analysis
          </h1>
          <p className="text-lg text-text-secondary">
            Search for third-party lab results by batch number. Every batch is tested for
            potency, purity, and safety.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Shield className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-bold text-text-primary mb-2">3rd Party Testing</h3>
            <p className="text-sm text-text-secondary">
              Independent ISO-certified labs verify every batch
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-bold text-text-primary mb-2">THC-Free Verified</h3>
            <p className="text-sm text-text-secondary">
              Every batch tests 0.0% THC - completely non-psychoactive
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <FileCheck className="w-12 h-12 text-primary mb-3" />
            <h3 className="font-bold text-text-primary mb-2">Full Transparency</h3>
            <p className="text-sm text-text-secondary">
              View complete test results for potency, purity, and safety
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Search Certificate of Analysis
          </h2>
          <COASearch onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Results Section */}
        {isLoading && (
          <div className="py-12">
            <LoadingSpinner size="lg" text="Searching lab results..." />
          </div>
        )}

        {!isLoading && hasSearched && searchResults && (
          <>
            {searchResults.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  {searchResults.length} Result{searchResults.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {searchResults.map((coa) => (
                    <COACard key={coa.id} coa={coa} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <AlertCircle className="w-16 h-16 text-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  No Results Found
                </h3>
                <p className="text-text-secondary mb-6">
                  We couldn't find any lab results matching that batch number.
                  Please check the number and try again.
                </p>
                <p className="text-sm text-text-secondary">
                  Batch numbers are located on the product label or packaging.
                </p>
              </div>
            )}
          </>
        )}

        {/* Default View - Show Recent COAs */}
        {!hasSearched && (
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Recent Lab Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sampleCOAs.map((coa) => (
                <COACard key={coa.id} coa={coa} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Wholesale CTA */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transparency Builds Trust with Your Customers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Provide your customers with instant access to lab results via QR codes on every
            product. Partner with CANNHEAL today.
          </p>
          <a
            href="/wholesale"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Apply for Wholesale Account
          </a>
        </div>
      </div>
    </div>
  )
}
