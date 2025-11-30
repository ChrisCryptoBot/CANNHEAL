'use client'

import { useState } from 'react'
import { Search, Filter, Download, Package, Truck, CheckCircle2 } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { formatPrice, formatDate } from '@/lib/utils'

interface OrderHistoryProps {
  userId: string
}

// Placeholder data - will be replaced with real API call
const mockOrders = [
  {
    id: 'ORD-001',
    createdAt: new Date('2024-11-15'),
    status: 'DELIVERED',
    total: 45000,
    itemCount: 12,
    trackingNumber: '1Z999AA10123456784',
  },
  {
    id: 'ORD-002',
    createdAt: new Date('2024-11-20'),
    status: 'SHIPPED',
    total: 32000,
    itemCount: 8,
    trackingNumber: '1Z999AA10123456785',
  },
  {
    id: 'ORD-003',
    createdAt: new Date('2024-11-28'),
    status: 'PROCESSING',
    total: 58000,
    itemCount: 15,
    trackingNumber: null,
  },
]

const statusConfig = {
  PENDING: { label: 'Pending', color: 'text-yellow-700 bg-yellow-50', icon: Package },
  PROCESSING: { label: 'Processing', color: 'text-blue-700 bg-blue-50', icon: Package },
  SHIPPED: { label: 'Shipped', color: 'text-purple-700 bg-purple-50', icon: Truck },
  DELIVERED: {
    label: 'Delivered',
    color: 'text-green-700 bg-green-50',
    icon: CheckCircle2,
  },
  CANCELLED: { label: 'Cancelled', color: 'text-red-700 bg-red-50', icon: Package },
}

export function OrderHistory({ userId }: OrderHistoryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // TODO: Fetch real orders from API
  const orders = mockOrders

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.trackingNumber?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Orders</h1>
        <p className="mt-2 text-text-secondary">
          View and track all your wholesale orders
        </p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <Input
                placeholder="Search by order ID or tracking number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="all">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="PROCESSING">Processing</option>
              <option value="SHIPPED">Shipped</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="card text-center py-12">
          <Package className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
          <p className="text-text-secondary mb-4">No orders found</p>
          {searchTerm || statusFilter !== 'all' ? (
            <Button
              variant="secondary"
              onClick={() => {
                setSearchTerm('')
                setStatusFilter('all')
              }}
            >
              Clear filters
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const status = statusConfig[order.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <div key={order.id} className="card hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-text-primary">{order.id}</h3>
                        <p className="text-sm text-text-tertiary mt-1">
                          Ordered on {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
                      >
                        <StatusIcon className="w-4 h-4" />
                        {status.label}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-text-tertiary">Items</div>
                        <div className="font-medium text-text-primary">
                          {order.itemCount} products
                        </div>
                      </div>
                      <div>
                        <div className="text-text-tertiary">Total</div>
                        <div className="font-medium text-text-primary">
                          {formatPrice(order.total)}
                        </div>
                      </div>
                      {order.trackingNumber && (
                        <div>
                          <div className="text-text-tertiary">Tracking</div>
                          <div className="font-medium text-text-primary font-mono text-xs">
                            {order.trackingNumber}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Pagination placeholder */}
      {filteredOrders.length > 0 && (
        <div className="flex items-center justify-between card">
          <p className="text-sm text-text-secondary">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" disabled>
              Previous
            </Button>
            <Button variant="ghost" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
