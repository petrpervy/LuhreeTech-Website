'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface KPIItem {
  label: string
  value: string
  trend?: 'up' | 'down' | 'neutral'
  change?: string
}

interface ROIStatPanelProps {
  mainMetric: {
    value: string
    label: string
    subtitle?: string
  }
  kpis?: KPIItem[]
  className?: string
}

const defaultKPIs: KPIItem[] = [
  { label: 'Hours saved', value: '24', trend: 'up', change: '+40%' },
  { label: 'No-shows', value: '↓ 28%', trend: 'down' }
]

export function ROIStatPanel({ mainMetric, kpis = defaultKPIs, className = '' }: ROIStatPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const getTrendIcon = (trend: KPIItem['trend']) => {
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

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 ${className}`}>
      {/* Main Metric */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <div className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">
          {mainMetric.value}
        </div>
        <div className="text-h3 font-semibold text-ink-900 mb-1">
          {mainMetric.label}
        </div>
        {mainMetric.subtitle && (
          <div className="text-body text-ink-500">
            {mainMetric.subtitle}
          </div>
        )}
      </motion.div>

      {/* KPI Chips */}
      <div className="space-y-3">
        {kpis.map((kpi, index) => (
          <motion.div
            key={index}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl border border-white/20"
          >
            <span className="text-body font-medium text-ink-700">{kpi.label}</span>
            <div className="flex items-center gap-2">
              {kpi.trend && getTrendIcon(kpi.trend)}
              <span className="text-body font-semibold text-ink-900">{kpi.value}</span>
              {kpi.change && (
                <span className="text-small text-ink-500">{kpi.change}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

