'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle } from 'lucide-react'

export function SchedulerPanel() {
  return (
    <div className="glass p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-accent-teal-500" />
        <h3 className="font-semibold text-brand-ink">Today's Schedule</h3>
      </div>
      
      <div className="space-y-3">
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium text-sm">Consultation</div>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-xs text-gray-600">Tue 3:00 PM • Google Calendar</div>
        </motion.div>
        
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium text-sm">Follow-up Call</div>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-xs text-gray-600">Wed 10:00 AM • Outlook</div>
        </motion.div>
        
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-xs text-gray-500 mb-1">SMS sent:</div>
          <div className="text-xs text-gray-600">"See you Tue 3:00 PM."</div>
        </motion.div>
      </div>
    </div>
  )
}
