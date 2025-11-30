'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const mainNavItems = [
  { label: 'Products', href: '/products' },
  { label: 'Our Standards', href: '/our-standards' },
  { label: 'Lab Results', href: '/lab-results' },
  { label: 'For Retailers', href: '/wholesale' },
  { label: 'Resources', href: '/resources' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white text-2xl md:text-3xl font-bold">C</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              CANNHEAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {/* Cart count badge - to be implemented with cart state */}
            </Link>
            <Link
              href="/portal"
              className="btn-ghost flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              <span>Wholesale Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-slide-down">
          <div className="container-custom py-4 space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-secondary hover:bg-background'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-text-secondary hover:bg-background rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </div>
              </Link>
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-text-secondary hover:bg-background rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Wholesale Login</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
