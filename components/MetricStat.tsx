'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MetricStatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  className?: string
}

export function MetricStat({ 
  value, 
  suffix = '', 
  prefix = '', 
  label, 
  description, 
  className = '' 
}: MetricStatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`metric-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [label, isVisible])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <motion.div
      id={`metric-${label}`}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-brand-lime mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-semibold text-brand-ink mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-brand-gray">
          {description}
        </div>
      )}
    </motion.div>
  )
}
