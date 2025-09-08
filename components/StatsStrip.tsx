'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useEffect, useState } from 'react'

interface StatItem {
  label: string
  value: string
}

interface StatsStripProps {
  items: StatItem[]
}

export default function StatsStrip({ items }: StatsStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: prefersReducedMotion ? 0 : index * 0.1
            }}
            className="glass p-6 text-center"
          >
            <div className="text-3xl font-bold text-ink mb-2">{item.value}</div>
            <div className="text-sm text-muted">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
