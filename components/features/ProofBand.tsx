'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PROOF_METRICS = [
  {
    metric: '3×',
    label: 'Faster first response'
  },
  {
    metric: '–20–40%',
    label: 'Fewer no-shows'
  },
  {
    metric: '30–60%',
    label: 'Front-desk workload ↓'
  }
]

export function ProofBand() {
  return (
    <section className="py-20 md:py-24 bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROOF_METRICS.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">
                  {item.metric}
                </div>
                <div className="text-lg" style={{color: 'rgba(12, 19, 32, 0.85)'}}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
