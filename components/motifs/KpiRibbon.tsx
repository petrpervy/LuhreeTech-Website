'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface KpiRibbonProps {
  items: Array<{
    label: string
    value: string
    trend?: 'up' | 'down' | 'neutral'
    color?: 'brand' | 'cta' | 'ink'
  }>
  className?: string
}

export function KpiRibbon({ items, className = '' }: KpiRibbonProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const getTrendIcon = (trend: KpiRibbonProps['items'][0]['trend']) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" strokeWidth={1.5} />
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" strokeWidth={1.5} />
      case 'neutral':
        return <Minus className="w-4 h-4 text-ink-400" strokeWidth={1.5} />
      default:
        return null
    }
  }

  const getColorClasses = (color: KpiRibbonProps['items'][0]['color']) => {
    switch (color) {
      case 'brand':
        return 'bg-brand-500/20 text-brand-700 border-brand-500/30'
      case 'cta':
        return 'bg-cta-500/20 text-cta-700 border-cta-500/30'
      case 'ink':
        return 'bg-ink-500/20 text-ink-700 border-ink-500/30'
      default:
        return 'bg-white/20 text-ink-700 border-white/30'
    }
  }

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getColorClasses(item.color)} backdrop-blur-sm`}
        >
          {item.trend && getTrendIcon(item.trend)}
          <span className="text-small font-medium">{item.label}</span>
          <span className="text-small font-semibold">{item.value}</span>
        </motion.div>
      ))}
    </div>
  )
}

