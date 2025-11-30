'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, TrendingUp, Heart } from 'lucide-react'
import Image from 'next/image'

const sourcingPrinciples = [
  {
    icon: MapPin,
    title: 'US-Grown Hemp Only',
    description:
      'We exclusively source from American hemp farms to ensure quality control and support local agriculture.',
  },
  {
    icon: Users,
    title: 'Farm Partnerships',
    description:
      'Long-term relationships with select farms allow us to maintain consistent quality and fair pricing.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Practices',
    description:
      'Our partner farms use regenerative agriculture techniques that improve soil health and reduce environmental impact.',
  },
  {
    icon: Heart,
    title: 'Ethical Standards',
    description:
      'Fair labor practices, living wages, and safe working conditions are non-negotiable in our supply chain.',
  },
]

const farmRegions = [
  { state: 'Colorado', focus: 'High-altitude, mineral-rich soil' },
  { state: 'Oregon', focus: 'Coastal climate, organic practices' },
  { state: 'Kentucky', focus: 'Historic hemp region, deep expertise' },
]

export function SourcingStandards() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Responsible Sourcing Standards</h2>
            <p className="text-lg text-text-secondary mb-6">
              Quality starts at the source. We partner with certified organic hemp farms across
              the United States that share our commitment to purity, sustainability, and ethical
              practices.
            </p>

            <div className="space-y-4">
              {sourcingPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Our Partner Farm Regions
            </h3>

            <div className="space-y-4 mb-6">
              {farmRegions.map((region) => (
                <div
                  key={region.state}
                  className="flex items-center justify-between p-4 bg-white rounded-lg"
                >
                  <div>
                    <div className="font-bold text-text-primary">{region.state}</div>
                    <div className="text-sm text-text-tertiary">{region.focus}</div>
                  </div>
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary mb-1">
                    Farm Visits & Audits
                  </div>
                  <p className="text-sm text-text-secondary">
                    Our quality team visits each partner farm annually to verify growing
                    practices, inspect facilities, and maintain relationships.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certification Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Farm Certification Requirements
            </h3>
            <p className="text-white/90 mb-8">
              Before we partner with any farm, they must meet our strict certification criteria
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">USDA Organic</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-sm text-white/80">Pesticides Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1x</div>
                <div className="text-sm text-white/80">Annual Audit</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
