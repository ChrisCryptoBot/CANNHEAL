import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import type { Metadata } from 'next'
import { PortalLayout } from '@/components/portal/PortalLayout'
import { DashboardOverview } from '@/components/portal/DashboardOverview'

export const metadata: Metadata = {
  title: 'Wholesale Portal | CANNHEAL',
  description: 'Manage your wholesale account, view orders, and access exclusive pricing.',
}

export default async function PortalPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <PortalLayout>
      <DashboardOverview user={session.user} />
    </PortalLayout>
  )
}
