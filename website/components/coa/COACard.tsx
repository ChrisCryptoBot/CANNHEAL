'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import { CheckCircle, XCircle, FileText, QrCode } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface COACardProps {
  coa: {
    id: string
    batchNumber: string
    productName: string
    testDate: Date | string
    cbdContent: number
    thcContent: number
    heavyMetals: boolean
    pesticides: boolean
    microbials: boolean
    pdfUrl: string
    qrCodeUrl?: string
  }
}

export function COACard({ coa }: COACardProps) {
  const isPassed = coa.thcContent === 0 && coa.heavyMetals && coa.pesticides && coa.microbials

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-1">
            {coa.productName}
          </h3>
          <p className="text-sm text-text-secondary">
            Batch: <span className="font-mono font-semibold">{coa.batchNumber}</span>
          </p>
          <p className="text-sm text-text-secondary">
            Tested: {formatDate(coa.testDate)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isPassed ? (
            <div className="flex items-center gap-1 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">PASSED</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-error">
              <XCircle className="w-5 h-5" />
              <span className="font-semibold">REVIEW</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-text-secondary mb-1">CBD Content</p>
          <p className="text-lg font-bold text-primary">{coa.cbdContent}mg</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary mb-1">THC Content</p>
          <p className={`text-lg font-bold ${coa.thcContent === 0 ? 'text-success' : 'text-error'}`}>
            {coa.thcContent}mg
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <TestResult label="Heavy Metals" passed={coa.heavyMetals} />
        <TestResult label="Pesticides" passed={coa.pesticides} />
        <TestResult label="Microbials" passed={coa.microbials} />
      </div>

      <div className="flex gap-3">
        <Button
          variant="primary"
          className="flex-1"
          onClick={() => window.open(coa.pdfUrl, '_blank')}
        >
          <FileText className="w-4 h-4 mr-2" />
          View Full COA
        </Button>
        <Link href={`/lab-results/${coa.batchNumber}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            <QrCode className="w-4 h-4 mr-2" />
            QR Code
          </Button>
        </Link>
      </div>
    </Card>
  )
}

function TestResult({ label, passed }: { label: string; passed: boolean }) {
  return (
    <div className={`flex items-center gap-1 text-xs p-2 rounded ${passed ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
      {passed ? (
        <CheckCircle className="w-3 h-3" />
      ) : (
        <XCircle className="w-3 h-3" />
      )}
      <span className="font-medium">{label}</span>
    </div>
  )
}
