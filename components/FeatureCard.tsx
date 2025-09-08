'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Scale, Users, FileText, Clock, Bot, BarChart3, Zap, Shield, Phone, Calendar, Check } from 'lucide-react'

interface FeatureCardProps {
  icon: string
  title: string
  benefit: string
  details?: string[]
  className?: string
}

const iconMap = {
  scale: Scale,
  users: Users,
  fileText: FileText,
  clock: Clock,
  bot: Bot,
  barChart3: BarChart3,
  zap: Zap,
  shield: Shield,
  phone: Phone,
  calendar: Calendar,
  check: Check,
}

export function FeatureCard({ icon, title, benefit, details, className = '' }: FeatureCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Bot
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`glass-light p-6 rounded-lgx hover-liquid ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-lime/20 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-brand-lime" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-brand-ink mb-2">
            {title}
          </h3>
          <p className="text-brand-gray text-sm leading-relaxed">
            {benefit}
          </p>
          
          {details && details.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-brand-lime hover:text-brand-lime/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 rounded"
              >
                {isExpanded ? 'Show less' : 'Learn more'}
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 space-y-2"
                  >
                    {details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-brand-gray">{detail}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
