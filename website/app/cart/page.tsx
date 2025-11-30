'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

// Sample cart items - in production, this would use Zustand store or React Context
const sampleCartItems = [
  {
    id: '1',
    productId: '1',
    productName: 'CBD Oil for Dogs - 500mg',
    productSlug: 'cbd-oil-dogs-500mg',
    variantName: '30mL Bottle',
    price: 4999, // in cents
    quantity: 2,
    imageUrl: '/products/cbd-oil-500.jpg',
  },
  {
    id: '2',
    productId: '4',
    productName: 'CBD Chews for Dogs',
    productSlug: 'cbd-chews-dogs',
    variantName: '30 Count Jar - Peanut Butter',
    price: 3999,
    quantity: 1,
    imageUrl: '/products/cbd-chews.jpg',
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(sampleCartItems)

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) =>
      items.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    )
  }

  const removeItem = (itemId: string) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 50000 ? 0 : 895 // Free shipping over $500
  const tax = Math.round(subtotal * 0.0825) // 8.25% Texas sales tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="w-24 h-24 text-text-secondary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-text-primary mb-4">Your Cart is Empty</h1>
            <p className="text-text-secondary mb-8">
              Add some products to your cart to get started
            </p>
            <Link href="/products">
              <Button variant="primary">Shop Products</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text-primary mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-text-secondary" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link
                      href={`/products/${item.productSlug}`}
                      className="font-bold text-lg text-text-primary hover:text-primary transition-colors"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-sm text-text-secondary mt-1">{item.variantName}</p>
                    <p className="text-lg font-bold text-primary mt-2">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-error hover:text-error/80 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3 border-2 border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-text-primary w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm text-text-secondary">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax (8.25%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-text-primary">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {shipping > 0 && subtotal < 50000 && (
                <div className="bg-accent/10 border-2 border-accent rounded-lg p-4 mb-6">
                  <p className="text-sm text-text-primary">
                    Add <strong>{formatPrice(50000 - subtotal)}</strong> more for free
                    shipping!
                  </p>
                </div>
              )}

              <Link href="/checkout">
                <Button variant="primary" className="w-full py-4 text-lg mb-4">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <div className="bg-primary/5 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  Interested in Wholesale?
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  Save up to 40% with a wholesale account
                </p>
                <Link href="/wholesale">
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
