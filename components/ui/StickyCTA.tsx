'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import Link from 'next/link'

interface StickyCTAProps {
  className?: string
}

export default function StickyCTA({ className = '' }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 25)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.3,
          ease: 'easeOut'
        }}
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
      >
        <div className="glass px-6 py-4 shadow-soft">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-ink">Ready to get started?</span>
            <div className="flex space-x-3">
              <Link href="/contact">
                <button className="px-4 py-2 bg-amber text-white rounded-full text-sm font-medium hover:bg-amber/90 transition-colors focus:outline-none focus:ring-2 focus:ring-amber/70 focus:ring-offset-2">
                  Start Free Audit
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="px-4 py-2 border border-white/60 text-ink rounded-full text-sm font-medium hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
