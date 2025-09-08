"use client"
import { motion } from "framer-motion"

interface GlassWaveProps {
  className?: string
  delay?: number
  duration?: number
}

export function GlassWave({ className = "", delay = 0, duration = 8 }: GlassWaveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.2, scaleX: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`absolute glass-gradient rounded-full ${className}`}
      style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        filter: 'blur(1px)',
        animation: `waveFlow ${duration}s ease-in-out infinite`,
      }}
    />
  )
}
