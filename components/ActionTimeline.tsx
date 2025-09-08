'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useRef } from 'react'
import * as LucideIcons from 'lucide-react'

interface Step {
  title: string
  desc: string
  icon: keyof typeof LucideIcons
}

interface ActionTimelineProps {
  steps: Step[]
}

export default function ActionTimeline({ steps }: ActionTimelineProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

  return (
    <div ref={containerRef} className="mt-12">
      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Progress line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand rounded-full"
            style={{ width: prefersReducedMotion ? "100%" : progressWidth }}
          />
        </div>

        <div className="relative grid grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = LucideIcons[step.icon] as React.ComponentType<any>
            
            return (
              <motion.div
                key={step.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: prefersReducedMotion ? 0 : index * 0.1
                }}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <IconComponent className="w-8 h-8 text-brand" />
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile: Vertical timeline with dots */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => {
          const IconComponent = LucideIcons[step.icon] as React.ComponentType<any>
          
          return (
            <motion.div
              key={step.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: prefersReducedMotion ? 0 : index * 0.1
              }}
              className="flex items-start gap-4"
            >
              {/* Step dot */}
              <div className="w-4 h-4 bg-brand rounded-full flex-shrink-0 mt-2"></div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed ml-13">{step.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
