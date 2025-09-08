'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import * as LucideIcons from 'lucide-react'

interface FeaturePanelProps {
  icon: keyof typeof LucideIcons
  title: string
  bullets: string[]
  mock: React.ReactNode
}

export default function FeaturePanel({ icon, title, bullets, mock }: FeaturePanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const IconComponent = LucideIcons[icon] as React.ComponentType<any>

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={prefersReducedMotion ? {} : {
        y: -6,
        transition: { duration: 0.14, ease: 'easeOut' }
      }}
      className="glass p-8 group"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-8 h-8 text-brand" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-ink mb-4">{title}</h3>
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Micro dashboard mock */}
      <div className="mt-6 opacity-60 group-hover:opacity-80 transition-opacity duration-200">
        {mock}
      </div>
    </motion.div>
  )
}
