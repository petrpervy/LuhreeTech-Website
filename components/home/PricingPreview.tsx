import { Glass } from "../ui/Glass"
import { Button } from "../ui/Button"

const tiers = [
  {name:"Starter", price:"$500–$1,000/mo", bullets:["1 AI employee","Basic workflows","Cloud hosting + monitoring"]},
  {name:"Growth", price:"$1,000–$2,500/mo", bullets:["Several AI employees","Advanced integrations","Priority support + reports"]},
  {name:"Enterprise", price:"$2,500–$5,000/mo", bullets:["Complex workflows","On-prem/private cloud","Dedicated manager + security"]},
]

export default function PricingPreview(){
  return (
    <section className="section scene-sand">
      <div className="container">
        <h2 className="text-center">Pricing preview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map(t=>(
            <div key={t.name} className="card--lg">
              <div className="text-sm text-[rgb(var(--muted))]">{t.name}</div>
              <div className="mt-1 text-2xl font-display">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                {t.bullets.map(b=><li key={b}>• {b}</li>)}
              </ul>
              <Button className="mt-6 w-full">Book a Demo</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}