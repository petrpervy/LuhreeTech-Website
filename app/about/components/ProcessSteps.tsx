import StepCard from './StepCard'

const steps = [
  {
    icon: 'Search' as const,
    title: 'Audit (30–45 min call)',
    bullets: ['Map workflows', 'Choose high-leverage tasks', 'Define success metrics']
  },
  {
    icon: 'Beaker' as const,
    title: 'Prototype (1–3 days)',
    bullets: ['Narrow scope', 'Connect calendars/telephony', 'Test edge cases']
  },
  {
    icon: 'Rocket' as const,
    title: 'Pilot (3–7 days)',
    bullets: ['Limited rollout', 'Logging + alerts', 'Human fallback']
  },
  {
    icon: 'Activity' as const,
    title: 'Operate (ongoing)',
    bullets: ['Monitor KPIs', 'Iterate prompts', 'Add channels/skills']
  }
]

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          How We Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              bullets={step.bullets}
              step={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
