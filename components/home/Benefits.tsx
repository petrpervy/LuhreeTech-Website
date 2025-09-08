import { CalendarCheck2, MessagesSquare, BarChart3 } from "lucide-react";
import Card from "@/components/ui/Card";
export default function Benefits(){
  const items=[{
    icon:<MessagesSquare className="h-6 w-6 text-ink/80"/>,
    title:"Save 10–40+ hours per week",
    body:"Never miss a lead with your reliable digital employee."
  },{
    icon:<BarChart3 className="h-6 w-6 text-ink/80"/>,
    title:"Cut admin costs",
    body:"Handle tasks and workflows automatically without losing professionalism."
  },{
    icon:<CalendarCheck2 className="h-6 w-6 text-ink/80"/>,
    title:"Focus on your business",
    body:"We design, deploy, and manage so you can run the company."
  }];
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-3">
                {items.map((it,i)=>(
                  <Card key={i} className="group lift">
                    <div className="icon-pill shadow-sm mb-4 w-fit">{it.icon}</div>
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{it.body}</p>
                  </Card>
                ))}
      </div>
    </section>
  );
}
