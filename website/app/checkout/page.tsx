'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchema, CheckoutInput } from '@/lib/validations'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { Lock, CreditCard, Building2, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Sample cart data
const sampleCart = {
  items: [
    { name: 'CBD Oil for Dogs - 500mg', quantity: 2, price: 4999 },
    { name: 'CBD Chews for Dogs', quantity: 1, price: 3999 },
  ],
  subtotal: 13997,
  shipping: 0,
  tax: 1155,
  total: 15152,
}

export default function CheckoutPage() {
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState<'aeropay' | 'paymentcloud'>('aeropay')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      sameAsShipping: true,
      paymentMethod: 'aeropay',
    },
  })

  const onSubmit = async (data: CheckoutInput) => {
    setIsSubmitting(true)

    try {
      // Call API to create order and initiate payment
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Order creation failed')
      }

      // Redirect to payment processor or confirmation page
      window.location.href = `/orders/${result.orderId}/confirmation`
    } catch (error) {
      console.error('Checkout error:', error)
      alert('There was an error processing your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text-primary mb-2">Checkout</h1>
        <p className="text-text-secondary mb-8">
          Complete your order securely with our encrypted payment processing
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Shipping Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    {...register('shippingAddress.firstName')}
                    error={errors.shippingAddress?.firstName?.message}
                  />
                  <Input
                    label="Last Name"
                    {...register('shippingAddress.lastName')}
                    error={errors.shippingAddress?.lastName?.message}
                  />
                  <div className="md:col-span-2">
                    <Input
                      label="Address Line 1"
                      {...register('shippingAddress.address1')}
                      error={errors.shippingAddress?.address1?.message}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Input
                      label="Address Line 2 (Optional)"
                      {...register('shippingAddress.address2')}
                      error={errors.shippingAddress?.address2?.message}
                    />
                  </div>
                  <Input
                    label="City"
                    {...register('shippingAddress.city')}
                    error={errors.shippingAddress?.city?.message}
                  />
                  <Input
                    label="State"
                    placeholder="TX"
                    maxLength={2}
                    {...register('shippingAddress.state')}
                    error={errors.shippingAddress?.state?.message}
                  />
                  <Input
                    label="ZIP Code"
                    {...register('shippingAddress.zipCode')}
                    error={errors.shippingAddress?.zipCode?.message}
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    {...register('shippingAddress.phone')}
                    error={errors.shippingAddress?.phone?.message}
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Billing Address
                </h2>

                <label className="flex items-center gap-3 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sameAsShipping}
                    onChange={(e) => setSameAsShipping(e.target.checked)}
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="font-medium text-text-primary">
                    Same as shipping address
                  </span>
                </label>

                {!sameAsShipping && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      {...register('billingAddress.firstName')}
                      error={errors.billingAddress?.firstName?.message}
                    />
                    <Input
                      label="Last Name"
                      {...register('billingAddress.lastName')}
                      error={errors.billingAddress?.lastName?.message}
                    />
                    <div className="md:col-span-2">
                      <Input
                        label="Address Line 1"
                        {...register('billingAddress.address1')}
                        error={errors.billingAddress?.address1?.message}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        label="Address Line 2 (Optional)"
                        {...register('billingAddress.address2')}
                        error={errors.billingAddress?.address2?.message}
                      />
                    </div>
                    <Input
                      label="City"
                      {...register('billingAddress.city')}
                      error={errors.billingAddress?.city?.message}
                    />
                    <Input
                      label="State"
                      placeholder="TX"
                      maxLength={2}
                      {...register('billingAddress.state')}
                      error={errors.billingAddress?.state?.message}
                    />
                    <div className="md:col-span-2">
                      <Input
                        label="ZIP Code"
                        {...register('billingAddress.zipCode')}
                        error={errors.billingAddress?.zipCode?.message}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 border-primary bg-primary/5">
                    <input
                      type="radio"
                      value="aeropay"
                      checked={paymentMethod === 'aeropay'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'aeropay')}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="font-bold text-text-primary">
                          ACH Bank Transfer (AeroPay)
                        </span>
                        <span className="bg-success text-white text-xs px-2 py-1 rounded">
                          Recommended
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        Pay directly from your bank account. Secure, fast, and only ~1%
                        processing fee (savings passed to you).
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      value="paymentcloud"
                      checked={paymentMethod === 'paymentcloud'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'paymentcloud')}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="font-bold text-text-primary">
                          Credit / Debit Card
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        Visa, Mastercard, American Express, Discover
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('termsAccepted')}
                    className="mt-1 w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div>
                    <span className="font-medium text-text-primary">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                    {errors.termsAccepted && (
                      <p className="text-sm text-error mt-1">
                        {errors.termsAccepted.message}
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {sampleCart.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-text-secondary">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-semibold text-text-primary">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}

                  <div className="border-t-2 border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal</span>
                      <span>{formatPrice(sampleCart.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Shipping</span>
                      <span>
                        {sampleCart.shipping === 0 ? 'FREE' : formatPrice(sampleCart.shipping)}
                      </span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Tax</span>
                      <span>{formatPrice(sampleCart.tax)}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-text-primary">
                    <span>Total</span>
                    <span>{formatPrice(sampleCart.total)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full py-4 text-lg mb-4"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Processing...' : 'Place Secure Order'}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                  <Lock className="w-4 h-4" />
                  <span>Secure SSL encrypted checkout</span>
                </div>

                <div className="mt-6 p-4 bg-success/10 border-2 border-success rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-success mb-1">
                        30-Day Satisfaction Guarantee
                      </p>
                      <p className="text-text-secondary">
                        Not satisfied? Get a full refund within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
