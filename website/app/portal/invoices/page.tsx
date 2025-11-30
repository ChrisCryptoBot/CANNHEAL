import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import type { Metadata } from 'next'
import { PortalLayout } from '@/components/portal/PortalLayout'
import { InvoiceList } from '@/components/portal/InvoiceList'

export const metadata: Metadata = {
  title: 'Invoices | Wholesale Portal | CANNHEAL',
  description: 'View and download your invoices.',
}

export default async function InvoicesPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <PortalLayout>
      <InvoiceList userId={session.user.id} />
    </PortalLayout>
  )
}
