import Link from "next/link";

type Item = { title: string; outcome: string; href: string; stat?: string }
const items: Item[] = [
  { title: "Clinic network", outcome: "No missed calls. Same-day scheduling and reminders.", href: "/case-studies/clinic", stat: "Scheduling uptime" },
  { title: "Law firm intake", outcome: "Structured intake to CRM. Follow-ups automated.", href: "/case-studies/law", stat: "Qualified leads" },
];

function Card({title, outcome, href, stat}: Item){
  return (
    <article className="glass card hover-lift h-full p-8">
      {/* Top row: eyebrow + optional stat chip */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-gray-500">Case study</span>
        {stat && (
          <span className="text-xs px-3 py-1 rounded-full glass text-gray-700">
            {stat}
          </span>
        )}
      </div>

      {/* Thumb */}
      <div className="cs-thumb mt-4 h-24 md:h-28 w-full rounded-2xl glass" aria-hidden />

      {/* Copy */}
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{outcome}</p>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <Link href={href} className="cs-link inline-flex items-center gap-2 rounded-full px-4 py-2 glass text-gray-700 hover:text-gray-900 transition-colors">
          View case study
          <span className="cs-arrow">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudyStrip(){
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case studies</h2>
          <Link href="/case-studies" className="text-sm text-gray-600 underline hover:text-gray-900 transition-colors">See all</Link>
        </div>

        {/* Equal height grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((it)=> (<Card key={it.title} {...it} />))}
        </div>
      </div>
    </section>
  );
}
