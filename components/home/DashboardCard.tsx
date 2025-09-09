import React from 'react'
import GlassCard from '../ui/GlassCard'

interface DashboardCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <GlassCard className={`p-6 ${className}`}>
      <h3 className="text-sm font-medium text-brand-gray mb-4">{title}</h3>
      {children}
    </GlassCard>
  )
}
