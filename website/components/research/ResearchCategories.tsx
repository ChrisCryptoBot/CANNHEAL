'use client'

import { useState } from 'react'
import {
  FileText,
  Heart,
  Brain,
  Activity,
  Shield,
  Pill,
  Stethoscope,
  FlaskConical,
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Research', icon: FileText, count: 52 },
  { id: 'safety', name: 'Safety & Toxicity', icon: Shield, count: 12 },
  { id: 'efficacy', name: 'Efficacy Studies', icon: Activity, count: 15 },
  { id: 'pain', name: 'Pain Management', icon: Heart, count: 8 },
  { id: 'anxiety', name: 'Anxiety & Behavior', icon: Brain, count: 9 },
  { id: 'pharmacology', name: 'Pharmacology', icon: Pill, count: 6 },
  { id: 'veterinary', name: 'Veterinary Trials', icon: Stethoscope, count: 7 },
  { id: 'mechanisms', name: 'Mechanisms', icon: FlaskConical, count: 5 },
]

interface ResearchCategoriesProps {
  onCategoryChange?: (category: string) => void
}

export function ResearchCategories({ onCategoryChange }: ResearchCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="container-custom">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-white'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
