'use client'

import { useState, useMemo } from 'react'
import { FAQAccordion } from '@/components/faq/FAQAccordion'
import { Search, HelpCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'

const faqData = [
  {
    category: 'Product Information',
    question: 'What is CBD and how does it work for pets?',
    answer:
      'CBD (cannabidiol) is a naturally occurring compound found in hemp plants. It interacts with the endocannabinoid system present in all mammals, which helps regulate functions like pain, mood, appetite, and immune response. CBD is non-psychoactive and does not produce a "high."',
  },
  {
    category: 'Product Information',
    question: 'Is CBD safe for my pet?',
    answer:
      'Yes, when sourced from reputable manufacturers. CANNHEAL products are specifically formulated for pets, third-party lab tested, and completely THC-free. However, we always recommend consulting with your veterinarian before starting any new supplement, especially if your pet has existing health conditions or takes medications.',
  },
  {
    category: 'Product Information',
    question: 'What is the difference between your CBD oils, chews, and topicals?',
    answer:
      'CBD oils are liquid tinctures that can be added to food or given directly. They typically have the fastest absorption. CBD chews are flavored treats that pets enjoy, making them easy to administer. Topical products like balms and sprays are applied directly to the skin for localized relief. The best choice depends on your pet\'s needs and preferences.',
  },
  {
    category: 'Product Information',
    question: 'Are your products THC-free?',
    answer:
      'Yes, absolutely. Every batch of CANNHEAL products is third-party lab tested and verified to contain 0.0% THC. We provide Certificates of Analysis (COAs) for complete transparency. You can search any batch number on our Lab Results page.',
  },
  {
    category: 'Dosing & Usage',
    question: 'How much CBD should I give my pet?',
    answer:
      'The general recommendation is 0.2-0.5 mg of CBD per kilogram of body weight, once or twice daily. We provide a dosing calculator on each product page to help you determine the right amount. Start with a lower dose and gradually increase as needed. Always consult your veterinarian for personalized guidance.',
  },
  {
    category: 'Dosing & Usage',
    question: 'How long does it take to see results?',
    answer:
      'Some pet owners notice effects within 30-60 minutes for acute issues like anxiety. For chronic conditions like arthritis or inflammation, it may take 2-4 weeks of consistent use to see full benefits. Results vary based on the pet, condition being addressed, and dosage.',
  },
  {
    category: 'Dosing & Usage',
    question: 'Can I give CBD to my pet every day?',
    answer:
      'Yes, CBD can be given daily as a supplement. Many pet owners use CBD as part of their pet\'s daily wellness routine. For chronic conditions, daily use often provides the best results. There is no evidence of tolerance development with CBD.',
  },
  {
    category: 'Dosing & Usage',
    question: 'Can I give my pet too much CBD?',
    answer:
      'CBD has a very high safety profile. While it\'s difficult to overdose on CBD, giving too much may cause drowsiness, dry mouth, or digestive upset. If you accidentally give too much, your pet may be more sleepy than usual but should recover within a few hours. Always follow dosing guidelines and consult your vet if concerned.',
  },
  {
    category: 'Safety & Side Effects',
    question: 'Are there any side effects?',
    answer:
      'CBD is generally very well tolerated by pets. Potential side effects are rare and mild, including: drowsiness, dry mouth, lowered blood pressure, or digestive upset. These typically occur with higher doses. If your pet experiences any adverse effects, reduce the dosage or discontinue use and consult your veterinarian.',
  },
  {
    category: 'Safety & Side Effects',
    question: 'Can CBD interact with my pet\'s medications?',
    answer:
      'CBD can interact with certain medications, particularly those metabolized by the liver. If your pet takes any medications, especially blood thinners, anti-seizure medications, or NSAIDs, consult your veterinarian before using CBD. Your vet may adjust medication dosages or recommend monitoring.',
  },
  {
    category: 'Safety & Side Effects',
    question: 'Is CBD legal in Texas?',
    answer:
      'Yes. Hemp-derived CBD products with 0.3% THC or less are legal in Texas under House Bill 1325 (2019) and regulated by Senate Bill 3 (2023). CANNHEAL is fully licensed by the Texas Department of State Health Services (DSHS) as both a manufacturer and distributor. You can view our licenses on our Texas Compliance page.',
  },
  {
    category: 'Ordering & Shipping',
    question: 'Do you ship to my state?',
    answer:
      'We currently ship to all addresses within Texas. We are working on expanding to additional states in the near future. Sign up for our newsletter to be notified when we expand shipping.',
  },
  {
    category: 'Ordering & Shipping',
    question: 'How long does shipping take?',
    answer:
      'Most orders ship within 1-2 business days and arrive within 3-5 business days via USPS or UPS. We offer expedited shipping options at checkout for faster delivery.',
  },
  {
    category: 'Ordering & Shipping',
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, contact us within 30 days for a full refund or exchange. Products must be at least 50% full to qualify for a refund.',
  },
  {
    category: 'Wholesale',
    question: 'Do you offer wholesale pricing?',
    answer:
      'Yes! We offer wholesale accounts to retailers, veterinary clinics, and distributors with up to 40% off retail pricing, free shipping, and Net 30 payment terms for qualified accounts. Apply for a wholesale account on our Wholesale page.',
  },
  {
    category: 'Wholesale',
    question: 'What are the wholesale minimum order requirements?',
    answer:
      'The minimum order for Standard tier wholesale accounts is $250. Premium tier requires $500 minimum, and Elite tier requires $1,000 minimum. Higher tiers receive better pricing and payment terms.',
  },
  {
    category: 'Wholesale',
    question: 'Do I need a license to sell CBD products in my retail store?',
    answer:
      'No. In Texas, retailers do not need a license to sell hemp-derived CBD products. Only manufacturers and distributors (like CANNHEAL) need Texas DSHS licensing. We handle all compliance requirements and provide you with Certificates of Analysis for your customers.',
  },
  {
    category: 'Lab Testing',
    question: 'How can I verify the lab results for my product?',
    answer:
      'Every CANNHEAL product has a batch number printed on the label. You can search this batch number on our Lab Results page to view the complete Certificate of Analysis (COA) from our third-party testing lab. Many products also include a QR code that links directly to the results.',
  },
  {
    category: 'Lab Testing',
    question: 'What does third-party testing mean?',
    answer:
      'Third-party testing means an independent, ISO-certified laboratory (not affiliated with CANNHEAL) tests each batch for potency, purity, and safety. This ensures unbiased results. Our products are tested for cannabinoid content, heavy metals, pesticides, and microbials.',
  },
  {
    category: 'Lab Testing',
    question: 'What is a Certificate of Analysis (COA)?',
    answer:
      'A Certificate of Analysis is a document from a testing laboratory that shows the exact contents of a product batch. It confirms CBD potency, verifies 0.0% THC, and proves the product is free from contaminants like heavy metals, pesticides, and harmful bacteria.',
  },
]

const categories = Array.from(new Set(faqData.map((item) => item.category)))

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFAQs = useMemo(() => {
    let filtered = faqData

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text-secondary">
            Find answers to common questions about CANNHEAL CBD products for pets
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-white text-text-primary hover:bg-gray-50'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-primary hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <FAQAccordion items={filteredFAQs} />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <p className="text-text-secondary text-lg">
                No questions found matching your search. Try a different search term or
                browse all categories.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-primary text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6">
            Our team is here to help. Contact us and we'll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
