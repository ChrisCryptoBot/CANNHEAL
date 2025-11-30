'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { vetSampleRequestSchema, VetSampleRequestInput } from '@/lib/validations'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'

export function VetSampleRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VetSampleRequestInput>({
    resolver: zodResolver(vetSampleRequestSchema),
  })

  const onSubmit = async (data: VetSampleRequestInput) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/vet/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Sample request failed')
      }

      setSubmitStatus('success')
    } catch (error) {
      console.error('Sample request error:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Sample Request Submitted!
        </h2>
        <p className="text-lg text-text-secondary mb-6">
          Thank you for your interest in CANNHEAL products. We'll review your request and
          ship your sample package within 3-5 business days.
        </p>
        <div className="bg-primary/5 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-text-primary mb-2">Your Sample Package Includes:</h3>
          <ul className="text-sm text-text-secondary space-y-1 text-left max-w-md mx-auto">
            <li>• Sample bottles of our most popular CBD oils (500mg and 1000mg)</li>
            <li>• Sample pack of CBD chews</li>
            <li>• Product information sheets and dosing guidelines</li>
            <li>• Complete Certificates of Analysis for all samples</li>
            <li>• Wholesale pricing information</li>
          </ul>
        </div>
        <Button variant="primary" onClick={() => (window.location.href = '/for-veterinarians')}>
          Return to Vet Resources
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Request Veterinary Samples
        </h2>
        <p className="text-text-secondary">
          Complete this form to receive complimentary product samples and information
          packets. Available to licensed veterinary professionals only.
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-error/10 border-2 border-error rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-error mb-1">Request Error</p>
            <p className="text-sm text-error/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <Input
          label="Your Name"
          placeholder="Dr. Jane Smith"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          label="Clinic Name"
          placeholder="Happy Pets Veterinary Clinic"
          {...register('clinicName')}
          error={errors.clinicName?.message}
        />

        <Input
          label="Veterinary License Number"
          placeholder="TX-VET-12345"
          {...register('licenseNumber')}
          error={errors.licenseNumber?.message}
          helperText="Required to verify veterinary professional status"
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="dr.smith@happypetsvet.com"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          {...register('phone')}
          error={errors.phone?.message}
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Products of Interest
          </label>
          <textarea
            {...register('productsInterested')}
            rows={4}
            placeholder="Tell us which products you're interested in learning more about (e.g., CBD oils for arthritis, anxiety-relief chews, etc.)"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
              errors.productsInterested ? 'border-error' : 'border-gray-200'
            }`}
          />
          {errors.productsInterested && (
            <p className="text-sm text-error mt-1">{errors.productsInterested.message}</p>
          )}
        </div>

        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
          <h3 className="font-bold text-text-primary mb-3">
            What's Included in Your Sample Package:
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span>
                Sample bottles of CBD oils (500mg, 1000mg) - enough for several test cases
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span>Sample pack of CBD chews for dogs and cats</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span>Complete product information and dosing guidelines</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span>Third-party lab results (COAs) for all samples</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <span>Wholesale pricing and partnership information</span>
            </li>
          </ul>
        </div>

        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full py-4 text-lg"
        >
          {isSubmitting ? 'Submitting Request...' : 'Request Free Samples'}
        </Button>

        <p className="text-xs text-text-secondary text-center">
          By submitting this request, you confirm that you are a licensed veterinary
          professional. We respect your privacy and will not share your information with
          third parties.
        </p>
      </div>
    </form>
  )
}
