'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { calculateDosage } from '@/lib/utils'
import { Calculator } from 'lucide-react'

interface DosingCalculatorProps {
  cbdMgPerServing: number
  servingsPerUnit: number
}

export function DosingCalculator({ cbdMgPerServing, servingsPerUnit }: DosingCalculatorProps) {
  const [petWeight, setPetWeight] = useState<string>('')
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [hasAcknowledged, setHasAcknowledged] = useState(false)
  const [result, setResult] = useState<{
    recommendedDailyMg: number
    recommendedServings: number
    daysSupply: number
  } | null>(null)

  // Check if user has already acknowledged disclaimer
  useEffect(() => {
    const acknowledged = localStorage.getItem('dosing_calculator_acknowledged')
    if (acknowledged === 'true') {
      setHasAcknowledged(true)
    }
  }, [])

  const handleCalculate = () => {
    // Show disclaimer on first use
    if (!hasAcknowledged) {
      setShowDisclaimer(true)
      return
    }

    calculateAndDisplay()
  }

  const calculateAndDisplay = () => {
    const weight = parseFloat(petWeight)
    if (isNaN(weight) || weight <= 0) {
      return
    }

    const dosage = calculateDosage(weight, cbdMgPerServing, servingsPerUnit)
    setResult(dosage)
  }

  const handleAcknowledgeDisclaimer = () => {
    localStorage.setItem('dosing_calculator_acknowledged', 'true')
    setHasAcknowledged(true)
    setShowDisclaimer(false)
    calculateAndDisplay()
  }

  return (
    <div>
      <div className="bg-background p-6 rounded-xl border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Calculate Recommended Dosage</h3>
        </div>

        <div className="space-y-4">
          <Input
            type="number"
            label="Pet's Weight (lbs)"
            value={petWeight}
            onChange={(e) => setPetWeight(e.target.value)}
            placeholder="Enter weight in pounds"
            min="1"
          />

          <Button onClick={handleCalculate} variant="primary" className="w-full">
            Calculate Dosage
          </Button>

          {result && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 space-y-3">
              <div>
                <p className="text-sm text-text-secondary">Recommended Daily CBD</p>
                <p className="text-2xl font-bold text-primary">{result.recommendedDailyMg}mg</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Recommended Servings per Day</p>
                <p className="text-2xl font-bold text-primary">
                  {result.recommendedServings} {result.recommendedServings === 1 ? 'serving' : 'servings'}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Days Supply (at recommended dosage)</p>
                <p className="text-2xl font-bold text-primary">
                  ~{result.daysSupply} days
                </p>
              </div>
              <p className="text-xs text-text-tertiary mt-4">
                * Based on 0.35 mg CBD per kg of body weight. This is general guidance only.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer Modal */}
      <Modal
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        title="Important Disclaimer"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-text-secondary">
            This calculator provides <strong>general guidance only</strong>. It is not medical advice.
          </p>
          <p className="text-text-secondary">
            CBD dosing for pets varies based on many factors including age, health condition, and individual sensitivity.
          </p>
          <p className="text-text-secondary font-semibold">
            <strong>Always consult your veterinarian before giving CBD to your pet.</strong>
          </p>
          <div className="pt-4 flex gap-3">
            <Button onClick={handleAcknowledgeDisclaimer} variant="primary" className="flex-1">
              I Understand
            </Button>
            <Button onClick={() => setShowDisclaimer(false)} variant="secondary" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
