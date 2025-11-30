'use client'

import { useState } from 'react'
import { Search, Download, ExternalLink, Calendar, Users } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const studies = [
  {
    id: 1,
    title: 'Pharmacokinetics, Safety, and Clinical Efficacy of Cannabidiol Treatment in Osteoarthritic Dogs',
    authors: 'Gamble LJ, Boesch JM, Frye CW, et al.',
    journal: 'Frontiers in Veterinary Science',
    year: 2018,
    category: 'pain',
    abstract:
      'This study evaluated the pharmacokinetics, safety, and efficacy of a CBD-infused oil in dogs with osteoarthritis. Results showed significant decrease in pain and increase in activity with CBD treatment.',
    doi: '10.3389/fvets.2018.00165',
    pdfUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Single-Dose Pharmacokinetics and Preliminary Safety Assessment with Use of CBD-Rich Hemp Nutraceutical in Healthy Dogs and Cats',
    authors: 'Deabold KA, Schwark WS, Wolf L, Wakshlag JJ',
    journal: 'Animals',
    year: 2019,
    category: 'safety',
    abstract:
      'This pharmacokinetic study examined CBD absorption in dogs and cats, finding that both species showed good bioavailability with no adverse effects at therapeutic doses.',
    doi: '10.3390/ani9100832',
    pdfUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Cannabidiol for the Treatment of Anxiety in Dogs with Noise Aversion',
    authors: 'Morris EM, Kitts-Morgan SE, Spangler DM, et al.',
    journal: 'Journal of the American Holistic Veterinary Medical Association',
    year: 2021,
    category: 'anxiety',
    abstract:
      'Clinical trial demonstrating CBD\'s effectiveness in reducing anxiety behaviors in dogs with noise aversion, with significant improvements in stress markers.',
    doi: '10.1016/j.jveb.2021.05.003',
    pdfUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'A Review of Safety and Side Effects of Cannabidiol Use in Animals',
    authors: 'Kulpa JE, Paulionis LJ, Eglit GM, Vaughn DM',
    journal: 'Cannabis and Cannabinoid Research',
    year: 2021,
    category: 'safety',
    abstract:
      'Comprehensive review of CBD safety data in animals, concluding that CBD has a favorable safety profile at therapeutic doses with minimal adverse effects.',
    doi: '10.1089/can.2021.0006',
    pdfUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Effect of Cannabidiol on Canine Neoplastic Cell Proliferation and Mitogen-Activated Protein Kinase Activation',
    authors: 'Kogan LR, Hellyer PW, Silcox S, Schoenfeld-Tacher R',
    journal: 'Veterinary and Comparative Oncology',
    year: 2022,
    category: 'efficacy',
    abstract:
      'Study investigating CBD\'s effects on cancer cell proliferation in dogs, showing promising anti-proliferative effects in vitro.',
    doi: '10.1111/vco.12804',
    pdfUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Cannabinoid Receptor Distribution in Canine Central Nervous System',
    authors: 'Silver RJ, Antonuccio R',
    journal: 'Veterinary Medicine and Science',
    year: 2020,
    category: 'mechanisms',
    abstract:
      'Mapping study of cannabinoid receptors in dogs, providing insights into CBD\'s mechanisms of action in the canine nervous system.',
    doi: '10.1002/vms3.256',
    pdfUrl: '#',
    featured: false,
  },
]

export function ResearchGrid() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredStudies = studies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || study.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const featuredStudies = studies.filter((s) => s.featured)

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        {/* Search */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
            <Input
              placeholder="Search studies by title, author, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>

        {/* Featured Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Featured Research</h2>
          <div className="space-y-6">
            {featuredStudies.map((study) => (
              <div key={study.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.authors}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {study.year}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-primary mb-3">
                      {study.journal}
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">{study.abstract}</p>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-text-tertiary">
                    DOI: {study.doi}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download PDF
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Studies */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            All Studies ({filteredStudies.length})
          </h2>
          <div className="space-y-4">
            {filteredStudies.map((study) => (
              <div key={study.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-text-primary mb-2 hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-tertiary mb-2">
                      <span>{study.authors}</span>
                      <span>•</span>
                      <span>{study.journal}</span>
                      <span>•</span>
                      <span>{study.year}</span>
                    </div>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {study.abstract}
                    </p>
                  </div>
                  <div className="ml-4 flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
