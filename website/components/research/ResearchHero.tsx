'use client'

import { motion } from 'framer-motion'
import { BookOpen, FileText, Award } from 'lucide-react'

export function ResearchHero() {
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
            <span className="text-sm font-medium">Evidence-Based Information</span>
          </div>

          <h1 className="heading-1 mb-6">
            Research <span className="text-accent">Library</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Access peer-reviewed studies, clinical trials, and veterinary research on CBD
            for pets. All our claims are backed by science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-white/80">Research Studies</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm text-white/80">Clinical Trials</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Peer-Reviewed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
