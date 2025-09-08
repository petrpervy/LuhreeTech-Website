'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CalculatorWidgetProps {
  onTotalChange?: (total: number) => void
  className?: string
}

export function CalculatorWidget({ onTotalChange, className = '' }: CalculatorWidgetProps) {
  const [teamSize, setTeamSize] = useState(5)
  const [inboundVolume, setInboundVolume] = useState(100)
  const [addons, setAddons] = useState({
    prioritySupport: false,
    customIntegrations: false,
    onPremise: false,
    whiteLabel: false
  })

  const basePrice = 500
  const teamMultiplier = Math.ceil(teamSize / 5) * 0.5
  const volumeMultiplier = Math.ceil(inboundVolume / 100) * 0.3
  const addonCosts = {
    prioritySupport: 200,
    customIntegrations: 300,
    onPremise: 500,
    whiteLabel: 400
  }

  const addonTotal = Object.entries(addons).reduce((total, [key, enabled]) => {
    return enabled ? total + addonCosts[key as keyof typeof addonCosts] : total
  }, 0)

  const total = Math.round(basePrice + (basePrice * teamMultiplier) + (basePrice * volumeMultiplier) + addonTotal)

  useEffect(() => {
    onTotalChange?.(total)
  }, [total, onTotalChange])

  const handleAddonChange = (addon: keyof typeof addons) => {
    setAddons(prev => ({
      ...prev,
      [addon]: !prev[addon]
    }))
  }

  return (
    <div className={`glass-light p-6 rounded-lgx ${className}`}>
      <h3 className="text-xl font-semibold text-brand-ink mb-6">Calculate Your Cost</h3>
      
      <div className="space-y-6">
        {/* Team Size */}
        <div>
          <label className="block text-sm font-medium text-brand-ink mb-2">
            Team Size: {teamSize} people
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-brand-light rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-brand-gray mt-1">
            <span>1</span>
            <span>50+</span>
          </div>
        </div>

        {/* Inbound Volume */}
        <div>
          <label className="block text-sm font-medium text-brand-ink mb-2">
            Monthly Inbound Volume: {inboundVolume} items
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={inboundVolume}
            onChange={(e) => setInboundVolume(Number(e.target.value))}
            className="w-full h-2 bg-brand-light rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-brand-gray mt-1">
            <span>10</span>
            <span>1000+</span>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <label className="block text-sm font-medium text-brand-ink mb-3">Add-ons</label>
          <div className="space-y-3">
            {Object.entries(addonCosts).map(([key, cost]) => (
              <label key={key} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addons[key as keyof typeof addons]}
                    onChange={() => handleAddonChange(key as keyof typeof addons)}
                    className="w-4 h-4 text-brand-lime bg-brand-light border-brand-border rounded focus:ring-brand-lime focus:ring-2"
                  />
                  <span className="text-sm text-brand-ink capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
                <span className="text-sm font-medium text-brand-lime">+${cost}/mo</span>
              </label>
            ))}
          </div>
        </div>

        {/* Total */}
        <motion.div
          className="pt-6 border-t border-brand-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-brand-ink">Monthly Total</span>
            <span className="text-2xl font-bold text-brand-lime">${total.toLocaleString()}</span>
          </div>
          <p className="text-xs text-brand-gray mt-1">
            Includes hosting, monitoring, and basic support
          </p>
        </motion.div>
      </div>
    </div>
  )
}
