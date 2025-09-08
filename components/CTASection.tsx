'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import HaloButton from '@/components/ui/HaloButton'

interface CTA {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface CTASectionProps {
  title: string
  sub: string
  primary: CTA
  secondary: CTA
  gradient?: boolean
}

export default function CTASection({ title, sub, primary, secondary, gradient = false }: CTASectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className={`py-20 ${gradient ? 'bg-gradient-to-br from-orange-100 via-blue-50 to-purple-100' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl font-bold text-ink mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="text-xl text-muted max-w-2xl mx-auto mb-8"
          >
            {sub}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <HaloButton
              variant={primary.variant || "primary"}
              size="lg"
              asChild
            >
              <a href={primary.href}>{primary.label}</a>
            </HaloButton>
            <HaloButton
              variant={secondary.variant || "secondary"}
              size="lg"
              asChild
            >
              <a href={secondary.href}>{secondary.label}</a>
            </HaloButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
