import { GlassCard } from './GlassCard'

const logos = ['Acme', 'Globex', 'Umbrella', 'Stark', 'Wayne']

export function Trust() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold mb-6 text-theme-text">Trusted by teams</h2>
      <GlassCard className="p-6 bg-theme-card">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-theme-text/80 text-sm bg-theme-surface rounded-xl py-4 border border-theme-border">
              {l}
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}


