'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle2, Sparkles } from 'lucide-react'

export function StandardsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Setting the Industry Standard</span>
          </motion.div>

          <h1 className="heading-1 mb-6">
            Our Unwavering Commitment to{' '}
            <span className="text-accent">Quality & Safety</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Every CANNHEAL product meets the highest standards of purity, potency, and safety.
            We don't just meet industry standards—we exceed them.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Third-Party Tested</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">0%</div>
              <div className="text-sm text-white/80">THC Content</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">USDA</div>
              <div className="text-sm text-white/80">Organic Hemp</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">TX DSHS</div>
              <div className="text-sm text-white/80">Licensed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
    </section>
  )
}
