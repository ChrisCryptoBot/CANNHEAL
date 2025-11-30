'use client'

import { useState } from 'react'
import { Play, Clock, Eye } from 'lucide-react'
import { VideoPlayer } from './VideoPlayer'

const videos = [
  {
    id: 1,
    title: 'CBD for Pets: Complete Beginner\'s Guide',
    description: 'Everything you need to know about starting your pet on CBD therapy.',
    category: 'getting-started',
    duration: '12:30',
    views: '15.2K',
    thumbnail: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
    videoId: 'dQw4w9WgXcQ', // Replace with real video IDs
    featured: true,
  },
  {
    id: 2,
    title: 'How to Calculate the Right CBD Dosage',
    description: 'Step-by-step guide to dosing based on your pet\'s weight and condition.',
    category: 'dosing',
    duration: '8:45',
    views: '12.8K',
    thumbnail: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 3,
    title: 'Administering CBD Oil to Dogs',
    description: 'Practical tips for giving CBD oil to your dog easily and effectively.',
    category: 'administration',
    duration: '6:20',
    views: '10.5K',
    thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 4,
    title: 'CBD for Pet Anxiety: What to Expect',
    description: 'Understanding how CBD helps with anxiety and what results to expect.',
    category: 'conditions',
    duration: '10:15',
    views: '18.3K',
    thumbnail: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 5,
    title: 'Choosing Between CBD Oils, Chews, and Topicals',
    description: 'Learn which CBD product format is best for your pet\'s needs.',
    category: 'products',
    duration: '9:30',
    views: '9.2K',
    thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 6,
    title: 'Veterinarian Q&A: CBD Safety',
    description: 'Dr. Sarah Johnson answers common questions about CBD safety for pets.',
    category: 'vet-talks',
    duration: '15:40',
    views: '22.1K',
    thumbnail: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
]

export function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredVideos = categoryFilter === 'all'
    ? videos
    : videos.filter((v) => v.category === categoryFilter)

  const featuredVideos = videos.filter((v) => v.featured)

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        {/* Featured Videos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Featured Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredVideos.slice(0, 2).map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group text-left"
              >
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">{video.description}</p>
                <div className="flex items-center gap-4 text-xs text-text-tertiary">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views} views
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Videos */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">All Videos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group text-left"
              >
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-text-tertiary">
                  <Eye className="w-3 h-3" />
                  {video.views} views
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <VideoPlayer
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  )
}
