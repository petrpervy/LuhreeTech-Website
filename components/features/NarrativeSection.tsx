'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface NarrativeSectionProps {
  title: string
  description: string
  mockup: React.ReactNode
  reverse?: boolean
}

export function NarrativeSection({ title, description, mockup, reverse = false }: NarrativeSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <motion.div
            className={reverse ? 'lg:col-start-2' : ''}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </motion.div>
          
          <motion.div
            className={reverse ? 'lg:col-start-1' : ''}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {mockup}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
