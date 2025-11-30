'use client'

import { TrendingUp, ShoppingBag, DollarSign, Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface DashboardOverviewProps {
  user: {
    name?: string | null
    email?: string | null
    role?: string
  }
}

const stats = [
  {
    name: 'Total Orders',
    value: '0',
    icon: ShoppingBag,
    change: '+0%',
    changeType: 'neutral',
  },
  {
    name: 'Total Spent',
    value: '$0.00',
    icon: DollarSign,
    change: '+0%',
    changeType: 'neutral',
  },
  {
    name: 'Active Products',
    value: '0',
    icon: Package,
    change: '0 in stock',
    changeType: 'neutral',
  },
  {
    name: 'Avg Order Value',
    value: '$0.00',
    icon: TrendingUp,
    change: '+0%',
    changeType: 'neutral',
  },
]

const recentOrders = [
  // Placeholder - will be replaced with real data
]

export function DashboardOverview({ user }: DashboardOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          Welcome back, {user.name?.split(' ')[0] || 'there'}!
        </h1>
        <p className="mt-2 text-text-secondary">
          Here's what's happening with your wholesale account
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-tertiary">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-bold text-text-primary">
                  {stat.value}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm ${
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : stat.changeType === 'negative'
                    ? 'text-red-600'
                    : 'text-text-tertiary'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-lg font-bold text-text-primary mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/portal/products">
            <Button variant="secondary" className="w-full">
              Browse Products
            </Button>
          </Link>
          <Link href="/portal/orders">
            <Button variant="secondary" className="w-full">
              View Orders
            </Button>
          </Link>
          <Link href="/portal/invoices">
            <Button variant="secondary" className="w-full">
              Download Invoices
            </Button>
          </Link>
          <Link href="/portal/account">
            <Button variant="secondary" className="w-full">
              Manage Account
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-text-primary">Recent Orders</h2>
          <Link href="/portal/orders">
            <Button variant="ghost">View all</Button>
          </Link>
        </div>

        {recentOrders.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
            <p className="text-text-secondary mb-4">No orders yet</p>
            <Link href="/portal/products">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-text-tertiary">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Orders will be mapped here */}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Account Status */}
      <div className="bg-primary text-white rounded-xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Your Wholesale Account</h3>
            <p className="text-white/90 mb-4">
              Pricing Tier: <span className="font-bold">Standard (40% off retail)</span>
            </p>
            <p className="text-sm text-white/80">
              Place regular orders to unlock preferred pricing tiers
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">40%</div>
            <div className="text-sm text-white/80">Discount</div>
          </div>
        </div>
      </div>
    </div>
  )
}
