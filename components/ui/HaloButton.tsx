'use client'

import { Slot } from "@radix-ui/react-slot"

type SizeType = "sm" | "md" | "lg"
type VariantType = "primary" | "secondary" | "ghost"

interface HaloButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  size?: SizeType
  className?: string
  children: React.ReactNode
  asChild?: boolean
}

export default function HaloButton({children, variant="primary", size="md", className="", asChild, ...props}: HaloButtonProps){
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-220 focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2"

  const sizes: Record<SizeType, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg"
  }

  const styles: Record<VariantType, string> = {
    primary: "bg-amber text-white shadow-[0_12px_50px_rgba(0,0,0,0.12)] hover:bg-amber/90 hover:translate-y-[-2px]",
    secondary: "bg-white/70 border border-white/60 text-ink backdrop-blur-md hover:bg-white/85 hover:translate-y-[-2px]",
    ghost: "bg-transparent border border-white/60 text-ink backdrop-blur-md hover:bg-white/20 hover:translate-y-[-2px]",
  }

  const finalClasses = `${base} ${sizes[size]} ${styles[variant]} ${className}`.trim()

  const Comp = asChild ? Slot : "button"
  return <Comp className={finalClasses} {...props}>{children}</Comp>
}
