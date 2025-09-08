import { ReactNode } from 'react'

interface DataStripProps {
  items: string[]
  className?: string
  variant?: 'default' | 'compact'
}

export function DataStrip({ items, className = '', variant = 'default' }: DataStripProps) {
  const variantClasses = {
    default: 'px-6 py-3 text-base',
    compact: 'px-4 py-2 text-sm'
  }

  return (
    <div className={`inline-flex items-center gap-6 ${variantClasses[variant]} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-6">
          <span className="text-ink-700 font-medium">{item}</span>
          {index < items.length - 1 && (
            <div className="w-1 h-4 bg-ink-300 rounded-full" />
          )}
        </div>
      ))}
    </div>
  )
}

