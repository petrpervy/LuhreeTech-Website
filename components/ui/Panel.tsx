'use client'
import { ReactNode } from 'react'
import { DashboardCard } from './DashboardCard'

interface PanelProps {
  title: string
  description?: string
  size?: 'default' | 'dense' | 'loose'
  children: ReactNode
  className?: string
}

export function Panel({ className='', ...rest } : React.HTMLAttributes<HTMLDivElement>){
  return (
    <div
      className={[
        'glass rounded-3xl p-6 md:p-8',
        'bg-[rgba(255,255,255,.78)] backdrop-blur-xl border border-white/60',
        'shadow-glass hover-glass',
        className
      ].join(' ')}
      {...rest}
    />
  )
}
