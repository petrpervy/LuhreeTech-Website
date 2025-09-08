'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { LucideIcon } from 'lucide-react'

interface Step {
  title: string
  description: string
  icon: LucideIcon
}

interface StepRowProps {
  steps: Step[]
  className?: string
}

export default function StepRow({ steps, className = '' }: StepRowProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            ease: 'easeOut'
          }}
          className="relative text-center"
        >
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand/30 to-transparent transform -translate-y-1/2 z-0" />
          )}

          {/* Step number */}
          <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-brand/20 rounded-full mb-4">
            <step.icon className="w-8 h-8 text-brand" />
          </div>

          <h3 className="text-xl font-semibold text-ink mb-3">{step.title}</h3>
          <p className="text-muted leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
