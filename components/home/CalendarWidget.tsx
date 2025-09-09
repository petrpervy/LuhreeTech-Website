import React from 'react'
import GlassCard from '../ui/GlassCard'

export default function CalendarWidget() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const appointments = {
    'Tue': ['Initi...', 'Reminde'],
    'Fri': ['Foll...']
  }

  return (
    <GlassCard className="p-6">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-brand-gray py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="min-h-[60px] p-2">
            {appointments[days[i] as keyof typeof appointments] && (
              <div className="space-y-1">
                {appointments[days[i] as keyof typeof appointments].map((appointment, index) => (
                  <div
                    key={index}
                    className="text-xs bg-brand-lime text-brand-ink px-2 py-1 rounded"
                  >
                    {appointment}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-brand-ink">
          <strong>SMS:</strong> "Your appointment is confirmed for Tue 3:00 PM."
        </p>
      </div>
    </GlassCard>
  )
}
