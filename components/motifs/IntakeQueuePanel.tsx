'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface QueueItem {
  name: string
  type: string
  status: 'new' | 'processing' | 'completed'
  time: string
}

interface IntakeQueuePanelProps {
  items?: QueueItem[]
  className?: string
}

const defaultItems: QueueItem[] = [
  { name: 'Sarah M.', type: 'New inquiry', status: 'new', time: '2 min ago' },
  { name: 'Mike R.', type: 'Scheduling call', status: 'processing', time: '5 min ago' },
  { name: 'Lisa K.', type: 'Follow-up', status: 'completed', time: '12 min ago' },
  { name: 'Tech Corp', type: 'Enterprise quote', status: 'new', time: '8 min ago' }
]

export function IntakeQueuePanel({ items = defaultItems, className = '' }: IntakeQueuePanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const getStatusIcon = (status: QueueItem['status']) => {
    switch (status) {
      case 'new':
        return <Clock className="w-3 h-3 text-brand-500" strokeWidth={1.5} />
      case 'processing':
        return <AlertCircle className="w-3 h-3 text-cta-500" strokeWidth={1.5} />
      case 'completed':
        return <CheckCircle className="w-3 h-3 text-green-500" strokeWidth={1.5} />
    }
  }

  const getStatusColor = (status: QueueItem['status']) => {
    switch (status) {
      case 'new':
        return 'bg-brand-500/20 text-brand-700'
      case 'processing':
        return 'bg-cta-500/20 text-cta-700'
      case 'completed':
        return 'bg-green-500/20 text-green-700'
    }
  }

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3 font-semibold text-ink-900">Live Intake Queue</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
          <span className="text-small text-ink-500">Live</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl border border-white/20"
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(item.status)}
              <div>
                <div className="font-medium text-ink-900">{item.name}</div>
                <div className="text-small text-ink-500">{item.type}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
              <span className="text-xs text-ink-400">{item.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

