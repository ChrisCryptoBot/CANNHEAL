import { LucideIcon } from 'lucide-react'

interface TrustBadgeProps {
  icon: LucideIcon
  label: string
}

export function TrustBadge({ icon: Icon, label }: TrustBadgeProps) {
  return (
    <div className="trust-badge">
      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
      <span className="text-sm font-semibold text-primary">{label}</span>
    </div>
  )
}
