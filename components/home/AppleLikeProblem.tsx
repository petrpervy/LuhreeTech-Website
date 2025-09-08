"use client"

import { useState, useEffect } from "react"
import { Phone, Clock, DollarSign, Users } from "lucide-react"

export default function AppleLikeProblem() {
  const [activeCard, setActiveCard] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const problems = [
    {
      icon: Phone,
      title: "Missed Calls = Lost Revenue",
      description: "78% of customers choose the first company that responds. Every missed call is money walking away.",
      stat: "50% of calls missed after hours"
    },
    {
      icon: DollarSign,
      title: "Receptionist Costs Are Killing You",
      description: "Full-time receptionists cost $3,000+ monthly plus benefits. That's $50,000+ per year for one person.",
      stat: "$50K+ annual cost per receptionist"
    },
    {
      icon: Clock,
      title: "Slow Response Times Hurt Conversion",
      description: "Responding within an hour makes you 7x more likely to qualify a lead. Most businesses take hours or days.",
      stat: "7x better conversion with quick response"
    },
    {
      icon: Users,
      title: "Your Team Is Overwhelmed",
      description: "Your staff spends 40% of their time on administrative tasks instead of high-value work.",
      stat: "40% of time wasted on admin tasks"
    }
  ]

  return (
    <section className="section py-20">
      <div className="container">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              The Hidden Costs of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Manual Operations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small businesses lose thousands every month to inefficient processes. 
              Here's what's really costing you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className={`glass-light p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:glass-crystal hover:scale-105 ${
                  activeCard === index ? 'glass-crystal scale-105' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {problem.description}
                </p>
                <div className="text-sm font-semibold text-red-600">
                  {problem.stat}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-deep p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Stop Losing Money?
            </h3>
            <p className="text-gray-600 mb-6">
              See how much you could save with AI automation in just 2 minutes.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform">
              Calculate Your Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
