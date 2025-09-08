"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassOverlayProps {
  children: ReactNode
  className?: string
  blur?: "sm" | "md" | "lg" | "xl"
  opacity?: "light" | "medium" | "heavy"
  animated?: boolean
}

export function GlassOverlay({
  children,
  className = "",
  blur = "lg",
  opacity = "medium",
  animated = true
}: GlassOverlayProps) {

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }

  const opacityClasses = {
    light: "bg-white/10",
    medium: "bg-white/20",
    heavy: "bg-white/30"
  }

  return (
    <motion.div
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={animated ? {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      } : undefined}
      className={cn(
        "relative",
        blurClasses[blur],
        opacityClasses[opacity],
        "border border-white/20",
        "shadow-lg",
        className
      )}
    >
      {/* Inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-inherit" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
