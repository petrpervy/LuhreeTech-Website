'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, CheckCircle, Clock } from 'lucide-react'

export function IntakePanel() {
  return (
    <div className="glass p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Phone className="h-5 w-5 text-accent-teal-500" />
        <h3 className="font-semibold text-brand-ink">Incoming Calls</h3>
      </div>
      
      <div className="space-y-3">
        <motion.div 
          className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <div className="font-medium text-sm">Jane Smith</div>
            <div className="text-xs text-gray-600">Consult request • 2m ago</div>
          </div>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <div className="font-medium text-sm">Luis Ortega</div>
            <div className="text-xs text-gray-600">Billing question • 6m ago</div>
          </div>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <div className="font-medium text-sm">Unknown</div>
            <div className="text-xs text-gray-600">Voicemail left • 10m ago</div>
          </div>
          <Clock className="h-4 w-4 text-yellow-500" />
        </motion.div>
      </div>
    </div>
  )
}
