"use client"
import { motion } from "framer-motion"
import { GlassOrb } from "./GlassOrb"
import { GlassWave } from "./GlassWave"

interface GlassBackgroundProps {
  variant?: "subtle" | "medium" | "rich"
  className?: string
}

export function GlassBackground({ variant = "medium", className = "" }: GlassBackgroundProps) {
  const orbConfigs = {
    subtle: [
      { size: "sm" as const, position: "-top-20 -left-20", delay: 0 },
      { size: "md" as const, position: "-bottom-32 -right-32", delay: 2 },
    ],
    medium: [
      { size: "sm" as const, position: "top-10 left-10", delay: 0 },
      { size: "md" as const, position: "bottom-20 right-20", delay: 1.5 },
      { size: "sm" as const, position: "top-1/2 left-1/4", delay: 3 },
    ],
    rich: [
      { size: "sm" as const, position: "top-16 left-16", delay: 0 },
      { size: "lg" as const, position: "bottom-24 right-24", delay: 1 },
      { size: "md" as const, position: "top-1/3 right-1/4", delay: 2 },
      { size: "sm" as const, position: "bottom-1/4 left-1/3", delay: 3 },
      { size: "sm" as const, position: "top-3/4 right-1/6", delay: 4 },
    ]
  }

  const waveConfigs = {
    subtle: [],
    medium: [
      { position: "top-1/4 left-0 right-0", delay: 0.5 },
    ],
    rich: [
      { position: "top-1/4 left-0 right-0", delay: 0.5 },
      { position: "bottom-1/3 left-0 right-0", delay: 2.5 },
    ]
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Glass Orbs */}
      {orbConfigs[variant].map((orb, index) => (
        <GlassOrb
          key={`orb-${index}`}
          size={orb.size}
          className={`absolute ${orb.position}`}
          delay={orb.delay}
        />
      ))}

      {/* Glass Waves */}
      {waveConfigs[variant].map((wave, index) => (
        <GlassWave
          key={`wave-${index}`}
          className={`absolute ${wave.position} h-px`}
          delay={wave.delay}
        />
      ))}

      {/* Floating Glass Particles */}
      {variant === "rich" && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full glass"
            style={{
              animation: "float 10s ease-in-out infinite",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 2, duration: 2 }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full glass"
            style={{
              animation: "float 12s ease-in-out infinite 2s",
            }}
          />
        </>
      )}
    </div>
  )
}
