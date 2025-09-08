'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface PatternGridProps {
  variant?: 'dots' | 'grid' | 'gradient'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function PatternGrid({ variant = 'dots', className = '', size = 'md' }: PatternGridProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return (
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="24" height="24" fill="url(#dots)" />
          </svg>
        )
      
      case 'grid':
        return (
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="24" height="24" fill="url(#grid)" />
          </svg>
        )
      
      case 'gradient':
        return (
          <div className="w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-full" />
        )
      
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {renderPattern()}
    </motion.div>
  )
}

