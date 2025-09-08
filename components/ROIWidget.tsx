'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { computeROI, generateSparklineData } from '@/lib/roi'

interface ROIWidgetProps {
  className?: string
}

export default function ROIWidget({ className = '' }: ROIWidgetProps) {
  const [teamSize, setTeamSize] = useState(10)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)
  const [hourly, setHourly] = useState(35)
  
  const [roi, setRoi] = useState({ savings: 0, paybackWeeks: 0 })
  const [sparklineData, setSparklineData] = useState<number[]>([])
  const [displaySavings, setDisplaySavings] = useState(0)

  const savingsMotion = useMotionValue(0)
  const savingsDisplay = useTransform(savingsMotion, (value) => Math.round(value))

  useEffect(() => {
    const result = computeROI({ teamSize, hoursPerWeek, hourly })
    setRoi(result)
    
    // Animate savings count-up
    animate(savingsMotion, result.savings, { 
      duration: 0.8, 
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplaySavings(Math.round(latest))
      }
    })
    
    // Generate new sparkline data
    setSparklineData(generateSparklineData())
  }, [teamSize, hoursPerWeek, hourly, savingsMotion])

  const handleSliderChange = (setter: (value: number) => void, value: number) => {
    setter(value)
  }

  return (
    <div className={`grid lg:grid-cols-2 gap-8 ${className}`}>
      {/* Left: Sliders */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-ink mb-6">Calculate Your ROI</h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-ink mb-3">
              Team Size: {teamSize}
            </label>
            <input
              id="teamSize"
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => handleSliderChange(setTeamSize, Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
              aria-describedby="teamSize-desc"
            />
            <div className="flex justify-between text-xs text-muted mt-1">
              <span>1</span>
              <span>50+</span>
            </div>
            <div id="teamSize-desc" className="sr-only">Adjust team size from 1 to 50 people</div>
          </div>

          <div>
            <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-ink mb-3">
              Hours Saved per Week: {hoursPerWeek}
            </label>
            <input
              id="hoursPerWeek"
              type="range"
              min="5"
              max="80"
              value={hoursPerWeek}
              onChange={(e) => handleSliderChange(setHoursPerWeek, Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
              aria-describedby="hoursPerWeek-desc"
            />
            <div className="flex justify-between text-xs text-muted mt-1">
              <span>5</span>
              <span>80+</span>
            </div>
            <div id="hoursPerWeek-desc" className="sr-only">Adjust hours saved per week from 5 to 80 hours</div>
          </div>

          <div>
            <label htmlFor="hourly" className="block text-sm font-medium text-ink mb-3">
              Average Hourly Rate: ${hourly}
            </label>
            <input
              id="hourly"
              type="range"
              min="20"
              max="75"
              value={hourly}
              onChange={(e) => handleSliderChange(setHourly, Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"
              aria-describedby="hourly-desc"
            />
            <div className="flex justify-between text-xs text-muted mt-1">
              <span>$20</span>
              <span>$75+</span>
            </div>
            <div id="hourly-desc" className="sr-only">Adjust average hourly rate from $20 to $75</div>
          </div>
        </div>
      </div>

      {/* Right: Results */}
      <div className="space-y-4">
        <div className="glass p-6 text-center">
          <div className="text-3xl font-bold text-ink mb-2">
            ${displaySavings.toLocaleString()}/mo
          </div>
          <div className="text-sm text-muted mb-1">Estimated monthly savings</div>
          <div className="text-xs text-brand">Team inputs →</div>
        </div>

        <div className="glass p-6">
          <div className="text-center mb-4">
            <div className="text-lg font-semibold text-ink mb-1">
              Payback: {roi.paybackWeeks} weeks
            </div>
            <div className="text-sm text-muted">Time to ROI</div>
          </div>
          
          <div className="space-y-3">
            <div className="text-xs text-muted mb-2">Savings trend</div>
            <div className="h-16">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  className="text-brand"
                  points={sparklineData.map((d, i) => `${(i / (sparklineData.length - 1)) * 100},${40 - d * 40}`).join(' ')}
                />
              </svg>
            </div>
          </div>
        </div>

        <button 
          className="text-sm text-brand hover:text-brand/80 underline focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2 rounded"
          aria-describedby="assumptions-popover"
        >
          See assumptions
        </button>
        
        <div id="assumptions-popover" className="sr-only">
          Assumptions: 70% efficiency rate, 4.3 weeks per month, $1,500 monthly cost
        </div>
      </div>
    </div>
  )
}
