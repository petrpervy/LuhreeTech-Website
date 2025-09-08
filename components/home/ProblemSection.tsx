"use client";
import { Phone, Clock, DollarSign, AlertTriangle, TrendingDown, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProblemSection() {
  const [activeProblem, setActiveProblem] = useState(0);
  
  const problems = [
    {
      icon: Phone,
      title: "Missed Calls = Lost Revenue",
      description: "78% of customers buy from the first company that responds. When you miss calls, you miss business.",
      stats: "50% of after-hours calls go unanswered",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: DollarSign,
      title: "Receptionist Costs Are Skyrocketing",
      description: "Full-time receptionists cost $2,500-$4,000/month plus benefits, training, and management overhead.",
      stats: "Real cost: $50,000+ per year",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Slow Response Times Kill Conversions",
      description: "Responding within an hour is 7x more likely to qualify a lead than waiting longer.",
      stats: "Average response time: 2+ hours",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: TrendingDown,
      title: "Manual Processes Don't Scale",
      description: "As your business grows, manual scheduling and intake become bottlenecks that limit growth.",
      stats: "30% of time wasted on admin tasks",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The SMB Client Bottleneck</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Your Time and Leads Are</span>
            <br />
            <span className="text-gradient">Slipping Away</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            Small and mid-sized businesses are losing thousands of dollars every month 
            due to inefficient client handling and missed opportunities.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className={`glass card hover-lift-enhanced transition-all duration-500 ${
                  activeProblem === index ? 'glass-pulse scale-105 ring-2 ring-red-200' : ''
                }`}
                onMouseEnter={() => setActiveProblem(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-white`} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    {problem.title}
                  </h3>
                </div>
                
                <p className="text-brand-text-secondary mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${problem.bgColor} text-sm font-medium ${problem.iconColor}`}>
                  <TrendingDown className="w-3 h-3" />
                  <span>{problem.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <div className="glass-deep card p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-4">
              The Cost of Manual Processes
            </h3>
            <p className="text-brand-text-secondary">
              Here's what happens when you rely on traditional methods vs. AI automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">×</span>
                </div>
                <h4 className="text-xl font-semibold text-brand-text-primary">With Manual Processes</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Leads wait hours or days for a callback</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Missed calls during busy periods</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Inconsistent client intake process</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>High staff costs and management overhead</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Limited scalability as business grows</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-brand-text-primary">With Luhreetech AI</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Instant engagement, lead captured while they're interested</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>24/7 availability, never miss a call</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Consistent, professional client experience</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>70%+ cost savings vs. hiring in-house</span>
                </div>
                <div className="flex items-center gap-3 text-brand-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Scales automatically with your business</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to stop losing leads and start scaling efficiently?
          </p>
          <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            See How Luhreetech Solves This
          </button>
        </div>
      </div>
    </section>
  );
}
