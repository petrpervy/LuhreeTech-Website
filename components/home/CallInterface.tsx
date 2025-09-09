'use client'

import React, { useState } from 'react'
import GlassCard from '../ui/GlassCard'

export default function CallInterface() {
  const [activeTab, setActiveTab] = useState('calls')

  const calls = [
    { name: 'Jane Smith', type: 'Consult request', time: '2m', status: 'completed' },
    { name: 'Luis Ortega', type: 'Billing question', time: '6m ago', status: 'completed' },
    { name: 'Unknown', type: 'Voicemail left', time: '10m ago', status: 'voicemail' }
  ]

  const intakeData = [
    { field: 'Name', value: 'Jane Smith', status: 'completed' },
    { field: 'Matter', value: 'New consultation', status: 'completed' },
    { field: 'Urgency', value: 'Next 7 days', status: 'completed' },
    { field: 'Notes', value: 'Prefers mornings', status: 'completed' }
  ]

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {['calls', 'intake', 'booked'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-brand-ink shadow-sm'
                : 'text-brand-gray hover:text-brand-ink'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'calls' && (
        <div className="space-y-3">
          {calls.map((call, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center">
                  <span className="text-brand-ink text-sm font-medium">
                    {call.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-brand-ink">{call.name}</p>
                  <p className="text-sm text-brand-gray">{call.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-brand-gray">{call.time}</p>
                {call.status === 'completed' && (
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'intake' && (
        <div className="space-y-3">
          {intakeData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-brand-ink">{item.field}: {item.value}</p>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'booked' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div>
              <p className="font-medium text-brand-ink">Consultation: Tue 3:00 PM • Google Calendar</p>
              <p className="text-sm text-brand-gray">SMS sent: "See you Tue 3:00 PM."</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
          </div>
        </div>
      )}
    </div>
  )
}
