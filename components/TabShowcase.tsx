'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Users, Calendar, FileText, Settings } from 'lucide-react'

interface Tab {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  benefit: string
  proof: string
  preview: React.ReactNode
}

interface TabShowcaseProps {
  tabs: Tab[]
  defaultTab?: string
}

export function TabShowcase({ tabs, defaultTab }: TabShowcaseProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-border">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-brand-lime border-brand-lime'
                  : 'text-brand-gray border-transparent hover:text-brand-ink hover:border-brand-gray'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 rounded-t`}
            >
              <IconComponent className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tabs.map((tab) => {
          if (activeTab !== tab.id) return null
          
          return (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              {/* Left: Benefit & Proof */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {tab.benefit}
                  </h3>
                  <p className="text-sm text-brand-gray">
                    {tab.proof}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lime text-brand-ink rounded-lg font-medium hover:bg-brand-lime/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2">
                    Learn More
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 border border-brand-border text-brand-ink rounded-lg font-medium hover:bg-brand-light/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2">
                    View Demo
                  </button>
                </div>
              </div>

              {/* Right: Interactive Preview */}
              <div className="glass-light p-6 rounded-lgx hover-liquid">
                {tab.preview}
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
