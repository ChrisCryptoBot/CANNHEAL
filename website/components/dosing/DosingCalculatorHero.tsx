'use client'

import { motion } from 'framer-motion'
import { Calculator, Award, Shield } from 'lucide-react'

export function DosingCalculatorHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Veterinarian-Approved Formula</span>
          </div>

          <h1 className="heading-1 mb-6">
            CBD Dosing <span className="text-accent">Calculator</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find the perfect CBD dosage for your pet based on their weight, condition, and
            individual needs. Our calculator uses veterinary-approved formulas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">0.35mg</div>
              <div className="text-sm text-white/80">Per kg body weight</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">Vet</div>
              <div className="text-sm text-white/80">Approved Formula</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">Safe</div>
              <div className="text-sm text-white/80">Conservative Dosing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
