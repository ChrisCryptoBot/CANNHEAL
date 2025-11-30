'use client'

import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function GuideCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Want More In-Depth Information?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Explore our research library with scientific studies, veterinary articles,
              and comprehensive guides on CBD for pets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research">
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Browse Research Library
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/dosing-calculator">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white/10">
                  Try Dosing Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
