'use client'

import { motion } from 'framer-motion'
import { User, Phone, Mail, MapPin, FileText } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface CRMRecordPanelProps {
  contact?: {
    name: string
    company: string
    phone: string
    email: string
    location: string
    notes: string[]
  }
  className?: string
}

const defaultContact = {
  name: 'Sarah Mitchell',
  company: 'Tech Solutions Inc.',
  phone: '+1 (555) 123-4567',
  email: 'sarah@techsolutions.com',
  location: 'San Francisco, CA',
  notes: [
    'Interested in AI automation for customer service',
    'Prefers afternoon calls',
    'Budget: $5K-15K monthly'
  ]
}

export function CRMRecordPanel({ contact = defaultContact, className = '' }: CRMRecordPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
        <h4 className="text-body font-semibold text-ink-900">Contact Record</h4>
      </div>
      
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
            <div>
              <div className="font-semibold text-ink-900">{contact.name}</div>
              <div className="text-small text-ink-500">{contact.company}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
            <span className="text-body text-ink-700">{contact.phone}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
            <span className="text-body text-ink-700">{contact.email}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
            <span className="text-body text-ink-700">{contact.location}</span>
          </div>
        </div>
        
        {/* Notes */}
        <div className="pt-3 border-t border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-ink-500" strokeWidth={1.5} />
            <span className="text-small font-medium text-ink-700">Notes</span>
          </div>
          <ul className="space-y-1">
            {contact.notes.map((note, index) => (
              <motion.li
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-small text-ink-600 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0" />
                {note}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

