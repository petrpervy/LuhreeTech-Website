'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface MiniGraphPanelProps {
  data: number[]
  title?: string
  className?: string
  height?: number
  color?: string
}

export function MiniGraphPanel({ 
  data, 
  title, 
  className = '', 
  height = 120, 
  color = '#08C6AE' 
}: MiniGraphPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  if (data.length < 2) return null

  const width = 200
  const padding = 20
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue || 1

  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth
    const y = padding + chartHeight - ((value - minValue) / range) * chartHeight
    return { x, y }
  })

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ')

  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 ${className}`}>
      {title && (
        <h4 className="text-body font-medium text-ink-900 mb-3">{title}</h4>
      )}
      
      <div className="flex items-center justify-center">
        <svg width={width} height={height} className="overflow-visible">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          
          <rect width={width} height={height} fill="url(#grid)" />
          
          {/* Line chart */}
          <motion.path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: "easeInOut" }}
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={color}
              initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
              animate={prefersReducedMotion ? { scale: 1 } : { scale: 1 }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.3, 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

