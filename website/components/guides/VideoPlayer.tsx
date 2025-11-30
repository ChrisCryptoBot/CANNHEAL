'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface VideoPlayerProps {
  video: {
    id: number
    title: string
    description: string
    videoId: string
  }
  onClose: () => void
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="relative w-full max-w-5xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-white rounded-xl overflow-hidden">
          {/* Video Embed */}
          <div className="aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-3">{video.title}</h2>
            <p className="text-text-secondary">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
