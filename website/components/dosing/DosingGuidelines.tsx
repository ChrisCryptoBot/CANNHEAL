'use client'

import { Scale, Clock, Droplet, Heart } from 'lucide-react'

const guidelines = [
  {
    icon: Scale,
    title: 'Start Low, Go Slow',
    description:
      'Begin with 25-50% of the recommended dose for the first 3-7 days. Gradually increase until you achieve desired effects.',
  },
  {
    icon: Clock,
    title: 'Be Patient',
    description:
      'CBD can take 4-6 weeks to reach full effectiveness, especially for chronic conditions. Don\'t increase dosage too quickly.',
  },
  {
    icon: Droplet,
    title: 'Consistency is Key',
    description:
      'Give CBD at the same time each day with food. Consistent dosing leads to better results and stable blood levels.',
  },
  {
    icon: Heart,
    title: 'Monitor & Adjust',
    description:
      'Keep a journal of your pet\'s symptoms and behavior. Adjust dosage based on their response and your vet\'s guidance.',
  },
]

export function DosingGuidelines() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-2 mb-4">Dosing Best Practices</h2>
          <p className="text-lg text-text-secondary">
            Follow these evidence-based guidelines for safe and effective CBD dosing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {guidelines.map((guideline) => (
            <div key={guideline.title} className="card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <guideline.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {guideline.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {guideline.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
