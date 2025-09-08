"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from "lucide-react"
import { FloatingGlassCard } from "@/components/ui/FloatingGlassCard"
import { GlassOrb } from "@/components/ui/GlassOrb"
import { GlassWave } from "@/components/ui/GlassWave"

const footerLinks = {
  product: [
    { label: "AI Receptionist", href: "/product#receptionist" },
    { label: "Lead-Gen Bot", href: "/product#leadgen" },
    { label: "Email Assistant", href: "/product#email" },
    { label: "Workflow Automation", href: "/product#workflows" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" }
  ],
  support: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Status", href: "/status" },
    { label: "Book Demo", href: "/demo" }
  ]
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      {/* Background Elements */}
      <GlassOrb size="lg" className="absolute top-20 right-20 opacity-8" delay={0.5} />
      <GlassOrb size="md" className="absolute bottom-32 left-16 opacity-10" delay={1.2} />
      <GlassWave className="absolute top-1/4 left-0 right-0 h-px opacity-15" delay={0.8} />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">L</span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Luhreetech</h3>
              <p className="text-mute leading-relaxed">
                Digital employees for modern businesses. AI-powered automation that scales.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-mute">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@luhreetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-mute">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(555) 123-LUHR</span>
              </div>
              <div className="flex items-center gap-3 text-mute">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-ink mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mute hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <FloatingGlassCard className="p-8 max-w-2xl mx-auto text-center" depth={2} delay={0.8}>
            <h3 className="text-xl font-semibold text-ink mb-2">Stay Ahead of AI Innovation</h3>
            <p className="text-mute mb-6">
              Get weekly insights on AI automation for SMBs, plus early access to new features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="btn btn-cta px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-mute mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </FloatingGlassCard>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-mute text-sm">
              © 2024 Luhreetech. All rights reserved. Enterprise-grade AI for SMBs.
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-mute hover:text-blue-600 transition-colors text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-mute hover:text-blue-600 transition-colors text-sm">
                  Terms
                </Link>
                <Link href="/security" className="text-mute hover:text-blue-600 transition-colors text-sm">
                  Security
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <a href="#" className="text-mute hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-mute hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-mute hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <FloatingGlassCard className="p-4 max-w-xs mx-auto" depth={1} delay={1.2}>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">E</span>
              </div>
              <span className="text-sm font-medium text-ink">Enterprise-Grade Security</span>
            </div>
          </FloatingGlassCard>
        </motion.div>
      </div>
    </footer>
  )
}