'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { X, TrendingUp, Clock, Users } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    change: string
  }[]
  testimonial?: string
  contact?: string
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null
  isOpen: boolean
  onClose: () => void
}

export default function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (!caseStudy) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 0.3,
              ease: 'easeOut'
            }}
            className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-white/20">
              <div>
                <h2 className="text-2xl font-bold text-ink">{caseStudy.title}</h2>
                <p className="text-muted mt-1">{caseStudy.company} • {caseStudy.industry}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/70 text-ink hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-3">The Challenge</h3>
                  <p className="text-muted leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-3">Our Solution</h3>
                  <p className="text-muted leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-semibold text-ink mb-4">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="glass p-4 text-center">
                      <div className="text-2xl font-bold text-ink mb-1">{result.value}</div>
                      <div className="text-sm text-muted mb-2">{result.metric}</div>
                      <div className="text-xs text-brand font-medium">{result.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="glass p-6 border-l-4 border-brand/30">
                  <blockquote className="text-muted italic leading-relaxed">
                    "{caseStudy.testimonial}"
                  </blockquote>
                </div>
              )}

              {/* CTA */}
              <div className="text-center pt-4">
                <button className="bg-amber text-white px-6 py-3 rounded-full font-medium hover:bg-amber/90 transition-colors focus:outline-none focus:ring-2 focus:ring-amber/70 focus:ring-offset-2">
                  Get Similar Results
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
