import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import type { Metadata } from 'next'
import { PortalLayout } from '@/components/portal/PortalLayout'
import { WholesaleProducts } from '@/components/portal/WholesaleProducts'

export const metadata: Metadata = {
  title: 'Products | Wholesale Portal | CANNHEAL',
  description: 'Browse products with wholesale pricing.',
}

export default async function ProductsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <PortalLayout>
      <WholesaleProducts />
    </PortalLayout>
  )
}
