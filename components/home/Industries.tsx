'use client'

import React from 'react'
import { motion } from 'framer-motion'

const INDUSTRIES = [
  'Law',
  'Healthcare', 
  'Retail',
  'Logistics',
  'Real Estate'
]

export function Industries() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'rgba(12, 19, 32, 0.85)'}}>
            Our automation solutions work across diverse industries and business models.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry}
              className="industry-chip"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium">
                {industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
