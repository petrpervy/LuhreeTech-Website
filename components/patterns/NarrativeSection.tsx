"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function NarrativeSection({
  claim,
  answer,
  body = [],
  soWhat = [],
  visual,
  reverse = false,
}: {
  claim: string;
  answer: string;
  body?: string[];
  soWhat?: string[];
  visual?: React.ReactNode;
  reverse?: boolean;
}) {
  const shouldReduce = useReducedMotion();

  const fallbackGradientDiv = (
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_60%_-20%,#DCEBFF_0%,transparent_60%)]" />
      <div className="h-full w-full bg-white/70" />
    </div>
  );

  const visualElement = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduce ? 0 : 0.5 }}
      className="relative aspect-[16/10] rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform motion-safe:duration-300"
    >
      {visual ?? fallbackGradientDiv}
    </motion.div>
  );

  const text = (
    <div>
      <p className="text-sm font-medium text-accent-teal-500">Luhreetech's Answer</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-ink">{claim}</h2>
      <h3 className="mt-2 text-xl md:text-2xl font-semibold text-brand-navy-800">{answer}</h3>
      {body.map((t, i) => (
        <p key={i} className="mt-3 text-base text-gray-700">
          {t}
        </p>
      ))}
      {soWhat.length > 0 && (
        <ul className="mt-4 space-y-1 text-base">
          {soWhat.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-teal-500"></span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          className={`grid items-center gap-10 md:gap-16 ${
            reverse ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"
          }`}
        >
          {reverse ? (
            <>
              {visualElement}
              {text}
            </>
          ) : (
            <>
              {text}
              {visualElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
