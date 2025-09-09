import React from 'react'
import GlassCard from '../ui/GlassCard'

export default function DeploymentOptions() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <GlassCard className="p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-brand-ink mb-3">Cloud (Managed)</h3>
        <ul className="space-y-2 text-sm text-brand-gray">
          <li>• Fastest go-live</li>
          <li>• Encrypted in transit & at rest</li>
          <li>• Least-privilege access</li>
          <li>• Audit logs</li>
        </ul>
      </GlassCard>

      <GlassCard className="p-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-brand-ink mb-3">On-Prem (Private)</h3>
        <ul className="space-y-2 text-sm text-brand-gray">
          <li>• Compliance-friendly</li>
          <li>• Private LLM option</li>
          <li>• Data residency by request</li>
          <li>• Custom SLAs</li>
        </ul>
      </GlassCard>
    </div>
  )
}
