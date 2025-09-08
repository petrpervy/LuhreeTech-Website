import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface BadgePillProps {
  icon?: LucideIcon
  children: ReactNode
  className?: string
  variant?: 'default' | 'brand' | 'cta'
}

export function BadgePill({ icon: Icon, children, className = '', variant = 'default' }: BadgePillProps) {
  const variantClasses = {
    default: 'bg-white/20 text-ink-900 border-white/30',
    brand: 'bg-brand-500/20 text-brand-700 border-brand-500/30',
    cta: 'bg-cta-500/20 text-cta-700 border-cta-500/30'
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm ${variantClasses[variant]} ${className}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-medium">{children}</span>
    </div>
  )
}
