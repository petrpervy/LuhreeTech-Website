'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface LogoItem {
  logo: string
  quote?: string
  metric?: string
}

interface LogoRailProps {
  items: LogoItem[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}

export function LogoRail({ items, className = '', speed = 'normal' }: LogoRailProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  const speedClasses = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast'
  }

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex gap-8 justify-center">
          {items.map((item, index) => (
            <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl min-w-[200px]">
              <div className="text-2xl mb-2">{item.logo}</div>
              {item.quote && <div className="text-sm text-ink-600 mb-1">{item.quote}</div>}
              {item.metric && <div className="text-xs text-brand-500 font-medium">{item.metric}</div>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div 
        className={`flex gap-8 ${speedClasses[speed]}`}
        animate={{ x: [0, -50] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl min-w-[200px] flex-shrink-0">
            <div className="text-2xl mb-2">{item.logo}</div>
            {item.quote && <div className="text-sm text-ink-600 mb-1">{item.quote}</div>}
            {item.metric && <div className="text-xs text-brand-500 font-medium">{item.metric}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

