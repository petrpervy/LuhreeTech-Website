'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import * as LucideIcons from 'lucide-react'
import HaloButton from '@/components/ui/HaloButton'

interface Dashboard {
  label: string
  value: string
  icon: keyof typeof LucideIcons
}

interface CTA {
  label: string
  href: string
  variant: 'primary' | 'ghost'
}

interface FeatureHeroProps {
  title: string
  sub: string
  dashboards: Dashboard[]
  ctas: CTA[]
}

export default function FeatureHero({ title, sub, dashboards, ctas }: FeatureHeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Radial gradient background + floating blur particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-50 to-purple-100"></div>
      
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-brand/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="text-center mb-12">
          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-ink mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed"
          >
            {sub}
          </motion.p>
        </div>

        {/* CTA group */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {ctas.map((cta, index) => (
            <HaloButton
              key={cta.label}
              variant={cta.variant}
              size="lg"
              asChild
            >
              <a href={cta.href}>{cta.label}</a>
            </HaloButton>
          ))}
        </motion.div>

        {/* Mini dashboard visual trio */}
        <div className="relative -mt-8">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dashboards.map((dashboard, index) => {
                const IconComponent = LucideIcons[dashboard.icon] as React.ComponentType<any>
                
                return (
                  <motion.div
                    key={dashboard.label}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: prefersReducedMotion ? 0 : 0.3 + (index * 0.1)
                    }}
                    className="glass p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-brand" />
                    </div>
                    <div className="text-2xl font-bold text-ink mb-2">{dashboard.value}</div>
                    <div className="text-sm text-muted">{dashboard.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
