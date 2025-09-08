'use client'
import { cn } from '@/lib/cn'
import { Check, Bot, Wrench, Link as LinkIcon } from 'lucide-react'
import React from 'react'

type Props = {
  icon: 'ai' | 'automation' | 'integration' | React.ComponentType<React.SVGProps<SVGSVGElement>>
  kicker?: string
  title: string
  body: string
  bullets?: string[]
  cta?: React.ReactNode
  reverse?: boolean
  className?: string
  children?: React.ReactNode
}

export function FeatureRow({ icon: Icon, kicker, title, body, bullets = [], cta, reverse = false, className, children }: Props) {
  const getIconComponent = () => {
    if (typeof Icon === 'string') {
      const iconMap = {
        ai: Bot,
        automation: Wrench,
        integration: LinkIcon
      }
      return iconMap[Icon as keyof typeof iconMap] || Bot
    }
    return Icon
  }

  const IconComponent = getIconComponent()

  return (
    <div className={cn('grid items-center gap-8 md:gap-12 md:grid-cols-12', reverse ? 'md:[&>div:first-child]:order-2' : '', className)}>
      <div className="md:col-span-6">
        {kicker && (
          <span className="inline-flex items-center gap-2 rounded-pill px-4 py-2 text-small bg-white/80 border border-brand-border text-brand-ink">
            {kicker}
          </span>
        )}
        <h3 className="mt-4 text-h2 text-brand-ink">{title}</h3>
        <p className="mt-3 text-brand-gray-mid max-w-prose">{body}</p>
        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <Check className="icon-bullet mt-0.5" />
                <span className="text-brand-ink/90">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {cta}
      </div>

      <div className="md:col-span-6">
        <div className="glass-light hover-liquid p-6 md:p-8">
          <div className="icon-glass-backplate p-3 flex items-center justify-center w-fit">
            <IconComponent className="icon-feature icon-gradient-stroke" />
          </div>
          <div className="mt-4 rounded-2xl bg-white/50 p-6 backdrop-blur-sm border border-white/40">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


