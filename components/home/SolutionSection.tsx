"use client";
import { Button } from "../ui/Button";
import { 
  Clock, 
  Zap, 
  Heart, 
  DollarSign, 
  Plug, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Phone,
  Calendar,
  MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";

export default function SolutionSection() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  
  const benefits = [
    {
      icon: Clock,
      title: "Always On, 24/7 Service",
      description: "Never miss a call or inquiry – your AI employee works around the clock, weekends, and holidays.",
      highlight: "24/7 availability",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Response",
      description: "Instant answers and follow-ups improve customer experience and conversion rates dramatically.",
      highlight: "< 1 minute response",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "High-Touch and Friendly",
      description: "Advanced LLMs provide natural, professional conversations that feel like talking to a trained human.",
      highlight: "Human-like interaction",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Performs like a full-time receptionist at a fraction of the cost with no sick days or training overhead.",
      highlight: "70%+ cost savings",
      color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Answer Calls & Inquiries",
      description: "Handles phone calls, web chats, and texts with natural conversation flow and dynamic information."
    },
    {
      icon: Users,
      title: "Qualify Leads",
      description: "Asks the right questions to gauge lead quality and routes high-value prospects to your team."
    },
    {
      icon: Calendar,
      title: "Schedule Appointments",
      description: "Accesses your calendar to book meetings and appointments on the spot with automatic confirmations."
    },
    {
      icon: MessageSquare,
      title: "Follow-ups & Reminders",
      description: "Sends personalized follow-up emails and texts to ensure no one falls through the cracks."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-mint/20 via-white/50 to-brand-teal/10" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Meet Your 24/7 AI Team Member</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Automation That Works</span>
            <br />
            <span className="text-gradient">Like Staff</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Luhreetech provides always-on, AI-driven employees who never miss a call or follow-up, 
            respond instantly, and work round the clock. This boosts conversion rates and client satisfaction.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`glass card hover-lift-enhanced transition-all duration-500 ${
                  activeBenefit === index ? 'glass-pulse scale-105 ring-2 ring-brand-teal/20' : ''
                }`}
                onMouseEnter={() => setActiveBenefit(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-brand-text-secondary mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/50 text-sm font-medium text-brand-teal">
                  <Star className="w-3 h-3 fill-brand-teal text-brand-teal" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Your AI Employee Does */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4">
              What Your AI Receptionist Can Do
            </h3>
            <p className="text-lg text-brand-text-secondary">
              Four core capabilities that transform your client experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-text-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-brand-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Receptionist */}
          <div className="glass card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-text-primary">Traditional Receptionist</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Base Salary</span>
                <span className="font-semibold text-brand-text-primary">$3,000/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Benefits & Taxes</span>
                <span className="font-semibold text-brand-text-primary">$1,200/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Training & Management</span>
                <span className="font-semibold text-brand-text-primary">$500/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Vacation & Sick Days</span>
                <span className="font-semibold text-brand-text-primary">$400/mo</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-brand-text-primary">Total Monthly Cost</span>
                <span className="text-2xl font-bold text-red-600">$5,100</span>
              </div>
              <div className="text-sm text-brand-text-secondary mt-2">
                Plus: Limited hours, human errors, training time
              </div>
            </div>
          </div>

          {/* Luhreetech AI */}
          <div className="glass card p-8 ring-2 ring-brand-teal/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-text-primary">Luhreetech AI Employee</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">AI Employee</span>
                <span className="font-semibold text-brand-text-primary">$1,000/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Setup & Training</span>
                <span className="font-semibold text-brand-text-primary">$0/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Management & Support</span>
                <span className="font-semibold text-brand-text-primary">$0/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-text-secondary">Downtime & Errors</span>
                <span className="font-semibold text-brand-text-primary">$0/mo</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-brand-text-primary">Total Monthly Cost</span>
                <span className="text-2xl font-bold text-green-600">$1,000</span>
              </div>
              <div className="text-sm text-brand-text-secondary mt-2">
                Plus: 24/7 availability, instant responses, no training needed
              </div>
            </div>
          </div>
        </div>

        {/* Plug-and-Play Promise */}
        <div className="glass-deep card p-8 md:p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
            <Plug className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-brand-text-primary mb-4">
            Plug-and-Play Automation
          </h3>
          
          <p className="text-lg text-brand-text-secondary mb-8 max-w-3xl mx-auto">
            "Automation without the complexity." The AI integrates with your existing tools seamlessly. 
            Luhreetech's team handles setup, customization, and ongoing improvements, so you don't need technical expertise.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-mint/50 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-teal">1</span>
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-2">We Analyze</h4>
              <p className="text-sm text-brand-text-secondary">Your workflow and scripts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-mint/50 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-teal">2</span>
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-2">We Configure</h4>
              <p className="text-sm text-brand-text-secondary">And train your AI employee</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-mint/50 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-teal">3</span>
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-2">We Deploy</h4>
              <p className="text-sm text-brand-text-secondary">And continuously improve</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to upgrade your workforce with AI employees?
          </p>
          <Button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
