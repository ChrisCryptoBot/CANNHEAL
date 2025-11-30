'use client'

import { motion } from 'framer-motion'
import {
  Beaker,
  Shield,
  Leaf,
  Microscope,
  Award,
  HeartPulse,
} from 'lucide-react'

const pillars = [
  {
    icon: Beaker,
    title: 'CO2 Extraction',
    description:
      'We use supercritical CO2 extraction—the gold standard in CBD processing. This method preserves beneficial compounds while eliminating harmful solvents.',
    benefits: ['No chemical residues', 'Full-spectrum benefits', 'Environmentally safe'],
  },
  {
    icon: Microscope,
    title: 'Third-Party Lab Testing',
    description:
      'Every batch is tested by independent, ISO-certified laboratories. We verify potency, purity, and safety before any product reaches your pet.',
    benefits: ['Potency verification', 'Contaminant screening', 'Batch traceability'],
  },
  {
    icon: Leaf,
    title: 'USDA Organic Hemp',
    description:
      'Our hemp is sourced exclusively from USDA-certified organic farms in the United States. No pesticides, herbicides, or synthetic fertilizers.',
    benefits: ['US-grown hemp', 'Certified organic', 'Sustainable farming'],
  },
  {
    icon: Shield,
    title: 'THC-Free Guarantee',
    description:
      'We use broad-spectrum CBD with 0.0% THC. Our rigorous testing ensures your pet gets all the benefits without any psychoactive compounds.',
    benefits: ['Completely THC-free', 'Safe for all pets', 'Legal in all 50 states'],
  },
  {
    icon: Award,
    title: 'GMP Certified',
    description:
      'Our facility follows Good Manufacturing Practices (GMP) as outlined by the FDA. Every step meets pharmaceutical-grade quality standards.',
    benefits: ['FDA guidelines', 'Quality control', 'Consistent formulations'],
  },
  {
    icon: HeartPulse,
    title: 'Veterinarian Formulated',
    description:
      'Developed in collaboration with licensed veterinarians to ensure optimal dosing, bioavailability, and safety for dogs and cats.',
    benefits: ['Vet-approved dosing', 'Species-specific', 'Science-backed'],
  },
]

export function QualityPillars() {
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
            Six Pillars of Quality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Our comprehensive approach to quality ensures every product meets the highest standards
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {pillar.title}
                </h3>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-2">
                  {pillar.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-text-tertiary"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
