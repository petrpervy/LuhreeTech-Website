'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CASE_STUDIES = [
  {
    industry: 'Law Firm',
    metric: '127 hrs saved/mo',
    description: 'Automated client intake and case management',
    result: 'Faster case processing'
  },
  {
    industry: 'Clinic',
    metric: '40% fewer no-shows',
    description: 'Smart appointment scheduling and reminders',
    result: 'Better patient retention'
  },
  {
    industry: 'Retail',
    metric: '3x faster response',
    description: 'AI customer service and order management',
    result: 'Higher customer satisfaction'
  }
]

export function CaseStripe() {
  return (
    <section className="py-20 md:py-24 bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Real Results
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'rgba(12, 19, 32, 0.85)'}}>
            See how businesses like yours are saving time and money with AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.industry}
              className="glass p-8 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-medium text-brand-teal mb-2">
                {study.industry}
              </div>
              
              <div className="text-3xl font-bold text-ink mb-2">
                {study.metric}
              </div>
              
              <p className="mb-4" style={{color: 'rgba(12, 19, 32, 0.85)'}}>
                {study.description}
              </p>
              
              <div className="text-sm font-medium text-brand-cta">
                {study.result}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/case-studies"
            className="btn-secondary inline-flex items-center"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
