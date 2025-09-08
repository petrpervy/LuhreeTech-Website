'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PricingHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal-400/5 via-transparent to-cta-amber-500/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-ink mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Affordable AI automations that save you thousands.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why pay $50k+ for an employee when AI does it faster, cheaper, and never takes a break?
          </motion.p>
        </div>
      </div>
    </section>
  )
}
