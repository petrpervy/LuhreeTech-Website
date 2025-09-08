import { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function GlassPanel({ children, className = '', onClick }: GlassPanelProps) {
  return (
    <div 
      className={`backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
