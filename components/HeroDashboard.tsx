'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import HeroInteractiveDashboard from './HeroInteractiveDashboard';

export default function HeroDashboard(){
  return (
    <section className="section pt-32 md:pt-40">
      <div className="container">
        <div className="text-center space-y-8 mb-20">
          {/* Main Headline - Base44 Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span style={{color: 'white'}}>Let's make your business</span>{' '}
            <span className="text-gradient">automated.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{color: 'rgba(255, 255, 255, 0.9)'}}
          >
            Luhreetech lets you deploy AI employees in minutes with just your requirements. No coding necessary.
          </motion.p>

          {/* CTA Button - Base44 Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a href="/demo" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{background: 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-cta) 100%)'}}>
              <span>Start Building</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>99.2% uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>SOC 2 compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>24/7 support</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <HeroInteractiveDashboard />
        </motion.div>
      </div>
    </section>
  );
}