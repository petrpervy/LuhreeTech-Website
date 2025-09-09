import React from 'react'

const integrations = [
  'HubSpot',
  'Salesforce', 
  'Calendly',
  'Google Calendar',
  'Outlook',
  'Twilio',
  'Slack',
  'Airtable'
]

export default function IntegrationPartners() {
  return (
    <div className="flex flex-wrap gap-3">
      {integrations.map((integration) => (
        <div
          key={integration}
          className="px-4 py-2 bg-white border border-brand-border rounded-lg text-sm font-medium text-brand-ink hover:border-brand-orange transition-colors cursor-pointer"
        >
          {integration}
        </div>
      ))}
    </div>
  )
}
