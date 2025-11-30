import type { Metadata } from 'next'
import { VideoGuidesHero } from '@/components/guides/VideoGuidesHero'
import { VideoCategories } from '@/components/guides/VideoCategories'
import { VideoGrid } from '@/components/guides/VideoGrid'
import { GuideCTA } from '@/components/guides/GuideCTA'

export const metadata: Metadata = {
  title: 'Video Guides | CANNHEAL - Learn About CBD for Pets',
  description:
    'Watch our comprehensive video guides on CBD for pets. Learn about dosing, administration, product selection, and more from veterinary experts.',
  openGraph: {
    title: 'Video Guides | CANNHEAL',
    description: 'Expert video guides on CBD for pets',
    type: 'website',
  },
}

export default function VideoGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <VideoGuidesHero />
      <VideoCategories />
      <VideoGrid />
      <GuideCTA />
    </div>
  )
}
