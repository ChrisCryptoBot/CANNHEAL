import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DosingCalculator } from '@/components/products/DosingCalculator'
import { formatPrice } from '@/lib/utils'
import { ShieldCheck, Beaker, Leaf, AlertCircle } from 'lucide-react'

// This will be replaced with actual database query
async function getProduct(slug: string) {
  // Sample data
  return {
    id: '1',
    slug: 'cbd-oil-dogs-500mg',
    name: 'CBD Oil for Dogs - 500mg',
    tagline: 'Calming support for anxious pets',
    description: `Our premium CBD oil for dogs is formulated with organic, THC-free hemp extract to support calmness and overall wellness. Each bottle contains 500mg of high-quality CBD in a convenient dropper format.

Perfect for dogs experiencing anxiety, stress, or those who need gentle support for joint mobility and comfort. Made with MCT oil for optimal absorption.`,
    category: 'OIL',
    petType: 'DOG',
    retailPrice: 4999,
    wholesalePrice: 2500,
    cbdMgPerServing: 16,
    servingsPerUnit: 30,
    sku: 'CANN-DOG-OIL-500',
    inStock: true,
    images: ['/images/products/cbd-oil-dogs.jpg'],
    ingredients: [
      'Organic Hemp Extract (CBD Isolate)',
      'MCT Oil (Coconut-derived)',
      'Natural Chicken Flavor',
    ],
    batchNumber: 'BATCH-2025-001',
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: `${product.name} | CANNHEAL`,
    description: product.tagline,
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-text-primary">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-2xl shadow-card overflow-hidden flex items-center justify-center">
                <div className="text-text-tertiary text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">C</span>
                  </div>
                  <p className="text-sm">Product Image</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium">THC-Free</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <Beaker className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium">Lab Tested</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium">CO2 Extracted</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium">DSHS Licensed</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              <div>
                {product.inStock ? (
                  <span className="inline-block text-xs bg-success/10 text-success px-3 py-1 rounded-full mb-3">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-block text-xs bg-error/10 text-error px-3 py-1 rounded-full mb-3">
                    Out of Stock
                  </span>
                )}
                <h1 className="heading-1 mb-2">{product.name}</h1>
                <p className="text-fluid-lg text-text-secondary">{product.tagline}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(product.retailPrice)}
                </span>
                <span className="text-text-tertiary line-through">
                  {formatPrice(product.retailPrice + 1000)}
                </span>
              </div>

              {/* CBD Info */}
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-text-secondary">CBD per serving</p>
                    <p className="text-2xl font-bold text-primary">{product.cbdMgPerServing}mg</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Total servings</p>
                    <p className="text-2xl font-bold text-primary">{product.servingsPerUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Total CBD</p>
                    <p className="text-2xl font-bold text-primary">
                      {product.cbdMgPerServing * product.servingsPerUnit}mg
                    </p>
                  </div>
                </div>
              </Card>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button className="px-4 py-2 hover:bg-background transition-colors">-</button>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-16 text-center border-x border-border"
                  />
                  <button className="px-4 py-2 hover:bg-background transition-colors">+</button>
                </div>
                <Button variant="primary" className="flex-1">
                  Add to Cart
                </Button>
              </div>

              {/* COA Link */}
              <Link
                href={`/lab-results/${product.batchNumber}`}
                className="block p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">View Certificate of Analysis</p>
                    <p className="text-sm text-text-secondary">Batch: {product.batchNumber}</p>
                  </div>
                  <span className="text-primary">→</span>
                </div>
              </Link>

              {/* Wholesale CTA */}
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="font-semibold mb-1">Are you a retailer?</p>
                <p className="text-sm text-text-secondary mb-3">
                  Save 40%+ with wholesale pricing
                </p>
                <Link href="/wholesale" className="btn-secondary btn-sm">
                  Apply for Wholesale
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-card p-8">
              {/* Description */}
              <div className="mb-8">
                <h2 className="heading-2 mb-4">Product Description</h2>
                <div className="prose prose-lg max-w-none">
                  {product.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-text-secondary mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="heading-2 mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dosing Calculator */}
              <div className="mb-8">
                <h2 className="heading-2 mb-4">Dosing Calculator</h2>
                <DosingCalculator
                  cbdMgPerServing={product.cbdMgPerServing}
                  servingsPerUnit={product.servingsPerUnit}
                />
              </div>

              {/* Disclaimers */}
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-text-secondary space-y-2">
                    <p>
                      <strong>Important Disclaimer:</strong> This product has not been evaluated by the FDA.
                    </p>
                    <p>
                      This product is not intended to diagnose, treat, cure, or prevent any disease.
                    </p>
                    <p>
                      <strong>Always consult your veterinarian before use.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
