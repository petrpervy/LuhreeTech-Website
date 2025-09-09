import NavBar from '@/components/layout/NavBar'
import DashboardCard from '@/components/home/DashboardCard'
import CallInterface from '@/components/home/CallInterface'
import FeatureSection from '@/components/home/FeatureSection'
import IntegrationPartners from '@/components/home/IntegrationPartners'
import CalendarWidget from '@/components/home/CalendarWidget'
import DeploymentOptions from '@/components/home/DeploymentOptions'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading-xl mb-6 text-brand-ink">
              AI automations done for you.
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Digital employees that handle calls, scheduling, intake, and follow-ups — so your team scales without headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Book a Demo
              </Button>
              <Button variant="secondary" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
          
          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <DashboardCard title="Recent calls">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center">
                      <span className="text-brand-ink text-sm font-medium">JS</span>
                    </div>
                    <span className="font-medium text-brand-ink">Jane Smith</span>
                  </div>
                  <span className="text-sm text-brand-gray">2m</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center">
                      <span className="text-brand-ink text-sm font-medium">LO</span>
                    </div>
                    <span className="font-medium text-brand-ink">Luis Ortega</span>
                  </div>
                  <span className="text-sm text-brand-gray">6m</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">?</span>
                    </div>
                    <span className="font-medium text-brand-ink">Unknown</span>
                  </div>
                  <span className="text-sm text-brand-gray">10m</span>
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Today">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-ink mb-2">7 bookings</div>
                <div className="text-sm text-green-600">+18% vs last week</div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Next scheduled">
              <div className="text-center">
                <div className="text-lg font-semibold text-brand-ink mb-2">Tue 3:00 PM</div>
                <div className="text-sm text-brand-gray">SMS sent: "See you Tue 3:00 PM."</div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Intelligent Call Handling */}
      <FeatureSection
        title="Intelligent Call Handling"
        subtitle="Never Miss Another Call"
        description="Our AI receptionist doesn't just answer calls—it understands context, routes intelligently, and captures every detail with human-level comprehension."
      >
        <div className="space-y-4">
          <div className="glass-card p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-brand-ink">John D. — consultation</div>
                <div className="text-sm text-brand-gray">Incoming call</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">Accept</button>
              <button className="px-4 py-2 bg-gray-200 text-brand-ink rounded-lg text-sm">Voicemail</button>
            </div>
          </div>
          
          <div className="glass-card p-4">
            <div className="space-y-3">
              <div className="text-sm text-brand-gray">Agent</div>
              <div className="space-y-2">
                <div className="text-sm text-brand-ink">Hi John! What's the reason for your visit?</div>
                <div className="text-sm text-brand-gray">New matter—consultation next week.</div>
                <div className="text-sm text-brand-ink">Booked: Wed 10:30 AM - confirmation sent ✅</div>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Smart Scheduling */}
      <FeatureSection
        title="Smart Scheduling"
        subtitle="Automated Meeting Management"
        description="Automated scheduling that works with your calendar, respects your preferences, and handles rescheduling seamlessly across all your communication channels."
        reverse={true}
      >
        <CalendarWidget />
      </FeatureSection>

      {/* Intelligent Intake */}
      <FeatureSection
        title="Intelligent Intake"
        subtitle="Capture Everything, Miss Nothing"
        description="Our AI captures detailed information during initial conversations, creating comprehensive records that integrate seamlessly with your existing systems."
      >
        <CallInterface />
      </FeatureSection>

      {/* Seamless Integration */}
      <FeatureSection
        title="Seamless Integration"
        subtitle="Works With What You Have"
        description="Connect with your existing CRM, calendar, and communication tools. No disruption to your current workflow—just enhanced efficiency."
        reverse={true}
      >
        <IntegrationPartners />
      </FeatureSection>

      {/* Enterprise Security */}
      <FeatureSection
        title="Enterprise Security"
        subtitle="Bank-Level Protection"
        description="Your data is protected with enterprise-grade security, compliance with industry standards, and transparent privacy practices."
      >
        <DeploymentOptions />
      </FeatureSection>
    </div>
  )
}
