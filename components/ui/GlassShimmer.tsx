"use client"
import { motion } from "framer-motion"

interface GlassShimmerProps {
  className?: string
  duration?: number
}

export function GlassShimmer({ className = "", duration = 4 }: GlassShimmerProps) {
  return (
    <motion.div
      className={`absolute inset-0 rounded-inherit overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          left: ["100%", "100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: duration * 2,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  )
}
