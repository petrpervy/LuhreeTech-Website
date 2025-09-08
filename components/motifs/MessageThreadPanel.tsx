'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Message {
  id: string
  text: string
  sender: 'ai' | 'client'
  timestamp: string
}

interface MessageThreadPanelProps {
  messages?: Message[]
  className?: string
}

const defaultMessages: Message[] = [
  { id: '1', text: 'Hi! I need to reschedule my appointment', sender: 'client', timestamp: '2:34 PM' },
  { id: '2', text: 'I can help with that. What time works better for you?', sender: 'ai', timestamp: '2:35 PM' },
  { id: '3', text: 'How about tomorrow at 3 PM?', sender: 'client', timestamp: '2:36 PM' },
  { id: '4', text: 'Perfect! I\'ve updated your calendar. You\'ll get a confirmation shortly.', sender: 'ai', timestamp: '2:37 PM' }
]

export function MessageThreadPanel({ messages = defaultMessages, className = '' }: MessageThreadPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-brand-500 rounded-full" />
        <span className="text-small font-medium text-ink-700">Live Chat</span>
      </div>
      
      <div className="space-y-3">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] ${message.sender === 'ai' ? 'bg-white/30' : 'bg-brand-500/20'} rounded-2xl px-3 py-2`}>
              <div className={`text-small ${message.sender === 'ai' ? 'text-ink-700' : 'text-brand-700'}`}>
                {message.text}
              </div>
              <div className={`text-xs mt-1 ${message.sender === 'ai' ? 'text-ink-500' : 'text-brand-500'}`}>
                {message.timestamp}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20">
        <div className="flex items-center gap-2 text-xs text-ink-500">
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
          <span>AI is typing...</span>
        </div>
      </div>
    </div>
  )
}

