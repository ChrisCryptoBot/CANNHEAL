import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import type { Metadata } from 'next'
import { PortalLayout } from '@/components/portal/PortalLayout'
import { OrderHistory } from '@/components/portal/OrderHistory'

export const metadata: Metadata = {
  title: 'Orders | Wholesale Portal | CANNHEAL',
  description: 'View and manage your wholesale orders.',
}

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <PortalLayout>
      <OrderHistory userId={session.user.id} />
    </PortalLayout>
  )
}
