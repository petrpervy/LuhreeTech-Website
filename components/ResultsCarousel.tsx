'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Result {
  id: string
  title: string
  metric: string
  value: string | number
  change: string
  href: string
}

interface ResultsCarouselProps {
  results: Result[]
  className?: string
}

export default function ResultsCarousel({ results, className = '' }: ResultsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/70 border border-white/60 text-ink hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
          aria-label="Previous result"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-sm text-muted">
          {currentIndex + 1} of {results.length}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/70 border border-white/60 text-ink hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
          aria-label="Next result"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {results.map((result, index) => (
            <div
              key={result.id}
              className="w-full flex-shrink-0 px-4"
            >
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`glass p-8 text-center ${
                  index === currentIndex ? 'scale-105 shadow-[0_16px_60px_rgba(0,0,0,0.16)]' : 'opacity-70'
                }`}
              >
                <div className="text-sm text-muted mb-2">{result.title}</div>
                <div className="text-4xl font-bold text-ink mb-2">{result.value}</div>
                <div className="text-lg text-muted mb-4">{result.metric}</div>
                <div className="text-sm text-brand font-medium">{result.change}</div>
                
                <a
                  href={result.href}
                  className="inline-block mt-6 text-sm text-brand hover:text-brand/80 underline focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2 rounded"
                >
                  View case study →
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {results.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-brand' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
