export default function LogoCloud(){
  const logos=["Acme","Northwind","Globex","Umbrella","Initech","Stark"]; // placeholders
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center text-ink/60 text-sm mb-4">Trusted by teams in services, healthcare, legal, and retail</div>
        <div className="grid grid-cols-2 gap-6 text-ink/40 md:grid-cols-6">
          {logos.map(l=>(<div key={l} className="glass py-3 text-center text-sm text-ink/50 hover:text-ink lift">{l}</div>))}
        </div>
      </div>
    </section>
  )
}
