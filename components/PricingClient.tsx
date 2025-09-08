'use client'

import { Button } from '@/components/ui/Button'
import { CalculatorWidget } from '@/components/CalculatorWidget'
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
// import { pricing } from '@/src/content/pricing'
const pricing = {
  plans: [
    {
      name: "Starter",
      price: "$1,500 setup + $399/mo",
      description: "Solo practices & lean teams",
      features: [
        "1 digital employee role",
        "Up to 2 integrations",
        "Business-hours monitoring",
        "Email support"
      ],
      cta: { label: "Start Free Audit", href: "/contact#book" }
    },
    {
      name: "Pro",
      price: "$3,000 setup + $899/mo",
      description: "Growing teams and multi-location",
      features: [
        "2–3 roles (reception, scheduling, follow-ups)",
        "Up to 5 integrations",
        "Priority monitoring",
        "Email + chat support"
      ],
      cta: { label: "Talk to sales", href: "/contact" },
      popular: true
    },
    {
      name: "On-Prem",
      price: "Custom",
      description: "Compliance-sensitive (law/medical)",
      features: [
        "Private/on-prem LLM option",
        "Security review & custom SLAs",
        "Dedicated support"
      ],
      cta: { label: "Discuss deployment", href: "/contact" }
    }
  ],
  faq: [
    {
      question: "Any contracts?",
      answer: "Month-to-month. Cancel anytime."
    },
    {
      question: "Do you replace my staff?",
      answer: "No. We offload routine work so your team can focus on high-value tasks."
    },
    {
      question: "Can I start with one role?",
      answer: "Yes—most clients start with one and expand."
    }
  ]
}
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PricingClient() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [calculatedTotal, setCalculatedTotal] = useState(0)

  const handlePlanExpand = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName)
  }

  const handleFaqToggle = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  return (
    <>
      {/* Interactive Calculator */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-ink">Get a Custom Quote</h2>
              <p className="text-brand-gray leading-relaxed">
                Use our calculator to estimate your monthly cost based on your team size, 
                volume, and specific needs. All plans include hosting, monitoring, and support.
              </p>
              <CalculatorWidget onTotalChange={setCalculatedTotal} />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-ink">ROI Projection</h2>
              <div className="glass-light p-6 rounded-lgx">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Estimated Monthly Cost</span>
                    <span className="font-semibold text-brand-ink">${calculatedTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Estimated Time Saved</span>
                    <span className="font-semibold text-brand-lime">40+ hours/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Payback Period</span>
                    <span className="font-semibold text-brand-lime">2-3 months</span>
                  </div>
                  <div className="pt-4 border-t border-brand-border">
                    <p className="text-sm text-brand-gray">
                      Based on average time savings of 40 hours/week at $25/hour labor cost.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="primary" size="lg" asChild className="w-full">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-brand-ink">Choose Your Plan</h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                All plans include hosting, monitoring, and support. Pay only after you approve the demo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`glass-light p-8 rounded-lgx relative hover-liquid ${
                    plan.popular ? 'ring-2 ring-brand-lime/50' : ''
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-lime text-brand-ink px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-ink mb-2">{plan.name}</h3>
                      <p className="text-brand-gray text-sm">{plan.description}</p>
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-brand-ink">{plan.price}</div>

                    </div>
                    
                    <div className="space-y-3">
                      {plan.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-brand-lime flex-shrink-0" />
                          <span className="text-sm text-brand-gray">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.features.length > 4 && (
                        <button
                          onClick={() => handlePlanExpand(plan.name)}
                          className="flex items-center gap-2 text-sm text-brand-lime hover:text-brand-lime/80 transition-colors"
                        >
                          {expandedPlan === plan.name ? 'Show less' : `+${plan.features.length - 4} more features`}
                          {expandedPlan === plan.name ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      
                      <AnimatePresence>
                        {expandedPlan === plan.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                          >
                            {plan.features.slice(4).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-brand-lime flex-shrink-0" />
                                <span className="text-sm text-brand-gray">{feature}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <Button 
                      variant={plan.popular ? "primary" : "secondary"} 
                      size="lg" 
                      asChild 
                      className="w-full"
                    >
                      <Link href={plan.cta.href} className="flex items-center justify-center gap-2">
                        {plan.cta.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-brand-ink">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {pricing.faq.map((faq, index) => (
                <div key={index} className="glass-light rounded-lgx overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-light/20 transition-colors"
                  >
                    <h3 className="font-semibold text-brand-ink">{faq.question}</h3>
                    {faqOpen === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-lime" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-gray" />
                    )}
                  </button>
                  <AnimatePresence>
                    {faqOpen === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6">
                          <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
