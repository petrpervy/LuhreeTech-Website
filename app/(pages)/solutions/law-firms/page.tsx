import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { ArrowRight, Scale, Check, Clock, Users, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Law Firm Automation | Luhreetech',
  description: 'AI automation for law firms: client intake, document processing, case management, and deadline tracking.',
}

export default function LawFirmsPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/5 via-transparent to-brand-lime/5"></div>
        </div>
        
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-brand-lime/20 rounded-lg flex items-center justify-center">
              <Scale className="w-8 h-8 text-brand-lime" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink">
              AI Automation for Law Firms
            </h1>
          </div>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Streamline client intake, automate document processing, and never miss a deadline with AI-powered legal automation.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-brand-ink">Common Law Firm Challenges</h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                These pain points are costing your firm time and money every day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Manual Client Intake',
                  description: 'Hours spent on intake forms, document collection, and initial case assessment',
                  impact: '2-3 hours per client'
                },
                {
                  title: 'Document Processing',
                  description: 'Manual data extraction from contracts, pleadings, and discovery documents',
                  impact: '5-10 hours per case'
                },
                {
                  title: 'Deadline Management',
                  description: 'Tracking court dates, filing deadlines, and client communication schedules',
                  impact: 'Risk of missed deadlines'
                },
                {
                  title: 'Client Communication',
                  description: 'Managing client inquiries, case updates, and appointment scheduling',
                  impact: '2-4 hours daily'
                }
              ].map((pain, index) => (
                <div key={index} className="glass-light p-6 rounded-lgx">
                  <h3 className="text-xl font-semibold text-brand-ink mb-3">{pain.title}</h3>
                  <p className="text-brand-gray mb-4">{pain.description}</p>
                  <div className="text-sm font-medium text-brand-lime">{pain.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-brand-ink">Our AI Solutions</h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                Automated solutions designed specifically for law firm workflows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI Client Intake Assistant',
                  description: 'Automated intake forms, document collection, and initial case assessment',
                  features: [
                    'Smart form completion',
                    'Document upload and organization',
                    'Initial case evaluation',
                    'Conflict checking automation'
                  ],
                  icon: Users
                },
                {
                  title: 'Document Processing AI',
                  description: 'Extract key information from contracts, pleadings, and discovery documents',
                  features: [
                    'OCR and text extraction',
                    'Key clause identification',
                    'Data validation and verification',
                    'CRM integration'
                  ],
                  icon: FileText
                },
                {
                  title: 'Deadline Management System',
                  description: 'Automated tracking of court dates, filing deadlines, and client communications',
                  features: [
                    'Calendar integration',
                    'Automated deadline alerts',
                    'Court filing reminders',
                    'Client communication scheduling'
                  ],
                  icon: Clock
                },
                {
                  title: 'Client Communication Hub',
                  description: '24/7 client support, case updates, and appointment scheduling',
                  features: [
                    'Automated client responses',
                    'Case status updates',
                    'Appointment scheduling',
                    'Document sharing portal'
                  ],
                  icon: Users
                }
              ].map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <div key={index} className="glass-light p-6 rounded-lgx">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-lime/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-brand-lime" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-ink mb-2">{solution.title}</h3>
                        <p className="text-brand-gray text-sm">{solution.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-brand-gray">
                          <Check className="w-4 h-4 text-brand-lime flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-brand-ink">Real Results</h2>
            <CaseStudyCard
              id="law-firm"
              company="Law Firm"
              industry="Legal"
              challenge="Client intake forms taking 2+ hours each"
              solution="AI document processing & CRM integration"
              metric="75% faster intake"
              testimonial="Our paralegals can focus on actual legal work instead of data entry."
              icon="scale"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-ink">
              Ready to transform your law firm?
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Start with a free audit to see how much time and money you could save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary flex items-center gap-2">
                Start Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary flex items-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
