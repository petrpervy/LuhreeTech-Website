'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

interface PlanCardProps {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  delay?: number
}

export function PlanCard({ name, price, description, features, cta, popular = false, delay = 0 }: PlanCardProps) {
  return (
    <motion.div
      className={`glass p-8 relative ${popular ? 'ring-2 ring-accent-teal-500' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-brand-ink mb-2">{name}</h3>
        <div className="text-4xl font-bold text-accent-teal-500 mb-2">{price}</div>
        <p className="text-gray-700">{description}</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent-teal-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button asChild variant="primary" className="w-full">
        <a href="/contact">{cta}</a>
      </Button>
    </motion.div>
  )
}
