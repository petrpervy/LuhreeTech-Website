import { ClipboardList, Wand2, Activity, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList, 
    title: "Discovery", 
    text: "We map your workflows and key outcomes.",
    details: "Our team analyzes your current processes, identifies bottlenecks, and defines success metrics."
  },
  {
    icon: Wand2, 
    title: "Build", 
    text: "We design, integrate, and deploy digital employees.",
    details: "Custom AI solutions are built and integrated with your existing systems and workflows."
  },
  {
    icon: Activity, 
    title: "Monitor", 
    text: "We maintain, improve weekly, and report.",
    details: "Continuous monitoring, optimization, and detailed reporting on performance and ROI."
  },
];

export default function HowItWorks(){
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 3-step process gets your AI employees up and running in weeks, not months
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange/20 via-brand-orange/30 to-brand-orange/20 -translate-y-1/2 z-0"></div>
          
          {steps.map(({icon: Icon, title, text, details}, index) => (
            <div key={title} className="relative z-10">
              <div className="glass-crystal glass-glow glass-ripple card hover-lift text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orangeDeep flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white"/>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{text}</p>
                <p className="text-sm text-gray-500">{details}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-white border-2 border-brand-orange/20 flex items-center justify-center z-20">
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline for mobile */}
        <div className="md:hidden mt-8">
          <div className="space-y-6">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDeep flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-brand-orange/20 to-brand-orange/40 ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}