'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface DashboardCardProps {
  title?: string
  subtitle?: string
  footer?: ReactNode
  size?: 'default' | 'dense' | 'loose'
  className?: string
  onClick?: () => void
  ariaLabel?: string
  children: ReactNode
}

const sizeMap = {
  default: 'p-5 md:p-6',
  dense: 'p-4 md:p-5',
  loose: 'p-6 md:p-8'
}

export function DashboardCard({ 
  title, 
  subtitle, 
  footer, 
  size = 'default',
  className = '',
  onClick,
  ariaLabel,
  children 
}: DashboardCardProps) {
  const prefersReduced = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: prefersReduced ? 0 : 0.4 }}
      whileHover={{ 
        y: prefersReduced ? 0 : -2,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        rounded-3xl border border-white/10 shadow-glass backdrop-blur-xs glass-surface 
        transition-transform duration-base ease-out-quart 
        hover:-translate-y-0.5 hover:shadow-halo focus-within:shadow-halo
        relative overflow-hidden group
        ${sizeMap[size]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Subtle inner gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-60" />
      
      {/* Content */}
      <div className="relative z-10">
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-lg font-semibold text-white/90 mb-1">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-mist-300">{subtitle}</p>
            )}
          </div>
        )}
        
        <div className="space-y-4">
          {children}
        </div>
        
        {footer && (
          <div className="mt-6 pt-4 border-t border-white/20">
            {footer}
          </div>
        )}
      </div>
      
      {/* Hover ring effect */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
