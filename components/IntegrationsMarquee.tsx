"use client";
import { cn } from "@/lib/utils";

const items = ["HubSpot","Salesforce","Calendly","Google Calendar","Outlook","Twilio","Slack","Airtable"];

export default function IntegrationsMarquee({className}:{className?:string}){
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container">
        <div className="mb-4 text-sm text-gray-500">Works with your tools</div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {items.map(i=>(
            <span key={i} className="rounded-full glass px-3 py-1.5 text-sm text-gray-700 hover-lift">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}