"use client";
import { useState, useEffect } from "react";
import { 
  Phone, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  TrendingDown, 
  Users,
  X,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function LiquidGlassProblem() {
  const [activeProblem, setActiveProblem] = useState(0);
  
  const problems = [
    {
      icon: Phone,
      title: "Missed Calls = Lost Revenue",
      description: "78% of customers buy from the first company that responds. When you miss calls, you miss business.",
      stat: "50% of after-hours calls go unanswered",
      cost: "$2,400/month lost revenue",
    },
    {
      icon: DollarSign,
      title: "Receptionist Costs Are Skyrocketing",
      description: "Full-time receptionists cost $2,500-$4,000/month plus benefits, training, and management overhead.",
      stat: "Real cost: $50,000+ per year",
      cost: "$4,200/month total cost",
    },
    {
      icon: Clock,
      title: "Slow Response Times Kill Conversions",
      description: "Responding within an hour is 7x more likely to qualify a lead than waiting longer.",
      stat: "Average response time: 2+ hours",
      cost: "$1,800/month lost opportunities",
    },
    {
      icon: TrendingDown,
      title: "Manual Processes Don't Scale",
      description: "As your business grows, manual scheduling and intake become bottlenecks that limit growth.",
      stat: "30% of time wasted on admin tasks",
      cost: "$3,600/month in lost productivity",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-slate-700 text-sm font-medium mb-8 shadow-lg">
            <AlertTriangle className="w-4 h-4" />
            <span>The Hidden Cost of Manual Processes</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-slate-800">Your Business Is</span>
            <br />
            <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              Bleeding Money
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Every missed call, every delayed response, every manual process is costing you thousands of dollars every month. 
            Here's the real cost of not having an AI employee.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 ${
                  activeProblem === index 
                    ? 'bg-white/40 backdrop-blur-xl border-white/50 scale-105 shadow-2xl' 
                    : 'bg-white/20 backdrop-blur-xl border-white/30 hover:bg-white/30 shadow-xl'
                }`}
                onMouseEnter={() => setActiveProblem(index)}
              >
                {/* Cost Badge */}
                <div className="absolute -top-4 -right-4 bg-white/40 backdrop-blur-xl border border-white/50 text-slate-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {problem.cost}
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-slate-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {problem.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <TrendingDown className="w-4 h-4" />
                      <span>{problem.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Cost Calculator */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Your Monthly Loss Calculator
            </h3>
            <p className="text-slate-600">
              Add up the real cost of manual processes in your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Costs */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                What You're Losing Every Month
              </h4>
              
              <div className="space-y-4">
                {[
                  { label: "Missed calls & lost leads", cost: "$2,400" },
                  { label: "Receptionist salary & benefits", cost: "$4,200" },
                  { label: "Slow response times", cost: "$1,800" },
                  { label: "Manual process inefficiency", cost: "$3,600" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="text-red-500 font-bold">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With AI Employee */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                With Your AI Employee
              </h4>
              
              <div className="space-y-4">
                {[
                  { label: "AI Employee cost", cost: "$1,000" },
                  { label: "Setup & training", cost: "$0" },
                  { label: "Management & support", cost: "$0" },
                  { label: "Sick days & vacations", cost: "$0" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="text-green-500 font-bold">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Savings */}
          <div className="mt-8 p-8 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-2">Your Monthly Savings</div>
              <div className="text-5xl font-bold text-slate-800 mb-2">$10,000+</div>
              <div className="text-xl text-green-600 font-semibold">That's $120,000+ per year!</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-8">
            Ready to stop losing money and start scaling efficiently?
          </p>
          <button className="group relative px-10 py-5 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-semibold text-slate-700 transition-all duration-300 hover:bg-white/50 hover:scale-105 shadow-xl">
            <span className="relative z-10 flex items-center gap-3">
              <span>Stop Losing Money - Get Your AI Employee</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
