import { Glass } from "../ui/Glass"
const brands = ["Acme","Northwind","Globex","Umbrella","Initech","Stark"]
export default function TrustBar(){
  return (
    <section className="section pt-10 logos">
      <div className="container">
        <div className="text-center text-sm text-[rgb(var(--subtle))] mb-4">
          Trusted by teams in services, healthcare, legal, and retail
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map(b=>(
            <div key={b} className="card px-5 py-2 text-[13px]">{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
