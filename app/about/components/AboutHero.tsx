export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_20%_-10%,#c3ddff33,transparent),radial-gradient(1000px_500px_at_80%_-10%,#ffd3a833,transparent)] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-teal-600">About Luhreetech</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Small businesses deserve big-company AI leverage—without complexity
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          We design, deploy, and operate AI automations that work like staff—so you reduce labor costs and scale operations without adding headcount.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['1–2 week typical pilots','Month-to-month','Human-in-the-loop'].map(t => (
            <span key={t} className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
