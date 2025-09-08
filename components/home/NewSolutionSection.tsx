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

export default function NewSolutionSection() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Always On",
      description: "Never miss a call, never miss a lead. Your AI employee works around the clock, weekends, and holidays.",
      highlight: "24/7 availability",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Responds in under 1 second. Your customers get instant answers, not voicemail or hold music.",
      highlight: "< 1 second response",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: Heart,
      title: "Human-Like",
      description: "Advanced AI that sounds natural, remembers everything, and treats every customer like your most important client.",
      highlight: "Natural conversation",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Performs like a $50k/year receptionist for just $1,000/month. No benefits, no sick days, no training costs.",
      highlight: "80% cost savings",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Answer Calls & Inquiries",
      description: "Handles phone calls, web chats, and texts with natural conversation flow and dynamic information.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Qualify Leads",
      description: "Asks the right questions to gauge lead quality and routes high-value prospects to your team.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Schedule Appointments",
      description: "Accesses your calendar to book meetings and appointments on the spot with automatic confirmations.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Follow-ups & Reminders",
      description: "Sends personalized follow-up emails and texts to ensure no one falls through the cracks.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Meet Your New AI Employee</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">The Solution:</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Your AI Employee
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                    ? `${benefit.bgColor} ${benefit.borderColor} scale-105 shadow-2xl` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onMouseEnter={() => setActiveBenefit(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {benefit.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  <Star className="w-3 h-3" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Employee Showcase */}
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - AI Employee Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-600 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Meet Sarah AI
                  </h3>
                  <p className="text-gray-300">
                    Your new 24/7 AI Receptionist
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Sarah AI is your new team member who never sleeps, never forgets, and never makes mistakes. 
                She handles all your customer interactions with the professionalism of a top-tier receptionist 
                and the efficiency of advanced AI.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Answers calls in under 1 second</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Remembers every customer interaction</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Speaks naturally and professionally</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Integrates with your existing tools</span>
                </div>
              </div>

              <button className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  <span>Meet Sarah AI</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Right Side - AI Employee Visual */}
            <div className="relative">
              {/* AI Employee Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-cyan-600 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Sarah AI</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-green-400">Online & Ready</span>
                    </div>
                  </div>
                </div>

                {/* Live Chat Demo */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Hi, I'd like to schedule a consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-green-600 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Hello! I'd be happy to help you schedule a consultation. What type of service are you interested in?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-600 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">Available</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">&lt;1s</div>
                  <div className="text-xs text-gray-300">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Your AI Employee Does */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              What Your AI Employee Can Do
            </h3>
            <p className="text-lg text-gray-300">
              Four core capabilities that transform your customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Real Cost Comparison
            </h3>
            <p className="text-lg text-gray-300">
              See how much you save with an AI employee vs. a human receptionist
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Receptionist */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Human Receptionist</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Base Salary</span>
                  <span className="font-semibold text-white">$3,000/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Benefits & Taxes</span>
                  <span className="font-semibold text-white">$1,200/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Training & Management</span>
                  <span className="font-semibold text-white">$500/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Vacation & Sick Days</span>
                  <span className="font-semibold text-white">$400/mo</span>
                </div>
              </div>
              
              <div className="border-t border-red-500/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total Monthly Cost</span>
                  <span className="text-2xl font-bold text-red-400">$5,100</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Plus: Limited hours, human errors, training time
                </div>
              </div>
            </div>

            {/* AI Employee */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">AI Employee</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Employee</span>
                  <span className="font-semibold text-white">$1,000/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Setup & Training</span>
                  <span className="font-semibold text-white">$0/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Management & Support</span>
                  <span className="font-semibold text-white">$0/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Downtime & Errors</span>
                  <span className="font-semibold text-white">$0/mo</span>
                </div>
              </div>
              
              <div className="border-t border-green-500/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total Monthly Cost</span>
                  <span className="text-2xl font-bold text-green-400">$1,000</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Plus: 24/7 availability, instant responses, no training needed
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-2">Your Monthly Savings</div>
              <div className="text-4xl font-bold text-white mb-2">$4,100</div>
              <div className="text-lg text-green-400 font-semibold">That's $49,200 per year!</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            Ready to hire your new AI employee and start saving money?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            <span className="relative z-10 flex items-center gap-2">
              <span>Hire Your AI Employee Today</span>
              <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
