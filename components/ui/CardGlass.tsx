import React from 'react'

type CardGlassProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const CardGlass = React.forwardRef<HTMLDivElement, CardGlassProps>(
  ({ className = '', padding = 'md', asChild = false, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    const Component = asChild ? React.Fragment : 'div'
    
    return (
      <Component
        ref={asChild ? undefined : ref as any}
        className={`glass-light hover-liquid ${paddingClasses[padding]} ${className}`}
        {...props}
      />
    )
  }
)
CardGlass.displayName = 'CardGlass'

export { CardGlass as default, CardGlass as GlassCard, CardGlass }
