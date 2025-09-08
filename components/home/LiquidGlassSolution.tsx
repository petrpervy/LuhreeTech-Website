"use client";
import { useState, useEffect } from "react";
import { 
  Clock, 
  Zap, 
  Heart, 
  DollarSign, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Phone,
  Calendar,
  MessageSquare,
  Brain,
  Crown
} from "lucide-react";

export default function LiquidGlassSolution() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Always On",
      description: "Never miss a call, never miss a lead. Your AI employee works around the clock, weekends, and holidays.",
      highlight: "24/7 availability",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Responds in under 1 second. Your customers get instant answers, not voicemail or hold music.",
      highlight: "< 1 second response",
    },
    {
      icon: Heart,
      title: "Human-Like",
      description: "Advanced AI that sounds natural, remembers everything, and treats every customer like your most important client.",
      highlight: "Natural conversation",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Performs like a $50k/year receptionist for just $1,000/month. No benefits, no sick days, no training costs.",
      highlight: "80% cost savings",
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Answer Calls & Inquiries",
      description: "Handles phone calls, web chats, and texts with natural conversation flow and dynamic information.",
    },
    {
      icon: Users,
      title: "Qualify Leads",
      description: "Asks the right questions to gauge lead quality and routes high-value prospects to your team.",
    },
    {
      icon: Calendar,
      title: "Schedule Appointments",
      description: "Accesses your calendar to book meetings and appointments on the spot with automatic confirmations.",
    },
    {
      icon: MessageSquare,
      title: "Follow-ups & Reminders",
      description: "Sends personalized follow-up emails and texts to ensure no one falls through the cracks.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-slate-700 text-sm font-medium mb-8 shadow-lg">
            <CheckCircle className="w-4 h-4" />
            <span>Meet Your New AI Employee</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-slate-800">The Solution:</span>
            <br />
            <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              Your AI Employee
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Stop losing money on missed calls and manual processes. Your AI employee works 24/7, 
            never makes mistakes, and costs a fraction of a human receptionist.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                  activeBenefit === index 
                    ? 'bg-white/40 backdrop-blur-xl border-white/50 scale-105 shadow-2xl' 
                    : 'bg-white/20 backdrop-blur-xl border-white/30 hover:bg-white/30 shadow-xl'
                }`}
                onMouseEnter={() => setActiveBenefit(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {benefit.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-slate-600 text-xs font-medium">
                  <Star className="w-3 h-3" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Employee Showcase */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - AI Employee Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">
                    Meet Sarah AI
                  </h3>
                  <p className="text-slate-600">
                    Your new 24/7 AI Receptionist
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sarah AI is your new team member who never sleeps, never forgets, and never makes mistakes. 
                She handles all your customer interactions with the professionalism of a top-tier receptionist 
                and the efficiency of advanced AI.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Answers calls in under 1 second",
                  "Remembers every customer interaction",
                  "Speaks naturally and professionally",
                  "Integrates with your existing tools"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="group relative px-8 py-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-xl font-semibold text-slate-700 transition-all duration-300 hover:bg-white/50 hover:scale-105 shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  <span>Meet Sarah AI</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right Side - AI Employee Visual */}
            <div className="relative">
              {/* AI Employee Card */}
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">Sarah AI</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-green-600">Online & Ready</span>
                    </div>
                  </div>
                </div>

                {/* Live Chat Demo */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                      <Users className="w-4 h-4 text-slate-600" />
                    </div>
                    <div className="bg-white/40 backdrop-blur-md rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-slate-700">Hi, I'd like to schedule a consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-white/50 backdrop-blur-md rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-slate-700">Hello! I'd be happy to help you schedule a consultation. What type of service are you interested in?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                      <Brain className="w-4 h-4 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/30 backdrop-blur-xl border border-white/40 rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-slate-800">24/7</div>
                  <div className="text-xs text-slate-600">Available</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/30 backdrop-blur-xl border border-white/40 rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-slate-800">&lt;1s</div>
                  <div className="text-xs text-slate-600">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Your AI Employee Does */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              What Your AI Employee Can Do
            </h3>
            <p className="text-lg text-slate-600">
              Four core capabilities that transform your customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Icon className="w-10 h-10 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              The Real Cost Comparison
            </h3>
            <p className="text-lg text-slate-600">
              See how much you save with an AI employee vs. a human receptionist
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Receptionist */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Human Receptionist</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: "Base Salary", cost: "$3,000/mo" },
                  { label: "Benefits & Taxes", cost: "$1,200/mo" },
                  { label: "Training & Management", cost: "$500/mo" },
                  { label: "Vacation & Sick Days", cost: "$400/mo" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-800">{item.cost}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-slate-800">Total Monthly Cost</span>
                  <span className="text-2xl font-bold text-red-500">$5,100</span>
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  Plus: Limited hours, human errors, training time
                </div>
              </div>
            </div>

            {/* AI Employee */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">AI Employee</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: "AI Employee", cost: "$1,000/mo" },
                  { label: "Setup & Training", cost: "$0/mo" },
                  { label: "Management & Support", cost: "$0/mo" },
                  { label: "Downtime & Errors", cost: "$0/mo" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-800">{item.cost}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-slate-800">Total Monthly Cost</span>
                  <span className="text-2xl font-bold text-green-500">$1,000</span>
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  Plus: 24/7 availability, instant responses, no training needed
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="mt-8 p-8 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-2">Your Monthly Savings</div>
              <div className="text-5xl font-bold text-slate-800 mb-2">$4,100</div>
              <div className="text-xl text-green-600 font-semibold">That's $49,200 per year!</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-8">
            Ready to hire your new AI employee and start saving money?
          </p>
          <button className="group relative px-10 py-5 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-semibold text-slate-700 transition-all duration-300 hover:bg-white/50 hover:scale-105 shadow-xl">
            <span className="relative z-10 flex items-center gap-3">
              <span>Hire Your AI Employee Today</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
