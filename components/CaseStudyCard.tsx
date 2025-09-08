'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Users, FileText, Clock, Bot, BarChart3, Zap, Shield, Phone, Calendar, Check, Stethoscope, Briefcase, Truck, Home, Palette } from 'lucide-react'

interface CaseStudyCardProps {
  id: string
  company: string
  industry: string
  challenge: string
  solution: string
  metric: string
  testimonial: string
  icon: string
  className?: string
}

const iconMap = {
  scale: Scale,
  users: Users,
  fileText: FileText,
  clock: Clock,
  bot: Bot,
  barChart3: BarChart3,
  zap: Zap,
  shield: Shield,
  phone: Phone,
  calendar: Calendar,
  check: Check,
  stethoscope: Stethoscope,
  briefcase: Briefcase,
  truck: Truck,
  home: Home,
  palette: Palette,
}

export function CaseStudyCard({
  id,
  company,
  industry,
  challenge,
  solution,
  metric,
  testimonial,
  icon,
  className = ''
}: CaseStudyCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Bot
  return (
    <motion.div
      className={`group glass-light p-6 rounded-lgx hover-liquid ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/case-studies/${id}`} className="block">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-lime/20 rounded-lg flex items-center justify-center group-hover:bg-brand-lime/30 transition-colors">
            <Icon className="w-6 h-6 text-brand-lime" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-brand-ink group-hover:text-brand-lime transition-colors">
                {company}
              </h3>
              <span className="text-xs text-brand-gray bg-brand-light/50 px-2 py-1 rounded-full">
                {industry}
              </span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              {challenge}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-brand-lime bg-brand-lime/10 px-2 py-1 rounded-full">
              {metric}
            </span>
          </div>
          
          <div className="text-sm text-brand-gray italic">
            "{testimonial}"
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-brand-border/50">
          <div className="flex items-center justify-between text-xs text-brand-gray">
            <span>View full case study</span>
            <motion.div
              className="w-4 h-4 border-r-2 border-b-2 border-brand-lime transform rotate-[-45deg]"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
