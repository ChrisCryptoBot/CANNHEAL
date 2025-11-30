import Link from 'next/link'
import { BookOpen, FileText, Video, Award, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Resources & Education - CANNHEAL',
  description:
    'Educational resources about CBD for pets, including research articles, dosing guides, and wellness tips.',
}

// Sample blog posts - in production, these would come from the database
const blogPosts = [
  {
    id: '1',
    slug: 'cbd-for-dog-arthritis-guide',
    title: 'CBD for Dog Arthritis: A Complete Guide',
    excerpt:
      'Learn how CBD may help manage arthritis pain in dogs, including dosing recommendations and what to expect.',
    category: 'Health & Wellness',
    publishedAt: '2025-01-15',
    imageUrl: '/blog/arthritis-guide.jpg',
    readTime: '8 min read',
  },
  {
    id: '2',
    slug: 'understanding-cbd-dosing-pets',
    title: 'Understanding CBD Dosing for Pets: What Every Owner Should Know',
    excerpt:
      'A veterinarian-approved guide to determining the right CBD dose for your pet based on weight and condition.',
    category: 'Dosing Guide',
    publishedAt: '2025-01-10',
    imageUrl: '/blog/dosing-guide.jpg',
    readTime: '6 min read',
  },
  {
    id: '3',
    slug: 'cbd-vs-thc-pets',
    title: 'CBD vs THC for Pets: Critical Differences Every Owner Must Know',
    excerpt:
      'Why THC is dangerous for pets and how to ensure you\'re using safe, THC-free CBD products.',
    category: 'Safety',
    publishedAt: '2025-01-05',
    imageUrl: '/blog/cbd-vs-thc.jpg',
    readTime: '5 min read',
  },
  {
    id: '4',
    slug: 'how-to-read-coa',
    title: 'How to Read a Certificate of Analysis (COA) for CBD Products',
    excerpt:
      'Learn what all those numbers mean on a COA and how to verify product quality and safety.',
    category: 'Product Education',
    publishedAt: '2024-12-28',
    imageUrl: '/blog/read-coa.jpg',
    readTime: '7 min read',
  },
  {
    id: '5',
    slug: 'cbd-cat-anxiety',
    title: 'Using CBD for Cat Anxiety: Research and Recommendations',
    excerpt:
      'Evidence-based information on using CBD to help anxious cats, from a veterinary perspective.',
    category: 'Health & Wellness',
    publishedAt: '2024-12-20',
    imageUrl: '/blog/cat-anxiety.jpg',
    readTime: '9 min read',
  },
  {
    id: '6',
    slug: 'choosing-quality-cbd',
    title: '5 Red Flags When Choosing CBD Products for Your Pet',
    excerpt:
      'Protect your pet by learning to identify low-quality CBD products and avoid common industry tricks.',
    category: 'Buying Guide',
    publishedAt: '2024-12-15',
    imageUrl: '/blog/red-flags.jpg',
    readTime: '6 min read',
  },
]

const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Resources & Education
          </h1>
          <p className="text-lg text-text-secondary">
            Evidence-based information about CBD for pets, written by veterinary professionals
            and backed by research
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/resources/dosing-calculator">
            <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-xl text-text-primary mb-2">Dosing Calculator</h3>
              <p className="text-text-secondary text-sm mb-4">
                Calculate the right CBD dose for your pet based on weight and condition
              </p>
              <span className="text-primary font-semibold flex items-center gap-2">
                Use Calculator <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>

          <Link href="/resources/research-library">
            <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-xl text-text-primary mb-2">Research Library</h3>
              <p className="text-text-secondary text-sm mb-4">
                Access published veterinary studies on CBD for various pet health conditions
              </p>
              <span className="text-primary font-semibold flex items-center gap-2">
                Browse Studies <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>

          <Link href="/resources/video-guides">
            <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
              <Video className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-xl text-text-primary mb-2">Video Guides</h3>
              <p className="text-text-secondary text-sm mb-4">
                Watch step-by-step guides on administering CBD and understanding lab results
              </p>
              <span className="text-primary font-semibold flex items-center gap-2">
                Watch Videos <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg font-medium bg-primary text-white">
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg font-medium bg-white text-text-primary hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/resources/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  {/* Placeholder for blog post image */}
                  <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                    <FileText className="w-16 h-16" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-secondary">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{formatDate(post.publishedAt)}</span>
                    <span className="text-primary font-semibold flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-primary text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research, product updates, and exclusive
            educational content about CBD for pets.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white/80 mt-3">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  )
}
