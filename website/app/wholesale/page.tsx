import { WholesaleApplicationForm } from '@/components/wholesale/WholesaleApplicationForm'
import {
  DollarSign,
  Truck,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Shield,
  Package,
} from 'lucide-react'

export const metadata = {
  title: 'Wholesale Program - Partner with CANNHEAL',
  description:
    'Join the CANNHEAL wholesale program and offer premium THC-free CBD products to your customers. Up to 40% off retail pricing, free shipping, and Net 30 terms.',
}

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner with CANNHEAL Wholesale
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Offer your customers premium, THC-free CBD products backed by third-party lab
            testing and Texas DSHS licensing. Join hundreds of retailers, veterinary clinics,
            and distributors who trust CANNHEAL.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Why Partner with CANNHEAL?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We make it easy and profitable to offer premium CBD products to your customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Up to 40% Off Retail
            </h3>
            <p className="text-sm text-text-secondary">
              Competitive wholesale pricing with volume discounts for larger orders
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">Free Shipping</h3>
            <p className="text-sm text-text-secondary">
              Orders over $500 ship free anywhere in Texas
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">Net 30 Terms</h3>
            <p className="text-sm text-text-secondary">
              Qualified accounts can pay 30 days after delivery
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Dedicated Support
            </h3>
            <p className="text-sm text-text-secondary">
              Personal account representative to help you succeed
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">Marketing Assets</h3>
            <p className="text-sm text-text-secondary">
              Free POS displays, signage, and digital marketing materials
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">High Margins</h3>
            <p className="text-sm text-text-secondary">
              40-50% profit margins on suggested retail pricing
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Full Compliance
            </h3>
            <p className="text-sm text-text-secondary">
              Texas DSHS licensed with COAs for every batch
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">QR Code COAs</h3>
            <p className="text-sm text-text-secondary">
              Batch-specific QR codes build customer trust instantly
            </p>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Wholesale Pricing Tiers
            </h2>
            <p className="text-lg text-text-secondary">
              The more you order, the more you save
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Standard</h3>
              <p className="text-text-secondary mb-4">For new partners</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">30%</span>
                <span className="text-text-secondary"> off retail</span>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Minimum order: $250</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Free shipping over $500</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Payment due at delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Premium</h3>
              <p className="text-text-secondary mb-4">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">35%</span>
                <span className="text-text-secondary"> off retail</span>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Minimum order: $500</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Free shipping on all orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Net 15 payment terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-accent">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Elite</h3>
              <p className="text-text-secondary mb-4">For high-volume partners</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">40%</span>
                <span className="text-text-secondary"> off retail</span>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Minimum order: $1,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Free shipping on all orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Net 30 payment terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Custom marketing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Who We Partner With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-2">Retail Stores</h3>
              <p className="text-sm text-text-secondary">
                Pet supply stores, gift shops, wellness boutiques, and specialty retailers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-2">
                Veterinary Clinics
              </h3>
              <p className="text-sm text-text-secondary">
                Vet practices looking to offer evidence-based CBD products to their clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-2">
                Distributors
              </h3>
              <p className="text-sm text-text-secondary">
                Regional and national distributors serving the pet care industry
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="max-w-3xl mx-auto">
          <WholesaleApplicationForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  How long does approval take?
                </h3>
                <p className="text-text-secondary">
                  Most applications are reviewed within 1-2 business days. We verify your EIN
                  and business information to ensure compliance.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Do I need a special license to sell CBD in Texas?
                </h3>
                <p className="text-text-secondary">
                  No. Retailers do not need a license to sell CBD products in Texas. Only
                  manufacturers and distributors (like CANNHEAL) need DSHS licensing. We
                  handle all compliance requirements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  What is the minimum order quantity?
                </h3>
                <p className="text-text-secondary">
                  The minimum order is $250 for Standard tier accounts. We recommend starting
                  with a variety pack to test which products your customers prefer.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Do you offer product training?
                </h3>
                <p className="text-text-secondary">
                  Yes! We provide comprehensive product training for you and your staff,
                  including dosing guidelines, benefits of CBD for pets, and how to educate
                  customers. We can conduct training via video call or in-person for larger
                  accounts.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  What if a product doesn't sell?
                </h3>
                <p className="text-text-secondary">
                  We offer a 100% satisfaction guarantee. If a product doesn't meet your
                  expectations, we'll work with you to exchange it for a different product or
                  provide a credit toward future orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
