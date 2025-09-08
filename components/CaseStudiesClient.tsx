'use client'

import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Stethoscope, Briefcase, Truck, Home, Scale, Palette } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function CaseStudiesClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [selectedImpact, setSelectedImpact] = useState<string>('all')

  const caseStudies = [
    {
      id: 'dental-clinic',
      company: 'Dental Clinic',
      industry: 'Healthcare',
      challenge: 'Patients waiting too long for callbacks',
      solution: 'AI receptionist for scheduling & reminders',
      metric: '12 hrs saved per week',
      testimonial: 'We no longer miss a single patient call.',
      icon: 'stethoscope'
    },
    {
      id: 'marketing-agency',
      company: 'Marketing Agency',
      industry: 'Agency',
      challenge: 'Manual lead research taking 15+ hours weekly',
      solution: 'Automated scraping & outreach sequences',
      metric: '30+ new leads per week',
      testimonial: 'We closed 2 new clients in just 30 days.',
      icon: 'briefcase'
    },
    {
      id: 'logistics-firm',
      company: 'Logistics Firm',
      industry: 'Logistics',
      challenge: 'Manual data entry causing costly errors',
      solution: 'OCR + database automation system',
      metric: '90% fewer data entry errors',
      testimonial: 'Our accuracy improved dramatically overnight.',
      icon: 'truck'
    },
    {
      id: 'retail-store',
      company: 'Retail Store',
      industry: 'Retail',
      challenge: 'Inventory tracking consuming entire weekends',
      solution: 'Automated stock monitoring & reorder alerts',
      metric: '15 hrs saved per week',
      testimonial: 'We can focus on customers instead of spreadsheets.',
      icon: 'home'
    },
    {
      id: 'law-firm',
      company: 'Law Firm',
      industry: 'Legal',
      challenge: 'Client intake forms taking 2+ hours each',
      solution: 'AI document processing & CRM integration',
      metric: '75% faster intake',
      testimonial: 'Our paralegals can focus on actual legal work.',
      icon: 'scale'
    },
    {
      id: 'creative-agency',
      company: 'Creative Agency',
      industry: 'Agency',
      challenge: 'Project management eating up billable hours',
      solution: 'Automated project tracking & client updates',
      metric: '20 hrs saved per week',
      testimonial: 'We deliver projects faster and clients love the transparency.',
      icon: 'palette'
    }
  ]

  const industries = ['all', 'Healthcare', 'Agency', 'Logistics', 'Retail', 'Legal']
  const impacts = ['all', 'Time Saved', 'Error Reduction', 'Lead Generation', 'Cost Savings']

  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry
    const impactMatch = selectedImpact === 'all' || 
      (selectedImpact === 'Time Saved' && study.metric.includes('hrs')) ||
      (selectedImpact === 'Error Reduction' && study.metric.includes('%')) ||
      (selectedImpact === 'Lead Generation' && study.metric.includes('leads')) ||
      (selectedImpact === 'Cost Savings' && study.metric.includes('faster'))
    return industryMatch && impactMatch
  })

  return (
    <>
      {/* Filters */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-brand-ink mr-2">Industry:</span>
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-brand-lime text-brand-ink'
                      : 'bg-brand-light/50 text-brand-gray hover:bg-brand-lime/20 hover:text-brand-ink'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-brand-ink mr-2">Impact:</span>
              {impacts.map(impact => (
                <button
                  key={impact}
                  onClick={() => setSelectedImpact(impact)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedImpact === impact
                      ? 'bg-brand-lime text-brand-ink'
                      : 'bg-brand-light/50 text-brand-gray hover:bg-brand-lime/20 hover:text-brand-ink'
                  }`}
                >
                  {impact === 'all' ? 'All Impacts' : impact}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-gray">No case studies match your filters.</p>
              <Button 
                variant="ghost" 
                onClick={() => {
                  setSelectedIndustry('all')
                  setSelectedImpact('all')
                }}
                className="mt-4"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
