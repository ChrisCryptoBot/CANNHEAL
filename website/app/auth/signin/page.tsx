import type { Metadata } from 'next'
import { SignInForm } from '@/components/auth/SignInForm'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wholesale Login | CANNHEAL',
  description: 'Log in to your CANNHEAL wholesale account to access exclusive pricing and manage orders.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <div className="relative w-20 h-20">
            <Image
              src="/cannheal-logo.png"
              alt="CANNHEAL Logo"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-text-primary">
          Wholesale Portal Login
        </h2>
        <p className="mt-2 text-center text-sm text-text-secondary">
          Access your wholesale account and exclusive pricing
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignInForm />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-text-tertiary">
                  New to wholesale?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/wholesale"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Apply for a wholesale account →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-text-tertiary">
          <Link href="/auth/forgot-password" className="hover:text-primary">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  )
}
