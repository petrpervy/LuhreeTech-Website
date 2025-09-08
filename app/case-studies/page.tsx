import { Metadata } from 'next'
import { CaseHero } from '@/components/CaseHero'
import { CaseStudiesClient } from '@/components/CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world examples of AI automation success stories'
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <CaseHero 
        title="AI Automation Success Stories"
        company="Luhreetech"
        industry="Technology"
      />
      <CaseStudiesClient />
    </div>
  )
}