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

export default function NewLuhreetechHero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const messages = [
    "Hi! I'm your new AI receptionist. How can I help you today?",
    "I can schedule appointments, answer questions, and qualify leads 24/7.",
    "I never take breaks, never get sick, and always remember every detail.",
    "Ready to meet your new team member? Let's get started!"
  ];

  const stats = [
    { label: "Calls answered", value: "24/7", icon: Phone, color: "text-blue-400" },
    { label: "Response time", value: "< 1s", icon: Zap, color: "text-green-400" },
    { label: "Happy clients", value: "500+", icon: Users, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: CheckCircle, color: "text-orange-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Meet Your New AI Employee</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Hire Your</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Employee
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              A 24/7 AI receptionist that never sleeps, never forgets, and never makes mistakes. 
              Your business deserves better than missed calls and lost leads.
            </p>

            {/* Live Chat Demo */}
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-300">AI Employee is online</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-h-[60px] flex items-center">
                <span className="text-white">
                  {messages[currentMessage]}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Meet Your AI Employee
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="px-8 py-4 border border-white/30 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Side - AI Employee Visualization */}
          <div className="relative">
            {/* AI Employee Card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md mx-auto">
              {/* AI Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center relative">
                <Brain className="w-16 h-16 text-white" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 animate-ping opacity-20" />
              </div>

              {/* AI Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sarah AI</h3>
                <p className="text-gray-300">Your 24/7 AI Receptionist</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-green-400">Online & Ready</span>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Answers calls instantly</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Schedules appointments</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Qualifies leads</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Never takes breaks</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-300">Availability</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">&lt;1s</div>
                <div className="text-xs text-gray-300">Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
