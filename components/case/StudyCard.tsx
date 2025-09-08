'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Study } from '@/content/case-studies';

export default function StudyCard({ s }: { s: Study }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur p-5 shadow-glass-sm hover:shadow-glass-md transition-shadow"
    >
      <div className="flex items-center gap-2 text-sm text-ink/60">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        {s.industry}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
      <p className="mt-1 text-ink/70">{s.problem}</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {s.metrics.map((m, i) => (
          <div key={i} className="rounded-xl border border-white/40 bg-white/60 px-3 py-2 text-sm">
            <div className="font-medium text-ink">{m.delta}</div>
            <div className="text-ink/60">{m.label}</div>
          </div>
        ))}
      </div>
      {s.quote?.text && (
        <p className="mt-4 italic text-ink/80">"{s.quote.text}"</p>
      )}
      <div className="mt-5">
        <Link 
          href={`/case-studies/${s.slug}`} 
          className="inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-medium text-ink shadow-glass-sm hover:shadow-glass-md"
        >
          View case
        </Link>
      </div>
    </motion.article>
  );
}


