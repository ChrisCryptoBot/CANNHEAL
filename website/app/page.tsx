import { CheckCircle, Shield, Award, Users, Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// This will be replaced with actual data from database
const featuredProducts = [
  {
    id: '1',
    name: 'CBD Oil for Dogs',
    tagline: 'Calming support for anxious pets',
    price: 4999,
    image: '/images/products/cbd-oil-dogs.jpg',
    slug: 'cbd-oil-dogs-500mg',
  },
  {
    id: '2',
    name: 'CBD Chews for Dogs',
    tagline: 'Joint mobility support',
    price: 3999,
    image: '/images/products/cbd-chews-dogs.jpg',
    slug: 'cbd-chews-dogs-300mg',
  },
  {
    id: '3',
    name: 'CBD Oil for Cats',
    tagline: 'Gentle calming formula',
    price: 4499,
    image: '/images/products/cbd-oil-cats.jpg',
    slug: 'cbd-oil-cats-250mg',
  },
]

const trustBadges = [
  { icon: CheckCircle, label: 'THC-Free Verified' },
  { icon: Shield, label: '3rd Party Lab Tested' },
  { icon: Award, label: 'Texas DSHS Licensed' },
  { icon: Users, label: 'CO2 Extracted' },
]

const whyChooseUs = [
  {
    title: 'Compliance First',
    description: 'Full Texas DSHS licensing and COA transparency',
    icon: Shield,
  },
  {
    title: 'Quality Assured',
    description: 'USDA organic hemp, CO2 extraction, third-party tested',
    icon: Award,
  },
  {
    title: 'Retailer Support',
    description: 'Wholesale pricing, marketing materials, training',
    icon: Users,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-white overflow-hidden">
        <div className="container-custom section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 animate-slide-up">
              <h1 className="heading-1">
                Veterinarian-Formulated,{' '}
                <span className="text-primary">THC-Free CBD</span> for Pets
              </h1>
              <p className="text-fluid-lg text-text-secondary">
                Third-party tested. DSHS licensed. Built for retailers who care.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/wholesale" className="btn-primary">
                  Become a Retail Partner
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link href="/products" className="btn-secondary">
                  Shop Products
                </Link>
              </div>

              {/* Quick Download - Retailer Quick Look PDF */}
              <Link
                href="/pdfs/retailer-quick-look.pdf"
                download
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mt-4"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download Retailer Quick Look (PDF)</span>
              </Link>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-background-card">
                <div className="text-center text-text-tertiary">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">C</span>
                  </div>
                  <p className="text-sm">
                    Replace with actual product on shelf photo
                    <br />
                    <span className="text-xs">(Authentic retail partner photography)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <badge.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-primary">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Partners Ticker */}
      <section className="bg-white border-y border-border py-6">
        <div className="container-custom">
          <p className="text-center text-sm text-text-secondary mb-4">
            Trusted by Texas Retailers
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            {/* Placeholder for partner logos - will be populated from database */}
            <div className="h-12 w-32 bg-border rounded flex items-center justify-center text-xs text-text-tertiary">
              Partner Logo 1
            </div>
            <div className="h-12 w-32 bg-border rounded flex items-center justify-center text-xs text-text-tertiary">
              Partner Logo 2
            </div>
            <div className="h-12 w-32 bg-border rounded flex items-center justify-center text-xs text-text-tertiary">
              Partner Logo 3
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/wholesale" className="text-sm text-primary hover:text-primary-hover font-medium">
              Join our retail network →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Featured Products</h2>
            <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
              Premium CBD products formulated specifically for pets, with third-party lab testing and full transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-hover group">
                <div className="aspect-square bg-background rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-text-tertiary text-center">
                    <div className="w-24 h-24 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">C</span>
                    </div>
                    <p className="text-xs">Product Image</p>
                  </div>
                </div>
                <h3 className="heading-3 mb-2">{product.name}</h3>
                <p className="text-text-secondary mb-4">{product.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${(product.price / 100).toFixed(2)}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-ghost"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose CANNHEAL?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Texas retailers who trust CANNHEAL for compliant, high-quality CBD pet products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wholesale" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Apply for Wholesale
            </Link>
            <Link href="/lab-results" className="btn-ghost text-white hover:text-white">
              View Lab Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
