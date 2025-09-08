"use client"
import { motion } from "framer-motion"

interface GlassOrbProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  delay?: number
}

export function GlassOrb({ size = "md", className = "", delay = 0 }: GlassOrbProps) {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`absolute rounded-full glass-deep ${sizes[size]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
        animation: 'float 8s ease-in-out infinite',
      }}
    />
  )
}
