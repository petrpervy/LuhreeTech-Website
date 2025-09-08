'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export function GuaranteeBand() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="glass p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-accent-teal-400 to-accent-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-brand-ink mb-4">
            Cancel anytime. No hidden fees.
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We're confident you'll love the results. If not, cancel anytime with no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
