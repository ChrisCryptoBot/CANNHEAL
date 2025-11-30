'use client'

import { useState } from 'react'
import { Download, FileText, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { formatPrice, formatDate } from '@/lib/utils'

interface InvoiceListProps {
  userId: string
}

// Mock data - will be replaced with API call
const mockInvoices = [
  {
    id: 'INV-2024-001',
    orderId: 'ORD-001',
    date: new Date('2024-11-15'),
    dueDate: new Date('2024-12-15'),
    amount: 45000,
    status: 'PAID',
    paidDate: new Date('2024-11-20'),
  },
  {
    id: 'INV-2024-002',
    orderId: 'ORD-002',
    date: new Date('2024-11-20'),
    dueDate: new Date('2024-12-20'),
    amount: 32000,
    status: 'PENDING',
    paidDate: null,
  },
  {
    id: 'INV-2024-003',
    orderId: 'ORD-003',
    date: new Date('2024-11-28'),
    dueDate: new Date('2024-12-28'),
    amount: 58000,
    status: 'PENDING',
    paidDate: null,
  },
]

const statusConfig = {
  PAID: { label: 'Paid', color: 'text-green-700 bg-green-50', icon: CheckCircle2 },
  PENDING: { label: 'Pending', color: 'text-yellow-700 bg-yellow-50', icon: Clock },
  OVERDUE: { label: 'Overdue', color: 'text-red-700 bg-red-50', icon: AlertCircle },
}

export function InvoiceList({ userId }: InvoiceListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // TODO: Fetch real invoices from API
  const invoices = mockInvoices

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPending = invoices
    .filter((inv) => inv.status === 'PENDING')
    .reduce((sum, inv) => sum + inv.amount, 0)

  const handleDownload = (invoiceId: string) => {
    // TODO: Implement actual PDF download
    console.log('Downloading invoice:', invoiceId)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Invoices</h1>
        <p className="mt-2 text-text-secondary">
          View and download all your invoices
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-tertiary">Total Invoices</p>
              <p className="text-2xl font-bold text-text-primary mt-1">
                {invoices.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-tertiary">Pending Payment</p>
              <p className="text-2xl font-bold text-text-primary mt-1">
                {formatPrice(totalPending)}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-tertiary">Available Credit</p>
              <p className="text-2xl font-bold text-text-primary mt-1">$10,000</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <Input
                placeholder="Search by invoice or order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="all">All Status</option>
            <option value="PAID">Paid</option>
            <option value="PENDING">Pending</option>
            <option value="OVERDUE">Overdue</option>
          </select>
        </div>
      </div>

      {/* Invoices List */}
      {filteredInvoices.length === 0 ? (
        <div className="card text-center py-12">
          <FileText className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
          <p className="text-text-secondary mb-4">No invoices found</p>
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
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Invoice ID
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Order ID
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Date
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Due Date
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Amount
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                  Status
                </th>
                <th className="text-right py-4 px-4 text-sm font-medium text-text-tertiary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => {
                const status = statusConfig[invoice.status as keyof typeof statusConfig]
                const StatusIcon = status.icon

                return (
                  <tr key={invoice.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-4">
                      <span className="font-medium text-text-primary">
                        {invoice.id}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-text-secondary">{invoice.orderId}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-text-secondary">
                        {formatDate(invoice.date)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-text-secondary">
                        {formatDate(invoice.dueDate)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-text-primary">
                        {formatPrice(invoice.amount)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
                      >
                        <StatusIcon className="w-4 h-4" />
                        {status.label}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(invoice.id)}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
