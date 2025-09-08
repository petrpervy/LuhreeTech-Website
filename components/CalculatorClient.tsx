'use client'

import { CalculatorWidget } from '@/components/CalculatorWidget'
import RoiHero from '@/components/roi/RoiHero'
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassSurface from '@/components/ui/GlassSurface'
import HaloButton from '@/components/ui/HaloButton'

export function CalculatorClient() {
  const [calculatedTotal, setCalculatedTotal] = useState(0)
  const [laborCost, setLaborCost] = useState(25)
  const [hoursSaved, setHoursSaved] = useState(40)
  const [teamSize, setTeamSize] = useState(10)
  const [adoptionPct, setAdoptionPct] = useState(0.8)

  const monthlySavings = hoursSaved * laborCost * 4.33 // 4.33 weeks per month
  const annualSavings = monthlySavings * 12
  const paybackPeriod = calculatedTotal > 0 ? (calculatedTotal / monthlySavings) * 12 : 0
  const roi = calculatedTotal > 0 ? ((annualSavings - calculatedTotal) / calculatedTotal) * 100 : 0

  return (
    <>
      {/* ROI Hero Dashboard */}
      <RoiHero
        teamSize={teamSize}
        hourlyCost={laborCost}
        weeklyHoursSaved={hoursSaved}
        adoptionPct={adoptionPct}
      />

      {/* Calculator */}
      <section className="py-20" id="calculator">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Widget */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Calculate Your Cost</h2>
              <CalculatorWidget onTotalChange={setCalculatedTotal} />
            </div>

            {/* ROI Results */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">ROI Projection</h2>
              
              <GlassSurface className="p-6 space-y-6">
                {/* Labor Cost Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Average Labor Cost: ${laborCost}/hour
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={laborCost}
                    onChange={(e) => setLaborCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$15</span>
                    <span>$100+</span>
                  </div>
                </div>

                {/* Hours Saved Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Hours Saved per Week: {hoursSaved}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10</span>
                    <span>80+</span>
                  </div>
                </div>

                {/* Team Size Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Team Size: {teamSize}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>1</span>
                    <span>50+</span>
                  </div>
                </div>

                {/* Adoption Rate Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Adoption Rate: {Math.round(adoptionPct * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={adoptionPct}
                    onChange={(e) => setAdoptionPct(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Results */}
                <motion.div
                  className="space-y-4 pt-6 border-t border-white/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-brand-teal/10 rounded-lg">
                      <div className="text-2xl font-bold text-brand-teal">${monthlySavings.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Monthly Savings</div>
                    </div>
                    <div className="text-center p-4 bg-brand-teal/10 rounded-lg">
                      <div className="text-2xl font-bold text-brand-teal">${annualSavings.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Annual Savings</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-100 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{paybackPeriod.toFixed(1)}</div>
                      <div className="text-xs text-slate-500">Months to Payback</div>
                    </div>
                    <div className="text-center p-4 bg-slate-100 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{roi.toFixed(0)}%</div>
                      <div className="text-xs text-slate-500">Annual ROI</div>
                    </div>
                  </div>
                </motion.div>
              </GlassSurface>

              <Link href="/contact">
                <HaloButton variant="primary" className="w-full">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </HaloButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Calculation Assumptions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <GlassSurface className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-brand-teal stroke-[1.25]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Time Savings</h3>
                <p className="text-sm text-slate-600">
                  Based on average time savings of 40 hours/week from our case studies.
                </p>
              </GlassSurface>
              
              <GlassSurface className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-brand-teal stroke-[1.25]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Labor Costs</h3>
                <p className="text-sm text-slate-600">
                  Based on average hourly rates for administrative and customer service tasks.
                </p>
              </GlassSurface>
              
              <GlassSurface className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-teal stroke-[1.25]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">ROI Calculation</h3>
                <p className="text-sm text-slate-600">
                  Annual ROI = (Annual Savings - Annual Cost) / Annual Cost × 100%
                </p>
              </GlassSurface>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
