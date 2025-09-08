"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Save Time. Cut Costs. Focus on Growth.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlike DIY tools, you don't lift a finger. We handle everything end-to-end.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/demo" className="group relative px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/case-studies" className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300">
              <span>View Case Studies</span>
            </Link>
          </div>

          {/* How it helps section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-8">
              <span>⭐</span>
              <span>HOW IT HELPS</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save 10-40+ hours per week</h3>
              <p className="text-gray-600">Never miss a lead or customer inquiry with your reliable digital employee.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cut admin costs</h3>
              <p className="text-gray-600">Without sacrificing professionalism. Handle tasks, calls, and workflows automatically.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Focus on your business</h3>
              <p className="text-gray-600">We audit, build, deploy, and maintain your digital employee so you can focus on running your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
