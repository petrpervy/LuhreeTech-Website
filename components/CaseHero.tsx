'use client'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface CaseHeroProps {
  title: string
  company: string
  industry: string
  image?: string
}

export function CaseHero({ title, company, industry, image }: CaseHeroProps) {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-theme-muted">
        <Link href="/" className="hover:text-theme-text transition-colors flex items-center gap-1">
          <Home className="w-4 h-4" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/case-studies" className="hover:text-theme-text transition-colors">
          Case Studies
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-theme-text">{company}</span>
      </nav>
      
      {/* Hero Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-theme-text">
            {title}
          </h1>
          <div className="text-lg text-theme-muted">
            {industry} • {company}
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-soft">
            {image ? (
              <img 
                src={image} 
                alt={`${company} case study visual`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-theme-primary/20 via-theme-secondary/20 to-theme-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl">📊</div>
                  <div className="text-theme-muted text-sm">Case Study Visual</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
