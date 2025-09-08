'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseCardProps {
  slug: string
  title: string
  company: string
  industry: string
  result: string
  summary: string
  image?: string
}

export function CaseCard({ slug, title, company, industry, result, summary, image }: CaseCardProps) {
  return (
    <Link 
      href={`/case-studies/${slug}`}
      className="group block"
    >
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
        {/* PanelGradient behind card */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl -z-10"></div>
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-4">
            {/* Logo/Image placeholder */}
            <div className="w-12 h-12 bg-gradient-to-br from-theme-primary/20 to-theme-secondary/20 rounded-xl flex items-center justify-center">
              {image ? (
                <img 
                  src={image} 
                  alt={`${company} case study preview`}
                  className="w-8 h-8 object-cover rounded-lg"
                />
              ) : (
                <span className="text-lg">🏢</span>
              )}
            </div>
            
            {/* Company and Industry */}
            <div>
              <div className="font-semibold text-theme-text">{company}</div>
              <div className="text-sm text-theme-muted">{industry}</div>
            </div>
            
            {/* Headline result */}
            <div className="text-lg font-medium text-theme-primary">{result}</div>
            
            {/* Summary */}
            <p className="text-theme-muted text-sm leading-relaxed">{summary}</p>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-theme-primary/10 rounded-full flex items-center justify-center group-hover:bg-theme-primary/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-theme-primary group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
