'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Industry {
  id: string
  name: string
}

interface IndustriesChipsProps {
  items: Industry[]
  onSelectionChange?: (selectedIds: string[]) => void
  className?: string
}

export default function IndustriesChips({
  items,
  onSelectionChange,
  className = ''
}: IndustriesChipsProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleToggle = (id: string) => {
    const newSelection = selectedIds.includes(id)
      ? selectedIds.filter(itemId => itemId !== id)
      : [...selectedIds, id]

    setSelectedIds(newSelection)
    onSelectionChange?.(newSelection)
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className="flex space-x-3 min-w-max pb-2">
        {items.map((industry) => {
          const isSelected = selectedIds.includes(industry.id)

          return (
            <motion.button
              key={industry.id}
              onClick={() => handleToggle(industry.id)}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2
                ${isSelected
                  ? 'bg-brand text-white shadow-soft'
                  : 'glass text-ink hover:bg-white/90'
                }
              `}
              aria-pressed={isSelected}
            >
              {industry.name}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
