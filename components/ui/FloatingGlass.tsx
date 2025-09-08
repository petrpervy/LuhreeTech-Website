"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingGlassProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FloatingGlass({ children, className = "", delay = 0, duration = 6 }: FloatingGlassProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`glass hover-lift ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
    </motion.div>
  )
}
