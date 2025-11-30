'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take for CBD to work in pets?',
    answer:
      'CBD can start showing effects within 30-60 minutes for acute situations like anxiety. However, for chronic conditions such as arthritis or inflammation, it typically takes 2-4 weeks of consistent dosing to see optimal results, with full benefits often appearing after 4-6 weeks.',
  },
  {
    question: 'Can I give my pet too much CBD?',
    answer:
      'While CBD has a very high safety margin, giving too much can cause side effects like drowsiness, dry mouth, or digestive upset. Our calculator uses conservative, veterinary-approved dosing. Always start low and increase gradually. If you suspect an overdose, contact your veterinarian.',
  },
  {
    question: 'Should I give CBD with or without food?',
    answer:
      'CBD is best absorbed when given with food, particularly foods containing healthy fats. This can increase bioavailability by up to 500%. Give CBD oil or chews with your pet\'s regular meals for optimal absorption.',
  },
  {
    question: 'Can CBD interact with my pet\'s medications?',
    answer:
      'Yes, CBD can interact with certain medications, particularly those metabolized by the liver (drugs with "grapefruit warnings"). Always consult your veterinarian before starting CBD if your pet takes other medications, especially anti-seizure drugs, blood thinners, or NSAIDs.',
  },
  {
    question: 'What if the recommended dose doesn\'t work?',
    answer:
      'Every pet responds differently to CBD. If you don\'t see results after 4-6 weeks at the recommended dose, you can gradually increase by 25-50% increments every 1-2 weeks until you achieve desired effects. Some pets may need doses above the standard recommendation. Consult your vet for guidance.',
  },
  {
    question: 'Is the dosing different for dogs vs. cats?',
    answer:
      'The base formula (0.35mg per kg) is similar for both species, but cats may be more sensitive to CBD and often do better starting at the lower end of the dosing range. Our calculator accounts for this. Cats also metabolize CBD differently, so twice-daily dosing is often more effective.',
  },
]

export function DosingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Dosing FAQs</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between text-left"
                >
                  <span className="font-bold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
