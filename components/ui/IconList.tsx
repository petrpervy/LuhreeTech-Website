import { LucideIcon, CheckCircle, Circle, Zap } from 'lucide-react'

interface IconListProps {
  items: string[]
  icon?: 'check' | 'circle' | 'bolt' | LucideIcon
  className?: string
}

export function IconList({ items, icon = 'check', className = '' }: IconListProps) {
  const getIcon = () => {
    switch (icon) {
      case 'check':
        return CheckCircle
      case 'circle':
        return Circle
      case 'bolt':
        return Zap
      default:
        return icon
    }
  }

  const IconComponent = getIcon()

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <IconComponent className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
          <span className="text-body text-ink-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}

