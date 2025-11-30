'use client'

import { useState } from 'react'
import { Calculator, Info, AlertCircle, TrendingUp, Package } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Modal } from '@/components/ui/Modal'
import { calculateDosage } from '@/lib/utils'
import Link from 'next/link'

type PetType = 'DOG' | 'CAT'
type Condition = 'general' | 'mild' | 'moderate' | 'severe'
type Frequency = 'once' | 'twice'

const conditions = [
  { id: 'general', name: 'General Wellness', multiplier: 1 },
  { id: 'mild', name: 'Mild Symptoms (Occasional anxiety, minor discomfort)', multiplier: 1.5 },
  { id: 'moderate', name: 'Moderate Symptoms (Regular anxiety, joint stiffness)', multiplier: 2 },
  { id: 'severe', name: 'Severe Symptoms (Chronic pain, severe anxiety)', multiplier: 2.5 },
]

const mockProducts = [
  { name: 'CBD Oil 500mg', cbdPerServing: 16, servingsPerUnit: 30, price: 4999 },
  { name: 'CBD Oil 1000mg', cbdPerServing: 33, servingsPerUnit: 30, price: 7999 },
  { name: 'CBD Chews 300mg', cbdPerServing: 5, servingsPerUnit: 60, price: 3999 },
]

export function EnhancedDosingCalculator() {
  const [petType, setPetType] = useState<PetType>('DOG')
  const [weight, setWeight] = useState<string>('')
  const [condition, setCondition] = useState<Condition>('general')
  const [frequency, setFrequency] = useState<Frequency>('twice')
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const baseDosage = weight ? calculateDosage(parseFloat(weight), petType) : 0
  const conditionMultiplier = conditions.find((c) => c.id === condition)?.multiplier || 1
  const dailyDosage = Math.round(baseDosage * conditionMultiplier)
  const perDoseDosage = frequency === 'twice' ? Math.round(dailyDosage / 2) : dailyDosage

  const handleCalculate = () => {
    if (!weight || parseFloat(weight) <= 0) {
      alert('Please enter a valid weight')
      return
    }
    setShowResults(true)
  }

  const recommendedProduct = mockProducts.find(
    (p) => p.cbdPerServing >= perDoseDosage * 0.8 && p.cbdPerServing <= perDoseDosage * 1.5
  ) || mockProducts[0]

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Calculate Dosage</h2>
            </div>

            <div className="space-y-6">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Pet Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPetType('DOG')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      petType === 'DOG'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-2xl mb-1">🐕</div>
                    <div className="font-medium">Dog</div>
                  </button>
                  <button
                    onClick={() => setPetType('CAT')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      petType === 'CAT'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-2xl mb-1">🐈</div>
                    <div className="font-medium">Cat</div>
                  </button>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Pet Weight (lbs)
                </label>
                <Input
                  type="number"
                  placeholder="Enter weight in pounds"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="1"
                  step="0.1"
                />
              </div>

              {/* Condition */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Condition / Severity
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value as Condition)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  {conditions.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Dosing Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFrequency('once')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      frequency === 'once'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium">Once Daily</div>
                    <div className="text-xs text-text-tertiary mt-1">
                      Morning or evening
                    </div>
                  </button>
                  <button
                    onClick={() => setFrequency('twice')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      frequency === 'twice'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium">Twice Daily</div>
                    <div className="text-xs text-text-tertiary mt-1">
                      Morning & evening
                    </div>
                  </button>
                </div>
              </div>

              <Button onClick={handleCalculate} variant="primary" className="w-full">
                Calculate Dosage
              </Button>

              <button
                onClick={() => setShowDisclaimer(true)}
                className="w-full text-center text-sm text-primary hover:underline"
              >
                View Important Disclaimer
              </button>
            </div>
          </div>

          {/* Results */}
          {showResults && weight && (
            <div className="space-y-6">
              {/* Recommended Dosage */}
              <div className="card bg-primary text-white">
                <h3 className="text-xl font-bold mb-4">Recommended Dosage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-white/80 mb-1">Per Dose</div>
                    <div className="text-3xl font-bold">{perDoseDosage}mg</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Daily Total</div>
                    <div className="text-3xl font-bold">{dailyDosage}mg</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-sm text-white/90">
                    {frequency === 'twice' ? 'Give twice daily' : 'Give once daily'} with
                    food for best absorption
                  </div>
                </div>
              </div>

              {/* Dosing Tips */}
              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-text-primary">Dosing Tips</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Start with 25-50% of recommended dose for the first week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Gradually increase until desired effects are achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Give with food to improve absorption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Allow 4-6 weeks for full effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Consult your veterinarian before starting</span>
                  </li>
                </ul>
              </div>

              {/* Product Recommendation */}
              <div className="card bg-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-text-primary">Recommended Product</h3>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-text-primary mb-2">
                    {recommendedProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">
                      ${(recommendedProduct.price / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary mb-4">
                    {recommendedProduct.cbdPerServing}mg CBD per serving •{' '}
                    {recommendedProduct.servingsPerUnit} servings
                  </div>
                  <Link href="/products">
                    <Button variant="primary" className="w-full">
                      View Product
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer Modal */}
        <Modal
          isOpen={showDisclaimer}
          onClose={() => setShowDisclaimer(false)}
          title="Important Disclaimer"
        >
          <div className="space-y-4 text-sm text-text-secondary">
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-900 mb-1">
                  Consult Your Veterinarian
                </p>
                <p className="text-yellow-800">
                  This calculator provides general guidance only. Always consult with your
                  veterinarian before starting your pet on CBD, especially if they have
                  existing health conditions or take other medications.
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-text-primary mb-2">Important Points:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li>Dosage recommendations are based on veterinary research using 0.35mg CBD per kg body weight</li>
                <li>Individual pets may require adjustments based on their response</li>
                <li>Start low and increase gradually to find the optimal dose</li>
                <li>CBD can interact with certain medications - consult your vet</li>
                <li>Not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>These statements have not been evaluated by the FDA</li>
              </ul>
            </div>

            <Button onClick={() => setShowDisclaimer(false)} variant="primary" className="w-full">
              I Understand
            </Button>
          </div>
        </Modal>
      </div>
    </section>
  )
}
