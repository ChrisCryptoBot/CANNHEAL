'use client'

import { useState } from 'react'
import {
  Play,
  Pill,
  Heart,
  Stethoscope,
  Droplet,
  Dog,
  Settings,
  BookOpen
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Videos', icon: BookOpen, count: 25 },
  { id: 'getting-started', name: 'Getting Started', icon: Play, count: 5 },
  { id: 'dosing', name: 'Dosing & Safety', icon: Pill, count: 4 },
  { id: 'administration', name: 'Administration', icon: Droplet, count: 3 },
  { id: 'conditions', name: 'Health Conditions', icon: Heart, count: 6 },
  { id: 'products', name: 'Product Selection', icon: Settings, count: 4 },
  { id: 'pet-specific', name: 'Pet-Specific', icon: Dog, count: 2 },
  { id: 'vet-talks', name: 'Vet Talks', icon: Stethoscope, count: 3 },
]

interface VideoCategoriesProps {
  onCategoryChange?: (category: string) => void
}

export function VideoCategories({ onCategoryChange }: VideoCategoriesProps) {
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
