"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { GlassShimmer } from "./GlassShimmer"

interface FloatingGlassCardProps {
  children: ReactNode
  className?: string
  depth?: 1 | 2 | 3
  shimmer?: boolean
  hover?: boolean
  delay?: number
}

export function FloatingGlassCard({
  children,
  className = "",
  depth = 1,
  shimmer = false,
  hover = true,
  delay = 0
}: FloatingGlassCardProps) {

  const depthClasses = {
    1: "glass-depth-1",
    2: "glass-depth-2",
    3: "glass-depth-3"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(
        "relative glass rounded-xl2 overflow-hidden",
        depthClasses[depth],
        hover && "hover-lift",
        shimmer && "glass-shimmer",
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.62) 100%)',
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 rounded-inherit" />

      {/* Optional shimmer effect */}
      {shimmer && <GlassShimmer />}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
