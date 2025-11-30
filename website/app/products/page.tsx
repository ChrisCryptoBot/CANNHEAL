import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { formatPrice } from '@/lib/utils'
// import { db } from '@/lib/db' // Uncomment when database is connected

export const metadata: Metadata = {
  title: 'CBD Products for Pets | CANNHEAL',
  description: 'Browse our selection of THC-free, third-party tested CBD products for dogs and cats. Oils, chews, topicals, and sprays.',
}

// Sample data - will be replaced with database queries
const sampleProducts = [
  {
    id: '1',
    slug: 'cbd-oil-dogs-500mg',
    name: 'CBD Oil for Dogs - 500mg',
    tagline: 'Calming support for anxious pets',
    category: 'OIL',
    petType: 'DOG',
    retailPrice: 4999,
    cbdMgPerServing: 16,
    servingsPerUnit: 30,
    images: ['/images/products/cbd-oil-dogs.jpg'],
    inStock: true,
  },
  {
    id: '2',
    slug: 'cbd-chews-dogs-300mg',
    name: 'CBD Chews for Dogs - 300mg',
    tagline: 'Joint mobility support',
    category: 'CHEW',
    petType: 'DOG',
    retailPrice: 3999,
    cbdMgPerServing: 10,
    servingsPerUnit: 30,
    images: ['/images/products/cbd-chews-dogs.jpg'],
    inStock: true,
  },
  {
    id: '3',
    slug: 'cbd-oil-cats-250mg',
    name: 'CBD Oil for Cats - 250mg',
    tagline: 'Gentle calming formula',
    category: 'OIL',
    petType: 'CAT',
    retailPrice: 4499,
    cbdMgPerServing: 8,
    servingsPerUnit: 30,
    images: ['/images/products/cbd-oil-cats.jpg'],
    inStock: true,
  },
  {
    id: '4',
    slug: 'cbd-topical-dogs-200mg',
    name: 'CBD Topical Balm - 200mg',
    tagline: 'Soothing skin support',
    category: 'TOPICAL',
    petType: 'ALL',
    retailPrice: 3499,
    cbdMgPerServing: 10,
    servingsPerUnit: 20,
    images: ['/images/products/cbd-topical.jpg'],
    inStock: true,
  },
  {
    id: '5',
    slug: 'cbd-spray-calming-150mg',
    name: 'CBD Calming Spray - 150mg',
    tagline: 'Quick calming support',
    category: 'SPRAY',
    petType: 'ALL',
    retailPrice: 2999,
    cbdMgPerServing: 5,
    servingsPerUnit: 30,
    images: ['/images/products/cbd-spray.jpg'],
    inStock: true,
  },
  {
    id: '6',
    slug: 'cbd-chews-cats-200mg',
    name: 'CBD Chews for Cats - 200mg',
    tagline: 'Tasty calming treats',
    category: 'CHEW',
    petType: 'CAT',
    retailPrice: 3599,
    cbdMgPerServing: 6,
    servingsPerUnit: 30,
    images: ['/images/products/cbd-chews-cats.jpg'],
    inStock: true,
  },
]

export default function ProductsPage() {
  // In production, this will fetch from database with filters
  const products = sampleProducts

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-white border-b border-border">
        <div className="container-custom py-12">
          <h1 className="heading-1 mb-4">CBD Products for Pets</h1>
          <p className="text-fluid-lg text-text-secondary max-w-3xl">
            Browse our selection of THC-free, third-party tested CBD products formulated specifically for dogs and cats.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container-custom">
          {/* Filter Bar - Will be enhanced with actual filtering */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="search"
                placeholder="Search products..."
                className="input w-full"
              />
            </div>
            <select className="input w-full sm:w-auto">
              <option value="">All Categories</option>
              <option value="OIL">Oils</option>
              <option value="CHEW">Chews</option>
              <option value="TOPICAL">Topicals</option>
              <option value="SPRAY">Sprays</option>
            </select>
            <select className="input w-full sm:w-auto">
              <option value="">All Pets</option>
              <option value="DOG">Dogs</option>
              <option value="CAT">Cats</option>
            </select>
            <select className="input w-full sm:w-auto">
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} hover>
                {/* Product Image */}
                <div className="aspect-square bg-background rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-text-tertiary text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">C</span>
                    </div>
                    <p className="text-xs">Product Image</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="heading-3 flex-1">{product.name}</h3>
                    {product.inStock ? (
                      <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-xs bg-error/10 text-error px-2 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm">{product.tagline}</p>

                  <div className="text-xs text-text-tertiary">
                    {product.cbdMgPerServing}mg CBD per serving • {product.servingsPerUnit} servings
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.retailPrice)}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State (if no products) */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-8">Why Choose Our CBD Products?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">THC-Free</h3>
              <p className="text-text-secondary text-sm">
                All products are THC-free, ensuring safety for your pets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Third-Party Tested</h3>
              <p className="text-text-secondary text-sm">
                Every batch is tested by independent labs for quality and purity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CO2 Extracted</h3>
              <p className="text-text-secondary text-sm">
                Clean extraction process preserving beneficial compounds.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/lab-results" className="link font-medium">
              View All Lab Results →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
