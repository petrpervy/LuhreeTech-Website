import type { Metadata } from 'next'
import { CalculatorClient } from '@/components/CalculatorClient'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HaloButton from '@/components/ui/HaloButton'

export const metadata: Metadata = {
  title: 'ROI Calculator | Luhreetech',
  description: 'Calculate the return on investment for AI automation. See how much time and money you could save with an AI employee.',
}

export default function CalculatorPage() {

  return (
    <div className="space-y-20">
      <CalculatorClient />

      {/* CTA Section */}
      <section className="relative bg-hero-soft">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="text-center space-y-8">
            <h2 className="text-5xl/tight md:text-6xl/tight font-bold text-slate-900">
              Ready to see these savings?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Start with a free audit to get a detailed analysis of your automation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <HaloButton variant="primary">
                  Start Free Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </HaloButton>
              </Link>
              <Link href="/case-studies">
                <HaloButton variant="ghost">
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </HaloButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
