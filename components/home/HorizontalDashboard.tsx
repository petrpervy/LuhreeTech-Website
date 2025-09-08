'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, MessageSquare } from 'lucide-react'
import Card from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const DASHBOARD_ITEMS = [
  {
    icon: Phone,
    title: 'Reception handled',
    description: '24/7 call routing',
    metric: '100%',
    metricLabel: 'uptime'
  },
  {
    icon: Calendar,
    title: 'Auto-scheduled',
    description: 'confirm/reschedule',
    metric: '3x',
    metricLabel: 'faster booking'
  },
  {
    icon: MessageSquare,
    title: 'Follow-ups sent',
    description: 'SMS/email',
    metric: '40%',
    metricLabel: 'fewer no-shows'
  }
]

export function HorizontalDashboard() {
  return (
    <Section>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {DASHBOARD_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            className="card p-8 text-center transition hover:-translate-y-1 hover:shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 card p-3 rounded-full bg-gradient-to-br from-[#60EBD3] to-[#FF9F3E] text-white/95 shadow-glass flex items-center justify-center mx-auto mb-6">
              <item.icon className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold text-ink mb-2">
              {item.title}
            </h3>
            
            <p className="text-muted mb-4">
              {item.description}
            </p>
            
            <div className="text-3xl font-bold text-brand-teal mb-1">
              {item.metric}
            </div>
            
            <div className="text-sm text-muted">
              {item.metricLabel}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
