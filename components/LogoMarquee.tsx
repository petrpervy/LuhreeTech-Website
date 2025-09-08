'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import Image from 'next/image'

interface Logo {
  name: string
  logoSrc: string
  alt: string
}

interface LogoMarqueeProps {
  logos: Logo[]
  className?: string
}

export default function LogoMarquee({ logos, className = '' }: LogoMarqueeProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex items-center space-x-12"
        animate={prefersReducedMotion ? {} : { x: [0, -50] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        whileHover={prefersReducedMotion ? {} : { animationPlayState: 'paused' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={logo.logoSrc}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              priority={index < logos.length} // Only prioritize first set
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
