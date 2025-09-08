'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import * as LucideIcons from 'lucide-react'

interface ProcessStepProps {
  icon: keyof typeof LucideIcons
  title: string
  description: string
  step: number
  className?: string
}

export default function ProcessStep({
  icon,
  title,
  description,
  step,
  className = ''
}: ProcessStepProps) {
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
        delay: prefersReducedMotion ? 0 : step * 0.1
      }}
      whileHover={prefersReducedMotion ? {} : {
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`text-center ${className}`}
    >
      <div className="w-20 h-20 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <IconComponent className="w-10 h-10 text-brand" />
      </div>
      <h3 className="text-2xl font-bold text-ink mb-4">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </motion.div>
  )
}
