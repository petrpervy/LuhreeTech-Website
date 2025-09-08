import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface KpiChipProps {
  label: string
  value: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function KpiChip({ label, value, trend, className = '' }: KpiChipProps) {
  const trendIcon = {
    up: <TrendingUp className="w-4 h-4 text-green-500" />,
    down: <TrendingDown className="w-4 h-4 text-red-500" />,
    neutral: <Minus className="w-4 h-4 text-gray-500" />
  }

  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  }

  return (
    <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-ink-500 font-medium">{label}</span>
        {trend && trendIcon[trend]}
      </div>
      <div className={`text-lg font-bold ${trend ? trendColor[trend] : 'text-ink-900'}`}>
        {value}
      </div>
    </div>
  )
}
