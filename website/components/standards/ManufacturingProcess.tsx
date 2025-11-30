'use client'

import { motion } from 'framer-motion'
import { Leaf, Beaker, Microscope, Package, Truck, CheckCircle2 } from 'lucide-react'

const processSteps = [
  {
    icon: Leaf,
    step: 1,
    title: 'Hemp Sourcing',
    description: 'USDA organic hemp from certified US farms',
    details: [
      'Soil testing verification',
      'Organic certification check',
      'Harvest timing optimization',
      'Quality inspection on arrival',
    ],
  },
  {
    icon: Beaker,
    step: 2,
    title: 'CO2 Extraction',
    description: 'Supercritical CO2 extraction preserves cannabinoids',
    details: [
      'Temperature-controlled process',
      'No chemical solvents',
      'Full-spectrum preservation',
      'THC removal verification',
    ],
  },
  {
    icon: Microscope,
    step: 3,
    title: 'Lab Testing',
    description: 'Independent third-party analysis for safety',
    details: [
      'Potency verification',
      'Contaminant screening',
      'Terpene profiling',
      'Heavy metal testing',
    ],
  },
  {
    icon: Package,
    step: 4,
    title: 'Formulation',
    description: 'Precision blending with carrier oils',
    details: [
      'Exact CBD measurement',
      'Quality carrier oils',
      'Flavor addition (if applicable)',
      'Batch consistency check',
    ],
  },
  {
    icon: CheckCircle2,
    step: 5,
    title: 'Quality Control',
    description: 'Final inspection before bottling',
    details: [
      'Visual inspection',
      'Weight verification',
      'Label accuracy check',
      'Seal integrity test',
    ],
  },
  {
    icon: Truck,
    step: 6,
    title: 'Packaging & Distribution',
    description: 'Safe packaging and fulfillment',
    details: [
      'Child-resistant packaging',
      'QR code application',
      'Lot number tracking',
      'Temperature-controlled storage',
    ],
  },
]

export function ManufacturingProcess() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            Our Manufacturing Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            From farm to bottle, every step is carefully controlled and documented to ensure
            consistency, quality, and safety
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-primary/20 hidden md:block" />
              )}

              <div className="flex gap-8 mb-8 md:mb-12">
                {/* Icon & Step Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      {step.step}
                    </div>
                    <div className="absolute -inset-2 bg-primary/10 rounded-full -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary mb-4">{step.description}</p>

                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-text-tertiary">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary text-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Quality Assurance at Every Step
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Our facility maintains strict Standard Operating Procedures (SOPs) for each phase
            of production. Every batch is tracked from source to sale with complete
            documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Batch traceability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Equipment calibration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Personnel training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Environmental monitoring</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
