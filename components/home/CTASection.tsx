'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start scaling without adding headcount.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join businesses already saving time and money with AI automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">Start Free Audit</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/roi-calculator">Calculate Your ROI</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
