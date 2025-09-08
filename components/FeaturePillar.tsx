'use client'
import { ArrowRight, Bot, Wrench, Link as LinkIcon } from 'lucide-react'

interface FeaturePillarProps {
  icon: 'ai' | 'automation' | 'integration'
  title: string
  blurb: string
  href?: string
}

export function FeaturePillar({ icon, title, blurb, href }: FeaturePillarProps) {
  const IconComponent = {
    ai: Bot,
    automation: Wrench,
    integration: LinkIcon
  }[icon]

  return (
    <div className="glass-ghost hover-liquid p-6 md:p-8 divide-y">
      <div className="flex items-start gap-4 pb-4">
        <div className="icon-glass-backplate p-3 flex items-center justify-center">
          <IconComponent className="icon-pillar icon-gradient-stroke" />
        </div>
        <div>
          <h3 className="text-h3 text-brand-ink">{title}</h3>
          <p className="text-brand-gray-mid leading-relaxed">{blurb}</p>
        </div>
      </div>
      {href && (
        <div className="flex items-center gap-2 pt-4">
          <a href={href} className="text-brand-ink/80 hover:text-brand-ink transition-colors inline-flex items-center gap-2">
            <span>See details</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )
}
