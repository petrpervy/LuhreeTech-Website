'use client'
import { ReactNode } from 'react'

interface InfoStatProps {
  label: string
  value: string | ReactNode
  icon?: ReactNode
  hint?: string
}

export function InfoStat({ label, value, icon, hint }: InfoStatProps) {
  return (
    <div className="flex items-center gap-3">
      {icon && (
        <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
          <div className="w-4 h-4 text-teal-500">
            {icon}
          </div>
        </div>
      )}
      
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-ink">{value}</div>
        <div className="text-xs text-ink/60">{label}</div>
        {hint && (
          <div className="text-xs text-ink/50 mt-0.5">{hint}</div>
        )}
      </div>
    </div>
  )
}


