'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const COMPARISON_DATA = [
  {
    feature: 'Monthly Cost',
    employee: '$4,000+',
    luhreetech: '$1,000 - $5,000',
    employeeIcon: X,
    luhreetechIcon: Check
  },
  {
    feature: 'Training Time',
    employee: '2-4 weeks',
    luhreetech: '2-3 days',
    employeeIcon: X,
    luhreetechIcon: Check
  },
  {
    feature: 'Turnover Risk',
    employee: 'High',
    luhreetech: 'None',
    employeeIcon: X,
    luhreetechIcon: Check
  },
  {
    feature: 'Scaling',
    employee: 'Hire more people',
    luhreetech: 'Instant',
    employeeIcon: X,
    luhreetechIcon: Check
  },
  {
    feature: 'Availability',
    employee: '40 hours/week',
    luhreetech: '24/7',
    employeeIcon: X,
    luhreetechIcon: Check
  }
]

export function ValueComparison() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
            Employee vs. Luhreetech
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See why AI automation is the smarter choice for your business.
          </p>
        </div>

        <div className="glass p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Header */}
            <div className="font-semibold text-brand-ink">Feature</div>
            <div className="font-semibold text-brand-ink text-center">Traditional Employee</div>
            <div className="font-semibold text-brand-ink text-center">Luhreetech</div>
            
            {/* Comparison rows */}
            {COMPARISON_DATA.map((item, index) => (
              <React.Fragment key={item.feature}>
                <motion.div 
                  className="text-gray-700 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.feature}
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center gap-2 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.employeeIcon className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">{item.employee}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center gap-2 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.luhreetechIcon className="h-5 w-5 text-accent-teal-500" />
                  <span className="text-gray-700">{item.luhreetech}</span>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
