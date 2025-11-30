import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AgeVerification } from '@/components/layout/AgeVerification'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CANNHEAL | THC-Free CBD for Pets - Texas DSHS Licensed',
  description: 'Veterinarian-formulated, third-party tested CBD products for dogs and cats. USDA organic hemp, CO2 extracted. Shop wholesale or retail. Texas compliant.',
  keywords: ['CBD pet products', 'CBD for dogs', 'CBD for cats', 'THC-free CBD', 'Texas CBD', 'pet wellness'],
  openGraph: {
    title: 'CANNHEAL | THC-Free CBD for Pets',
    description: 'Veterinarian-formulated, third-party tested CBD products for dogs and cats.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <AgeVerification />
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
