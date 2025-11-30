'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface ProtectedRouteProps {
  children: ReactNode
  requireWholesale?: boolean
  requireAdmin?: boolean
}

export function ProtectedRoute({
  children,
  requireWholesale = false,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/auth/signin')
      return
    }

    if (requireAdmin && session.user.role !== 'ADMIN') {
      router.push('/portal')
      return
    }

    if (requireWholesale && !['WHOLESALE', 'ADMIN'].includes(session.user.role)) {
      router.push('/portal')
      return
    }
  }, [session, status, router, requireAdmin, requireWholesale])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!session) {
    return null
  }

  if (requireAdmin && session.user.role !== 'ADMIN') {
    return null
  }

  if (requireWholesale && !['WHOLESALE', 'ADMIN'].includes(session.user.role)) {
    return null
  }

  return <>{children}</>
}
