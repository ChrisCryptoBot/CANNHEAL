'use client'

import { useState } from 'react'
import { Play, Clock, Eye } from 'lucide-react'
import { VideoPlayer } from './VideoPlayer'

const videos = [
  // Getting Started
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
    title: 'CBD for Dogs: Getting Started',
    description: 'A comprehensive guide to starting your dog on CBD products.',
    category: 'getting-started',
    duration: '10:15',
    views: '18.5K',
    thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 3,
    title: 'CBD for Cats: What You Need to Know',
    description: 'Special considerations for giving CBD to cats. Important safety information.',
    category: 'getting-started',
    duration: '11:20',
    views: '14.3K',
    thumbnail: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 4,
    title: 'CBD for Horses: Complete Guide',
    description: 'Everything horse owners need to know about CBD for equine wellness.',
    category: 'getting-started',
    duration: '14:45',
    views: '12.1K',
    thumbnail: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },

  // Dosing & Safety
  {
    id: 5,
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
    id: 6,
    title: 'Dosing CBD for Horses: A Veterinarian\'s Guide',
    description: 'Learn proper dosing for horses based on weight and condition.',
    category: 'dosing',
    duration: '13:30',
    views: '9.7K',
    thumbnail: 'https://images.unsplash.com/photo-1589364600-7147a9f00b9d?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 7,
    title: 'Cat-Safe CBD: Avoiding Harmful Ingredients',
    description: 'Critical information about terpenes and essential oils to avoid for cats.',
    category: 'dosing',
    duration: '9:15',
    views: '11.2K',
    thumbnail: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0ee?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },

  // Conditions & Use Cases
  {
    id: 8,
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
    id: 9,
    title: 'CBD for Joint Pain and Arthritis in Dogs',
    description: 'How CBD supports mobility and reduces inflammation in aging dogs.',
    category: 'conditions',
    duration: '11:40',
    views: '16.5K',
    thumbnail: 'https://images.unsplash.com/photo-1601758261049-55d060e1159a?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 10,
    title: 'CBD for Horse Performance & Recovery',
    description: 'Using CBD for post-workout recovery and competition stress in horses.',
    category: 'conditions',
    duration: '15:20',
    views: '8.9K',
    thumbnail: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 11,
    title: 'Managing Equine Trailer Anxiety with CBD',
    description: 'Helping horses stay calm during travel and transport.',
    category: 'conditions',
    duration: '10:30',
    views: '7.3K',
    thumbnail: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 12,
    title: 'CBD for Cats with Behavioral Issues',
    description: 'Addressing anxiety, aggression, and stress in felines.',
    category: 'conditions',
    duration: '9:45',
    views: '10.1K',
    thumbnail: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },

  // Product Reviews
  {
    id: 13,
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
    id: 14,
    title: 'Equine Topicals vs. Oral CBD',
    description: 'Comparing different CBD delivery methods for horses.',
    category: 'products',
    duration: '12:10',
    views: '6.8K',
    thumbnail: 'https://images.unsplash.com/photo-1589364600-7147a9f00b9d?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 15,
    title: 'Why Cats Need Different CBD Formulations',
    description: 'Understanding why dog products are dangerous for cats.',
    category: 'products',
    duration: '8:25',
    views: '13.4K',
    thumbnail: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },

  // Success Stories
  {
    id: 16,
    title: 'Max\'s Journey: From Chronic Pain to Happy Pup',
    description: 'A Golden Retriever\'s transformation using CBD for arthritis.',
    category: 'success',
    duration: '7:15',
    views: '21.3K',
    thumbnail: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 17,
    title: 'Thunder the Show Horse: Competition Recovery',
    description: 'How CBD helps an elite show jumper recover faster.',
    category: 'success',
    duration: '10:50',
    views: '5.9K',
    thumbnail: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 18,
    title: 'Whiskers\' Anxiety Relief: A Cat Owner\'s Story',
    description: 'How CBD helped a rescue cat overcome severe anxiety.',
    category: 'success',
    duration: '6:40',
    views: '14.7K',
    thumbnail: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
  },

  // Vet Q&A
  {
    id: 19,
    title: 'Veterinarian Q&A: CBD Safety',
    description: 'Dr. Sarah Johnson answers common questions about CBD safety for pets.',
    category: 'vet-talks',
    duration: '15:40',
    views: '22.1K',
    thumbnail: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: 20,
    title: 'Equine Vet Discusses CBD for Horses',
    description: 'Dr. Michael Chen on using CBD for equine health and performance.',
    category: 'vet-talks',
    duration: '18:25',
    views: '8.2K',
    thumbnail: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800',
    videoId: 'dQw4w9WgXcQ',
    featured: false,
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
