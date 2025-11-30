'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Building2, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    title: 'Texas DSHS Licensed',
    number: 'License #CHP-XXXXX',
    description:
      'Licensed by the Texas Department of State Health Services as a Consumable Hemp Product Manufacturer.',
    requirements: [
      'Annual facility inspections',
      'Product testing verification',
      'Labeling compliance',
      'Record keeping standards',
    ],
  },
  {
    icon: Building2,
    title: 'FDA Registered Facility',
    number: 'Registration Active',
    description:
      'Our manufacturing facility is registered with the FDA and follows Current Good Manufacturing Practices (cGMP).',
    requirements: [
      'Sanitation protocols',
      'Quality control systems',
      'Personnel training',
      'Equipment maintenance',
    ],
  },
  {
    icon: FileText,
    title: 'USDA Organic Certified',
    number: 'Hemp Source Verified',
    description:
      'Our hemp suppliers maintain USDA organic certification, ensuring clean, sustainable farming practices.',
    requirements: [
      'No synthetic pesticides',
      'No GMO seeds',
      'Soil health standards',
      'Crop rotation practices',
    ],
  },
  {
    icon: CheckCircle2,
    title: '2018 Farm Bill Compliant',
    number: 'Federally Legal',
    description:
      'All products contain less than 0.3% THC and comply with federal hemp regulations under the 2018 Farm Bill.',
    requirements: [
      'THC testing verification',
      'Hemp source documentation',
      'Interstate commerce eligible',
      'Legal in all 50 states',
    ],
  },
]

export function ComplianceCertifications() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            We maintain all required licenses and certifications to ensure legal compliance and
            product safety at every level
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-medium text-primary">{cert.number}</div>
                </div>
              </div>

              <p className="text-text-secondary mb-4">{cert.description}</p>

              <div className="border-t border-border pt-4">
                <div className="text-sm font-semibold text-text-primary mb-3">
                  Key Requirements:
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {cert.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-tertiary">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 text-center"
        >
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-text-primary mb-3">
            Compliance is Our Foundation
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            We don't just meet regulatory requirements—we exceed them. Our compliance team
            stays current with evolving regulations to ensure every product is safe, legal,
            and effective.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-text-tertiary">Annual audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-text-tertiary">Documentation tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-text-tertiary">Regulatory monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-text-tertiary">Staff training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
