'use client'
import { useState } from 'react'
import { Mail, Phone, HeadphonesIcon, Copy, Check } from 'lucide-react'
import { DashboardCard } from '@/components/ui/DashboardCard'
import { InfoStat } from '@/components/ui/InfoStat'

export function AltChannels() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@luhreetech.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {/* Email */}
      <DashboardCard size="dense" className="cursor-pointer group" onClick={handleCopyEmail}>
        <InfoStat
          icon={<Mail />}
          label="Email us"
          value={copiedEmail ? 'Copied!' : 'hello@luhreetech.com'}
          hint={copiedEmail ? undefined : 'Click to copy'}
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {copiedEmail ? (
            <Check className="w-4 h-4 text-teal-500" />
          ) : (
            <Copy className="w-4 h-4 text-ink/40" />
          )}
        </div>
      </DashboardCard>
      
      {/* Quick call */}
      <DashboardCard size="dense" className="cursor-pointer group">
        <InfoStat
          icon={<Phone />}
          label="Quick call"
          value="Get Calendly link"
          hint="Schedule a 15-min chat"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-4 h-4 text-ink/40">→</div>
        </div>
      </DashboardCard>
      
      {/* Support portal */}
      <DashboardCard size="dense" className="cursor-pointer group">
        <InfoStat
          icon={<HeadphonesIcon />}
          label="Support"
          value="Existing client?"
          hint="Open portal"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-4 h-4 text-ink/40">→</div>
        </div>
      </DashboardCard>
    </div>
  )
}
