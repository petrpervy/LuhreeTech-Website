"use client";
import { Button } from "../ui/Button";
import { Sparkles, Phone, Clock, Users, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function LuhreetechHero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: "Calls answered", value: "24/7", icon: Phone },
    { label: "Response time", value: "< 1 min", icon: Clock },
    { label: "Happy clients", value: "500+", icon: Users },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink to-brand-teal/20" />
      <div className="absolute inset-0 bg-[conic-gradient(at_10%_-10%,#d9f7ff_0%,#edf2ff_28%,#ffe8d1_56%,#e7f8f2_80%,#ffffff_100%)] opacity-30" />
      
      {/* Floating Glass Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 glass-crystal glass-float rounded-full opacity-60" />
      <div className="absolute bottom-20 right-10 w-24 h-24 glass-liquid glass-pulse rounded-full opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 glass-frost glass-shimmer rounded-full opacity-50" />

      <div className="container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-brand-text-secondary mb-8 glass-shimmer">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="font-medium">Luhreetech</span>
            <div className="w-2 h-2 rounded-full bg-brand-neon-cyan animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
            <span className="text-white">Digital Employees</span>
            <br />
            <span className="text-gradient">for Modern Businesses</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            24/7 AI Receptionists that answer calls, book appointments, and supercharge your client intake – 
            at a fraction of the cost of hiring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" className="btn-ghost text-lg px-8 py-4">
              <span>Book a Demo</span>
            </Button>
          </div>

          {/* Live Stats Dashboard */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`glass card hover-lift-enhanced p-6 transition-all duration-500 ${
                    currentStat === index ? 'glass-pulse scale-105' : 'opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm text-brand-text-secondary font-medium">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-brand-text-secondary">
                    <Star className="w-3 h-3 fill-brand-accent text-brand-accent" />
                    <span>Live data</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-neon-cyan animate-pulse" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-neon-purple animate-pulse" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-neon-pink animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
          </div>
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
