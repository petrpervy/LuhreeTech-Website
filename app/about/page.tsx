import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionBlock from '@/components/about/MissionBlock'
import FounderStory from '@/components/about/FounderStory'
import ValuesGrid from '@/components/about/ValuesGrid'
import ProcessTimeline from '@/components/about/ProcessTimeline'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Luhreetech and our mission to automate business processes'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionBlock />
      <FounderStory />
      <ValuesGrid />
      <ProcessTimeline />
      <AboutCTA />
    </div>
  )
}