import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import NarrativeSection from '@/components/patterns/NarrativeSection'
import { ProofBand } from '@/components/patterns/ProofBand'
import IntegrationsRow from '@/components/patterns/IntegrationsRow'
import SecurityDiagram from '@/components/mockups/SecurityDiagram'
import IntakePanel from '@/components/mockups/IntakePanel'
import { SchedulerPanel } from '@/components/mockups/SchedulerPanel'
import { ReceptionistPanel } from '@/components/mockups/ReceptionistPanel'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Comprehensive AI automation features for modern businesses'
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <NarrativeSection
        claim="Intelligent Call Handling"
        answer="Never Miss Another Call"
        body={["Our AI receptionist doesn't just answer calls—it understands context, routes intelligently, and captures every detail with human-level comprehension."]}
        visual={<ReceptionistPanel />}
        reverse={false}
      />
      
      <NarrativeSection
        claim="Smart Scheduling"
        answer="Automated Meeting Management"
        body={["Automated scheduling that works with your calendar, respects your preferences, and handles rescheduling seamlessly across all your communication channels."]}
        visual={<SchedulerPanel />}
        reverse={true}
      />
      
      <NarrativeSection
        claim="Intelligent Intake"
        answer="Capture Everything, Miss Nothing"
        body={["Our AI captures detailed information during initial conversations, creating comprehensive records that integrate seamlessly with your existing systems."]}
        visual={<IntakePanel />}
        reverse={false}
      />
      
      <NarrativeSection
        claim="Seamless Integration"
        answer="Works With What You Have"
        body={["Connect with your existing CRM, calendar, and communication tools. No disruption to your current workflow—just enhanced efficiency."]}
        visual={<IntegrationsRow items={["HubSpot", "Salesforce", "Calendly", "Google Calendar", "Outlook", "Twilio", "Slack", "Airtable"]} />}
        reverse={true}
      />
      
      <NarrativeSection
        claim="Enterprise Security"
        answer="Bank-Level Protection"
        body={["Your data is protected with enterprise-grade security, compliance with industry standards, and transparent privacy practices."]}
        visual={<SecurityDiagram />}
        reverse={false}
      />
      
      <ProofBand items={[
        { value: "98%", label: "Accuracy Rate" },
        { value: "24/7", label: "Availability" },
        { value: "3x", label: "Faster Response" }
      ]} />
      
      <CTASection />
    </div>
  )
}