"use client";
import { useState } from "react";

const QA = [
  {
    q:"What are digital employees?", 
    a:"Digital employees are AI-powered agents that handle specific business tasks like reception, lead generation, email management, and automation workflows. They work 24/7 and can handle multiple tasks simultaneously while following your business rules and processes."
  },
  {
    q:"How fast is deployment?", 
    a:"Most SMBs are up and running within 1-2 weeks. We handle the technical setup, integrate with your existing systems, and train the AI on your specific processes. Enterprise customers can often be deployed in just a few days."
  },
  {
    q:"What types of businesses do you serve?", 
    a:"We specialize in serving SMBs including law firms, agencies, home services, and medical/dental offices. Our digital employees are designed to handle the specific workflows and requirements of these industries."
  },
  {
    q:"How does the lead generation bot work?", 
    a:"Our lead-gen bot automatically scrapes and enriches prospect data, outputs organized CSVs, and manages your pipeline. It can find qualified leads based on your criteria and continuously update your prospect database."
  },
  {
    q:"What's the ROI for SMBs?", 
    a:"Most SMBs see 3-5x ROI within the first year. You'll save on hiring costs, reduce missed opportunities, and free up your team for higher-value work. Many businesses break even within 2-3 months."
  },
  {
    q:"How accurate are the digital employees?", 
    a:"Our AI maintains 98%+ accuracy in task completion. It learns from your specific business context and improves over time. For complex situations, it can seamlessly transfer to human staff or request clarification."
  },
  {
    q:"What kind of support do you provide?", 
    a:"We offer email support for Starter plans, priority support for Growth plans, and dedicated success managers for Enterprise plans. Our team monitors performance and provides regular optimization recommendations."
  },
  {
    q:"Is there a contract or can I cancel anytime?", 
    a:"We offer flexible month-to-month plans with no long-term contracts. Enterprise plans may have custom terms, but we always include a 30-day money-back guarantee for all new customers."
  }
];

export default function FAQ(){
  const [open,setOpen]=useState<number|null>(0);
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our AI automation services
          </p>
        </div>
        <ul className="max-w-4xl mx-auto space-y-4">
          {QA.map((item,idx)=>(
            <li key={idx} className="glass card hover-lift w-full p-6">
              <button
                className="w-full text-left flex items-center justify-between"
                aria-expanded={open===idx}
                onClick={()=>setOpen(open===idx?null:idx)}
              >
                <span className="font-medium text-gray-900 text-lg">{item.q}</span>
                <span className="text-gray-500 text-xl transition-transform duration-300">{open===idx?"−":"+"}</span>
              </button>
              {open===idx && <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}