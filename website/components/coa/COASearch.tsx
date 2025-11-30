'use client'

import { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

interface COASearchProps {
  onSearch: (batchNumber: string) => void
  isLoading?: boolean
}

export function COASearch({ onSearch, isLoading }: COASearchProps) {
  const [batchNumber, setBatchNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!batchNumber.trim()) {
      setError('Please enter a batch number')
      return
    }

    setError('')
    onSearch(batchNumber.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder="Enter batch number (e.g., BATCH-001)"
          value={batchNumber}
          onChange={(e) => {
            setBatchNumber(e.target.value)
            setError('')
          }}
          error={error}
          className="pr-12"
        />
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>

      <p className="text-sm text-text-secondary mt-3 text-center">
        Find your batch number on the product label or packaging
      </p>
    </form>
  )
}
