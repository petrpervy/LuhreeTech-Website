"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Zap, Shield, Clock, ArrowRight } from "lucide-react"

export default function AppleLikeSolution() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call again. Your AI employee works around the clock, weekends, and holidays.",
      highlight: "Always On"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Responds to inquiries in seconds, not hours. Capture leads while they're hot.",
      highlight: "Lightning Fast"
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Every interaction is professional, accurate, and on-brand. No training, no sick days.",
      highlight: "Reliable"
    },
    {
      icon: CheckCircle,
      title: "Cost Effective",
      description: "Starting at $500/month vs $3,000+ for a human receptionist. Save 70%+ immediately.",
      highlight: "70% Savings"
    }
  ]

  return (
    <section className="section py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Meet Your New
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI Team Member
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy a digital employee that works like your best staff member, 
              but never sleeps, never gets tired, and never costs $50,000 a year.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className={`glass-light p-6 rounded-2xl transition-all duration-500 hover:glass-crystal hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right side - Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-deep p-8 rounded-3xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sarah AI
                </h3>
                <p className="text-gray-600 mb-6">
                  Your new digital receptionist, ready to work 24/7
                </p>
                
                {/* Live demo preview */}
                <div className="glass-light p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">Live Demo</span>
                  </div>
                  <div className="text-left space-y-2">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">"Hi, I'd like to schedule a consultation..."</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg ml-4">
                      <p className="text-sm text-gray-700">"I'd be happy to help! What type of service are you looking for?"</p>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Try Live Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom comparison */}
        <div className={`glass-deep p-8 rounded-3xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              The Choice Is Clear
            </h3>
            <p className="text-gray-600">
              Compare the costs and see why thousands of businesses are making the switch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-2xl bg-red-50 border border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-2">Traditional Receptionist</h4>
              <div className="text-3xl font-bold text-red-600 mb-2">$50,000+</div>
              <div className="text-sm text-red-600">per year</div>
              <ul className="text-sm text-red-700 mt-4 space-y-1">
                <li>• 40 hours/week max</li>
                <li>• Sick days & vacation</li>
                <li>• Training required</li>
                <li>• Benefits & taxes</li>
              </ul>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-green-50 border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Luhreetech AI</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">$6,000</div>
              <div className="text-sm text-green-600">per year</div>
              <ul className="text-sm text-green-700 mt-4 space-y-1">
                <li>• 24/7 availability</li>
                <li>• No breaks or sick days</li>
                <li>• Instant deployment</li>
                <li>• No additional costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
