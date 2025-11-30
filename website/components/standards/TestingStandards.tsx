'use client'

import { motion } from 'framer-motion'
import { FileCheck, Search, ClipboardCheck, QrCode } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const testingCategories = [
  {
    icon: ClipboardCheck,
    title: 'Potency Testing',
    description: 'Verify exact CBD and cannabinoid content',
    tests: [
      'CBD concentration (mg/mL)',
      'Total cannabinoid profile',
      'CBD vs. THC ratio',
      'Terpene analysis',
    ],
  },
  {
    icon: Search,
    title: 'Purity Testing',
    description: 'Ensure product is free from contaminants',
    tests: [
      'Heavy metals (lead, mercury, arsenic)',
      'Pesticides & herbicides',
      'Microbial contaminants',
      'Residual solvents',
    ],
  },
  {
    icon: FileCheck,
    title: 'Quality Control',
    description: 'Consistent product quality batch to batch',
    tests: [
      'pH level testing',
      'Appearance & color',
      'Viscosity consistency',
      'Stability testing',
    ],
  },
]

export function TestingStandards() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">
              Comprehensive Third-Party Testing
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              Every CANNHEAL product undergoes rigorous testing at independent, ISO 17025
              accredited laboratories. We test for potency, purity, and safety—and we make
              the results public.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lab-results">
                <Button variant="primary">
                  <FileCheck className="w-5 h-5 mr-2" />
                  View Lab Results
                </Button>
              </Link>
              <Button variant="secondary">
                <QrCode className="w-5 h-5 mr-2" />
                Scan Batch QR Code
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">
                  Certificate of Analysis (COA)
                </h3>
                <p className="text-sm text-text-secondary">
                  Every batch comes with a scannable QR code
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Testing Lab</span>
                <span className="font-medium text-text-primary">
                  ISO 17025 Certified
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Testing Frequency</span>
                <span className="font-medium text-text-primary">Every Batch</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-text-secondary">Results Published</span>
                <span className="font-medium text-text-primary">
                  Within 7-10 Days
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-text-secondary">Public Access</span>
                <span className="font-medium text-primary">✓ Available Online</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testing Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {testingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.tests.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-text-tertiary">{test}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
