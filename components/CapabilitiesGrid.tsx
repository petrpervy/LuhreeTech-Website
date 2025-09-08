'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import * as LucideIcons from 'lucide-react'

interface Capability {
  icon: keyof typeof LucideIcons
  title: string
  description: string
  mockContent: React.ReactNode
}

const capabilities: Capability[] = [
  {
    icon: 'MessageSquare',
    title: 'Customer Communication',
    description: '24/7 call handling, email automation, and chat support',
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 p-2 bg-brand/10 rounded">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-muted">Incoming call - 2 min ago</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-brand/10 rounded">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-muted">Email response - 5 min ago</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-brand/10 rounded">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <span className="text-muted">Chat escalation - 8 min ago</span>
        </div>
      </div>
    )
  },
  {
    icon: 'Calendar',
    title: 'Scheduling & Booking',
    description: 'Appointment scheduling, calendar management, and reminders',
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="w-6 h-6 bg-brand/20 rounded text-center text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="text-center text-muted">This week</div>
      </div>
    )
  },
  {
    icon: 'Users',
    title: 'Lead Management',
    description: 'Lead qualification, CRM integration, and follow-up automation',
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between p-2 bg-brand/10 rounded">
          <span className="text-muted">New leads</span>
          <span className="font-semibold text-brand">12</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-brand/10 rounded">
          <span className="text-muted">Qualified</span>
          <span className="font-semibold text-brand">8</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-brand/10 rounded">
          <span className="text-muted">Follow-ups</span>
          <span className="font-semibold text-brand">5</span>
        </div>
      </div>
    )
  },
  {
    icon: 'BarChart3',
    title: 'Analytics & Reporting',
    description: 'Performance metrics, customer insights, and ROI tracking',
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="h-16 flex items-end gap-1">
          {[0.3, 0.5, 0.7, 0.6, 0.8, 0.9, 0.7].map((height, i) => (
            <div
              key={i}
              className="w-3 bg-brand rounded-t"
              style={{ height: `${height * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="text-center text-muted">Performance trend</div>
      </div>
    )
  }
]

export default function CapabilitiesGrid() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {capabilities.map((capability, index) => {
        const IconComponent = LucideIcons[capability.icon] as React.ComponentType<any>

        return (
          <motion.div
            key={capability.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: prefersReducedMotion ? 0 : index * 0.1
            }}
            whileHover={prefersReducedMotion ? {} : {
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
            className="glass p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-brand" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-ink mb-3">{capability.title}</h3>
                <p className="text-muted mb-4 leading-relaxed">{capability.description}</p>
                <div className="opacity-60">
                  {capability.mockContent}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
