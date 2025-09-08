'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface PriceCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  popular?: boolean
  delay?: number
}

export function PriceCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref,
  popular = false,
  delay = 0
}: PriceCardProps) {
  return (
    <motion.div
      className={`relative p-8 card transition hover:-translate-y-1 hover:shadow-glow ${
        popular 
          ? 'ring-2 ring-brand-teal ring-opacity-60' 
          : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-brand-teal to-brand-cta text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <Star className="h-4 w-4" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-ink mb-2">{name}</h3>
        <p className="text-muted mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-ink">{price}</span>
          <span className="text-sm text-muted ml-2">{period}</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
            <span className="text-muted">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? "primary" : "secondary"} 
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  )
}
