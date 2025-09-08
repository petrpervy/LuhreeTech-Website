import * as React from "react"
import { cn } from "@/lib/cn"

export interface TagPillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success'
}

const TagPill = React.forwardRef<HTMLDivElement, TagPillProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: "border-base-border bg-transparent text-base-gray hover:bg-base-light/50 hover:border-accent-orange",
      accent: "border-primary-lime bg-primary-lime/10 text-primary-lime hover:bg-primary-lime/20",
      success: "border-state-success bg-state-success/10 text-state-success hover:bg-state-success/20"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-4 py-2 rounded-pill border transition-all duration-200 cursor-pointer hover-lift",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TagPill.displayName = "TagPill"

export { TagPill }
