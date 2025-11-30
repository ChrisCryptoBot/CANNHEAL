'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Info } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'
import Image from 'next/image'

// Mock data - will be replaced with API call
const mockProducts = [
  {
    id: '1',
    name: 'CBD Oil for Dogs - 500mg',
    slug: 'cbd-oil-dogs-500mg',
    category: 'OIL',
    petType: 'DOG',
    retailPrice: 4999,
    wholesalePrice: 2999,
    cbdMgPerServing: 16,
    image: '/products/cbd-oil-500.jpg',
    inStock: true,
  },
  {
    id: '2',
    name: 'CBD Oil for Dogs - 1000mg',
    slug: 'cbd-oil-dogs-1000mg',
    category: 'OIL',
    petType: 'DOG',
    retailPrice: 7999,
    wholesalePrice: 4799,
    cbdMgPerServing: 33,
    image: '/products/cbd-oil-1000.jpg',
    inStock: true,
  },
]

export function WholesaleProducts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const { addItem } = useCartStore()

  // TODO: Fetch real products from API
  const products = mockProducts

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.wholesalePrice,
      quantity: 1,
      image: product.image,
      cbdMg: product.cbdMgPerServing,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Products</h1>
        <p className="mt-2 text-text-secondary">
          Browse all products with your exclusive wholesale pricing
        </p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="all">All Categories</option>
            <option value="OIL">Oils</option>
            <option value="CHEW">Chews</option>
            <option value="TOPICAL">Topicals</option>
            <option value="SPRAY">Sprays</option>
          </select>
        </div>
      </div>

      {/* Pricing Info Banner */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-text-primary mb-1">
              Your Wholesale Pricing
            </h3>
            <p className="text-sm text-text-secondary">
              You're saving <span className="font-bold text-primary">40%</span> off
              retail prices. Regular orders unlock even better pricing tiers (50% and
              60% off).
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-secondary mb-4">No products found</p>
          <Button
            variant="secondary"
            onClick={() => {
              setSearchTerm('')
              setCategoryFilter('all')
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card group hover:shadow-lg transition-all">
              <div className="relative aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">C</span>
                  </div>
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white px-4 py-2 rounded-lg font-bold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-bold text-text-primary mb-2 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                  {product.cbdMgPerServing}mg CBD
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-text-tertiary rounded">
                  {product.category}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.wholesalePrice)}
                  </span>
                  <span className="text-sm text-text-tertiary line-through">
                    {formatPrice(product.retailPrice)}
                  </span>
                </div>
                <div className="text-xs text-green-600 font-medium">
                  Save {formatPrice(product.retailPrice - product.wholesalePrice)} (
                  {Math.round(
                    ((product.retailPrice - product.wholesalePrice) /
                      product.retailPrice) *
                      100
                  )}
                  % off)
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                disabled={!product.inStock}
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
