'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate, useInView } from 'framer-motion'
import Link from 'next/link'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface KPIBadgeProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  suffix?: string
  href?: string
  className?: string
}

export function KPIBadge({ 
  value, 
  label, 
  icon, 
  suffix = '', 
  href, 
  className = '' 
}: KPIBadgeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const prefersReducedMotion = usePrefersReducedMotion()
  const countMotion = useMotionValue(0)
  
  // Format the count display
  const countDisplay = Math.round(countMotion.get())

  // Animate count-up when in view
  useEffect(() => {
    if (isInView && !prefersReducedMotion && typeof value === 'number') {
      animate(countMotion, value, { duration: 1.2, ease: 'easeOut' })
    } else if (isInView) {
      countMotion.set(typeof value === 'number' ? value : 0)
    }
  }, [isInView, value, countMotion, prefersReducedMotion])

  const content = (
    <>
      <div className="flex items-center justify-center mb-3">
        {icon && (
          <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center mr-3">
            {icon}
          </div>
        )}
        <div className="text-3xl font-bold text-ink">
          {typeof value === 'number' ? countDisplay : value}
          {suffix}
        </div>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </>
  )

  return (
    <motion.div
      ref={ref}
      whileHover={{ 
        y: -6, 
        transition: { duration: 0.14, ease: 'easeOut' }
      }}
      className={`glass p-6 text-center cursor-pointer ${className}`}
    >
      {href ? (
        <Link href={href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  )
}