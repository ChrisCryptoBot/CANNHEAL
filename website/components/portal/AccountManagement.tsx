'use client'

import { useState } from 'react'
import { Building2, User, Mail, Phone, MapPin, Award, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface AccountManagementProps {
  user: {
    name?: string | null
    email?: string | null
    role?: string
  }
}

export function AccountManagement({ user }: AccountManagementProps) {
  const [isEditing, setIsEditing] = useState(false)

  // Mock data - will be fetched from API
  const account = {
    businessName: 'Sample Pet Store LLC',
    taxId: '12-3456789',
    businessType: 'retailer',
    contactName: user.name || 'John Doe',
    email: user.email || 'john@example.com',
    phone: '555-123-4567',
    shippingAddress: '123 Main St, Austin, TX 78701',
    pricingTier: 'STANDARD',
    accountStatus: 'APPROVED',
    creditTerms: 'NET30',
    createdAt: '2024-01-15',
  }

  const pricingTierInfo = {
    STANDARD: { name: 'Standard', discount: '40%', color: 'text-blue-600' },
    PREFERRED: { name: 'Preferred', discount: '50%', color: 'text-purple-600' },
    DISTRIBUTOR: { name: 'Distributor', discount: '60%', color: 'text-green-600' },
  }

  const tierInfo = pricingTierInfo[account.pricingTier as keyof typeof pricingTierInfo]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Account Settings</h1>
        <p className="mt-2 text-text-secondary">
          Manage your wholesale account information
        </p>
      </div>

      {/* Account Status */}
      <div className="bg-primary text-white rounded-xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Account Status</h3>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm text-white/80">Status</div>
                <div className="font-bold">Active</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-sm text-white/80">Pricing Tier</div>
                <div className="font-bold">{tierInfo.name}</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-sm text-white/80">Discount</div>
                <div className="font-bold">{tierInfo.discount}</div>
              </div>
            </div>
          </div>
          <Award className="w-12 h-12 opacity-50" />
        </div>
      </div>

      {/* Business Information */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Business Information
          </h2>
          <Button
            variant={isEditing ? 'primary' : 'secondary'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Save Changes' : 'Edit'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Business Name
            </label>
            <Input value={account.businessName} disabled={!isEditing} />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Tax ID (EIN)
            </label>
            <Input value={account.taxId} disabled />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Business Type
            </label>
            <select
              value={account.businessType}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-text-tertiary"
            >
              <option value="retailer">Retailer</option>
              <option value="vet">Veterinary Clinic</option>
              <option value="distributor">Distributor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Phone Number
            </label>
            <Input value={account.phone} disabled={!isEditing} type="tel" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Shipping Address
            </label>
            <Input value={account.shippingAddress} disabled={!isEditing} />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card">
        <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
          <User className="w-5 h-5" />
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Contact Name
            </label>
            <Input value={account.contactName} disabled={!isEditing} />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-tertiary mb-2">
              Email Address
            </label>
            <Input value={account.email} disabled={!isEditing} type="email" />
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="card">
        <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Terms
        </h2>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-text-tertiary mb-1">Credit Terms</div>
              <div className="font-bold text-text-primary">{account.creditTerms}</div>
            </div>
            <div>
              <div className="text-sm text-text-tertiary mb-1">Available Credit</div>
              <div className="font-bold text-text-primary">$10,000.00</div>
            </div>
            <div>
              <div className="text-sm text-text-tertiary mb-1">Outstanding Balance</div>
              <div className="font-bold text-text-primary">$0.00</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-text-secondary">
          Need to increase your credit limit?{' '}
          <button className="text-primary hover:underline font-medium">
            Contact us
          </button>
        </div>
      </div>

      {/* Pricing Tier Progress */}
      <div className="card">
        <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Pricing Tier Progress
        </h2>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">
                Current: Standard (40% off)
              </span>
              <span className="text-sm text-text-tertiary">Next: Preferred (50% off)</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '30%' }} />
            </div>
            <div className="mt-2 text-sm text-text-tertiary">
              $1,500 more in orders to unlock Preferred pricing
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-bold text-text-primary mb-2">Unlock Better Pricing</h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Preferred Tier: $5,000 total orders → 50% off</li>
              <li>• Distributor Tier: $15,000 total orders → 60% off</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="card">
        <h2 className="text-xl font-bold text-text-primary mb-6">Security</h2>

        <div className="space-y-4">
          <Button variant="secondary">Change Password</Button>
          <div className="text-sm text-text-tertiary">
            Last password change: Never
          </div>
        </div>
      </div>
    </div>
  )
}
