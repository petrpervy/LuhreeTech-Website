'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import * as LucideIcons from 'lucide-react'

interface DashboardCardProps {
  icon: keyof typeof LucideIcons
  stat: string | number
  label: string
  chart?: React.ReactNode
  className?: string
  delay?: number
}

export default function DashboardCard({
  icon,
  stat,
  label,
  chart,
  className = '',
  delay = 0
}: DashboardCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const IconComponent = LucideIcons[icon] as React.ComponentType<any>

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: prefersReducedMotion ? 0 : delay
      }}
      whileHover={prefersReducedMotion ? {} : {
        y: -6,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`glass p-6 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-brand" />
        </div>
        {chart && (
          <div className="w-16 h-12 opacity-60">
            {chart}
          </div>
        )}
      </div>

      <div className="text-2xl font-bold text-ink mb-2">{stat}</div>
      <div className="text-sm text-muted leading-relaxed">{label}</div>
    </motion.div>
  )
}
