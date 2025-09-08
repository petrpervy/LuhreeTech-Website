'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Appointment {
  id: string
  time: string
  name: string
  status: 'confirmed' | 'pending' | 'completed'
}

interface SchedulerPanelProps {
  appointments?: Appointment[]
  className?: string
}

const defaultAppointments: Appointment[] = [
  { id: '1', time: '9:00 AM', name: 'Sarah M.', status: 'confirmed' },
  { id: '2', time: '10:30 AM', name: 'Mike R.', status: 'pending' },
  { id: '3', time: '2:00 PM', name: 'Lisa K.', status: 'completed' }
]

export function SchedulerPanel({ appointments = defaultAppointments, className = '' }: SchedulerPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const getStatusIcon = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" strokeWidth={1.5} />
      case 'pending':
        return <Clock className="w-4 h-4 text-cta-500" strokeWidth={1.5} />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
    }
  }

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/20 text-green-700'
      case 'pending':
        return 'bg-cta-500/20 text-cta-700'
      case 'completed':
        return 'bg-brand-500/20 text-brand-700'
    }
  }

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
        <h4 className="text-body font-semibold text-ink-900">Today's Schedule</h4>
      </div>
      
      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl border border-white/20"
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(appointment.status)}
              <div>
                <div className="font-medium text-ink-900">{appointment.time}</div>
                <div className="text-small text-ink-500">{appointment.name}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
              {appointment.status}
            </span>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/20">
        <div className="text-center">
          <div className="text-xs text-ink-500 mb-2">Next available slot</div>
          <div className="text-body font-semibold text-brand-500">3:30 PM</div>
        </div>
      </div>
    </div>
  )
}

