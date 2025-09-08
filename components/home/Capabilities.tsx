'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Target, TrendingUp } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Users,
    title: 'Customer Communication',
    description: 'AI-powered reception, call routing, and customer support that never sleeps.'
  },
  {
    icon: Calendar,
    title: 'Scheduling & Booking',
    description: 'Automated appointment scheduling with conflict resolution and reminders.'
  },
  {
    icon: Target,
    title: 'Lead Capture',
    description: 'Intelligent lead qualification and follow-up that converts prospects into customers.'
  },
  {
    icon: TrendingUp,
    title: 'Reporting & Analytics',
    description: 'Real-time insights into your automation performance and business metrics.'
  }
]

export function Capabilities() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
            What We Handle
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive automation solutions that cover every aspect of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="glass p-8 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-teal-400 to-accent-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brand-ink mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
