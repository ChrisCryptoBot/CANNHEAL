import { Heart, Leaf, Microscope, Shield, Target, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'About CANNHEAL - Our Story & Mission',
  description:
    'Learn about CANNHEAL\'s mission to provide safe, effective, THC-free CBD products for pets. Texas DSHS licensed and third-party lab tested.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CANNHEAL</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Premium, THC-free CBD products for pets, backed by science and transparency
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                CANNHEAL was founded in 2023 with a simple mission: to provide pet owners and
                veterinary professionals with CBD products they can trust. As pet owners
                ourselves, we witnessed firsthand the challenges of finding high-quality,
                transparent CBD products in a market flooded with untested and unverified
                options.
              </p>
              <p>
                After extensive research into veterinary CBD science, manufacturing best
                practices, and regulatory requirements, we set out to create a different kind
                of CBD company—one that puts transparency, quality, and compliance first.
              </p>
              <p>
                Today, CANNHEAL is a fully licensed manufacturer and distributor in Texas,
                serving hundreds of retailers, veterinary clinics, and pet owners across the
                state. Every batch we produce is third-party lab tested and verified to be
                100% THC-free, giving our partners and customers complete peace of mind.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Our Mission & Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Safety First
                </h3>
                <p className="text-sm text-text-secondary">
                  Every batch is third-party lab tested for potency, purity, and safety. We
                  guarantee 0.0% THC in all products.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Science-Backed
                </h3>
                <p className="text-sm text-text-secondary">
                  Our formulations are based on published veterinary research and recommended
                  dosing guidelines.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Clean Ingredients
                </h3>
                <p className="text-sm text-text-secondary">
                  Organic, US-grown hemp extracted using CO2 (not chemical solvents). No
                  artificial additives or fillers.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Transparency
                </h3>
                <p className="text-sm text-text-secondary">
                  Complete ingredient lists, accessible lab results, and batch-specific QR
                  codes for instant verification.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Partner Support
                </h3>
                <p className="text-sm text-text-secondary">
                  Dedicated support for our retail and veterinary partners with training,
                  marketing materials, and ongoing education.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  Pet Wellness
                </h3>
                <p className="text-sm text-text-secondary">
                  We're passionate about improving quality of life for pets through safe,
                  effective natural supplements.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Our Commitment</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-text-primary mb-3">
                  To Pet Owners
                </h3>
                <p className="text-text-secondary">
                  We're committed to providing products you can trust for your furry family
                  members. Every bottle contains exactly what the label says—no more, no
                  less—verified by independent labs. We're here to answer your questions and
                  help you find the right products for your pet's needs.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-text-primary mb-3">
                  To Veterinary Professionals
                </h3>
                <p className="text-text-secondary">
                  We're committed to supporting evidence-based veterinary medicine with
                  products you can confidently recommend to clients. We provide access to
                  research, dosing guidelines, and complete lab results so you can make
                  informed decisions for your patients.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-text-primary mb-3">
                  To Retail Partners
                </h3>
                <p className="text-text-secondary">
                  We're committed to helping your business succeed. Beyond competitive
                  wholesale pricing, we provide marketing support, staff training, and the
                  batch-specific QR codes that build customer trust and set your store apart
                  from the competition.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-text-primary mb-3">
                  To Compliance & Safety
                </h3>
                <p className="text-text-secondary">
                  We're committed to operating with full transparency and compliance. As a
                  Texas DSHS licensed manufacturer and distributor, we meet all state
                  requirements and exceed industry standards for quality and safety.
                </p>
              </div>
            </div>
          </div>

          {/* Why Texas */}
          <div className="bg-primary text-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Why We're Based in Texas</h2>
            <p className="text-lg mb-4">
              Texas has some of the strictest hemp regulations in the country—and we see that
              as a good thing. Senate Bill 3 (2023) requires:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Third-party lab testing for every batch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Public access to Certificates of Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Licensing and oversight by the Department of State Health Services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Age verification (21+) for all purchasers</span>
              </li>
            </ul>
            <p>
              These regulations protect consumers and raise the bar for the entire industry.
              We're proud to meet and exceed these standards, and to help educate other states
              as CBD regulation continues to evolve.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Join hundreds of retailers and veterinary professionals who trust CANNHEAL
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/wholesale">
                <Button variant="primary">Apply for Wholesale Account</Button>
              </Link>
              <Link href="/products">
                <Button variant="secondary">Shop Products</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
