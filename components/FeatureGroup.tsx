'use client'
import { CheckCircle } from 'lucide-react'

interface FeatureGroupProps {
  title: string
  description?: string
  items: string[]
}

export function FeatureGroup({ title, description, items }: FeatureGroupProps) {
  return (
    <div className="glass-ghost hover-liquid p-6 md:p-8">
      <div className="space-y-2">
        <h3 className="text-h3 text-brand-ink">{title}</h3>
        {description && (
          <p className="text-brand-gray-mid leading-relaxed">{description}</p>
        )}
      </div>
      <div className="mt-4 divide-y">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4 py-4">
            <span className="icon-disc inline-grid h-10 w-10 place-items-center rounded-full bg-brand-lime-200/60 ring-1 ring-white/40">
              <CheckCircle className="h-5 w-5 text-brand-ink" />
            </span>
            <div>
              <p className="text-brand-ink/90">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
