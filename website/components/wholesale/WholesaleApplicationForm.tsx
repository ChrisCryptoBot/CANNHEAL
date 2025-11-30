'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { wholesaleApplicationSchema, WholesaleApplicationInput } from '@/lib/validations'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle, Building, User, Mail, Phone, FileText } from 'lucide-react'
import { formatEIN } from '@/lib/utils'

export function WholesaleApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<WholesaleApplicationInput>({
    resolver: zodResolver(wholesaleApplicationSchema),
  })

  const taxIdValue = watch('taxId')

  // Auto-format EIN as user types
  const handleTaxIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 9) {
      const formatted = formatEIN(value)
      setValue('taxId', formatted)
    }
  }

  const onSubmit = async (data: WholesaleApplicationInput) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Call API route to submit application
      const response = await fetch('/api/wholesale/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Application submission failed')
      }

      setSubmitStatus('success')
    } catch (error) {
      console.error('Application error:', error)
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
          Application Submitted Successfully!
        </h2>
        <p className="text-lg text-text-secondary mb-6">
          Thank you for applying for a CANNHEAL wholesale account. We're reviewing your
          application and will get back to you within 1-2 business days.
        </p>
        <div className="bg-primary/5 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-text-primary mb-2">What Happens Next?</h3>
          <ol className="text-left text-sm text-text-secondary space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">1.</span>
              <span>We verify your business information and EIN</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">2.</span>
              <span>You'll receive an email with your account login credentials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">3.</span>
              <span>Access wholesale pricing and place your first order</span>
            </li>
          </ol>
        </div>
        <Button variant="primary" onClick={() => (window.location.href = '/')}>
          Return to Homepage
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Wholesale Account Application
        </h2>
        <p className="text-text-secondary">
          Complete this form to apply for a wholesale account. Approved accounts gain access
          to wholesale pricing and exclusive benefits.
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-error/10 border-2 border-error rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-error mb-1">Application Error</p>
            <p className="text-sm text-error/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Business Information */}
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            Business Information
          </h3>

          <div className="space-y-4">
            <Input
              label="Business Name"
              placeholder="Your Pet Supply Co."
              {...register('businessName')}
              error={errors.businessName?.message}
            />

            <div>
              <Input
                label="Tax ID / EIN"
                placeholder="XX-XXXXXXX"
                value={taxIdValue || ''}
                onChange={handleTaxIdChange}
                error={errors.taxId?.message}
                helperText="Enter your 9-digit Employer Identification Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Business Type
              </label>
              <select
                {...register('businessType')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  errors.businessType ? 'border-error' : 'border-gray-200'
                }`}
              >
                <option value="">Select business type</option>
                <option value="retailer">Retailer (Pet stores, gift shops, etc.)</option>
                <option value="vet">Veterinary Clinic</option>
                <option value="distributor">Distributor / Wholesaler</option>
              </select>
              {errors.businessType && (
                <p className="text-sm text-error mt-1">{errors.businessType.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Contact Information
          </h3>

          <div className="space-y-4">
            <Input
              label="Contact Name"
              placeholder="John Smith"
              {...register('contactName')}
              error={errors.contactName?.message}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@yourpetsupply.com"
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
          </div>
        </div>

        {/* Benefits Preview */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
          <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            Wholesale Benefits
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Up to 40% off retail pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Free shipping on orders over $500</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Net 30 payment terms for qualified accounts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Dedicated account representative</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Marketing materials and POS displays</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Access to batch-specific QR codes for customer trust</span>
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full py-4 text-lg"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </Button>

        <p className="text-xs text-text-secondary text-center">
          By submitting this application, you agree to our{' '}
          <a href="/terms" className="text-primary hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  )
}
