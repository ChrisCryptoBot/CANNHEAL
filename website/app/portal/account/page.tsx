import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import type { Metadata } from 'next'
import { PortalLayout } from '@/components/portal/PortalLayout'
import { AccountManagement } from '@/components/portal/AccountManagement'

export const metadata: Metadata = {
  title: 'Account | Wholesale Portal | CANNHEAL',
  description: 'Manage your wholesale account settings.',
}

export default async function AccountPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <PortalLayout>
      <AccountManagement user={session.user} />
    </PortalLayout>
  )
}
