import { ReactNode } from 'react'

interface CTAGroupProps {
  primary: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondary?: {
    text: string
    href?: string
    onClick?: () => void
  }
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function CTAGroup({ primary, secondary, className = '', size = 'md' }: CTAGroupProps) {
  const sizeClasses = {
    sm: 'px-6 py-3 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  }

  const renderButton = (config: { text: string; href?: string; onClick?: () => void }, variant: 'primary' | 'secondary') => {
    const baseClasses = `${sizeClasses[size]} font-semibold rounded-2xl transition-all duration-200 focus-ring`
    const variantClasses = variant === 'primary' 
      ? 'bg-cta-500 hover:bg-cta-600 text-ink-900 shadow-soft'
      : 'bg-white/70 hover:bg-white ring-1 ring-ink-200 text-ink-900'

    if (config.href) {
      return (
        <a href={config.href} className={`${baseClasses} ${variantClasses} inline-block`}>
          {config.text}
        </a>
      )
    }

    return (
      <button onClick={config.onClick} className={`${baseClasses} ${variantClasses}`}>
        {config.text}
      </button>
    )
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {renderButton(primary, 'primary')}
      {secondary && renderButton(secondary, 'secondary')}
    </div>
  )
}

