'use client'

import { ShoppingBag, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function DosingCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8">
            <ShoppingBag className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6">
              Browse our THC-free, third-party tested CBD products formulated specifically
              for pets.
            </p>
            <Link href="/products">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Shop Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-accent to-yellow-600 text-white rounded-2xl p-8">
            <BookOpen className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Learn More</h3>
            <p className="text-white/90 mb-6">
              Watch our video guides and read scientific research on CBD for pets.
            </p>
            <Link href="/guides">
              <Button variant="secondary" className="bg-white text-accent hover:bg-gray-100">
                Educational Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
