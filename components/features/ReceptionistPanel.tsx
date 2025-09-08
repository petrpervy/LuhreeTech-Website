'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, CheckCircle } from 'lucide-react'

export function ReceptionistPanel() {
  return (
    <div className="glass p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-accent-teal-500" />
        <h3 className="font-semibold text-brand-ink">Lead Intake</h3>
      </div>
      
      <div className="space-y-3">
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-xs text-gray-500 mb-1">Name</div>
          <div className="font-medium text-sm">Jane Smith</div>
          <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
        </motion.div>
        
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-xs text-gray-500 mb-1">Matter</div>
          <div className="font-medium text-sm">New consultation</div>
          <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
        </motion.div>
        
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-xs text-gray-500 mb-1">Urgency</div>
          <div className="font-medium text-sm">Next 7 days</div>
          <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
        </motion.div>
        
        <motion.div 
          className="p-3 bg-white/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-xs text-gray-500 mb-1">Notes</div>
          <div className="font-medium text-sm">Prefers mornings</div>
          <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
        </motion.div>
      </div>
    </div>
  )
}
