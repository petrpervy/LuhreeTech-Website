'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Calculator, TrendingUp } from 'lucide-react'

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    teamSize: 5,
    avgSalary: 50000,
    hoursPerWeek: 20
  })

  const calculateSavings = () => {
    const hourlyRate = formData.avgSalary / (52 * 40) // Assuming 40 hours/week
    const weeklySavings = formData.hoursPerWeek * hourlyRate
    const monthlySavings = weeklySavings * 4.33 // Average weeks per month
    const yearlySavings = monthlySavings * 12
    
    return {
      monthly: Math.round(monthlySavings),
      yearly: Math.round(yearlySavings)
    }
  }

  const savings = calculateSavings()

  const handleChange = (field: string, value: number) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal-400/5 via-transparent to-cta-amber-500/5" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              See your ROI.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Calculate how much you could save with AI automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="glass p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-ink mb-6">
                  Your Business Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">
                    Team Size: {formData.teamSize} people
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={formData.teamSize}
                    onChange={(e) => handleChange('teamSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">
                    Average Salary: ${formData.avgSalary.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="30000"
                    max="150000"
                    step="5000"
                    value={formData.avgSalary}
                    onChange={(e) => handleChange('avgSalary', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">
                    Hours of Repetitive Work/Week: {formData.hoursPerWeek} hours
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={formData.hoursPerWeek}
                    onChange={(e) => handleChange('hoursPerWeek', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-ink mb-6">
                  Estimated Savings
                </h2>

                <motion.div 
                  className="glass p-6 text-center"
                  key={savings.monthly}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-accent-teal-500 mb-2">
                    ${savings.monthly.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-700">Monthly Savings</div>
                </motion.div>

                <motion.div 
                  className="glass p-6 text-center"
                  key={savings.yearly}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-cta-amber-600 mb-2">
                    ${savings.yearly.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-700">Yearly Savings</div>
                </motion.div>

                <div className="text-center">
                  <Button variant="primary" className="w-full">
                    <a href="/contact" className="flex items-center justify-center">
                      <Calculator className="h-4 w-4 mr-2" />
                      Book Free Audit to Validate Your Numbers
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-teal-400 to-accent-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-brand-ink mb-4">
              Ready to Turn These Numbers Into Reality?
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our free audit will analyze your specific workflows and provide a detailed ROI analysis 
              tailored to your business. No obligation, just real insights.
            </p>
            
            <Button variant="primary">
              <a href="/contact">Get Your Free Audit</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
