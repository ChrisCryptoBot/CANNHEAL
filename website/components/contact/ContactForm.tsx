'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormInput } from '@/lib/validations'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Message sending failed')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2">Send Us a Message</h2>
        <p className="text-text-secondary">
          Have a question or need assistance? Fill out the form below and we'll get back to
          you within 24 hours.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-success/10 border-2 border-success rounded-lg p-4 mb-6 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-success mb-1">Message Sent Successfully!</p>
            <p className="text-sm text-success/80">
              Thank you for contacting us. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-error/10 border-2 border-error rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-error mb-1">Message Error</p>
            <p className="text-sm text-error/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <Input
          label="Your Name"
          placeholder="John Smith"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="Subject"
          placeholder="Product question, order inquiry, etc."
          {...register('subject')}
          error={errors.subject?.message}
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
          <textarea
            {...register('message')}
            rows={6}
            placeholder="Tell us how we can help..."
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
              errors.message ? 'border-error' : 'border-gray-200'
            }`}
          />
          {errors.message && (
            <p className="text-sm text-error mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full py-4 text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
