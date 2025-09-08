import { Linkedin, Github, Mail } from "lucide-react";
export default function FooterPro(){
  return (
    <footer className="scene scene-sea py-10">
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--teal) 40%,white)] to-transparent mb-8"></div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <div className="text-lg font-semibold">Luhreetech</div>
            <p className="mt-2 text-sm text-ink/70">We design, deploy, and manage AI automations that work like staff.</p>
            <div className="mt-4 flex gap-3 text-ink/70">
              <a className="inline-flex items-center rounded-full px-3 py-1 bg-white/70 border border-[var(--border)] hover:bg-white hover:shadow-md" href="#"><Linkedin size={16}/></a>
              <a className="inline-flex items-center rounded-full px-3 py-1 bg-white/70 border border-[var(--border)] hover:bg-white hover:shadow-md" href="#"><Github size={16}/></a>
              <a className="inline-flex items-center rounded-full px-3 py-1 bg-white/70 border border-[var(--border)] hover:bg-white hover:shadow-md" href="mailto:hello@luhreetech.com"><Mail size={16}/></a>
            </div>
          </div>
          <Col title="Product" items={["Overview","Integrations","Security"]}/>
          <Col title="Resources" items={["Case Studies","Blog","ROI Calculator","FAQ"]}/>
          <Col title="Company" items={["About","Contact","Privacy","Terms"]}/>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-4 text-sm text-ink/60">© Luhreetech. All rights reserved.</div>
      </div>
    </footer>
  )
}
function Col({title,items}:{title:string;items:string[]}){return <div><div className="text-sm font-semibold">{title}</div><ul className="mt-3 space-y-2 text-sm text-ink/70">{items.map(i=>(<li key={i}><a className="hover:underline" href="#">{i}</a></li>))}</ul></div>}
