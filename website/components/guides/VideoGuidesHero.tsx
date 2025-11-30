'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, GraduationCap } from 'lucide-react'

export function VideoGuidesHero() {
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
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Free Educational Resources</span>
          </div>

          <h1 className="heading-1 mb-6">
            Video Guides & <span className="text-accent">Tutorials</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Learn everything about CBD for pets from veterinary experts. Watch step-by-step
            guides on dosing, administration, and choosing the right products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm text-white/80">Video Guides</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">8</div>
              <div className="text-sm text-white/80">Categories</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Free Access</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
