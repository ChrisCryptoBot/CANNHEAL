'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const AGE_VERIFIED_KEY = 'cannheal_age_verified'
const AGE_VERIFIED_EXPIRY = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

export function AgeVerification() {
  const [showModal, setShowModal] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    // Check if user has already verified
    const stored = localStorage.getItem(AGE_VERIFIED_KEY)
    if (stored) {
      try {
        const { verified, expiry } = JSON.parse(stored)
        if (verified && Date.now() < expiry) {
          return // User already verified and not expired
        }
      } catch (e) {
        // Invalid stored data, show modal
      }
    }

    // Show modal after small delay for better UX
    setTimeout(() => setShowModal(true), 100)
  }, [])

  const handleVerify = (isOfAge: boolean) => {
    if (!isOfAge) {
      // Redirect to Google if under 21
      window.location.href = 'https://www.google.com'
      return
    }

    // Store verification
    if (rememberMe) {
      const data = {
        verified: true,
        expiry: Date.now() + AGE_VERIFIED_EXPIRY
      }
      localStorage.setItem(AGE_VERIFIED_KEY, JSON.stringify(data))
    }

    setShowModal(false)
  }

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  if (!showModal) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-verification-title"
    >
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-4 shadow-glass animate-scale-up">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">C</span>
          </div>
        </div>

        {/* Title */}
        <h2
          id="age-verification-title"
          className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-4"
        >
          Age Verification Required
        </h2>

        {/* Description */}
        <p className="text-center text-text-secondary mb-2">
          You must be 21 or older to enter this site.
        </p>

        <p className="text-center text-sm text-text-tertiary mb-8">
          Required by Texas DSHS law — not a marketing step.
        </p>

        {/* Question */}
        <p className="text-center text-lg font-semibold text-text-primary mb-6">
          Are you 21 or older?
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => handleVerify(true)}
            className="btn-primary flex-1 text-lg"
            autoFocus
          >
            Yes, I'm 21+
          </button>
          <button
            onClick={() => handleVerify(false)}
            className="btn-secondary flex-1 text-lg"
          >
            No
          </button>
        </div>

        {/* Remember Me */}
        <label className="flex items-center justify-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-text-secondary">
            Remember my choice for 30 days
          </span>
        </label>
      </div>
    </div>
  )
}
