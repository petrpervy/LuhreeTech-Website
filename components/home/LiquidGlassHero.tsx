"use client";
import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Phone, 
  Clock, 
  Users, 
  ArrowRight, 
  Star,
  Zap,
  Brain,
  CheckCircle,
  Play,
  Shield
} from "lucide-react";

export default function LiquidGlassHero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Hi! I'm your new AI receptionist.",
    "I work 24/7 and never miss a call.",
    "I can schedule appointments instantly.",
    "Ready to meet your AI employee?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-slate-700 text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Meet Your AI Employee</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-slate-800">Hire Your</span>
              <br />
              <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                AI Employee
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
              A 24/7 AI receptionist that never sleeps, never forgets, and never makes mistakes. 
              Your business deserves better than missed calls and lost leads.
            </p>

            {/* Live Chat Demo */}
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 mb-12 max-w-md mx-auto lg:mx-0 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-slate-600">AI Employee is online</span>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 min-h-[80px] flex items-center">
                <span className="text-slate-700 text-lg">
                  {messages[currentMessage]}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button className="group relative px-10 py-5 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-semibold text-slate-700 transition-all duration-300 hover:bg-white/50 hover:scale-105 shadow-xl">
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Meet Your AI Employee
                </span>
              </button>
              <button className="px-10 py-5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl font-semibold text-slate-600 hover:bg-white/30 transition-all duration-300 shadow-lg">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Side - AI Employee Visualization */}
          <div className="relative">
            {/* AI Employee Card */}
            <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-12 max-w-md mx-auto shadow-2xl">
              {/* AI Avatar */}
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center relative shadow-xl">
                <Brain className="w-20 h-20 text-slate-600" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 animate-ping opacity-20" />
              </div>

              {/* AI Info */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Sarah AI</h3>
                <p className="text-slate-600 text-lg">Your 24/7 AI Receptionist</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-green-600 font-medium">Online & Ready</span>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Answers calls instantly</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Schedules appointments</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Qualifies leads</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Never takes breaks</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">24/7</div>
                <div className="text-xs text-slate-600">Availability</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">&lt;1s</div>
                <div className="text-xs text-slate-600">Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: "Calls answered", value: "24/7", icon: Phone },
            { label: "Response time", value: "< 1s", icon: Zap },
            { label: "Happy clients", value: "500+", icon: Users },
            { label: "Uptime", value: "99.9%", icon: CheckCircle },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-xl">
                  <Icon className="w-8 h-8 text-slate-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
