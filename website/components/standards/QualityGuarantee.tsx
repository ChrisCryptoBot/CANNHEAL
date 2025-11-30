'use client'

import { motion } from 'framer-motion'
import { Shield, RefreshCw, Award, HeartHandshake } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function QualityGuarantee() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="heading-2 mb-4">Our Quality Guarantee</h2>
            <p className="text-lg text-text-secondary">
              We stand behind every product with an unconditional quality guarantee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Not satisfied? Return any unopened product within 30 days for a full refund,
                    no questions asked.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Potency Guarantee
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Every product contains the exact CBD amount stated on the label, verified by
                    third-party testing. Guaranteed.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Purity Guarantee
                  </h3>
                  <p className="text-sm text-text-secondary">
                    100% THC-free, no heavy metals, no pesticides, no microbial contaminants.
                    Every batch is tested.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Customer Support
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Questions about dosing, products, or your order? Our team responds within 24
                    hours, guaranteed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Experience the CANNHEAL Difference
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our unwavering commitment to quality means you can trust every product to deliver
              safe, effective results for your pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button variant="primary" className="w-full sm:w-auto">
                  Shop Products
                </Button>
              </Link>
              <Link href="/lab-results">
                <Button variant="secondary" className="w-full sm:w-auto">
                  View Lab Results
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
